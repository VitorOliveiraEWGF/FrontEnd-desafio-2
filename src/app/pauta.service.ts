import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PautaService {

  private apiUrl = 'http://sua-api-url.com/api';

  constructor(private http: HttpClient) { }

  cadastrarPauta(pauta: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/pautas`, pauta);
  }

  abrirSessao(pautaId: number, tempoSessao: number): Observable<any> {
    return this.http.post(`${this.apiUrl}/pautas/${pautaId}/abrir-sessao`, { tempoSessao });
  }

  votar(pautaId: number, associadoId: number, voto: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/pautas/${pautaId}/votos`, { associadoId, voto });
  }

  obterResultado(pautaId: number): Observable<any> {
    return this.http.get(`${this.apiUrl}/pautas/${pautaId}/resultado`);
  }
}
