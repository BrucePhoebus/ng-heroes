import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavHeroComponent } from './nav-hero.component';

describe('NavHeroComponent', () => {
  let component: NavHeroComponent;
  let fixture: ComponentFixture<NavHeroComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavHeroComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
