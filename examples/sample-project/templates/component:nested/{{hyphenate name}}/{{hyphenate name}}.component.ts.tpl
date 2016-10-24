import { Component } from '@angular/core';

@Component({
	selector: '{{ hyphenate selector }}',
	template: require('./{{ hyphenate name }}.component.html'),
	styles: [ require('./{{ hyphenate name }}.component.scss') ],
})
export class {{ pascalcase name }}Component {}
