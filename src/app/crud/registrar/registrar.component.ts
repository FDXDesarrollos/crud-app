import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Album } from 'src/app/modelo/album';
import { ServiceService } from 'src/app/service/service.service';


@Component({
  selector: 'app-registrar',
  templateUrl: './registrar.component.html',
  styleUrls: ['./registrar.component.css']
})
export class RegistrarComponent implements OnInit {
  modelAlbum = new Album();
  titulo!: string;

  constructor(private router: Router, private service: ServiceService) { }

  ngOnInit(): void {
    let id = localStorage.getItem('idAlbum');
    console.log('===> ' + id);

    if(Number(id) == 0){
      this.titulo = "Nuevo Album";
    }
    else{
      this.titulo = "Editar Album";
      this.service.getAlbumId(Number(id)).subscribe(data => { this.modelAlbum = data });
    }
  }

  registrar(album: Album): void {
    album.titulo = album.titulo.toUpperCase();
    album.interprete = album.interprete.toUpperCase();
    album.genero = album.genero.toUpperCase();
    
    console.log('===> ' + album.id );

    if(album.id == 0){
      this.service.agregar(album).subscribe(data => {
        console.log( data );
        alert('Información registrada');
        this.router.navigate(['listar']);
      });
    }
    else{
      this.service.actualizar(album).subscribe(data => { this.modelAlbum = data });
      alert('Información actualizada');
      this.router.navigate(['listar']);
    }
  }

}
