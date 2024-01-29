import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-Listar',
  templateUrl: './Listar.component.html',
  styleUrls: ['./Listar.component.css']
})
export class ListarComponent implements OnInit {

  characters : any[] = []
  searchTerm = ''
  selectedSpecies   = '';


  constructor(private apiService: ApiService, private router: Router) { }

  ngOnInit() {
    this.getPosts();
  }

  getPosts() {
    this.apiService.getDatos().subscribe((dato:any) => {
      this.characters = dato.results
    })
  }

  filterCharacters() {
    return this.characters.filter(post =>
      post.name.toLowerCase().includes(this.searchTerm.toLowerCase())  &&
      (this.selectedSpecies === '' || post.species.toLowerCase() === this.selectedSpecies.toLowerCase())
    );
  }

  obtenerCharacter(id:number){
    this.router.navigate(['character/',id])
  }

}
