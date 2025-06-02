import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {

  photoCover:string = "https://t.ctcdn.com.br/jSEs-a2AsizaO2xZCQXcdbGPZW0=/i490793.jpeg"
  contentTitle:string = "NOTÍCIA EXEMPLO"
  contentDescription:string = "blabla blabalba"

  constructor(
    private route:ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe( value =>
      console.log(value.get("id"))
    )
  }

}
