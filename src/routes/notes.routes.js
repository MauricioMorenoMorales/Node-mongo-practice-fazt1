const { Router } = require('express')
const router = Router()

const {
	renderNoteForm,
	createNewNote,
	renderNotes,
	renderEditForm,
	updateNote,
} = require('../controllers/notes.controller')

//New Note
router.get('/notes/add', renderNoteForm)

router.post('/notes/new-note', createNewNote)

//Get all notes
router.get('/notes', renderNotes)

//Edit Notes
router.get('/notes/edit/:id', renderEditForm)

router.put('/notes/edit/:id', updateNote)

//Delete note

router.delete('/notes/delete/:id')

module.exports = router
