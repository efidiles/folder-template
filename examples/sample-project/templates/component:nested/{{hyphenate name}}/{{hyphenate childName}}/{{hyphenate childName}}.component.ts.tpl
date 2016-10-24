import { Component } from '@angular/core';

@Component({
	selector: '{{ hyphenate childSelector }}',
	template: require('./{{ hyphenate childName }}.component.html'),
	styles: [ require('./{{ hyphenate childName }}.component.scss') ],
})
export class {{ pascalcase childName }}Component {}
