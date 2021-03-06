import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { NavMenuComponent } from './nav-menu/nav-menu.component';
import { HomeComponent } from './home/home.component';
import { CounterComponent } from './counter/counter.component';
import { FetchDataComponent } from './fetch-data/fetch-data.component';
import { AsignaturaRegistroComponent } from './comite/asignatura/asignatura-registro/asignatura-registro.component';
import { AsignaturaConsultaComponent } from './comite/asignatura/asignatura-consulta/asignatura-consulta.component';
import { AppRoutingModule } from './app-routing.module';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { AsignaturaService } from './services/asignatura.service';
import { DocenteRegistroComponent } from './comite/docente/docente-registro/docente-registro.component';
import { DocenteConsultaComponent } from './comite/docente/docente-consulta/docente-consulta.component';
import {MatDialogModule} from '@angular/material/dialog';
import { CuadroDialogoComponent } from './cuadro-dialogo/cuadro-dialogo.component';
import { FiltroAsignaturaPipe } from './pipe/filtro-asignatura.pipe';
import { AsignaturaEdicionComponent } from './comite/asignatura/asignatura-edicion/asignatura-edicion.component';
import { ModalComponent } from './modal/modal.component';


@NgModule({
  declarations: [
    AppComponent,
    NavMenuComponent,
    HomeComponent,
    CounterComponent,
    FetchDataComponent,
    AsignaturaRegistroComponent,
    AsignaturaConsultaComponent,
    DocenteRegistroComponent,
    DocenteConsultaComponent,
    CuadroDialogoComponent,
    FiltroAsignaturaPipe,
    AsignaturaEdicionComponent,
    ModalComponent
  ],
  imports: [
    BrowserModule.withServerTransition({ appId: 'ng-cli-universal' }),
    HttpClientModule,
    FormsModule,
    NgbModule,
    MatSliderModule,
    MatButtonModule,
    MatDialogModule,
    MatIconModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent, pathMatch: 'full' },
      { path: 'counter', component: CounterComponent },
      { path: 'fetch-data', component: FetchDataComponent },
    ]),
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [AsignaturaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
