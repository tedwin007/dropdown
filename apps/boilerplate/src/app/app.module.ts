import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {AppComponent} from './app.component';
import {CommonModule} from "@angular/common";
import {SearchbarComponent} from "@tw/shared";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  DropdownContainerComponent
} from "../../../../libs/shared/src/lib/components/dropdown/dropdown-container.component";
import {HttpClientModule} from "@angular/common/http";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    CommonModule,
    DropdownContainerComponent,
    HttpClientModule,
    BrowserAnimationsModule,
    SearchbarComponent,
  ],
  bootstrap: [AppComponent],
})

export class AppModule {
}
