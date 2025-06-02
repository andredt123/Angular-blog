import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-big-card',
  templateUrl: './big-card.component.html',
  styleUrls: ['./big-card.component.css']
})
export class BigCardComponent implements OnInit {

  @Input()
  photoCover:string = ""
  @Input()
  cardTitle:string = "x"
  @Input()
  cardDescription:string = "Marvel studios anuncia o novo filme do homem de ferro"
  @Input()
  Id:string="0"

  constructor() { }

  ngOnInit(): void {
  }

}
