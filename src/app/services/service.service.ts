import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  constructor(private http:HttpClient) { }

  getRecp(){

    return this.http.get('https://dummyjson.com/recipes')
  }

  getSinglRecp(id:any){

    return this.http.get(`https://dummyjson.com/recipes/${id}`)
  }
}
