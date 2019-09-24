import { Router } from '@angular/router';
import { ApiService } from '../../service/api.service';

import { Component, OnInit, NgZone } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";
import { ToastrService } from 'ngx-toastr';



@Component({
  selector: 'app-admin-menu',
  templateUrl: './admin-menu.component.html',
  styleUrls: ['./admin-menu.component.css']
})

export class AdminMenuComponent implements OnInit 
 {

 submitted = false;

 menuForm: FormGroup;

 imageUrl: any = "";

  constructor(

   private toastr: ToastrService,
   public fb: FormBuilder,
    private router: Router,
    private ngZone: NgZone,
    private apiService: ApiService

  ) 
  { 
  	 this.mainForm();
  }

  ngOnInit() 
  {
  }

mainForm() 
{
    this.menuForm = this.fb.group({
     
      menutype: ['', [Validators.required]],
      foodname: ['', [Validators.required]],
      image: ['', [Validators.required]],
       quantity: ['', [Validators.required]],
		price: ['', [Validators.required]]
    })
  }


  uploadFile(event) {
    let reader = new FileReader(); // HTML5 FileReader API
    let file = event.target.files[0];
    if (event.target.files && event.target.files[0]) {
      reader.readAsDataURL(file);

      // When file uploads set it to file formcontrol
      reader.onload = () => {
        this.imageUrl = reader.result;
        this.menuForm.patchValue({
          file: reader.result
        });
       
      }
      // ChangeDetectorRef since file is loading outside the zone
      
    }
  }



onSubmit(form: FormGroup) 
   {
        
    this.submitted = true;
    if (!this.menuForm.valid) {
      return false;
    } else {
      this.apiService.createadminmenu(this.menuForm.value).subscribe(
        (res) => {
          console.log('Menus successfully added!')
 this.toastr.success('Title!', 'successfully added....!', {
  timeOut: 3000
});
          this.ngZone.run(() => this.router.navigateByUrl('/admin-menu'))
        }, (error) => {
          console.log(error);
        });
    }
  }

}
