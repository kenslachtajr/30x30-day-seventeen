import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'species-wild',
  templateUrl: './wild.component.html',
  styleUrls: ['./wild.component.css']
})
export class WildComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit() {}

  redirectToSpecies() {
    this.router.navigate(['./species']);
  }
}
