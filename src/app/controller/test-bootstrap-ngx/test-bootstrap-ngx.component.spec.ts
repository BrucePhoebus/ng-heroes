import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TestBootstrapNgxComponent } from './test-bootstrap-ngx.component';

describe('TestBootstrapNgxComponent', () => {
  let component: TestBootstrapNgxComponent;
  let fixture: ComponentFixture<TestBootstrapNgxComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TestBootstrapNgxComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TestBootstrapNgxComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
