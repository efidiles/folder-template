/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { {{ pascalcase name }}Module } from './{{ hyphenate name }}.module';

describe('{{ pascalcase name }}Module', () => {
	it('create an instance', () => {
		let module = new {{ pascalcase name }}Module();
		expect(module).toBeTruthy();
	}));
});
