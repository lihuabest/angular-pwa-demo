import {NgModule} from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlexComponent } from './components/flex/flex.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
    {
        path: '',
        component: IndexComponent,
        pathMatch: 'full'
    },
    {
        path: 'flex',
        component: FlexComponent,
        pathMatch: 'full'
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRouteModule {}
