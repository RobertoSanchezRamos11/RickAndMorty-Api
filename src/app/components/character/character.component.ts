import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-character',
  templateUrl: './character.component.html',
  styleUrls: ['./character.component.css']
})
export class CharacterComponent implements OnInit {

  character: any;

  constructor(private apiService: ApiService,private route: ActivatedRoute){}

  ngOnInit(): void {
    this.obtenerId();
  }

  obtenerId(){
    const characterId = this.route.snapshot.params['id']

    this.apiService.getSingleCharacter(characterId).subscribe((dato: any) => {
      this.character = dato
    })

  }
}
