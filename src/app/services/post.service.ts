import { Injectable } from '@angular/core';
import { Post } from '../models/post.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class PostService {

  url = 'http://localhost:3000/postApi';
  // Posts:any;
  Posts =[
    { 'id': 1, 'title': "Premier post", 'contenu': 'détails premier post' },
    { 'id': 2, 'title': "Deuxième post", 'contenu': 'détails deuxième post'},
    { 'id': 3, 'title': "Troisième post", 'contenu': 'détails troisième post' },
    
  ];


  constructor(private http: HttpClient) {
    this.chargerListPost().subscribe((listPost) => {
      console.log(listPost);
    });

  }

  chargerListPost(): Observable<Post[]> {
    return this.http.get<Post[]>('http://localhost:3000/postApi');
  }

  getPost(): Observable<Post[]> {
    return this.http.get<Post[]>(this.url);
  }
  addpost(p: Post): Observable<Post[]> {
    return this.http.post<Post[]>(this.url, p);
  }
  getpostbyId(id: string): Observable<Post[]> {
    return this.http.get<Post[]>(this.url + id);
  }
  updatepost(p: Post): Observable<any> {
    return this.http.put<any>(this.url + p.id, p);
  }
  deletepost(id: number): Observable<any> {
    const url = `${this.url}/${id}`;
    return this.http.delete(url);
  }
}
