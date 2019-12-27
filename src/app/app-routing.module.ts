import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';

import { HomeComponent } from "./Pages/home/home.component"
import { NoContentComponent } from './Pages/no-content/no-content.component';

const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent,
        data: { 
            title: 'Home'
        }
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full',
    },
    {
        path: '**',
        component: NoContentComponent
    }
];

@NgModule({
    imports: [ 
        RouterModule.forRoot(routes, {
            enableTracing: true
        })
    ],
    exports: [RouterModule]
})

export class AppRoutingModule{}