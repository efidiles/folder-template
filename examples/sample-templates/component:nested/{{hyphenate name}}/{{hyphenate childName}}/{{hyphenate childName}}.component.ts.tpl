import { Component, OnInit } from '@angular/core';

@Component({
  selector: '{{ childSelector }}',<% if(inlineTemplate) { }}
  template: `
    <p>
      {{ hyphenate childName }} Works!
    </p>
  `,<% } else { }}
  templateUrl: './{{ hyphenate childName }}.component.html',<% } if(inlineStyle) { }}
  styles: []<% } else { }}
  styleUrls: ['./{{ hyphenate childName }}.component.css']<% } }}
})
export class {{ pascalcase childName }}Component implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
