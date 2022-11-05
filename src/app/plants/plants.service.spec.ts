import { AppComponent } from './../app.component';
import { PlantsComponent } from './plants.component';
import { HttpClientModule } from '@angular/common/http';
/* tslint:disable:no-unused-variable */
import { faker } from '@faker-js/faker';
import { TestBed, async, inject, ComponentFixture } from '@angular/core/testing';
import { PlantsService } from './plants.service';
import { RouterTestingModule } from '@angular/router/testing';
import { Plants } from './plants';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';

describe('Service: Plants', () => {
  let fixture: ComponentFixture<PlantsComponent>;
  let component: PlantsComponent;
  let debug: DebugElement;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientModule,HttpClientModule,RouterTestingModule],
      declarations: [AppComponent,PlantsComponent],
      providers: [PlantsService]
    }) .compileComponents();

  });
  beforeEach(()=>{
    fixture = TestBed.createComponent(PlantsComponent)
    component = fixture.componentInstance;

    for (let i = 0; i < 3; i++){
      const plant = new Plants(
        faker.datatype.number(),
        faker.lorem.text(),
        faker.lorem.text(),
        faker.datatype.number(),
        faker.lorem.text(),
        faker.lorem.text(),
        faker.lorem.word()
      );
      component.plants.push(plant)
    }

    fixture.detectChanges();
    debug = fixture.debugElement;
  });
  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
  it(`should have as title 'parcial_web_miso'`, () => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.componentInstance;
    expect(app.title).toEqual('parcial_web_miso');
  });

  it('should have 3 <tr> elements', () => {
    expect(debug.queryAll(By.css('tr.align'))).toHaveSize(3)
  });
  it("Component has a table", () => {
    expect(debug.query(By.css("tbody")).childNodes.length).toBeGreaterThan(0);
  });
  it('should have 1 <thead.table-dark> elements', () => {
    expect(debug.queryAll(By.css('thead.table-dark'))).toHaveSize(1)
  });
});
