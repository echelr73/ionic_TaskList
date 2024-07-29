import { Component } from '@angular/core';
import { ShoppingItemsService } from '../services/shopping-items.service';
import { AlertController } from '@ionic/angular';
import { alertButtons, AlertButtonType, alertMessage, alertType, ItemListType } from '../services/constants';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  public name: string = "";

  constructor(
    public shoppingItemsService: ShoppingItemsService,
    public translationService: TranslationService
  ) { }

  addItem() {
    if (!this.shoppingItemsService.existsItem(this.name)) {

      this.shoppingItemsService.addItem(this.name);
      this.shoppingItemsService.alert('success','success', 'Ok');
      this.name = "";
    }else{
      this.shoppingItemsService.alert('error','error', 'Ok');
    }
  }

}
