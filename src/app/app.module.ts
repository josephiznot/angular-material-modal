import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { MatButtonModule } from "@angular/material/button";

import { AppComponent } from "./app.component";
import { ModalComponent } from "./modal/modal.component";
import { DialogContentComponent } from "./dialog-content/dialog-content.component";

@NgModule({
  declarations: [AppComponent, ModalComponent, DialogContentComponent],
  imports: [
    BrowserModule,
    MatDialogModule,
    BrowserAnimationsModule,
    MatButtonModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogContentComponent]
})
export class AppModule {}
