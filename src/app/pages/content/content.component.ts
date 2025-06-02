import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string = "https://t.ctcdn.com.br/jSEs-a2AsizaO2xZCQXcdbGPZW0=/i490793.jpeg"
  contentTitle:string = "NOTÍCIA EXEMPLO"
  contentDescription:string = "blabla blabalba"

  constructor() { }

  ngOnInit(): void {
  }

}
