const notesController = {}

notesController.renderNoteForm = (req, res) => {
	res.render('../views/notes/new-note.hbs')
}

notesController.createNewNote = (req, res) => {
	console.log(req.body)
	res.send('Nota creada')
}

notesController.renderNotes = (req, res) => {
	res.send('render notes')
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
