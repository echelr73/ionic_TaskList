import { Component } from '@angular/core';
import { ShoppingItemsService } from '../services/shopping-items.service';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-tabs',
  templateUrl: 'tabs.page.html',
  styleUrls: ['tabs.page.scss']
})
export class TabsPage {

  constructor(
    public shoppingItemsService: ShoppingItemsService,
    public translationService: TranslationService
  ) {}

}
