import { Component } from '@angular/core';
import { Route, Router } from '@angular/router';
import { InicioPage } from '../inicio/inicio.page';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  estudantes: any = [];
  constructor(private router:Router, private http: HttpClient) {
  }

  cadastrarEstudante(){

    this.http.get('http://localhost/bdquestti/estudantes.php').subscribe((response)=>{
      console.log(response);
      this.estudantes = response;
    })

  }

  ngOnInit() {
  }

  inicio(){
    this.router.navigate(['/inicio']);
  }

    senha(){
      this.router.navigate(['/senha']);
    }

    cadastro(){
      this.router.navigate(['/cadastro']);
    }
}

