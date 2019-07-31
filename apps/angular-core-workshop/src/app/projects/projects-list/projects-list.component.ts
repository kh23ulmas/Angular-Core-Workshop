import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Project } from '@workshop/core-data';

@Component({
  selector: 'angular-core-workshop-projects-list',
  templateUrl: './projects-list.component.html',
  styleUrls: ['./projects-list.component.css']
})
export class ProjectsListComponent implements OnInit {
  primaryColor = 'red'
  @Input() projects: Project[];
  @Output() selected = new EventEmitter();

  @Output() deleted = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

}
