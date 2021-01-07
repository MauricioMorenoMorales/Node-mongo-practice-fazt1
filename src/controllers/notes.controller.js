const notesController = {}

notesController.renderNoteForm = (req, res) => {
	res.send('note add')
}

notesController.createNewNote = (req, res) => {
	res.send('new note')
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
