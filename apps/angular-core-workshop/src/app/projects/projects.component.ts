import { Component, OnInit } from '@angular/core';
import {ProjectsService, Project} from '@workshop/core-data'

@Component({
  selector: 'angular-core-workshop-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  primaryColor = 'red';
  projects: Project[] ;
  selectedProject: Project;

  selectProject(project){
    this.selectedProject = project;
  }
  
  constructor( private projectsService: ProjectsService ) { }

  ngOnInit() {
    this.getProjects();
  }

  getProjects(){
    this.projects = this.projectsService.all();
  }
  cancel(){
   this.selectProject(null);
  }

}
