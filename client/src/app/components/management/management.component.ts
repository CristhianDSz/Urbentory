import { Component, OnInit } from '@angular/core';
import { ManagementService } from 'src/app/services/management.service';
import { NgForm } from '@angular/forms';
import { Management } from '../../models/management';


@Component({
  selector: 'app-management',
  templateUrl: './management.component.html',
  styleUrls: ['./management.component.css']
})
export class ManagementComponent implements OnInit {
  title = 'app';
  managements = []
  p: number = 1;
  totalItems: number = 0
  showMessage = false
  message:string


  constructor(private managementService: ManagementService) {

  }

  ngOnInit() {
    this.getManagements()
   

  }

  getManagements() {
    this.managementService.getMananagements().
      subscribe(data => {
        this.managements = data
        this.totalItems = this.managements.length

      })
  }

  resetForm(form?: NgForm) {
    if (form) {
      form.reset()
      this.managementService.selectedManagement = new Management()
      this.getManagements()
    }
  }

 

  addManagement(form: NgForm) {
    if (form.value.description == '') {
      this.message = 'Debe llenar los campos del formulario de Gerencia'
      this.showMessage = true
      return false
    }

    if (form.value.idManagement) {
      this.managementService.putManagement(form.value).
        subscribe(data => {
          this.getMessage(data)
          this.resetForm(form)
          this.getManagements()
        })
    }

    else {
      this.managementService.postManagement(form.value).
        subscribe(data => {
          this.getMessage(data)
          this.resetForm(form)
          this.getManagements()
        })

    }
  }



  deleteManagement(idManagement: number) {
    if (confirm('¿Está seguro que desea eliminar la gerencia?')) {
      
      this.managementService.deleteManagement(idManagement).
        subscribe(data => {
          this.getMessage(data)
          this.getManagements()
        })
     
    }
   
  }


  editManagement(management: Management) {
    this.managementService.selectedManagement = management


  }

  getMessage(data?) {
    
    if (data) {
      this.showMessage = true
      this.message = data.message

      setTimeout(() => {
        this.showMessage = false
      }, 3000);
      
  }
}
  
}
