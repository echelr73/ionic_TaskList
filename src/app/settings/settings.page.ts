import { Component, OnInit } from '@angular/core';
import { ShoppingItemsService } from '../services/shopping-items.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {

  public listSlide: boolean = false;

  constructor(
    public shoppingItemsService: ShoppingItemsService
  ) { }

  toggleListSlide(event: any) {
    this.shoppingItemsService.listSlide = event.detail.checked;
  }

}
