import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Terminal } from "./components/terminal/terminal";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Terminal],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'portfolio-frontend';
}
