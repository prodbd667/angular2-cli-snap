import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ElSnapComponent } from './el-snap.component';

describe('ElSnapComponent', () => {
  let component: ElSnapComponent;
  let fixture: ComponentFixture<ElSnapComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ElSnapComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ElSnapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
