import { Component, OnInit } from '@angular/core';
import { NotesService } from '../services/notes.service';
import { Note } from '../models/note';

@Component({
  selector: 'app-notes',
  templateUrl: './notes.component.html',
  styleUrls: ['./notes.component.css']
})
export class NotesComponent implements OnInit {
  notes: Note[];
  none: any;
  constructor(
    private notesService: NotesService
  ) { }

  ngOnInit() {
    this.getNotes();
  }

  getNotes(): void {
    this.notesService.getNotes()
        .subscribe(notes => this.notes = notes);
  }

}
