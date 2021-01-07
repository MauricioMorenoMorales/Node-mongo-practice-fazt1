const { Schema, model } = require('mongoose')

const noteSchema = new Schema(
	{
		title: {
			type: string,
		},
		description: {
			type: string,
		},
	},
	{ timestamps: true },
)

module.exports = model('Note', noteSchema)
