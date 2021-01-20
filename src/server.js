const express = require('express')
const exphbs = require('express-handlebars') //! Requiere en el servidor la función exphbs
const path = require('path')
const morgan = require('morgan')

//Inicializaciones
const app = express()

//Setings
app.set('port', process.env.PORT || 4000)
app.set('views', path.join(__dirname, 'views'))
app.engine(
	'.hbs',
	exphbs({
		defaultLayout: 'main',
		layoutsDir: path.join(app.get('views'), 'layouts'),
		partialsDir: path.join(app.get('views'), 'partials'),
		extname: '.hbs',
	}),
) //? Aquí solo se configura
app.set('view engine', '.hbs') //! Aqui ya se inicializa

//Middlewares
app.use(morgan('dev'))
app.use(express.static(__dirname + './public'))
app.use(express.urlencoded({ extended: false }))

//Global variables

//Routes
app.use(require('./routes/index.routes'))
app.use(require('./routes/notes.routes'))

//Static files
app.use(express.static(path.join(__dirname, 'public')))

module.exports = app
