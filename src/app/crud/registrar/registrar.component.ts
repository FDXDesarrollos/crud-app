import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { ServiceService } from 'src/app/service/service.service';
import { Album } from 'src/app/modelo/album';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  modelAlbum = new Album();
  titulo!: string;

  constructor(private router: Router, 
              private service: ServiceService,
              private activateRoute: ActivatedRoute,
              private toastr: ToastrService) { }

  ngOnInit(): void {
    //let id = localStorage.getItem('idAlbum');
    let id = this.activateRoute.snapshot.params["id"];

    if(Number(id) == 0){
      this.titulo = "Nuevo Album";
    }
    else{
      this.titulo = "Editar Album";
      this.service.detalle(Number(id)).subscribe(data => { this.modelAlbum = data });
    }
  }

  registrar(album: Album): void {
    album.titulo = album.titulo.toUpperCase();
    album.interprete = album.interprete.toUpperCase();
    album.genero = album.genero.toUpperCase();

    if(album.id == 0){
      this.service.agrega(album).subscribe(data => {
        console.log( album );
        this.toastr.success('Información registrada','Exito !!!');
        this.router.navigate(['/']);
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error');
      });
    }
    else{
      this.service.actualiza(album).subscribe(data => { 
        this.modelAlbum = data 
        this.toastr.success('Información actualizada','Exito !!!');
        this.router.navigate(['/']);
      },
      err => {
        console.log( err );
        this.toastr.error(err.error.mensaje, 'Error');
      });      
    }
  }

}
