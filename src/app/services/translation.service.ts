import { Injectable } from '@angular/core';
import { alertButtonsText, alertMessage, alertType } from './constants';

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  public isEnglish: boolean = false;

  private translations = {
    es: {
      options: 'Opciones',
      slidingList: 'Lista deslizante',
      slidingListDescription: 'Cambia la vista de la lista',
      english: 'Inglés',
      englishDescription: 'Cambia el lenguaje a Inglés',
      addItem: 'Añadir item',
      shoppingList: 'Lista de compra',
      shoppingListSlide: 'Lista de compra slide',
      myShoppingList: 'Mi lista de compras',
      noItems: 'No hay items'
    },
    en: {
      options: 'Options',
      slidingList: 'Sliding List',
      slidingListDescription: 'Change the list view',
      english: 'English',
      englishDescription: 'Switch the language to English',
      addItem: 'Add item',
      shoppingList: 'Shopping list',
      shoppingListSlide: 'Shopping list sliding',
      myShoppingList: 'My shopping list',
      noItems: 'No items'
    }
  };

  getTranslation(key: string): string {
    const language = this.isEnglish ? 'en' : 'es';
    return this.translations[language][key];
  }

  getAlertType(key: keyof typeof alertType): string {
    const language = this.isEnglish ? 'en' : 'es';
    return alertType[key][language];
  }

  getMessage(key: keyof typeof alertMessage): string {
    const language = this.isEnglish ? 'en' : 'es';
    return alertMessage[key][language];
  }

  getButtons(key: keyof typeof alertButtonsText): string {
    const language = this.isEnglish ? 'en' : 'es';
    return alertButtonsText[key][language];
  }

  toggleLanguage(isEnglish: boolean) {
    this.isEnglish = isEnglish;
  }
}
