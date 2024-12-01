require('dotenv').config()

const express = require('express');

const exphbs = require('express-handlebars');

const app = express();

const conn = require('./db/conn');

const methodOverride = require('method-override');

const port = process.env.PORT || 3000;

const Task = require('./models/Task')

const taskRoutes = require('./routes/tasksRoutes')

app.use(methodOverride('_method'));

app.engine('handlebars', exphbs.engine());

app.use(express.urlencoded({ extended: true }));

app.use(express.json());

app.set('view engine', 'handlebars');

app.use(express.static('public'));

app.use('/tasks', taskRoutes)


conn.sync().then(() => {
    app.listen(port, () => {
        console.log(`Servidor rodando na porta ${port}`);
    });
}).catch((err) => {
    console.log(err);
});