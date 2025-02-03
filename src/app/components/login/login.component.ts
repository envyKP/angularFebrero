import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  usuario: string = '';
  password: string = '';

  constructor(private router: Router) {}

  onSubmit() {
    // Aquí puedes agregar la lógica de autenticación
    console.log('Usuario:', this.usuario);
    console.log('Contraseña:', this.password);
    
    // Navegar al dashboard después del login
    this.router.navigate(['/dashboard']);
  }
} 