import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MenuComponent } from './menu/menu.component';
import { AgregarComponent } from './menu/agregar/agregar.component';
import { LeerComponent } from './menu/leer/leer.component';
import { ActualizarComponent } from './menu/actualizar/actualizar.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    AgregarComponent,
    LeerComponent,
    ActualizarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
