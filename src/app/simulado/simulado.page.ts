import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-simulado',
  templateUrl: './simulado.page.html',
  styleUrls: ['./simulado.page.scss'],
})
export class SimuladoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  inicio(){
    this.router.navigate(['/inicio']);
  }
}
