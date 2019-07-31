import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '@workshop/core-data';

@Component({
  selector: 'angular-core-workshop-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.css']
})
export class ProjectDetailComponent implements OnInit {

  @Input() selectedProject: Project;
  @Output() saved = new EventEmitter;
  @Output() canselled = new EventEmitter;
  
  constructor() { }

  ngOnInit() {
  }

}
