import { Component,NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule, Routes } from '@angular/router';
import { ErrorPaginaComponent } from './error-pagina/error-pagina.component';
import { SecurityComponent } from './security/security.component';
import { DesignComponent } from './design/design.component';
import { MisionComponent } from './mision/mision.component';
import { VisionComponent } from './vision/vision.component';
import { LayoutComponent } from './layout/layout.component';
import { LayoutSecurityComponent } from './layout-security/layout-security.component';
import { LayoutDesignComponent } from './layout-design/layout-design.component';
import { MedidasSeguridadComponent } from './medidas-seguridad/medidas-seguridad.component';
import { PracticasPrivacidadComponent } from './practicas-privacidad/practicas-privacidad.component';
import { DesignResponsivoComponent } from './design-responsivo/design-responsivo.component';
import { FlujoNavComponent } from './flujo-nav/flujo-nav.component';

const routes: Routes=[
  {
    path:'home',
    component: HomeComponent
  },

  {
    path:'about',
    component: AboutComponent
  },

  {
    path:'contact',
    component: ContactComponent
  },

  {
    path:'security',
    component: SecurityComponent
  },

  {
    path:'design',
    component: DesignComponent
  },

  {
    path:'mision',
    component: MisionComponent
  },

  {
    path:'vision',
    component: VisionComponent
  },

  {
    path:'medidasSeguridad',
    component: MedidasSeguridadComponent
  },

  {
    path:'practicasPrivacidad',
    component: PracticasPrivacidadComponent
  },

  {
    path:'designResponsivo',
    component: DesignResponsivoComponent
  },

  {
    path:'flujoNav',
    component: FlujoNavComponent
  },

  {
    path:'',
    redirectTo: '/home',
    pathMatch: 'full'
  },

  {
    path:'**',
    component: ErrorPaginaComponent
  }
]

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ContactComponent,
    ErrorPaginaComponent,
    SecurityComponent,
    DesignComponent,
    MisionComponent,
    VisionComponent,
    LayoutComponent,
    LayoutSecurityComponent,
    LayoutDesignComponent,
    MedidasSeguridadComponent,
    PracticasPrivacidadComponent,
    DesignResponsivoComponent,
    FlujoNavComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }