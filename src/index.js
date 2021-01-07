require('dotenv').config() //? Se tiene que activar en donde se inicie la aplicacion

const app = require('./server')
require('./database')

console.log(process.env.MONGODB_URI)

app.listen(app.get('port'), () => {
	console.log(`Applicacion corriendo en el puerto ${app.get('port')}`)
})
