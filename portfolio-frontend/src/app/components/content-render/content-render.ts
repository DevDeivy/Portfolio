import {
  Component,
  ElementRef,
  inject,
  ViewChild,
  viewChild,
} from '@angular/core';
import { ContentService } from '../../services/content-service';
import {
  FormArray,
  FormControl,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { CommonModule } from '@angular/common';
import { TerminalDescription } from '../../shared/terminal-description/terminal-description';

@Component({
  selector: 'app-content-render',
  imports: [ReactiveFormsModule, CommonModule, TerminalDescription],
  templateUrl: './content-render.html',
  styleUrl: './content-render.css',
})
export class ContentRender {
  public value!: string;
  public response?: string;
  public responseError?: string;
  public responseError2?: string;
  private _contentService = inject(ContentService);

  grup = new FormGroup({
    comm: new FormArray([]),
  });

  @ViewChild('commandInput') commandInput!: ElementRef;
  @ViewChild('clone') clone!: ElementRef;

  get clon(): FormArray {
    return this.grup.get('comm') as FormArray;
  }

  ngAfterViewInit() {
    this.commandInput?.nativeElement.focus();
  }

  getCommand(value: string) {
    const trimmed = value.trim().toLowerCase();

    if (trimmed === 'git help') {
      this._contentService.gitHelp().subscribe({
        next: (data) => {
          this.response = data.message;
          this.push(value);
        },
        error: (err) => {
          this.responseError = 'Error al conectar con el servidor.';
          this.push(value);
          console.error(err);
        },
      });
    } else if (trimmed === 'clear') {
      this.clon.clear();
      this.response = '';
      this.responseError = '';
      this.responseError2 = '';
    } else if (trimmed === '') {
      this.responseError2 = ' ';
      this.push(value);
    } else {
      this.responseError = 'this command is available';
      this.push(value);
    }
  }

  push(value: string) {
    this.clon.push(new FormControl(value));
  }
}
