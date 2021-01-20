const notesController = {}
const Note = require('../models/Note')

notesController.renderNoteForm = (req, res) => {
	res.render('../views/notes/new-note.hbs')
}

notesController.createNewNote = async (req, res) => {
	const { title, description } = req.body
	const newNote = new Note({ title, description })
	await newNote.save()
	res.send('Nota creada')
}

notesController.renderNotes = async (req, res) => {
	const notes = await Note.find().lean()
	res.render('../views/notes/all-notes.hbs', { notes })
}

notesController.renderEditForm = (req, res) => {
	res.send('render edit form')
}
notesController.updateNote = (req, res) => {
	res.send('Update note')
}

notesController.deleteNote = (req, res) => {
	res.send('deleting note')
}

module.exports = notesController
