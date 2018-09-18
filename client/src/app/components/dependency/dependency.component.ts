import { Component, OnInit } from '@angular/core';
import {DependencyService} from 'src/app/services/dependency.service'

@Component({
  selector: 'app-dependency',
  templateUrl: './dependency.component.html',
  styleUrls: ['./dependency.component.css']
})

export class DependencyComponent implements OnInit {

  dependencies = []
  p: number = 1;
  totalItems: number = 0

  constructor(private dependencyService: DependencyService) { }

  ngOnInit() {
    this.getDependencies()
  }

  public getDependencies() {
    this.dependencyService.getDependencies()
    .subscribe((data) => {
      this.dependencies = data
      this.totalItems = this.dependencies.length
    })
  }

}
