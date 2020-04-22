import { Component, OnInit, TemplateRef } from '@angular/core';
import { EmployeeService } from '../services/employee.service';
import { Employee } from '../employee';
import { Router } from '@angular/router';
import { BsModalService, BsModalRef } from 'ngx-bootstrap/modal';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  emp: Employee = null;
  modalRef: BsModalRef;

  constructor(es: EmployeeService, public router: Router, private modalService: BsModalService) { }

  ngOnInit(): void {
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
  }

}
