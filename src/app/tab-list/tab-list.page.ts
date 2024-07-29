import { Component, OnInit } from '@angular/core';
import { ShoppingItemsService } from '../services/shopping-items.service';
import { AlertButtonType, alertMessage, alertType, ItemListType } from '../services/constants';

@Component({
  selector: 'app-tab-list',
  templateUrl: 'tab-list.page.html',
  styleUrls: ['tab-list.page.scss']
})
export class TabListPage implements OnInit {

  public items: ItemListType[] = [];
  public isCheck: boolean = false;
  
  constructor(
    public shoppingItemsService: ShoppingItemsService
  ) {
  }

  ngOnInit() {
    this.loadItems();
  }

  loadItems() {
    this.items = this.shoppingItemsService.getItems(); 
  }

  async removeItem(item: ItemListType) {
    const alert = document.createElement('ion-alert');
    alert.header = alertType.Delete;
    alert.message = alertMessage.Delete;
    alert.buttons = [
      {
        text: 'Borrar',
        role: 'delete',
        handler: () => {
          this.shoppingItemsService.removeItem(item);
        }
      },
      {
        text: 'Cancelar',
        role: 'cancel',
        handler: () => {
          alert.dismiss();
        }
      }
    ];
    document.body.appendChild(alert);
    await alert.present();
    this.loadItems();
  }

  toggleChecked(item: ItemListType) {
    this.shoppingItemsService.updateItem(item);
  }

}
