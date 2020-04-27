import { Component, OnInit, TemplateRef, ViewChild, ElementRef } from '@angular/core';
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
  @ViewChild("user") usernameField: ElementRef;
  public username: string;
  public password: string;
  error: string;
  modalRef: BsModalRef;

  constructor(private es: EmployeeService, public router: Router, private modalService: BsModalService) { }

  ngOnInit(): void {
    this.emp = this.es.getLogged();
    if (!this.emp) {
      this.es.checkLogin().subscribe(resp => {
        this.emp = resp;
        if (!this.emp) this.router.navigate(['/']);
      });
    }
  }

  openModal(template: TemplateRef<any>) {
    this.modalRef = this.modalService.show(template);
    this.modalService.onShown.subscribe(resp => {
      this.usernameField.nativeElement.focus();
    });
  }

  login(): void {
    this.es.login(this.username, this.password).subscribe(
      resp => {
        this.emp = this.es.getLogged();
        this.modalRef.hide();
        this.router.navigate(['/forms']);
      },
      error => {
        this.error = "Invalid login credentials!";
      }
    );
  }

  logout(): void {
    this.es.logout().subscribe(resp => {
      this.emp = resp;
      this.router.navigate(['/']);
    });
  }

}
