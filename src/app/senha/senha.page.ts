import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-senha',
  templateUrl: './senha.page.html',
  styleUrls: ['./senha.page.scss'],
})
export class SenhaPage implements OnInit {

  alertbuttons = ['Fechar'];

  constructor(private router:Router) { }

  ngOnInit() {
  }

  home(){
    this.router.navigate(['/home']);
  }

}
