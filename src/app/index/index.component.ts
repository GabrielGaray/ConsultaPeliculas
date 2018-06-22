import { Component, OnInit, Output, Input } from '@angular/core';
import {MovieService} from '../movie.service';
import {Element} from '../element';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent {
  @Input() resultSet: Array<Element>;
  @Input() searchTerm: string;

  constructor() { }

  getMovies() {
    return this.resultSet.filter(elm => elm.getType() == 'movie' );
  }

}
