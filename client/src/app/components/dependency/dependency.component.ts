import { Component, OnInit } from '@angular/core';
import {DependencyService} from 'src/app/services/dependency.service'
import { NgForm } from '@angular/forms';
import { Dependency } from '../../models/dependency';

@Component({
  selector: 'app-dependency',
  templateUrl: './dependency.component.html',
  styleUrls: ['./dependency.component.css']
})

export class DependencyComponent implements OnInit {

  dependencies = []
  managements = []
  p: number = 1;
  totalItems: number = 0
  message: string
  showMessage = false

  constructor(private dependencyService: DependencyService) { }

  ngOnInit() {
    this.getDependencies()
    this.getManagements()
  }


  public getManagements() {
    this.dependencyService.getManagements()
    .subscribe(data => this.managements = data)
  }

  public getDependencies() {
    this.dependencyService.getDependencies()
    .subscribe((data) => {
      this.dependencies = data
      this.totalItems = this.dependencies.length
    })
  }

  public saveDependency(form: NgForm){


    if (form.value.description == '') {
      this.message = 'Debe llenar los campos del formulario de Departamento/Obra'
      this.showMessage = true
      return false
    }
    if (form.value.idDependency) {
      this.dependencyService.putDependency(form.value)
      .subscribe(data => {
       this.getMessage(data)
       this.resetForm(form)
       this.getDependencies()
      })
    }
    else {
      this.dependencyService.postDependency(form.value)
      .subscribe(data => {
        this.getMessage(data)
        this.resetForm(form)
        this.getDependencies()
      })
    }
  }

  public editDependency(dependency: Dependency) {
    this.dependencyService.selectedDependency = dependency
  }

  public resetForm(form?: NgForm) {
    if (form) {
      form.reset()
    }
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
