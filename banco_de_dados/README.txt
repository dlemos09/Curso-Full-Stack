================================================================================
         CURSO INTENSIVO DE BANCO DE DADOS RELACIONAL - POSTGRESQL
                    Material Didático Completo - 15 Dias (60h)
================================================================================

📚 BEM-VINDO AO CURSO!

Este pacote contém TODOS os materiais necessários para ministrar ou cursar um
treinamento completo de Banco de Dados Relacional usando PostgreSQL e DBeaver.

================================================================================
                            📂 ESTRUTURA DOS ARQUIVOS
================================================================================

d:\banco de dados\
│
├── 📄 README.txt ........................... Este arquivo (leia primeiro!)
│
├── 📘 DOCUMENTOS PRINCIPAIS
│   ├── exercicios_bd_postgres.txt ......... Lista de 55 exercícios organizados
│   ├── gabarito_bd_postgres.txt ........... Respostas completas com SQL
│   └── plano_aula_bd_postgres.txt ......... Plano de aula detalhado 15 dias
│
├── 💾 SCRIPTS E DADOS
│   ├── scripts.sql ........................ Script SQL completo para executar
│   ├── INSTRUCOES_IMPORTACAO_CSV.txt ...... Guia de importação de dados
│   │
│   └── 📊 ARQUIVOS CSV (dados de exemplo)
│       ├── clientes.csv ................... 20 clientes
│       ├── produtos.csv ................... 30 produtos
│       ├── pedidos.csv .................... 17 pedidos
│       └── itens_pedido.csv ............... 24 itens de pedidos
│
└── 📝 MATERIAIS COMPLEMENTARES (futuros)
    ├── slides/ ............................ Apresentações PowerPoint
    ├── diagramas/ ......................... Diagramas ER e fluxos
    └── certificados/ ...................... Templates de certificado

================================================================================
                        🚀 GUIA DE INÍCIO RÁPIDO
================================================================================

PARA INSTRUTORES:
─────────────────

1️⃣ PREPARAÇÃO (1 dia antes do curso)

   ☐ Instalar PostgreSQL 14+ em sua máquina
   ☐ Instalar DBeaver Community
   ☐ Executar scripts.sql para criar estrutura completa
   ☐ Importar CSVs conforme INSTRUCOES_IMPORTACAO_CSV.txt
   ☐ Revisar plano_aula_bd_postgres.txt
   ☐ Preparar ambiente (projetor, acesso internet, etc.)

2️⃣ DIA 1 DO CURSO

   ☐ Apresentar cronograma (plano_aula_bd_postgres.txt)
   ☐ Orientar alunos na instalação do PostgreSQL e DBeaver
   ☐ Executar exemplos do Dia 1
   ☐ Passar exercícios 1-5 da lista

3️⃣ DEMAIS DIAS

   ☐ Seguir cronograma do plano_aula_bd_postgres.txt
   ☐ Usar scripts.sql como material de apoio
   ☐ Consultar gabarito para correção
   ☐ Avaliar conforme critérios no plano

PARA ALUNOS:
────────────

1️⃣ ANTES DA PRIMEIRA AULA

   ☐ Ler este README.txt completamente
   ☐ Instalar PostgreSQL 14+ (https://www.postgresql.org/download/)
   ☐ Instalar DBeaver Community (https://dbeaver.io/download/)
   ☐ Testar conexão ao banco "postgres" padrão

2️⃣ DURANTE O CURSO

   ☐ Acompanhar o instrutor executando os exemplos
   ☐ Fazer os exercícios propostos
   ☐ Consultar gabarito APENAS após tentar resolver
   ☐ Tirar dúvidas imediatamente

3️⃣ ESTUDO AUTÔNOMO

   ☐ Executar scripts.sql para recriar ambiente
   ☐ Refazer exercícios do gabarito
   ☐ Explorar documentação oficial do PostgreSQL
   ☐ Praticar variações dos exemplos

================================================================================
                          📋 CONTEÚDO PROGRAMÁTICO
================================================================================

SEMANA 1 - FUNDAMENTOS (Dias 1-5)
─────────────────────────────────
✓ Dia 1: Conceitos, Instalação, Primeiros Comandos
✓ Dia 2: DDL - Criação de Estruturas
✓ Dia 3: DDL Avançado - Constraints e Relacionamentos  
✓ Dia 4: DML - Manipulação de Dados
✓ Dia 5: Consultas Básicas + Revisão

SEMANA 2 - INTERMEDIÁRIO (Dias 6-10)
────────────────────────────────────
✓ Dia 6: Joins e Relacionamentos
✓ Dia 7: Funções Agregadas e Agrupamento
✓ Dia 8: Subconsultas e CTEs
✓ Dia 9: Views e Índices
✓ Dia 10: Projeto Prático 1 + Revisão

SEMANA 3 - AVANÇADO (Dias 11-15)
────────────────────────────────
✓ Dia 11: Funções e Procedures (PL/pgSQL)
✓ Dia 12: Triggers e Automação
✓ Dia 13: Performance e Otimização
✓ Dia 14: Administração e Segurança
✓ Dia 15: Projeto Final + Avaliação

CARGA HORÁRIA: 60 horas
├── Teoria: 18h (30%)
├── Prática: 30h (50%)
└── Exercícios: 12h (20%)

================================================================================
                      🎯 OBJETIVOS DE APRENDIZAGEM
================================================================================

Ao final deste curso, você será capaz de:

📊 MODELAGEM
   ✓ Criar modelos ER completos
   ✓ Aplicar normalização de dados
   ✓ Projetar schemas escaláveis

🔧 DESENVOLVIMENTO
   ✓ Escrever SQL complexo (DDL, DML, DQL)
   ✓ Criar functions, procedures e triggers
   ✓ Implementar regras de negócio no banco

⚡ PERFORMANCE
   ✓ Otimizar queries
   ✓ Criar índices estratégicos
   ✓ Analisar planos de execução

🔒 ADMINISTRAÇÃO
   ✓ Gerenciar usuários e permissões
   ✓ Fazer backup e restore
   ✓ Monitorar performance

================================================================================
                        💡 DICAS DE USO DOS MATERIAIS
================================================================================

📘 exercicios_bd_postgres.txt
───────────────────────────────
• Contém APENAS enunciados (sem respostas)
• 55 exercícios divididos em 10 seções
• Cada exercício indica: nível, tempo estimado, tabelas usadas
• Use para praticar ANTES de ver o gabarito

USO SUGERIDO:
1. Leia o enunciado
2. Tente resolver sozinho no DBeaver
3. Compare com gabarito apenas depois
4. Entenda as diferenças entre sua solução e a oficial

📗 gabarito_bd_postgres.txt
──────────────────────────
• Respostas COMPLETAS de todos os exercícios
• Código SQL comentado linha por linha
• Explicações passo-a-passo
• Saída esperada de cada query
• Alternativas e boas práticas

USO SUGERIDO:
1. Consulte APÓS tentar resolver
2. Não apenas copie - ENTENDA o código
3. Digite manualmente (não copie/cole) para memorizar
4. Experimente variações

📕 plano_aula_bd_postgres.txt
────────────────────────────
• Cronograma completo de 15 dias
• Objetivos por aula
• Divisão de tempo (teoria/prática/exercícios)
• Exemplos detalhados
• Sistema de avaliação

USO PARA INSTRUTORES:
1. Base para preparar aulas
2. Referência de sequência lógica
3. Guia de tempo e profundidade

USO PARA ALUNOS:
1. Visão geral do curso
2. Acompanhar progresso
3. Estudar tópicos específicos

💾 scripts.sql
─────────────
• Script executável completo
• Cria banco, schemas, tabelas
• Insere dados de exemplo
• Cria functions, triggers, views, índices
• PRONTO PARA EXECUTAR sequencialmente

USO SUGERIDO:
1. Execute UMA VEZ no início
2. Use como referência durante o curso
3. Re-execute se quiser resetar o ambiente
4. Adapte para seus próprios projetos

📊 Arquivos CSV
──────────────
• Dados de exemplo realistas
• Prontos para importação
• Testam integridade referencial

USO SUGERIDO:
1. Importe após criar estrutura (scripts.sql)
2. Siga INSTRUCOES_IMPORTACAO_CSV.txt
3. Pratique diferentes métodos de importação

================================================================================
                          ⚙️ REQUISITOS TÉCNICOS
================================================================================

SOFTWARE OBRIGATÓRIO:
├── PostgreSQL 14 ou superior ......... https://www.postgresql.org/download/
└── DBeaver Community ................. https://dbeaver.io/download/

SOFTWARE OPCIONAL:
├── psql (incluído no PostgreSQL) ..... Terminal SQL
├── pgAdmin 4 ......................... Interface gráfica alternativa
├── Docker ............................ Para ambientes isolados
└── Git ............................... Para versionar seus scripts

HARDWARE MÍNIMO:
├── Processador: Dual-core 2GHz
├── RAM: 4GB (8GB recomendado)
├── Disco: 10GB livres
└── Internet: Para downloads e pesquisas

SISTEMA OPERACIONAL:
├── Windows 10/11
├── Linux (Ubuntu, Debian, Fedora, etc.)
└── macOS 10.14+

================================================================================
                        📚 RECURSOS COMPLEMENTARES
================================================================================

DOCUMENTAÇÃO OFICIAL:
├── PostgreSQL Docs .............. https://www.postgresql.org/docs/
├── DBeaver Wiki ................. https://github.com/dbeaver/dbeaver/wiki
└── SQL Standard ................. https://www.iso.org/standard/76583.html

TUTORIAIS ONLINE:
├── PostgreSQL Tutorial .......... https://www.postgresqltutorial.com/
├── Mode SQL Tutorial ............ https://mode.com/sql-tutorial/
├── W3Schools SQL ................ https://www.w3schools.com/sql/
└── SQLZoo ....................... https://sqlzoo.net/

LIVROS RECOMENDADOS:
├── "PostgreSQL: Up and Running" - Regina Obe & Leo Hsu
├── "The Art of PostgreSQL" - Dimitri Fontaine
├── "SQL Para Análise de Dados" - Cathy Tanimura
└── "Learning SQL" - Alan Beaulieu

PRÁTICA:
├── LeetCode Database ............ https://leetcode.com/problemset/database/
├── HackerRank SQL ............... https://www.hackerrank.com/domains/sql
├── SQLFiddle .................... http://sqlfiddle.com/
└── DB Fiddle .................... https://www.db-fiddle.com/

COMUNIDADES:
├── Stack Overflow (tag: postgresql)
├── Reddit: r/PostgreSQL, r/SQL
├── PostgreSQL Brasil (Telegram)
└── DBeaver Forum

================================================================================
                          🔧 SOLUÇÃO DE PROBLEMAS
================================================================================

PROBLEMA: PostgreSQL não inicia
SOLUÇÃO:
• Windows: Verifique Services.msc se serviço está rodando
• Linux: sudo systemctl status postgresql
• Verifique logs em: /var/log/postgresql/ (Linux) ou data/log/ (Windows)

PROBLEMA: DBeaver não conecta
SOLUÇÃO:
• Verifique se PostgreSQL está rodando
• Confirme usuário/senha (padrão: postgres/[sua senha])
• Porta padrão: 5432
• Host: localhost
• Permita conexão no firewall
• Baixe driver JDBC quando solicitado

PROBLEMA: Erro "permission denied" ao importar CSV
SOLUÇÃO:
• Use \copy em vez de COPY (não precisa ser superusuário)
• Ou mova arquivo para pasta pública (C:\temp\)
• Ou use importação via DBeaver (método gráfico)

PROBLEMA: Caracteres acentuados aparecem errados
SOLUÇÃO:
• Certifique-se que CSV está em UTF-8
• No COPY, adicione: ENCODING 'UTF8'
• No DBeaver, configure encoding da conexão para UTF-8

PROBLEMA: Esqueci a senha do postgres
SOLUÇÃO:
• Edite pg_hba.conf
• Mude método para "trust" temporariamente
• Reinicie PostgreSQL
• Conecte e altere senha: ALTER USER postgres PASSWORD 'nova_senha';
• Volte pg_hba.conf para md5/scram-sha-256
• Reinicie novamente

================================================================================
                          📞 SUPORTE E CONTATO
================================================================================

Para dúvidas sobre o curso:
├── Durante as aulas: pergunte ao instrutor
├── Fora do horário: [inserir canal de comunicação: email, Discord, etc.]
└── Fórum de dúvidas: [inserir link se houver]

Para reportar erros no material:
└── [inserir email ou sistema de issues]

Certificação:
└── Critérios detalhados em plano_aula_bd_postgres.txt seção 6

================================================================================
                          ⚖️ LICENÇA E USO
================================================================================

📜 TERMOS DE USO:

Este material foi desenvolvido para fins EDUCACIONAIS.

PERMITIDO:
✓ Usar em cursos presenciais ou online
✓ Adaptar para suas necessidades
✓ Distribuir para alunos matriculados
✓ Modificar exemplos e exercícios

NÃO PERMITIDO:
✗ Vender ou comercializar sem autorização
✗ Remover créditos do autor original
✗ Usar para fins ilegais

ISENÇÃO DE RESPONSABILIDADE:
Os scripts fornecidos são para AMBIENTE DE APRENDIZADO. Não execute em
ambientes de PRODUÇÃO sem revisão completa. Os autores não se responsabilizam
por perda de dados ou problemas decorrentes do uso deste material.

================================================================================
                          ✅ CHECKLIST DE INÍCIO
================================================================================

ANTES DE COMEÇAR, CERTIFIQUE-SE:

☐ PostgreSQL está instalado e rodando
☐ DBeaver está instalado e conectado ao banco "postgres"
☐ Todos os arquivos estão na pasta d:\banco de dados\
☐ Conseguiu executar: SELECT version();
☐ Leu este README.txt completamente
☐ Executou scripts.sql com sucesso
☐ Importou os CSVs com sucesso
☐ Executou algumas queries de teste

TESTE RÁPIDO:

Execute isto no DBeaver:

SELECT 'Ambiente OK!' AS status,
       version() AS versao_postgresql,
       current_database() AS banco_atual,
       current_user AS usuario_atual;

Se funcionou, você está PRONTO para começar! 🎉

================================================================================
                          🎓 BONS ESTUDOS!
================================================================================

Preparado para dominar Bancos de Dados Relacionais com PostgreSQL?

Lembre-se:
• A prática leva à perfeição
• Não tenha medo de errar - erros são oportunidades de aprendizado
• Consulte a documentação oficial sempre que tiver dúvidas
• Compartilhe conhecimento com colegas
• Aplique o que aprender em projetos reais

Boa sorte no curso! 🚀

================================================================================
                              CONTROLE DE VERSÃO
================================================================================

Versão: 1.0
Data: Dezembro de 2024
Autor: Curso Intensivo BD
Última atualização: 01/12/2024

CHANGELOG:
v1.0 (01/12/2024) - Versão inicial
  • 55 exercícios completos
  • Gabarito detalhado
  • Plano de aula 15 dias
  • Scripts SQL executáveis
  • 4 arquivos CSV de dados
  • Instruções de importação

================================================================================
                                    FIM
================================================================================
