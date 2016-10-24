import { Component, OnInit } from '@angular/core';

@Component({
  selector: '{{ selector }}',<% if(inlineTemplate) { }}
  template: `
    <p>
      {{ hyphenate name }} Works!
    </p>
  `,<% } else { }}
  templateUrl: './{{ hyphenate name }}.component.html',<% } if(inlineStyle) { }}
  styles: []<% } else { }}
  styleUrls: ['./{{ hyphenate name }}.component.css']<% } }}
})
export class {{ pascalcase name }}Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
