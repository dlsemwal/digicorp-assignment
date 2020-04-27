import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormsModule, NgForm } from '@angular/forms';
// import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-add-edit-leave',
  templateUrl: './add-edit-leave.component.html',
  styleUrls: ['./add-edit-leave.component.scss']
})
export class AddEditLeaveComponent implements OnInit {

  image = '../../../assets/image/phone.jpg';
  contact: any = {};
  id: any;

  constructor(private route: ActivatedRoute,
     private router: Router,
      // private contactService: ApiService
      ) {
    route.params.subscribe(params => {
      if (params.id) {
        // contactService.getContactById(params.id).subscribe((data: any) => {
        //   this.contact = data;
        // });
        this.id = params.id;
        // this.contact = contactService.getContactById(params.id);
      }
    });
  }

  submitForm(userForm, id, contact) {
    // this.contactService.updateContact(id, contact).subscribe((result) => {
    //   console.log(result);
    // }, (err) => {
    //   console.log(err);
    // });
    if(id){
      // this.contact = this.contactService.updateContact(id, contact);
      alert("Contact Updated Successfuly");
      this.router.navigate(['//view-contact']);
     //this.contact.reset();
    }
    else{
      // this.contact = this.contactService.savaContact(contact);
      console.log(contact);
      alert("Contact Save Successfuly");
      this.router.navigate(['//view-contact']);
      //this.contact.reset();
    }
    
  }
 
  ngOnInit() {
  }

}


