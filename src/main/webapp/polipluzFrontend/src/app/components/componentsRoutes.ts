import { Routes } from "@angular/router";
import { HomeComponent } from "./home/home.component";
import { MapsComponent } from "./maps/maps.component";

export const componentRoutes: Routes = [
    {
        path: 'maps',
        component: MapsComponent
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
];
  