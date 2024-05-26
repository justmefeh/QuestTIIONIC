import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.page.html',
  styleUrls: ['./inicio.page.scss'],
})
export class InicioPage implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  home() {
    this.router.navigate(['/home']);
  }

  perfil() {
    this.router.navigate(['/perfil']);
  }

  criarsimulado(){
    this.router.navigate(['/criarsimulado'])
  }
}
