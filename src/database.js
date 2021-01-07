const mongoose = require('mongoose')

const { MONGODB_USER, MONGODB_PASSWORD, MONGODB_DATABASE_NAME } = process.env
const URI = `mongodb+srv://${MONGODB_USER}:${MONGODB_PASSWORD}@nodejsplatzi.cg57m.mongodb.net/${MONGODB_DATABASE_NAME}?retryWrites=true&`

mongoose
	.connect(URI, {
		useUnifiedTopology: true,
		useNewUrlParser: true,
	})
	.then(db => console.log(`La base de datos está conectada`))
	.catch(err => console.log(err))
