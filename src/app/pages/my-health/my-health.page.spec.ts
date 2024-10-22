import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MyHealthPage } from './my-health.page';

describe('MyHealthPage', () => {
  let component: MyHealthPage;
  let fixture: ComponentFixture<MyHealthPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(MyHealthPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
