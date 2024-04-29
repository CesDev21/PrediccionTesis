import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { NosotrosComponent } from './nosotros/nosotros.component';
import { ProductosComponent } from './productos/productos.component';
import { EstadisticasComponent } from './estadisticas/estadisticas.component';
import { MediaComponent } from './media/media.component';
import { ConfiguracionComponent } from './configuracion/configuracion.component';

const routes: Routes = [
  {path: '', redirectTo: 'inicio', pathMatch: 'full'},
  {path: 'inicio', component: InicioComponent},
  {path: 'nosotros', component: NosotrosComponent},
  {path: 'productos', component: ProductosComponent},
  {path: 'estadisticas', component: EstadisticasComponent},
  {path: 'media', component: MediaComponent},
  {path: 'configuracion', component: ConfiguracionComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
