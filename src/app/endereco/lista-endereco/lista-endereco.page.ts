import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { EnderecoService } from '../shared/endereco.service';
import { AlertService } from 'src/app/core/shared/alert.service';
import { ToastService } from 'src/app/core/shared/toast.service';
import { Router } from '@angular/router';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-lista-endereco',
  templateUrl: './lista-endereco.page.html',
  styleUrls: ['./lista-endereco.page.scss'],
})
export class ListaEnderecoPage implements OnInit {
  enderecos: Observable<any[]>;
  selecionarEndereco: boolean = false;

  constructor(private enderecoService: EnderecoService,
              private alert: AlertService,
              private toast: ToastService,
              private router: Router,
              private modalController: ModalController) { }

  ngOnInit() {
    this.enderecos = this.enderecoService.trazerTodosEnderecos();
  }

  getEnderecoText(endereco: any) {
    let enderecoText: '';
    enderecoText = endereco.logradouro;
    enderecoText += ', ' + endereco.numero;
    if (endereco.complemento) {
      enderecoText += ', ' + endereco.complemento;
    }
    enderecoText += ' - ' + endereco.bairro;
    enderecoText += ' - ' + endereco.cep;
    console.log();
    return enderecoText;
  }

  editar(key: string) {
    this.router.navigate(['enderecos/editar', key]);
  }

  remover(endereco: any) {
    this.alert.ConfirmacaoExclusao(endereco.logradouro + ', ' + endereco.numero, () => {
      this.enderecoService.remover(endereco.key)
      .then( () => {
        this.toast.show('Endereço removido com sucesso');
      });
    });
  }

  setEnderecoSelecionado(endereco: any) {
    if (this.selecionarEndereco) {
      const enderecoText = this.getEnderecoText(endereco);
      this.modalController.dismiss({ endereco: enderecoText});
    }
  }

}
