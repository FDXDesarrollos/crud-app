import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Album } from '../modelo/album';

const base_url = 'http://localhost:9090/api/album';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {
  //album:Album[] = [];

  constructor(private http: HttpClient) { }

  listar(){
    return this.http.get<Album[]>(base_url + '/listar');
  }

  agregar(album:Album){
    return this.http.post<Album>(base_url + '/agregar', album);
  }

  actualizar(album:Album){
    return this.http.put<Album>(base_url + '/actualizar/' + album.id, album);
  }

  getAlbumId(id:number){
    return this.http.get<Album>(base_url + '/' + id)
  }

  eliminar(id:number){
    return this.http.delete<Album>(base_url + '/eliminar/' + id);
  }

}
