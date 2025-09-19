import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-pagina-principal',
  standalone: true,
  imports: [ReactiveFormsModule, CommonModule],
  templateUrl: './pagina-principal.component.html',
  styleUrls: ['./pagina-principal.component.scss'],
})
export class PaginaPrincipalComponent {
  paginaPrincipalForm: FormGroup | any;

  constructor(private fb: FormBuilder) {
    this.paginaPrincipalForm = this.fb.group({
      nomePaciente: ['', Validators.required],
      sexo: ['', Validators.required],
      datanascimento: ['', Validators.required],
      telefoneFixo: ['', [Validators.required, Validators.pattern(/^\(\d{2}\)\s?\d{4,5}-\d{4}$/)]],
      celular: ['', [Validators.required, Validators.pattern(/^\(\d{2}\)\s?\d{4,5}-\d{4}$/)]],
      endereco: ['', Validators.required],
      numero: ['', Validators.required],
      bairro: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit() {
    if (this.paginaPrincipalForm.valid) {
      console.log(this.paginaPrincipalForm.value);
      alert('Formulário enviado com sucesso!');
    } else {
      alert('Por favor, preencha todos os campos obrigatórios.');
    }
  }
}
