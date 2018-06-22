import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  @Input() title: String;
  @Input() year: number;
  @Input() cover: String;
  @Input() imbdID: String;

  constructor() { }

  ngOnInit() {
  }

}
