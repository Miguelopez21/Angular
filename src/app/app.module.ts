import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { HeaderComponent } from './header/header.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';
import { DetailComponent } from './content/detail/detail.component';
import { ProductsComponent } from './content/products/products.component';

@NgModule({
  declarations: [
    AppComponent,
    UsuarioComponent,
    HeaderComponent,
    ContentComponent,
    FooterComponent,
    DetailComponent,
    ProductsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
