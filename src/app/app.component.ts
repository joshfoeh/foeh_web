import { Component } from '@angular/core';
import { OnInit } from '@angular/core/src/metadata/lifecycle_hooks';
import { SimpleService } from 'src/app/services/simple.service';
import { Message } from 'src/app/types/Message';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  message: string;

  constructor(private simpleService: SimpleService){}

  ngOnInit(){
      this.simpleService.getText().subscribe((data: Message) => {
        this.message = data.message;
      });
  }

}
