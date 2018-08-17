import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { DogListComponent } from './dog-list/dog-list.component';
import { SeparatorComponent } from './separator/separator.component';
import { AppService } from './app.service';


@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    DogListComponent,
    SeparatorComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [AppService],
  bootstrap: [AppComponent]
})
export class AppModule { }
