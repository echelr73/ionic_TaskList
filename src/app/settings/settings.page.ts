import { Component, OnInit } from '@angular/core';
import { ShoppingItemsService } from '../services/shopping-items.service';
import { TranslationService } from '../services/translation.service';

@Component({
  selector: 'app-settings',
  templateUrl: './settings.page.html',
  styleUrls: ['./settings.page.scss'],
})
export class SettingsPage {

  public listSlide: boolean = false;

  constructor(
    public shoppingItemsService: ShoppingItemsService,
    public translationService: TranslationService
  ) { }

  toggleListSlide(event: any) {
    this.shoppingItemsService.listSlide = event.detail.checked;
  }

  toggleEnglishLanguage(event: any){
    this.translationService.isEnglish = event.detail.checked;
  }

}
