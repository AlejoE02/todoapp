import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LabsComponent } from './pages/labs/labs.component';
import { SplashComponent } from "./pages/splash/splash.component";
import { HomeHaruPop } from "./pages/home-pop/home.component";

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'labs',
    component: LabsComponent
  },
  {
    path: 'splash',
    component: SplashComponent
  },
  {
    path: 'harupop',
    component: HomeHaruPop
  },
];
