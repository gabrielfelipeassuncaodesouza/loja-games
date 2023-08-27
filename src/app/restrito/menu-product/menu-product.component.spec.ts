import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuProductComponent } from './menu-product.component';

describe('MenuProductComponent', () => {
  let component: MenuProductComponent;
  let fixture: ComponentFixture<MenuProductComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MenuProductComponent]
    });
    fixture = TestBed.createComponent(MenuProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
