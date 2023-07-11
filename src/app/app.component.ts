import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'C - R - U - D';

  constructor(private router:Router){}

  listar(){
    this.router.navigate(['listar']);
  }

  agregar(): void{
    //localStorage.setItem('idAlbum', '0');
    this.router.navigate(['registrar/0']);
  }  
}
