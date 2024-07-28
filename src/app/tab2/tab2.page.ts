import { Component } from '@angular/core';
import { ShoppingItemsService } from '../services/shopping-items.service';
import { AlertController } from '@ionic/angular';
import { alertButtons, AlertButtonType, alertMessage, alertType, ItemListType } from '../services/constants';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public name: string = "";

  constructor(
    public shoppingItemsService: ShoppingItemsService,
  ) { }

  addItem() {
    if (!this.shoppingItemsService.existsItem(this.name)) {

      this.shoppingItemsService.addItem(this.name);
      this.shoppingItemsService.alert(alertType.Success, alertMessage.Success, 'Ok');
      console.log(this.shoppingItemsService.items);
      this.name = "";
    }else{
      this.shoppingItemsService.alert(alertType.Error, alertMessage.Error, 'Ok');
    }
  }

}
