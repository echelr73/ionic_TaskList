import { ComponentFixture, TestBed } from '@angular/core/testing';
import { TabSlidingPage } from './tab-sliding.page';

describe('TabSlidingPage', () => {
  let component: TabSlidingPage;
  let fixture: ComponentFixture<TabSlidingPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(TabSlidingPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
