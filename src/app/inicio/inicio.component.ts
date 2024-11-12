// inicio.component.ts
import { Component } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatCardModule } from '@angular/material/card';
import { FooterComponent } from '../footer/footer.component';
import { HeaderComponent } from '../header/header.component';



@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [
    MatInputModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatCardModule,FooterComponent,HeaderComponent
  ],
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent {
  displayedColumns: string[] = ['position', 'name', 'model', 'year', 'actions'];
  dataSource = ELEMENT_DATA;

}

const ELEMENT_DATA = [
  { position: 1, name: 'Carro 1', model: 'Modelo 1', year: 2020 },
  { position: 2, name: 'Carro 2', model: 'Modelo 2', year: 2019 },
  { position: 3, name: 'Carro 3', model: 'Modelo 3', year: 2021 },
  // Agrega más datos según sea necesario
];