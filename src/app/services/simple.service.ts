import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from 'src/app/types/Message';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class SimpleService {

  url: string = "http://localhost:4545/getText";
  
  constructor(private httpClient: HttpClient) { }
  
  getText(): Observable<Message> {
    return this.httpClient.get<Message>(this.url);
  }
}
