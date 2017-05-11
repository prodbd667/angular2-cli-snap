import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { AppMainComponent } from './app-main/app-main.component';
import { ElSnapComponent } from './el-snap/el-snap.component';

@NgModule({
  declarations: [
    AppComponent,
    AppMainComponent,
    ElSnapComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
