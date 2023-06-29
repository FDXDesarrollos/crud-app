import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ServiceService } from './../../service/service.service';
import { Album } from '../../modelo/album';

@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor( private service: ServiceService, 
               private router: Router) { }

  albums:Album[] = [];

  ngOnInit(): void {
    this.service.listar().subscribe(data => { 
      console.log( data );
      this.albums = data 
    });
  }

  editar(id: number): void{
    localStorage.setItem('idAlbum', id.toString());
    this.router.navigate(['registrar']);
  }

  eliminar(album: Album): void{
    if(confirm("Are you sure to delete ???")) {
      this.service.eliminar(album.id).subscribe(data => {
        this.albums = this.albums.filter(p => p!==album);
        alert('Información eliminada...');
      });
    }
  }


}
