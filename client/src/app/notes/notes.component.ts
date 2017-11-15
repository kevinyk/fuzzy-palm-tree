import { Component, OnInit } from '@angular/core';
import { ApiService } from './../api.service';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  newNote: object = {title: "", content:""};
  notes: any[];
  constructor(private _apiService: ApiService) { }

  ngOnInit() {
  	this.getAllNotes();
  }
  onSubmit(){
  	console.log("Hit onSubmit");
  	this._apiService.addNote(this.newNote)
  	.then((data)=>{
  		console.log("then", data);
  		this.getAllNotes();
  	})
  	.catch((error)=>{
  		console.log("catch", error);
  	})
  }
  getAllNotes(){
  	this._apiService.getNotes()
  	.then((data)=>{
  		console.log("then");
  		this.notes = data;
  	})
  	.catch((error)=>{
  		console.log('catch');
  		console.log(error);
  	})
  }

}
