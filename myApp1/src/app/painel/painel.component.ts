import { Component, OnInit } from '@angular/core';
import { Frase } from '../shared/frase.model';
import { Frases } from './frases-mock';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {

  public frase: Frase[] = Frases
  public instrucao: string = 'Traduza a frase:'

  public atualizaResposta(event: string): void {
    console.log(event)
  }

  constructor() { }
  ngOnInit() { }
}
