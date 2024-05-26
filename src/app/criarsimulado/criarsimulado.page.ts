import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criarsimulado',
  templateUrl: './criarsimulado.page.html',
  styleUrls: ['./criarsimulado.page.scss'],
})
export class CriarsimuladoPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  inicio(){
    this.router.navigate(['/inicio']);
  }

  simulado(){
    this.router.navigate(['/simulado']);
  }
}
