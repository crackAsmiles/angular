import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MainComponent } from './main/main.component';
import { NotfoundComponent } from './notfound/notfound.component';
import { LoginComponent } from './login/login.component';
import { Page1Component } from './main/page1/page1.component';
import { Page2Component } from './main/page2/page2.component';
import { Page3Component } from './main/page3/page3.component';

const routes: Routes = [
	{
		path: '',
		redirectTo: 'main',
		pathMatch: 'full'
	},
	{
		path: 'main',
		component: MainComponent,
		children: [
			{
				path: '',
				component: Page1Component
			},
			{
				path:'page2',
				component: Page2Component
			},
			{
				path: 'page3',
				component: Page3Component
			}
		]
	},
	{
		path: 'login',
		component: LoginComponent
	},
	{
		path: '**',
		component: NotfoundComponent
	}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
