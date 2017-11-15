
var Notes = require('./../controllers/notes.js');
module.exports = (app)=>{
	app.get('/api/notes', Notes.index);
	app.post('/api/notes', Notes.create);
}