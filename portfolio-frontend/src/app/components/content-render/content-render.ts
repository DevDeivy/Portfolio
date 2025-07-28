import { Component, ElementRef, inject, ViewChild, viewChild } from '@angular/core';
import { ContentService } from '../../services/content-service';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-content-render',
  imports: [ReactiveFormsModule],
  templateUrl: './content-render.html',
  styleUrl: './content-render.css'
})
export class ContentRender {

  public value!: string;
  public response?: string;
  public responseError?: string;
  private _contentService = inject(ContentService);

  grup = new FormGroup({
    comm: new FormArray([])
  })

  @ViewChild('commandInput') commandInput!: ElementRef;
  @ViewChild('clone') clone!: ElementRef;


  ngAfterViewInit(){
    this.commandInput?.nativeElement.focus();
  }

  getCommand(value: string){
    if(value.toLowerCase() === 'git help'){
      this._contentService.gitHelp().subscribe(data => {
        this.response = data.message
        this.responseError = ''
      }, err => {
        console.log('error to connect server, please try again', err)
      })
    } else if(value.toLowerCase() === ''){
      this.response= ''
      this.responseError= ''
    }else{
      this.responseError = 'this command is invailable'
      this.response= '';
    }
  }
}