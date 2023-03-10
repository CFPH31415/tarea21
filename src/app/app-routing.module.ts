import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PermisosDingresoGuard } from './guards/permisos-dingreso.guard';
import { BreakingComponent } from './pages/breaking/breaking.component';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { MaterialComponent } from './pages/material/material.component';

const routes: Routes = [

  { path:'home', component:HomeComponent, canActivate:[PermisosDingresoGuard] },  
  { path:'login' , component:LoginComponent},
  { path:'material' , component:MaterialComponent},
  { path:'', redirectTo:'login', pathMatch:'full' },
  { path:'**', component:BreakingComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
