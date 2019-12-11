import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { SimpsonComponent } from './pages/simpson/simpson.component';
import { RegresionComponent } from './pages/regresion/regresion.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SecanteComponent } from './pages/secante/secante.component';
import{AppMaterialModule} from '../app/app-material/app-material.module';

import { MatMenuModule} from '@angular/material/menu';
import { AppRoutingModule } from './app-routing.module';
import {MatTabsModule} from '@angular/material/tabs';
import {MatCardModule} from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SimpsonComponent,
    RegresionComponent,
    NavbarComponent,
    SecanteComponent,
    FooterComponent,
    
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppMaterialModule,
    MatMenuModule,
    AppRoutingModule,
    MatTabsModule,
    MatCardModule,
    MatIconModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
