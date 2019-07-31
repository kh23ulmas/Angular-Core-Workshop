import {Injectable} from '@angular/core';
import { Project } from './project'
import { HttpClient } from '@angular/common/http';

const BASE_URL = 'http://localhost:3000/'

@Injectable({
    providedIn: 'root'
})

export class ProjectsService {
    model = 'projects'

    constructor(private httpClient: HttpClient){}
    getUrl(){
        return `${BASE_URL}${this.model}`;
    }  

    getUrlForID(id){
        return `${this.getUrl()}/${id}`
    }
    all(){
          return this.httpClient.get(this.getUrl());
      }
    create(project){
        return this.httpClient.post(this.getUrl(), project);
    }
    
    delete(projectId){
        return this.httpClient.delete(this.getUrlForID(projectId));
    }
    update(project){
        return this.httpClient.patch(this.getUrlForID(project.id), project);
    }
  
}