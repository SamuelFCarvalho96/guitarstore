import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuariosService } from '../shared/usuarios.service';
import { ToastService } from 'src/app/core/shared/toast.service';

@ Component({
  selector: 'app-criar-conta',
  templateUrl: './criar-conta.page.html',
  styleUrls: ['./criar-conta.page.scss'],
})
export class CriarContaPage implements OnInit {
  formNovaConta: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private router: Router,
              private toast: ToastService,
              private usuarioService: UsuariosService,
              ) { }

  ngOnInit() {
    this .criarFormulario();
  }

  get nome() { return this .formNovaConta.get('nome'); }
  get email() { return this .formNovaConta.get('email'); }
  get senha() { return this .formNovaConta.get('senha'); }


  criarFormulario() {
    this .formNovaConta = this .formBuilder.group({
      nome: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      senha: ['', Validators.required]
    });
  }

  onSubmit() {
    if (this .formNovaConta.valid) {
      this .usuarioService.novaConta(this .formNovaConta.value)
        .then(() => {
          this .toast.show('Sua conta foi criada com sucesso.');
          this .router.navigate(['/']);
        })
        .catch(mensagem  => {
          this .toast.show(mensagem);
        });
    }
  }

}
