import { Component } from '@angular/core';
import { MovieService } from './movie.service';
import {Element} from './element';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  resultSet: Array<Element>;
  searchTerm: string = 'spider-man';

  constructor (private movieService: MovieService) {}

  // tslint:disable-next-line:use-life-cycle-interface
  ngOnInit() {
    this.search();
  }

  sendValue(term) {
    this.searchTerm = term;
    this.search();
}

  search() {
    this.resultSet = this.movieService.getMovies(this.searchTerm);
    console.log(this.resultSet);
}
}
