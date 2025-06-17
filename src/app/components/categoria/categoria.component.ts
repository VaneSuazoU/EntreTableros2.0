import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Location } from '@angular/common';


@Component({
  selector: 'app-categoria',
  templateUrl: './categoria.component.html',
  styleUrls: ['./categoria.component.css'],
  imports: [CommonModule]
})
export class CategoriaComponent implements OnInit {
  categoria: string = '';
  juegos: any[] = [];

  constructor(private route: ActivatedRoute, private http: HttpClient, private location: Location) {}

  volver(): void {
  this.location.back();
}

  ngOnInit(): void {
    this.categoria = this.route.snapshot.paramMap.get('cat') || '';

    this.http.get<any>('/games/games.json').subscribe(data => {
      if (data[this.categoria]) {
        this.juegos = data[this.categoria];
      } else {
        this.juegos = [];
      }
    });
  }
}
