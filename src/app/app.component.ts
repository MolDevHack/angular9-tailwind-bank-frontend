import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'finance-app';

  constructor(private activatedRoute: ActivatedRoute) { }

  changeTheme(theme = "$mol_theme_light") {
    const root = document.querySelector('app-root')
    if (root) {
      root.setAttribute('mol_theme', theme)
    }
  }
  ngOnInit() {

    this.activatedRoute.fragment.subscribe(params => {
      if (params == '/mol_lights=on') {
        this.changeTheme()
      } else if (params == '/mol_lights=off') {
        this.changeTheme('$mol_theme_dark')
      }
    });
    self.addEventListener('hashchange', () => {
      parent.postMessage(['hashchange', location.href]
        , '*')
    })

  }
}
