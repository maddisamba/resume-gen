import { Component, signal } from '@angular/core';
import { FormGroup, FormControl, Validators, FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ApiService } from './app.service';

@Component({
  selector: 'app-root',
  imports: [ReactiveFormsModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('resume-gen-app');
  uploadedResume: File | null = null;

  resumeForm : FormGroup ;

  constructor(private fb:FormBuilder, private apiService:ApiService){
    this.resumeForm=this.fb.group({
      jobLink :  ['', Validators.required]
    });
  }

  onFIleUpload(event:Event){
    const inputResume=event.target as HTMLInputElement;
   // console.log('Resume:',inputResume.files);
    if(inputResume.files?.length){
      this.uploadedResume = inputResume.files[0];
    }
  }

  onSubmit(){
   // console.log('resumeform valid', this.uploadedResume)
    if(!this.uploadedResume || this.resumeForm.valid){
      console.log('resumeuploaded',this.uploadedResume)
      console.log('jobLink',this.resumeForm.value.jobLink)
     this.apiService.submitLink(this.uploadedResume,this.resumeForm.value.jobLink).subscribe((res:any)=>{
         console.log("response",res)
      })
     
    }
  }
}
