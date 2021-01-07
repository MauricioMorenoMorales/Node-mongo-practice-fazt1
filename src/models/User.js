const { Schema, model } = require('mongoose')
const bcrypt = require('bcryptjs') //? Modulo para encriptar contrasenha

const userSchema = new Schema(
	{
		name: {
			type: string,
			required: true,
		},
		email: {
			type: string,
			required: true,
		},
		password: {
			type: string,
			required: true,
		},
	},
	{ timestamps: true },
)

userSchema.methods.encryptPassword = async password => {
	const salt = await bcrypt.genSalt(10)
	return await bcrypt.hash(password, salt)
}

userSchema.methods.matchPassword = function(password) {
	return await bcrypt.compare(password, this.password)
}

module.exports = model('User', userSchema)
