import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { PrincipalComponent } from "./principal/principal.component";


const routes: Routes = [
    {
        path: '',
        component: PrincipalComponent
    }
]


@NgModule({

})


export class DashboardRouting {}