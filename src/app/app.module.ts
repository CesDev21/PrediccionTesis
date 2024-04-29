import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BodyComponent } from './body/body.component';
import { SidenavComponent } from './sidenav/sidenav.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { ProductosComponent } from './productos/productos.component';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { MediaComponent } from './media/media.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CanvasJSAngularChartsModule } from '@canvasjs/angular-charts';

@NgModule({
  declarations: [
    AppComponent,
    BodyComponent,
    SidenavComponent,
    ProductosComponent,
    InicioComponent,
    NosotrosComponent,
    MediaComponent,
    ConfiguracionComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    CanvasJSAngularChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
