let mongoose = require('mongoose');
let NoteSchema = mongoose.Schema({
	title: String,
	content: String
})

mongoose.model('Note', NoteSchema);