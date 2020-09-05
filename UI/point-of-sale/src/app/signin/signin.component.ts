import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  emailControl = new FormControl('', [
    Validators.required,
    // Validators.email,
  ]);
  passwordControl = new FormControl('', [
    Validators.required
  ]);

  constructor(private router: Router) { }

  ngOnInit(): void {

  }

  signin() {
    console.log(this.emailControl.value);
    console.log(this.passwordControl.value);
    this.router.navigateByUrl('sale-window');
  }

}
