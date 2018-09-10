import { Component, OnInit } from "@angular/core";
import { MatDialog, MAT_DIALOG_DATA } from "@angular/material";
import { DialogContentComponent } from "../dialog-content/dialog-content.component";
import products from "./products";

export interface Product {
  id: number;
  item: string;
  price: number;
}
@Component({
  selector: "app-modal",
  templateUrl: "./modal.component.html",
  styleUrls: ["./modal.component.css"]
})
export class ModalComponent implements OnInit {
  constructor(public dialog: MatDialog) {}
  products: Product[];
  openDialog(id: number) {
    this.dialog
      .open(DialogContentComponent, {
        disableClose: true,
        role: "alertdialog",
        ariaLabel: "Confirmation dialog"
      })
      .afterClosed()
      .subscribe(result => {
        console.log(result);
        let index = this.products.findIndex(e => e.id == id);
        result && this.products.splice(index, 1);
      });
  }
  ngOnInit() {
    this.products = products;
  }
}
