import { Component, OnInit } from '@angular/core';
import { ManagementService } from 'src/app/services/management.service';
import { NgForm } from '@angular/forms';
import { Management } from '../../models/management';
import swal from 'sweetalert2';



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


  editManagement(management: Management) {
    this.managementService.selectedManagement = management
  }


  deleteManagement(idManagement: number) {
    swal({
      title: '¿ Está seguro(a) ?',
      text: "No podrá deshacer los cambios una vez hecho esto.",
      type: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#1F9BCF',
      cancelButtonColor: '#d9534f',
      confirmButtonText: 'Si, Borrar definitivamente'
    }).then((result) => {
      if (result.value) {
        this.managementService.deleteManagement(idManagement).
          subscribe(data => {
            this.getMessage(data)
            this.getManagements()
          })
      }
    })


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
