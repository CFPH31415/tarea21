import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'proyecto21';
  usuarioAdmin = [{ usuario: 'Carlos', password: 'Portillo' }];
  constructor() { }

  ngOnInit(): void {
    localStorage.setItem('usuarioAdmini', JSON.stringify(this.usuarioAdmin));
  }
}
