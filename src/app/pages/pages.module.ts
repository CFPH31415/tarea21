import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BreakingComponent } from './breaking/breaking.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MaterialComponent } from './material/material.component';
import {} from '@angular/material/button';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatButtonModule} from '@angular/material/button';





@NgModule({
  declarations: [
    HomeComponent,
    LoginComponent,
    BreakingComponent,
    MaterialComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    MatProgressBarModule,
    MatIconModule,
    MatDividerModule,
    MatButtonModule
  ],
  exports: [
    HomeComponent,
    LoginComponent,
    MaterialComponent
  ]
})
export class PagesModule { }
