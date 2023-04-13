import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { MatCardModule } from "@angular/material/card";
import { FlexLayoutModule } from "@angular/flex-layout";
import { MatRadioModule } from '@angular/material/radio';
import {MatFormFieldModule } from '@angular/material/form-field';
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, MatCardModule, FlexLayoutModule, MatRadioModule,MatFormFieldModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
