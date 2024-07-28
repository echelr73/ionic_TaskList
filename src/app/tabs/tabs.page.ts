import { Component } from '@angular/core';
import { ShoppingItemsService } from '../services/shopping-items.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    public shoppingItemsService: ShoppingItemsService
  ) {}

}
