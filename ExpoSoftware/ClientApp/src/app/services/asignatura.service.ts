import { Injectable, Inject } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Asignatura} from '../comite/asignatura/models/asignatura';
import { catchError, map, tap } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { HandleHttpErrorService } from '../@base/handle-http-error.service';


const httpOptionsPut = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
  responseType: 'text'
};

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})

export class AsignaturaService {

  
  baseUrl: string;

  constructor(
      private http: HttpClient,
      @Inject('BASE_URL') baseUrl: string,
      private handleErrorService: HandleHttpErrorService)
      {
      this.baseUrl = baseUrl;
      }

     post(asignatura:Asignatura ): Observable<Asignatura> {
        return this.http.post<Asignatura>(this.baseUrl + 'api/Asignatura', asignatura)
            .pipe(
                tap(_ => this.handleErrorService.log('datos enviados')),
                catchError(this.handleErrorService.handleError<Asignatura>('Registrar Asignatura', null))
            );
    }

    get(): Observable<Asignatura[]> {
      return this.http.get<Asignatura[]>(this.baseUrl + 'api/Asignatura')
          .pipe(
              tap(_ => this.handleErrorService.log('Datos Recibidos')),
              catchError(this.handleErrorService.handleError<Asignatura[]>('Consulta Asignatura', null))
          );
    }


    getId(id: string): Observable<Asignatura> {
      const url = `${this.baseUrl + 'api/Asignatura'}/${id}`;
        return this.http.get<Asignatura>(url, httpOptions)
        .pipe(
          tap(_ => this.handleErrorService.log('datos enviados')),
          catchError(this.handleErrorService.handleError<Asignatura>('Buscar Asignatura', null))
        );
    }


    delete(asignatura: Asignatura| string): Observable<string> {
      const id = typeof asignatura === 'string' ? asignatura : asignatura.codigoAsignatura;
      return this.http.delete<string>(this.baseUrl + 'api/Asignatura/'+ id)
      .pipe(
        tap(_ => this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<string>('Elimiar Asignatura', null))
      );
    }
  

    put(asignatura: Asignatura): Observable<any> {
      const url = `${this.baseUrl}api/Asignatura/${asignatura.codigoAsignatura}`;
      return this.http.put(url, asignatura, httpOptions)
      .pipe(
        tap(_=> this.handleErrorService.log('datos enviados')),
        catchError(this.handleErrorService.handleError<any>('Editar Asignatura'))
      );
    }

    
  
}
