import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

import { ServiceService } from './../../service/service.service';
import { Album } from '../../modelo/album';


@Component({
  selector: 'app-listar',
  templateUrl: './listar.component.html',
  styleUrls: ['./listar.component.css']
})
export class ListarComponent implements OnInit {

  constructor( private service: ServiceService, 
               private toastr: ToastrService) { }

  albums:Album[] = [];

  ngOnInit(): void {
    this.listar();
  }

  listar(): void {
    this.service.lista().subscribe(data => { 
      this.albums = data 
    },
    err => {
      this.toastr.error(err.error.mensaje, 'Error');
    });    
  }

  eliminar(album: Album): void{
    if(confirm("Are you sure to delete ???")) {
      this.service.elimina(album.id).subscribe(data => {
        this.albums = this.albums.filter(p => p!==album);
        this.toastr.success('Información eliminada','Exito !!!');
      },
      err => {
        this.toastr.error(err.error.mensaje, 'Error');
      });      
    }
  }


}
