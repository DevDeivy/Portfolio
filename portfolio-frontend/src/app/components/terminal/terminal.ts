import { Component } from '@angular/core';
import { ContentRender } from '../content-render/content-render';
import { TerminalDescription } from "../../shared/terminal-description/terminal-description";

@Component({
  selector: 'app-terminal',
  imports: [ContentRender, TerminalDescription],
  templateUrl: './terminal.html',
  styleUrl: './terminal.css'
})
export class Terminal {

}
