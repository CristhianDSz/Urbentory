import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule} from '@angular/common/http';
import { ManagementService } from 'src/app/services/management.service';
import { AppComponent } from './app.component';
import { ManagementComponent } from './components/management/management.component';
import {FormsModule} from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { NavegationComponent } from './components/navegation/navegation.component';
import { SweetAlert2Module } from '@toverux/ngx-sweetalert2';


@NgModule({
  declarations: [
    AppComponent,
    ManagementComponent,
    NavegationComponent,
   
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    NgxPaginationModule,
    SweetAlert2Module.forRoot()

  
  ],
  providers: [ManagementService],
  bootstrap: [AppComponent]
})
export class AppModule { }
