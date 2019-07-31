import {Injectable} from '@angular/core';
import { Project } from './project'

@Injectable({
    providedIn: 'root'
})

export class ProjectsService {
    private projects : Project[] = [
        {
          id: '1',
          name: 'Done everything',
          details:'You should done all of things',
          percentComplete:20,
          approved:false
        },
        {
          id: '2',
          name: 'Go walk with Z',
          details:'Everyday you should go walk',
          percentComplete:40,
          approved:false
        }
      ]
    constructor(){}
      all(): Project[]{
          return this.projects;
      }
}