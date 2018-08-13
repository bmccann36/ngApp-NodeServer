import { Injectable } from '@angular/core';
import { Note} from '../models/note';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';




@Injectable({
  providedIn: 'root'
})
export class NotesService {
  private notesUrl = 'api/notes';
  constructor(
    private http: HttpClient,
  ) { }


/** GET notes from the server */
getNotes (): Observable<Note[]> {
  return this.http.get<Note[]>(this.notesUrl);
}


}
