import { Routes } 		from "@angular/router";

import { HomeComponent }  from "./pages/home/home.component";
import { ContactComponent }  from "./pages/contact/contact.component";
import { DeveloperComponent }  from "./pages/developer/developer.component";
import { MusicianComponent }	from "./pages/musician/musician.component";

export const routes: Routes = [
	{
		path: 'contact', component: ContactComponent
	},
	{
		path: 'developer', component: DeveloperComponent
	},
	{
		path: 'musician', component: MusicianComponent,
	},
	{
		path: '', component: HomeComponent
	},
	{
		path: '**', component: HomeComponent
	}
];
