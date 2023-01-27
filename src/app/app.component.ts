import { Component } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'login-testing';

  loginValid = false;

  constructor(private fb: FormBuilder) {}

  formLogin = this.fb.group({
    usuario: ['', [Validators.required, Validators.minLength(5)]],
    password: ['', [Validators.required, Validators.minLength(4)]],
  });

  get form() {
    return this.formLogin.controls;
  }

  campoNoValido(campo: string) {
    return (
      this.formLogin.get(campo)?.invalid && this.formLogin.get(campo)?.touched
    );
  }

  enviarFormulario() {
    if (this.formLogin.valid) {
      this.loginValid = true;
    }
  }
}
