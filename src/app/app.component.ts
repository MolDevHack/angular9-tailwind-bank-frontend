import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'finance-app';

  ngOnInit() {
    self.addEventListener('hashchange', () => {
      parent.postMessage(['hashchange', location.href]
        , '*')
    })

  }
}
