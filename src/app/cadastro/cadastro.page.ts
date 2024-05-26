import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import axios from 'axios';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.page.html',
  styleUrls: ['./cadastro.page.scss'],
})
export class CadastroPage implements OnInit {


  formData = {

    nomeCompleto: "",
    email: "",
    senha: "",
    confirmarSenha: "",
    cpf: "",
    dataNascimento: "",
    sexo: "",
  }

  constructor(private router: Router, private http: HttpClient) { }

  ngOnInit() {
  }

  cadastrar(){
    console.log(this.formData);
    axios.post("http://localhost/bdquestti/cadastro.php", this.formData)
    .then(
      (response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      })
   
  }

  home() {
    this.router.navigate(['/home']);
  }

}
