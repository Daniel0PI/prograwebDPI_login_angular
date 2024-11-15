import { Component,OnInit } from '@angular/core';
import { AlumnosService } from '../alumnos.service';
import { User } from '../user.model';
import { CommonModule } from '@angular/common';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';

@Component({
  selector: 'app-apis',
  standalone: true,
  imports: [CommonModule,FooterComponent,HeaderComponent],
  templateUrl: './apis.component.html',
  styleUrl: './apis.component.css'
})



export class ApisComponent implements OnInit {
  datos: User[] = [];

  constructor(private servicio: AlumnosService) { }

  ngOnInit(): void {
    // Llamada al método getDatos para obtener datos
    this.servicio.getDatos().subscribe(
      (response: User[]) => {
        this.datos = response;
        console.log('Datos obtenidos:', this.datos);
      },
      (error) => {
        console.error('Error al obtener datos:', error);
      }
    );
  }
}
