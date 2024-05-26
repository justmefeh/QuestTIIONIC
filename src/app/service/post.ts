import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  apiUrl = 'http://localhost/bdquestti/conexao.php'; // Substitua pela URL da sua API

  constructor(private http: HttpClient) { }

  getEstudantes() {
    return this.http.get(`${this.apiUrl}/estudantes`);
  }
}
