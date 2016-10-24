/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { {{ pascalcase name }}Service } from './{{ hyphenate name }}.service';

describe('Service: {{ pascalcase name }}', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{{ pascalcase name }}Service]
    });
  });

  it('should ...', inject([{{ pascalcase name }}Service], (service: {{ pascalcase name }}Service) => {
    expect(service).toBeTruthy();
  }));
});
