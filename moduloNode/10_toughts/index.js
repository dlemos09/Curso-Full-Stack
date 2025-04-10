const express = require('express');

const exphbs = require('express-handlebars');

const session = require('express-session');

const FileStore = require('session-file-store')(session);

const flash = require('express-flash');

const conn = require('./db/conn');

const app = express();

const port = 3000

//Import Routes
const toughtsRoutes = require('./routes/toughtsRoutes')
const authRoutes = require('./routes/authRoutes')


//Import Controller
const ToughtController = require('./controllers/ToughtController')

// Models
const Tought = require('./models/Tought')
const User = require('./models/User');


//Trabalhar com arquivos estáticos / public path
app.use(express.static('public'));

//template engine
app.engine('handlebars', exphbs.engine());
app.set('view engine', 'handlebars');

// receber a resposta do body
app.use(express.urlencoded({ extended: true }));

//middleware que facilita receber os dados em json
app.use(express.json());


app.use(
    session({
        name: "session",
        secret: "nosso_secret",
        resave: false,
        saveUninitialized: false,
        store: new FileStore({
            logFn: function () { },
            path: require('path').join(require('os').tmpdir(), 'sessions'),
        }),
        cookie: {
            secure: false,
            maxAge: 360000,
            expires: new Date(Date.now() + 3600000),
            httpOnly: true,
        }
    })
)

//flash messages
app.use(flash())

app.use((req, res, next) => {
    if (req.session.userid) {
        res.locals.session = req.session
    }
    next()
})

//Routes
app.use('/toughts', toughtsRoutes) // leva a todas as rotas
app.use('/', authRoutes)


app.get('/', ToughtController.showToughts) //exibe todos os pensamentos


// conn.sync({force:true}).then(() => {
//     app.listen(port, () => {
//         console.log(`Servidor rodando na porta ${port}`);
//     });
// }).catch((err) => {
//     console.log(err);
// });

conn.sync().then(() => {
    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    });
}).catch((err) => {
    console.log(err);
});

