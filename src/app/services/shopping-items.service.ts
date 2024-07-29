import { Injectable } from '@angular/core';
import { alertButtons, AlertButtonType, alertMessage, alertType, ItemListType } from './constants';
import { AlertController } from '@ionic/angular/providers/alert-controller';
import { TranslationService } from './translation.service';

@Injectable({
  providedIn: 'root'
})
export class ShoppingItemsService {

  public items: ItemListType[] = [];
  public isEmpty: boolean = true;
  private _listSlide: boolean = false;

  constructor(
    public translationService: TranslationService
  ) { }

  set listSlide(value: boolean) {
    this._listSlide = value;
  }

  get listSlide(): boolean {
    return this._listSlide;
  }

  addItem(name: string) {
    this.items.push({ name: name.trim(), checked: false });
    this.isEmpty = false;
  }

  removeItem(item: ItemListType) {
    let index = this.items.findIndex(existingItem => existingItem.name.trim() === item.name.trim());
    if (index !== -1) {
      this.items.splice(index, 1);
      if (this.items.length === 0) {
        this.isEmpty = true;
      }
    }
  }

  removeAllItems() {
    this.items = [];
    this.isEmpty = true;
  }

  existsItem(name: string): boolean {
    return this.items.some(existingItem => existingItem.name === name.trim());
  }

  public async alert(header: keyof typeof alertType, message: keyof typeof alertMessage, buttons: AlertButtonType) {
    const alert = document.createElement('ion-alert');
    alert.header = this.translationService.getAlertType(header);
    alert.message = this.translationService.getMessage(message);
    alert.buttons = alertButtons[buttons];
    document.body.appendChild(alert);
    await alert.present();
  } 

  getItems(): ItemListType[] {
    return this.items;
  }

  updateItem(updatedItem: ItemListType) {
    const index = this.items.findIndex(item => item.name.trim() === updatedItem.name.trim());
    if (index !== -1) {
      this.items[index] = updatedItem;
    }
  }
  
}
