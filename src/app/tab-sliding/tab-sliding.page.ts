import { Component, OnInit } from '@angular/core';
import { ShoppingItemsService } from '../services/shopping-items.service';
import { alertMessage, alertType, ItemListType } from '../services/constants';

@Component({
  selector: 'app-tab-sliding',
  templateUrl: './tab-sliding.page.html',
  styleUrls: ['./tab-sliding.page.scss'],
})
export class TabSlidingPage implements OnInit {

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
    // Asegúrate de que este método devuelva una lista de ítems con una propiedad 'checked'
    this.items = this.shoppingItemsService.getItems(); 
  }

  async removeItem(item: ItemListType) {
    const alert = document.createElement('ion-alert');
    alert.header = alertType.Delete;
    alert.message = alertMessage.Delete;
    alert.buttons = [
      {
        text: 'Delete',
        role: 'delete',
        handler: () => {
          this.shoppingItemsService.removeItem(item);
        }
      },
      {
        text: 'Cancel',
        role: 'cancel',
        handler: () => {
          alert.dismiss();
        }
      }
    ];
    document.body.appendChild(alert);
    await alert.present();
  }

  toggleChecked(item: ItemListType) {
    // Aquí puedes manejar el cambio del estado checked si es necesario
    this.shoppingItemsService.updateItem(item); // Asegúrate de tener un método para actualizar el estado del ítem
  }

}
