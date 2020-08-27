import { Component } from "@angular/core";
import { FotoService } from "../services/foto.service";
import { Foto } from "../model/foto";

@Component({
  selector: "app-tab2",
  templateUrl: "tab2.page.html",
  styleUrls: ["tab2.page.scss"],
})
export class Tab2Page {
  constructor(public fotoService: FotoService) {}
}
