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
    this.resetProject();
  }

  getProjects(){
    this.projectsService.all()
    .subscribe((result:any)=>this.projects=result);
  }
  deleteProject(project){
    this.projectsService.delete(project.id)
    .subscribe((result)=>this.getProjects());
  }
  saveProject(project){
    if(project.id)
      this.updateProject(project);
    else
      this.createProject(project);
  }
  updateProject(project){
    this.projectsService.update(project)
    .subscribe((result)=>{this.getProjects(); this.resetProject()});
  }
  createProject(project){
    this.projectsService.create(project)
    .subscribe((result)=>{this.getProjects(); this.resetProject()});
  }
  resetProject(){
    const emptyProject:Project = {
      id: null,
      name: null,
      details: null,
      percentComplete: 0,
      approved: false
    }
    this.selectedProject=emptyProject;
  }
  cancel(){
   this.resetProject();
  }

}
