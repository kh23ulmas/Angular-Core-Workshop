import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'angular-core-workshop-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  projects = [
    {
      id: 1,
      name: 'Done everything',
      status: 0
    },
    {
      id: 2,
      name: 'Go walk with Z',
      status: 0
    }
  ]
  selectedProject;

  selectProject(project){
    this.selectedProject = project;
  }

  cancel(){
    this.selectedProject = '';
  }
  constructor() { }

  ngOnInit() {
  }

}
