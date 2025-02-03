import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

interface Task {
  id: number;
  title: string;
  description: string;
  status: 'por_asignar' | 'en_curso' | 'completada' | 'verificada';
  date: Date;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  tasks: Task[] = [
    { id: 1, title: 'Diseñar UI', description: 'Crear mockups', status: 'por_asignar', date: new Date() },
    { id: 2, title: 'Desarrollar API', description: 'Implementar endpoints', status: 'en_curso', date: new Date() },
    { id: 3, title: 'Testing', description: 'Realizar pruebas', status: 'completada', date: new Date() },
    { id: 4, title: 'Deployment', description: 'Desplegar aplicación', status: 'verificada', date: new Date() },
  ];

  constructor(private router: Router) {}

  get totalTasks(): number {
    return this.tasks.length;
  }

  get completionRate(): number {
    const completed = this.tasks.filter(task => 
      task.status === 'completada' || task.status === 'verificada'
    ).length;
    return (completed / this.totalTasks) * 100;
  }

  getTasksByStatus(status: string): Task[] {
    return this.tasks.filter(task => task.status === status);
  }

  onLogout() {
    this.router.navigate(['/login']);
  }
} 