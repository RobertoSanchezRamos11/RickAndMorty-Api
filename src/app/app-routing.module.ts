import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarComponent } from './components/Listar/Listar.component';
import { CharacterComponent } from './components/character/character.component';

const routes: Routes = [
  {path: '', component: ListarComponent},
  {path: 'character/:id', component: CharacterComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
