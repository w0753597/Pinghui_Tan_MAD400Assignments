import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UrlErrorComponent } from './url-error.component';

describe('UrlErrorComponent', () => {
  let component: UrlErrorComponent;
  let fixture: ComponentFixture<UrlErrorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UrlErrorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UrlErrorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
