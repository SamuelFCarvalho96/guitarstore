import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { UsuariosService } from '../shared/usuarios.service';
import { ToastService } from 'src/app/core/shared/toast.service';

@Component({
  selector: 'app-esqueci-senha',
  templateUrl: './esqueci-senha.page.html',
  styleUrls: ['./esqueci-senha.page.scss'],
})
export class EsqueciSenhaPage implements OnInit {
formEsqueciMinhaSenha: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private usuariosService: UsuariosService,
              private toast: ToastService) { }

  ngOnInit() {
    this.criarFormulario();
  }

  get email() { return this.formEsqueciMinhaSenha.get('email'); }

  criarFormulario() {
    this.formEsqueciMinhaSenha = this.formBuilder.group({
     email: ['', [Validators.required, Validators.email]]
    });
  }

  onSubmit() {
    if (this.formEsqueciMinhaSenha.valid) {
      this.usuariosService.enviarEmailResetarSenha(this.formEsqueciMinhaSenha.value.email)
        .then(() => {
          this.toast.show('E-mail enviado,verificar na sua caixa de mensagens');
        })
        .catch((mensagem: string) => {
          this.toast.show(mensagem);
        });
    }
  }





}
