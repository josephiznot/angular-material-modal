import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { ModalComponent } from "./modal/modal.component";
import { DialogContentComponent } from "./dialog-content/dialog-content.component";
import { MatDialogModule } from "@angular/material/dialog";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent, ModalComponent, DialogContentComponent],
  imports: [BrowserModule, MatDialogModule, BrowserAnimationsModule],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [DialogContentComponent]
})
export class AppModule {}
