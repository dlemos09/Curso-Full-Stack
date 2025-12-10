-- ================================================================================
-- SCRIPTS COMPLETOS - BANCO DE DADOS POSTGRESQL
-- Curso Intensivo: PostgreSQL do Básico ao Avançado
-- ================================================================================
-- 
-- COMO USAR ESTE ARQUIVO:
-- 
-- 1. OPÇÃO 1 - Executar tudo de uma vez (recomendado para setup inicial):
--    - Abra este arquivo no DBeaver
--    - Selecione todo o conteúdo (Ctrl+A)
--    - Execute (Ctrl+Enter ou F5)
-- 
-- 2. OPÇÃO 2 - Executar seções individuais:
--    - Selecione a seção desejada
--    - Execute apenas a seleção
-- 
-- 3. OPÇÃO 3 - Linha de comando (psql):
--    psql -U postgres -f scripts.sql
-- 
-- IMPORTANTE:
-- ✓ Este script assume PostgreSQL 14+
-- ✓ Execute conectado como superusuário (postgres) ou usuário com privilégios
-- ✓ Algumas seções deletam/recriam objetos - cuidado em ambiente de produção!
-- ✓ Scripts estão em ordem lógica de dependências
-- 
-- ESTRUTURA:
-- 1. Criação do banco de dados
-- 2. Criação de schemas
-- 3. Criação de tabelas (ordem de dependências)
-- 4. Inserção de dados de exemplo
-- 5. Criação de views
-- 6. Criação de funções
-- 7. Criação de triggers
-- 8. Criação de índices
-- 
-- ================================================================================

-- ================================================================================
-- SEÇÃO 1: LIMPEZA E PREPARAÇÃO (USE COM CUIDADO!)
-- ================================================================================

-- Desconectar usuários ativos do banco (se existir)
SELECT pg_terminate_backend(pg_stat_activity.pid)
FROM pg_stat_activity
WHERE pg_stat_activity.datname = 'loja_virtual'
  AND pid <> pg_backend_pid();

-- Dropar banco se existir (CUIDADO: isso apaga TUDO!)
DROP DATABASE IF EXISTS loja_virtual;

-- ================================================================================
-- SEÇÃO 2: CRIAÇÃO DO BANCO DE DADOS
-- ================================================================================

CREATE DATABASE loja_virtual
    WITH 
    ENCODING = 'UTF8'
    LC_COLLATE = 'pt_BR.UTF-8'
    LC_CTYPE = 'pt_BR.UTF-8'
    TEMPLATE = template0
    CONNECTION LIMIT = -1;

COMMENT ON DATABASE loja_virtual IS 
'Banco de dados do curso - Sistema de Loja Virtual';

-- ================================================================================
-- CONECTAR AO BANCO LOJA_VIRTUAL
-- ================================================================================
-- No DBeaver: selecione 'loja_virtual' no dropdown de database
-- No psql: execute \c loja_virtual

\c loja_virtual

-- ================================================================================
-- SEÇÃO 3: CRIAÇÃO DE SCHEMAS
-- ================================================================================

-- Schema para módulo de vendas
CREATE SCHEMA IF NOT EXISTS vendas;
COMMENT ON SCHEMA vendas IS 'Módulo de vendas: clientes, produtos, pedidos';

-- Schema para módulo de estoque
CREATE SCHEMA IF NOT EXISTS estoque;
COMMENT ON SCHEMA estoque IS 'Módulo de estoque: fornecedores, movimentações';

-- Schema para auditoria
CREATE SCHEMA IF NOT EXISTS auditoria;
COMMENT ON SCHEMA auditoria IS 'Logs e auditoria de operações';

-- ================================================================================
-- SEÇÃO 4: CRIAÇÃO DE TABELAS - MÓDULO VENDAS
-- ================================================================================

-- --------------------------------------------------------------------------------
-- Tabela: vendas.categorias
-- Descrição: Categorias de produtos
-- --------------------------------------------------------------------------------

CREATE TABLE vendas.categorias (
    id_categoria SERIAL PRIMARY KEY,
    nome VARCHAR(50) NOT NULL UNIQUE,
    descricao VARCHAR(200),
    ativo BOOLEAN DEFAULT TRUE,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

COMMENT ON TABLE vendas.categorias IS 'Categorias de produtos';
COMMENT ON COLUMN vendas.categorias.id_categoria IS 'Chave primária';
COMMENT ON COLUMN vendas.categorias.nome IS 'Nome único da categoria';

-- --------------------------------------------------------------------------------
-- Tabela: vendas.clientes
-- Descrição: Cadastro de clientes
-- --------------------------------------------------------------------------------

CREATE TABLE vendas.clientes (
    id_cliente SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    email VARCHAR(150) NOT NULL UNIQUE,
    cpf CHAR(11) UNIQUE,
    telefone VARCHAR(20),
    data_nascimento DATE,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    limite_credito DECIMAL(10,2) DEFAULT 1000.00,
    status_ativo BOOLEAN DEFAULT TRUE,
    
    -- Constraint: cliente deve ser maior de 18 anos
    CONSTRAINT chk_cliente_maior_idade 
        CHECK (data_nascimento <= CURRENT_DATE - INTERVAL '18 years'),
    
    -- Constraint: limite de crédito não pode ser negativo
    CONSTRAINT chk_limite_credito_positivo 
        CHECK (limite_credito >= 0)
);

COMMENT ON TABLE vendas.clientes IS 'Cadastro de clientes';
COMMENT ON COLUMN vendas.clientes.cpf IS 'CPF sem pontuação (11 dígitos)';
COMMENT ON COLUMN vendas.clientes.limite_credito IS 'Limite de crédito em reais';

-- --------------------------------------------------------------------------------
-- Tabela: vendas.produtos
-- Descrição: Catálogo de produtos
-- --------------------------------------------------------------------------------

CREATE TABLE vendas.produtos (
    id_produto SERIAL PRIMARY KEY,
    nome VARCHAR(100) NOT NULL,
    descricao TEXT NOT NULL DEFAULT 'Sem descrição',
    preco DECIMAL(10,2) NOT NULL,
    id_categoria INTEGER,
    estoque_minimo INTEGER DEFAULT 0,
    quantidade_estoque INTEGER DEFAULT 0,
    ativo BOOLEAN DEFAULT TRUE,
    data_criacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    data_ultima_atualizacao TIMESTAMP,
    
    -- Foreign Key para categorias
    CONSTRAINT fk_produtos_categoria 
        FOREIGN KEY (id_categoria) 
        REFERENCES vendas.categorias(id_categoria)
        ON DELETE SET NULL
        ON UPDATE CASCADE,
    
    -- Constraints de validação
    CONSTRAINT chk_produtos_preco_positivo 
        CHECK (preco > 0),
    
    CONSTRAINT chk_produtos_estoque_minimo_positivo 
        CHECK (estoque_minimo >= 0),
    
    CONSTRAINT chk_produtos_quantidade_estoque_positivo 
        CHECK (quantidade_estoque >= 0)
);

COMMENT ON TABLE vendas.produtos IS 'Catálogo de produtos';
COMMENT ON COLUMN vendas.produtos.preco IS 'Preço de venda em reais';
COMMENT ON COLUMN vendas.produtos.quantidade_estoque IS 'Quantidade atual em estoque';

-- --------------------------------------------------------------------------------
-- Tabela: vendas.pedidos
-- Descrição: Pedidos dos clientes
-- --------------------------------------------------------------------------------

CREATE TABLE vendas.pedidos (
    id_pedido SERIAL PRIMARY KEY,
    id_cliente INTEGER NOT NULL,
    data_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    status VARCHAR(20) DEFAULT 'pendente',
    valor_total DECIMAL(10,2) DEFAULT 0,
    observacoes TEXT,
    data_atualizacao TIMESTAMP,
    
    -- Foreign Key para clientes
    CONSTRAINT fk_pedidos_cliente 
        FOREIGN KEY (id_cliente) 
        REFERENCES vendas.clientes(id_cliente)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,
    
    -- Constraint: status válido
    CONSTRAINT chk_pedidos_status 
        CHECK (status IN ('pendente', 'processando', 'enviado', 'entregue', 'cancelado')),
    
    -- Constraint: valor total não pode ser negativo
    CONSTRAINT chk_pedidos_valor_positivo 
        CHECK (valor_total >= 0)
);

COMMENT ON TABLE vendas.pedidos IS 'Pedidos realizados pelos clientes';
COMMENT ON COLUMN vendas.pedidos.status IS 'Status: pendente, processando, enviado, entregue, cancelado';

-- --------------------------------------------------------------------------------
-- Tabela: vendas.itens_pedido
-- Descrição: Itens de cada pedido (relacionamento N:N)
-- --------------------------------------------------------------------------------

CREATE TABLE vendas.itens_pedido (
    id_item SERIAL PRIMARY KEY,
    id_pedido INTEGER NOT NULL,
    id_produto INTEGER NOT NULL,
    quantidade INTEGER NOT NULL,
    preco_unitario DECIMAL(10,2) NOT NULL,
    desconto DECIMAL(5,2) DEFAULT 0,
    
    -- Foreign Keys
    CONSTRAINT fk_itens_pedido 
        FOREIGN KEY (id_pedido) 
        REFERENCES vendas.pedidos(id_pedido)
        ON DELETE CASCADE
        ON UPDATE CASCADE,
    
    CONSTRAINT fk_itens_produto 
        FOREIGN KEY (id_produto) 
        REFERENCES vendas.produtos(id_produto)
        ON DELETE RESTRICT
        ON UPDATE CASCADE,
    
    -- Constraints de validação
    CONSTRAINT chk_itens_quantidade_positiva 
        CHECK (quantidade > 0),
    
    CONSTRAINT chk_itens_preco_positivo 
        CHECK (preco_unitario > 0),
    
    CONSTRAINT chk_itens_desconto_valido 
        CHECK (desconto >= 0 AND desconto <= 100),
    
    -- Unique: não permitir produto duplicado no mesmo pedido
    CONSTRAINT uk_pedido_produto 
        UNIQUE (id_pedido, id_produto)
);

COMMENT ON TABLE vendas.itens_pedido IS 'Itens que compõem cada pedido';
COMMENT ON COLUMN vendas.itens_pedido.desconto IS 'Desconto em percentual (0-100)';

-- ================================================================================
-- SEÇÃO 5: CRIAÇÃO DE TABELAS - MÓDULO ESTOQUE
-- ================================================================================

-- --------------------------------------------------------------------------------
-- Tabela: estoque.fornecedores
-- Descrição: Cadastro de fornecedores
-- --------------------------------------------------------------------------------

CREATE TABLE estoque.fornecedores (
    id_fornecedor SERIAL PRIMARY KEY,
    razao_social VARCHAR(200) NOT NULL,
    cnpj CHAR(14) UNIQUE,
    contato JSONB,
    endereco_completo TEXT,
    coordenadas POINT,
    horario_atendimento TSRANGE,
    avaliacoes INTEGER[],
    ativo BOOLEAN DEFAULT TRUE,
    data_cadastro TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

COMMENT ON TABLE estoque.fornecedores IS 'Cadastro de fornecedores';
COMMENT ON COLUMN estoque.fornecedores.contato IS 'JSON: {telefone, email, website}';
COMMENT ON COLUMN estoque.fornecedores.coordenadas IS 'Latitude e longitude';
COMMENT ON COLUMN estoque.fornecedores.avaliacoes IS 'Array de notas de 1 a 5';

-- --------------------------------------------------------------------------------
-- Tabela: estoque.movimentacoes_estoque
-- Descrição: Histórico de movimentações de estoque
-- --------------------------------------------------------------------------------

CREATE TABLE estoque.movimentacoes_estoque (
    id_movimentacao SERIAL,
    data_movimentacao TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    id_produto INTEGER NOT NULL,
    tipo_movimentacao CHAR(1) NOT NULL,
    quantidade INTEGER NOT NULL,
    id_fornecedor INTEGER,
    custo_unitario DECIMAL(10,2),
    observacao TEXT,
    usuario VARCHAR(50),
    
    -- Primary Key composta
    PRIMARY KEY (id_movimentacao, data_movimentacao),
    
    -- Foreign Keys
    CONSTRAINT fk_movimentacao_produto 
        FOREIGN KEY (id_produto) 
        REFERENCES vendas.produtos(id_produto)
        ON DELETE RESTRICT,
    
    CONSTRAINT fk_movimentacao_fornecedor 
        FOREIGN KEY (id_fornecedor) 
        REFERENCES estoque.fornecedores(id_fornecedor)
        ON DELETE SET NULL,
    
    -- Constraints
    CONSTRAINT chk_tipo_movimentacao 
        CHECK (tipo_movimentacao IN ('E', 'S')),
    
    -- Se for entrada (E), deve ter fornecedor
    CONSTRAINT chk_entrada_fornecedor 
        CHECK (
            (tipo_movimentacao = 'S') OR 
            (tipo_movimentacao = 'E' AND id_fornecedor IS NOT NULL)
        )
);

COMMENT ON TABLE estoque.movimentacoes_estoque IS 'Histórico de entradas e saídas de estoque';
COMMENT ON COLUMN estoque.movimentacoes_estoque.tipo_movimentacao IS 'E=Entrada, S=Saída';

-- ================================================================================
-- SEÇÃO 6: CRIAÇÃO DE TABELAS - AUDITORIA
-- ================================================================================

-- --------------------------------------------------------------------------------
-- Tabela: auditoria.log_produtos
-- Descrição: Log de alterações em produtos
-- --------------------------------------------------------------------------------

CREATE TABLE auditoria.log_produtos (
    id_log SERIAL PRIMARY KEY,
    id_produto INTEGER,
    acao VARCHAR(10),
    dados_antigos JSONB,
    dados_novos JSONB,
    usuario VARCHAR(50),
    data_hora TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

COMMENT ON TABLE auditoria.log_produtos IS 'Auditoria de alterações em produtos';

-- ================================================================================
-- SEÇÃO 7: INSERÇÃO DE DADOS DE EXEMPLO
-- ================================================================================

-- --------------------------------------------------------------------------------
-- Categorias
-- --------------------------------------------------------------------------------

INSERT INTO vendas.categorias (nome, descricao) VALUES
('Eletrônicos', 'Produtos eletrônicos e tecnologia'),
('Livros', 'Livros físicos e digitais'),
('Roupas', 'Vestuário e acessórios'),
('Alimentos', 'Produtos alimentícios'),
('Móveis', 'Mobiliário e decoração'),
('Esportes', 'Artigos esportivos'),
('Brinquedos', 'Brinquedos e jogos'),
('Beleza', 'Cosméticos e perfumaria');

-- --------------------------------------------------------------------------------
-- Clientes
-- --------------------------------------------------------------------------------

INSERT INTO vendas.clientes (nome, email, cpf, telefone, data_nascimento, limite_credito) VALUES
('João Silva', 'joao.silva@email.com', '12345678901', '(11) 98888-1111', '1985-03-15', 5000.00),
('Maria Santos', 'maria.santos@email.com', '23456789012', '(11) 97777-2222', '1990-07-22', 3000.00),
('Pedro Oliveira', 'pedro.oliveira@email.com', '34567890123', '(21) 96666-3333', '1978-11-30', 8000.00),
('Ana Costa', 'ana.costa@email.com', '45678901234', '(21) 95555-4444', '1995-01-10', 2000.00),
('Carlos Souza', 'carlos.souza@email.com', '56789012345', '(11) 94444-5555', '1982-05-25', 4500.00),
('Juliana Lima', 'juliana.lima@email.com', '67890123456', '(85) 93333-6666', '1988-09-18', 6000.00),
('Roberto Alves', 'roberto.alves@email.com', '78901234567', '(31) 92222-7777', '1975-12-05', 10000.00),
('Fernanda Rocha', 'fernanda.rocha@email.com', '89012345678', '(41) 91111-8888', '1992-04-20', 2500.00),
('Ricardo Mendes', 'ricardo.mendes@email.com', '90123456789', '(51) 90000-9999', '1980-08-14', 7000.00),
('Patricia Ferreira', 'patricia.ferreira@email.com', '01234567890', '(61) 99999-0000', '1987-02-28', 3500.00);

-- --------------------------------------------------------------------------------
-- Produtos
-- --------------------------------------------------------------------------------

INSERT INTO vendas.produtos (nome, descricao, preco, id_categoria, estoque_minimo, quantidade_estoque) VALUES
-- Eletrônicos (id_categoria = 1)
('Notebook Dell Inspiron', 'Notebook Intel i7 16GB RAM 512GB SSD', 3500.00, 1, 5, 15),
('Mouse Logitech MX Master', 'Mouse sem fio ergonômico', 350.00, 1, 10, 50),
('Teclado Mecânico Keychron', 'Teclado mecânico RGB switches red', 650.00, 1, 8, 25),
('Monitor LG 27 4K', 'Monitor 27 polegadas resolução 4K', 2200.00, 1, 3, 10),
('Webcam Logitech C920', 'Webcam Full HD 1080p', 450.00, 1, 12, 30),
('Fone JBL Tune 750', 'Fone de ouvido bluetooth over-ear', 280.00, 1, 15, 40),

-- Livros (id_categoria = 2)
('Clean Code', 'Livro sobre código limpo - Robert Martin', 65.00, 2, 20, 100),
('Design Patterns', 'Padrões de projeto - Gang of Four', 85.00, 2, 15, 80),
('O Programador Pragmático', 'Guia para desenvolvedor profissional', 70.00, 2, 18, 90),
('Algoritmos', 'Teoria e prática - Cormen', 180.00, 2, 5, 25),

-- Roupas (id_categoria = 3)
('Camiseta Básica Branca', 'Camiseta 100% algodão', 39.90, 3, 50, 200),
('Calça Jeans Azul', 'Calça jeans masculina corte regular', 120.00, 3, 30, 150),
('Tênis Nike Air', 'Tênis esportivo Nike Air Max', 450.00, 3, 20, 80),
('Jaqueta de Couro', 'Jaqueta couro legítimo preta', 890.00, 3, 10, 30),

-- Alimentos (id_categoria = 4)
('Café Especial 250g', 'Café torrado e moído especial', 25.00, 4, 100, 500),
('Chocolate Lindt 100g', 'Chocolate suíço ao leite', 18.00, 4, 80, 400),
('Azeite Extra Virgem 500ml', 'Azeite português extra virgem', 45.00, 4, 60, 200),

-- Móveis (id_categoria = 5)
('Cadeira Gamer DT3', 'Cadeira gamer ergonômica', 1200.00, 5, 5, 20),
('Mesa de Escritório', 'Mesa escritório 120x60cm madeira', 650.00, 5, 8, 25),
('Estante de Livros', 'Estante 5 prateleiras MDF', 320.00, 5, 10, 35);

-- --------------------------------------------------------------------------------
-- Fornecedores
-- --------------------------------------------------------------------------------

INSERT INTO estoque.fornecedores (razao_social, cnpj, contato, endereco_completo, coordenadas, avaliacoes) VALUES
('Tech Distribuidora Ltda', '12345678000199', 
 '{"telefone": "(11) 3000-1000", "email": "vendas@techdist.com.br", "website": "www.techdist.com.br"}',
 'Av. Paulista, 1000 - São Paulo, SP, 01310-100',
 '(-23.561684, -46.655981)',
 '{5, 5, 4, 5, 5}'),

('Livros & Cia S.A.', '98765432000188',
 '{"telefone": "(21) 2500-2000", "email": "contato@livroscia.com", "website": "www.livroscia.com"}',
 'Rua das Flores, 500 - Rio de Janeiro, RJ, 20000-000',
 '(-22.906847, -43.172896)',
 '{4, 5, 4, 4, 5}'),

('Fashion Import', '11122233000177',
 '{"telefone": "(11) 4000-3000", "email": "importacao@fashion.com", "website": "www.fashionimport.com.br"}',
 'Rua Oscar Freire, 200 - São Paulo, SP, 01426-000',
 '(-23.562353, -46.671914)',
 '{5, 4, 5, 5, 4}');

-- --------------------------------------------------------------------------------
-- Movimentações de Estoque (Entradas)
-- --------------------------------------------------------------------------------

INSERT INTO estoque.movimentacoes_estoque (id_produto, tipo_movimentacao, quantidade, id_fornecedor, custo_unitario, observacao, usuario) VALUES
-- Entradas iniciais de eletrônicos
(1, 'E', 20, 1, 2800.00, 'Compra inicial para estoque', 'admin'),
(2, 'E', 60, 1, 250.00, 'Compra inicial para estoque', 'admin'),
(3, 'E', 30, 1, 500.00, 'Compra inicial para estoque', 'admin'),

-- Entradas de livros
(7, 'E', 120, 2, 45.00, 'Compra inicial para estoque', 'admin'),
(8, 'E', 100, 2, 60.00, 'Compra inicial para estoque', 'admin'),

-- Entradas de roupas
(11, 'E', 250, 3, 22.00, 'Compra inicial para estoque', 'admin'),
(12, 'E', 180, 3, 75.00, 'Compra inicial para estoque', 'admin');

-- --------------------------------------------------------------------------------
-- Pedidos
-- --------------------------------------------------------------------------------

INSERT INTO vendas.pedidos (id_cliente, status, observacoes) VALUES
(1, 'entregue', 'Entrega rápida'),
(2, 'entregue', NULL),
(3, 'enviado', 'Aguardando recebimento'),
(4, 'processando', NULL),
(5, 'pendente', 'Cliente solicitou confirmação'),
(1, 'entregue', 'Segunda compra'),
(2, 'cancelado', 'Cliente desistiu'),
(6, 'entregue', NULL);

-- --------------------------------------------------------------------------------
-- Itens de Pedidos
-- --------------------------------------------------------------------------------

INSERT INTO vendas.itens_pedido (id_pedido, id_produto, quantidade, preco_unitario, desconto) VALUES
-- Pedido 1 (cliente 1)
(1, 1, 1, 3500.00, 5.00),  -- Notebook com 5% desconto
(1, 2, 1, 350.00, 0),       -- Mouse

-- Pedido 2 (cliente 2)
(2, 7, 2, 65.00, 0),        -- 2 livros Clean Code
(2, 11, 3, 39.90, 10.00),   -- 3 camisetas com 10% desconto

-- Pedido 3 (cliente 3)
(3, 4, 1, 2200.00, 0),      -- Monitor
(3, 3, 1, 650.00, 0),       -- Teclado

-- Pedido 4 (cliente 4)
(4, 13, 1, 450.00, 0),      -- Tênis

-- Pedido 5 (cliente 5)
(5, 15, 10, 25.00, 5.00),   -- Café

-- Pedido 6 (cliente 1 - segunda compra)
(6, 6, 2, 280.00, 15.00),   -- Fones com desconto

-- Pedido 8 (cliente 6)
(8, 18, 1, 1200.00, 0);     -- Cadeira gamer

-- ================================================================================
-- SEÇÃO 8: FUNÇÕES UTILITÁRIAS
-- ================================================================================

-- --------------------------------------------------------------------------------
-- Função: calcular_idade
-- Descrição: Calcula idade em anos a partir da data de nascimento
-- --------------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION calcular_idade(data_nascimento DATE)
RETURNS INTEGER AS $$
BEGIN
    RETURN EXTRACT(YEAR FROM AGE(CURRENT_DATE, data_nascimento));
END;
$$ LANGUAGE plpgsql IMMUTABLE;

COMMENT ON FUNCTION calcular_idade IS 'Calcula idade em anos completos';

-- Exemplo de uso:
-- SELECT nome, calcular_idade(data_nascimento) AS idade FROM vendas.clientes;

-- --------------------------------------------------------------------------------
-- Função: calcular_valor_item
-- Descrição: Calcula valor final de um item com desconto
-- --------------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION calcular_valor_item(
    quantidade INTEGER,
    preco_unitario DECIMAL(10,2),
    desconto DECIMAL(5,2)
)
RETURNS DECIMAL(10,2) AS $$
BEGIN
    RETURN quantidade * preco_unitario * (1 - desconto/100);
END;
$$ LANGUAGE plpgsql IMMUTABLE;

-- Exemplo:
-- SELECT calcular_valor_item(3, 100.00, 10); -- Retorna 270.00

-- --------------------------------------------------------------------------------
-- Função: atualizar_valor_total_pedido
-- Descrição: Recalcula o valor total de um pedido
-- --------------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION atualizar_valor_total_pedido(p_id_pedido INTEGER)
RETURNS DECIMAL(10,2) AS $$
DECLARE
    v_total DECIMAL(10,2);
BEGIN
    SELECT COALESCE(SUM(
        quantidade * preco_unitario * (1 - desconto/100)
    ), 0)
    INTO v_total
    FROM vendas.itens_pedido
    WHERE id_pedido = p_id_pedido;
    
    UPDATE vendas.pedidos
    SET valor_total = v_total,
        data_atualizacao = CURRENT_TIMESTAMP
    WHERE id_pedido = p_id_pedido;
    
    RETURN v_total;
END;
$$ LANGUAGE plpgsql;

-- ================================================================================
-- SEÇÃO 9: TRIGGERS
-- ================================================================================

-- --------------------------------------------------------------------------------
-- Trigger Function: trigger_atualizar_valor_pedido
-- Descrição: Atualiza valor total do pedido quando itens mudam
-- --------------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION trigger_atualizar_valor_pedido()
RETURNS TRIGGER AS $$
BEGIN
    -- Atualizar o pedido correspondente
    PERFORM atualizar_valor_total_pedido(
        COALESCE(NEW.id_pedido, OLD.id_pedido)
    );
    
    RETURN COALESCE(NEW, OLD);
END;
$$ LANGUAGE plpgsql;

-- Criar trigger AFTER INSERT, UPDATE, DELETE em itens_pedido
CREATE TRIGGER trg_itens_pedido_valor
    AFTER INSERT OR UPDATE OR DELETE
    ON vendas.itens_pedido
    FOR EACH ROW
    EXECUTE FUNCTION trigger_atualizar_valor_pedido();

-- --------------------------------------------------------------------------------
-- Trigger Function: trigger_auditoria_produtos
-- Descrição: Registra alterações em produtos
-- --------------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION trigger_auditoria_produtos()
RETURNS TRIGGER AS $$
BEGIN
    IF (TG_OP = 'DELETE') THEN
        INSERT INTO auditoria.log_produtos (id_produto, acao, dados_antigos, usuario)
        VALUES (OLD.id_produto, 'DELETE', row_to_json(OLD), current_user);
        RETURN OLD;
    ELSIF (TG_OP = 'UPDATE') THEN
        INSERT INTO auditoria.log_produtos (id_produto, acao, dados_antigos, dados_novos, usuario)
        VALUES (NEW.id_produto, 'UPDATE', row_to_json(OLD), row_to_json(NEW), current_user);
        RETURN NEW;
    ELSIF (TG_OP = 'INSERT') THEN
        INSERT INTO auditoria.log_produtos (id_produto, acao, dados_novos, usuario)
        VALUES (NEW.id_produto, 'INSERT', row_to_json(NEW), current_user);
        RETURN NEW;
    END IF;
END;
$$ LANGUAGE plpgsql;

-- Criar trigger de auditoria
CREATE TRIGGER trg_auditoria_produtos
    AFTER INSERT OR UPDATE OR DELETE
    ON vendas.produtos
    FOR EACH ROW
    EXECUTE FUNCTION trigger_auditoria_produtos();

-- --------------------------------------------------------------------------------
-- Trigger Function: trigger_atualizar_estoque
-- Descrição: Atualiza quantidade em estoque quando há movimentação
-- --------------------------------------------------------------------------------

CREATE OR REPLACE FUNCTION trigger_atualizar_estoque()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.tipo_movimentacao = 'E' THEN
        -- Entrada: adiciona ao estoque
        UPDATE vendas.produtos
        SET quantidade_estoque = quantidade_estoque + NEW.quantidade
        WHERE id_produto = NEW.id_produto;
    ELSIF NEW.tipo_movimentacao = 'S' THEN
        -- Saída: subtrai do estoque
        UPDATE vendas.produtos
        SET quantidade_estoque = quantidade_estoque - NEW.quantidade
        WHERE id_produto = NEW.id_produto;
    END IF;
    
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Criar trigger
CREATE TRIGGER trg_atualizar_estoque
    AFTER INSERT
    ON estoque.movimentacoes_estoque
    FOR EACH ROW
    EXECUTE FUNCTION trigger_atualizar_estoque();

-- ================================================================================
-- SEÇÃO 10: VIEWS
-- ================================================================================

-- --------------------------------------------------------------------------------
-- View: v_produtos_completos
-- Descrição: Produtos com informações de categoria
-- --------------------------------------------------------------------------------

CREATE OR REPLACE VIEW vendas.v_produtos_completos AS
SELECT 
    p.id_produto,
    p.nome AS produto,
    p.descricao,
    p.preco,
    c.nome AS categoria,
    p.quantidade_estoque,
    p.estoque_minimo,
    CASE 
        WHEN p.quantidade_estoque <= p.estoque_minimo THEN 'Baixo'
        WHEN p.quantidade_estoque <= p.estoque_minimo * 2 THEN 'Médio'
        ELSE 'Alto'
    END AS nivel_estoque,
    p.ativo,
    p.data_criacao
FROM vendas.produtos p
LEFT JOIN vendas.categorias c ON p.id_categoria = c.id_categoria;

COMMENT ON VIEW vendas.v_produtos_completos IS 'Visão completa de produtos com categoria';

-- --------------------------------------------------------------------------------
-- View: v_pedidos_completos
-- Descrição: Pedidos com dados do cliente e resumo
-- --------------------------------------------------------------------------------

CREATE OR REPLACE VIEW vendas.v_pedidos_completos AS
SELECT 
    ped.id_pedido,
    ped.data_pedido,
    ped.status,
    cli.nome AS cliente,
    cli.email AS email_cliente,
    ped.valor_total,
    COUNT(ip.id_item) AS qtd_itens,
    ped.observacoes
FROM vendas.pedidos ped
INNER JOIN vendas.clientes cli ON ped.id_cliente = cli.id_cliente
LEFT JOIN vendas.itens_pedido ip ON ped.id_pedido = ip.id_pedido
GROUP BY ped.id_pedido, cli.nome, cli.email;

-- --------------------------------------------------------------------------------
-- Materialized View: mv_vendas_por_categoria
-- Descrição: Totalização de vendas por categoria (pre-calculada)
-- --------------------------------------------------------------------------------

CREATE MATERIALIZED VIEW vendas.mv_vendas_por_categoria AS
SELECT 
    c.nome AS categoria,
    COUNT(DISTINCT p.id_pedido) AS qtd_pedidos,
    SUM(ip.quantidade) AS qtd_produtos_vendidos,
    SUM(ip.quantidade * ip.preco_unitario * (1 - ip.desconto/100)) AS valor_total_vendas,
    AVG(ip.preco_unitario) AS preco_medio
FROM vendas.categorias c
INNER JOIN vendas.produtos prod ON c.id_categoria = prod.id_categoria
INNER JOIN vendas.itens_pedido ip ON prod.id_produto = ip.id_produto
INNER JOIN vendas.pedidos p ON ip.id_pedido = p.id_pedido
WHERE p.status NOT IN ('cancelado')
GROUP BY c.id_categoria, c.nome
ORDER BY valor_total_vendas DESC;

-- Para atualizar a materialized view:
-- REFRESH MATERIALIZED VIEW vendas.mv_vendas_por_categoria;

-- ================================================================================
-- SEÇÃO 11: ÍNDICES
-- ================================================================================

-- Índices em Foreign Keys (melhoram JOINs)
CREATE INDEX idx_produtos_categoria ON vendas.produtos(id_categoria);
CREATE INDEX idx_pedidos_cliente ON vendas.pedidos(id_cliente);
CREATE INDEX idx_itens_pedido ON vendas.itens_pedido(id_pedido);
CREATE INDEX idx_itens_produto ON vendas.itens_pedido(id_produto);
CREATE INDEX idx_movimentacoes_produto ON estoque.movimentacoes_estoque(id_produto);

-- Índices para filtros comuns
CREATE INDEX idx_clientes_email ON vendas.clientes(email);
CREATE INDEX idx_clientes_cpf ON vendas.clientes(cpf);
CREATE INDEX idx_produtos_nome ON vendas.produtos(nome);
CREATE INDEX idx_pedidos_status ON vendas.pedidos(status);
CREATE INDEX idx_pedidos_data ON vendas.pedidos(data_pedido);

-- Índice parcial (apenas produtos ativos)
CREATE INDEX idx_produtos_ativos ON vendas.produtos(id_produto) WHERE ativo = TRUE;

-- Índice composto (busca por categoria E preço)
CREATE INDEX idx_produtos_cat_preco ON vendas.produtos(id_categoria, preco);

-- Índice GIN para JSONB
CREATE INDEX idx_fornecedores_contato_gin ON estoque.fornecedores USING GIN (contato);

-- Índice para busca textual (requer extensão pg_trgm)
CREATE EXTENSION IF NOT EXISTS pg_trgm;
CREATE INDEX idx_produtos_nome_trgm ON vendas.produtos USING GIN (nome gin_trgm_ops);

-- ================================================================================
-- SEÇÃO 12: ATUALIZAR VALORES TOTAIS DOS PEDIDOS (EXECUTAR APÓS INSERÇÕES)
-- ================================================================================

-- Atualizar valores de todos os pedidos
SELECT atualizar_valor_total_pedido(id_pedido) 
FROM vendas.pedidos;

-- ================================================================================
-- SEÇÃO 13: CONSULTAS DE VERIFICAÇÃO
-- ================================================================================

-- Verificar produtos
SELECT * FROM vendas.v_produtos_completos ORDER BY id_produto;

-- Verificar pedidos
SELECT * FROM vendas.v_pedidos_completos ORDER BY id_pedido;

-- Verificar vendas por categoria
SELECT * FROM vendas.mv_vendas_por_categoria;

-- Clientes com idade
SELECT 
    nome, 
    data_nascimento, 
    calcular_idade(data_nascimento) AS idade 
FROM vendas.clientes
ORDER BY idade DESC;

-- Top 5 produtos mais vendidos
SELECT 
    p.nome,
    SUM(ip.quantidade) AS total_vendido,
    SUM(ip.quantidade * ip.preco_unitario * (1 - ip.desconto/100)) AS receita_total
FROM vendas.produtos p
INNER JOIN vendas.itens_pedido ip ON p.id_produto = ip.id_produto
INNER JOIN vendas.pedidos ped ON ip.id_pedido = ped.id_pedido
WHERE ped.status != 'cancelado'
GROUP BY p.id_produto, p.nome
ORDER BY total_vendido DESC
LIMIT 5;

-- ================================================================================
-- FIM DOS SCRIPTS
-- ================================================================================

-- Para reiniciar o ambiente, execute novamente a partir da SEÇÃO 1
