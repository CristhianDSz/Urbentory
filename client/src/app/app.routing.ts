import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from "@angular/core";
import { DependencyComponent } from './components/dependency/dependency.component';
import { ManagementComponent } from './components/management/management.component';

const routes: Routes = [

    { path: 'dependencies', component: DependencyComponent },
    { path: 'managements', component: ManagementComponent },
    { path: '', redirectTo: '/managements', pathMatch: 'full' },

];

export const routingModule: ModuleWithProviders = RouterModule.forRoot(routes);