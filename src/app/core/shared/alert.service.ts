import { Injectable } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertService {

  constructor(private alertController: AlertController) { }

  async ConfirmacaoExclusao(nome: string, actionRemove:() => void) {
    const alert = await this.alertController.create({
      header: 'Remover o item',
      message: `Deseja mesmo remover o item: ${nome}?`,
      buttons:[
        {
          text: 'Cancelar'
        },
        {
          text: 'Remover',
          handler: () => {
            actionRemove ();
          }
        }
      ]
    });
    alert.present();
  }
}
