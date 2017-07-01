import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTopicComponent } from './select-topic.component';

describe('SelectTopicComponent', () => {
  let component: SelectTopicComponent;
  let fixture: ComponentFixture<SelectTopicComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectTopicComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTopicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
