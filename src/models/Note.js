const { Schema, model } = require('mongoose')

const noteSchema = new Schema(
	{
		title: {
			type: String,
		},
		description: {
			type: String,
		},
	},
	{ timestamps: true },
)

module.exports = model('Note', noteSchema)
