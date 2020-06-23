import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-reactive-forms',
  templateUrl: './reactive-forms.component.html',
  styleUrls: ['./reactive-forms.component.css']
})
export class ReactiveFormsComponent implements OnInit {

  constructor() { }
  /*
    Reactive form ele tem utilidade para campos avulsos sem 
    estar em um formulario. Ele te permite manipular o elemento
    html independente de um formulario, seja um input, ou um
    select por exemplo. Se faz necessario importar "ReactiveFormsModule"
    de '@angular/forms'; esse arquivo tambem tem o modulo "FormsModule",
    entao cuidado para nao se confundir. 
    Atributos:
    .valueChanges => {
      Um observable que eh executado quando acontece a mudanca de
      valores no elemento. Quando tem uma mudanca nos valores, ou
      seja quando ocorre um onChange, o observable passa a ser
      executado.
    }
    .pristine => {
      Booleano, true se o campo estiver com o valor padrao, false
      depois de alterado o valor padrao, uma vez alterado para false,
      o mesmo permenecera falso.
    }
    .touched => {
      Booleano, true se o elemento foi tocado, por tocado entenda uma
      interacao do tipo onfocus.
    }

    new FormControl('Valor inicial') => {
      voce pode instanciar essa classe sem parametros tambem, ficando assim:
      new FormControl(), porem caso tenha um parametro, esse sera valor inicial
      do elemento.
    }
  */
  public formControlBasico:FormControl = new FormControl();
  public formControlBasico$:Subscription = null;
  public resultadoBasico:string = "";
  /*
    FormGroup permite agrupar os formControl dando tambem uma
    estrutura para fazer tratamento dos dados. O FormGroup
    aceita como parametro um objeto e esse objeto deve conter
    FormControl. O Objetivo do formgroup eh montar um objeto
    com os dados dos elementos, entao o formgroup pega os
    valores do formcontrol e monta um objeto pronto dentro do
    atributo: .value. Uma vez que voce acesse esse atributo
    voce pega um objeto com os valores dos formControls devidamente
    estruturado, nesse exemplo abaixo quando acessarmos o .value,
    teremos a seguinte estrutura: 
        { "valor do input1", "valor do input2" }
  */
  public grupo:FormGroup = new FormGroup(
    {
      /*
        Aqui estamos criando os atributos, voce deve instanciar
        o FormGroup ou o FormControl
      */
      input1: new FormControl(),
      input2: new FormControl(),
      subatributo: new FormGroup({
        /*Voce pode colocar um formgroup dentro de outro. */
        input3: new FormControl(),
        input4: new FormControl('Exemplo de subatributo')
      })
    }  
  );

  public executarFormGroup(){
    console.clear();
    /* Aqui printa a estrutura do FormGroup */
    console.table(this.grupo);
    /*Aqui exibimos um objeto pronto com todos os valores. */
    console.log(this.grupo.value);
  }

  ngOnInit() {
    this.formControlBasico$ = this.formControlBasico.valueChanges.subscribe(
      valor_alterado => {
        console.clear();
        this.resultadoBasico = valor_alterado;       
        console.log(valor_alterado); 
      },
      erro => console.error(erro)      
    );
    
  }

  public exibirEstruturaFormControl(){
    console.clear();
    console.table(this.formControlBasico);
  }

}
