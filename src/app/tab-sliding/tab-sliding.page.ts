import { Component, OnInit } from '@angular/core';
import { ShoppingItemsService } from '../services/shopping-items.service';
import { alertMessage, alertType, ItemListType } from '../services/constants';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-tab-sliding',
  templateUrl: './tab-sliding.page.html',
  styleUrls: ['./tab-sliding.page.scss'],
})
export class TabSlidingPage implements OnInit {

  public items: ItemListType[] = [];
  public isCheck: boolean = false;

  constructor(
    public shoppingItemsService: ShoppingItemsService,
    public translationService: TranslationService
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
    alert.header = this.translationService.getAlertType('delete');
    alert.message = this.translationService.getMessage('delete');
    alert.buttons = [
      {
        text: this.translationService.getButtons("deleteButton"),
        role: 'delete',
        handler: () => {
          this.shoppingItemsService.removeItem(item);
        }
      },
      {
        text: this.translationService.getButtons("cancelButton"),
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
    this.shoppingItemsService.updateItem(item);
  }

}
