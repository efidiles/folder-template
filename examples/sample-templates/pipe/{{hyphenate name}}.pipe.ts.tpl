import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
	name: {{ camelcase name }}
})
export class {{ pascalcase name }}Pipe implements PipeTransform {
	transform(value: any, args?: any): any {
		return null;
	}
}
