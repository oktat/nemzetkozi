import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TranslatePipe, TranslateService } from '@ngx-translate/core';
import { RouterLink } from '@angular/router';

@Component({
  imports: [TranslatePipe, RouterLink],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  name = 'Péter'
  translate = inject(TranslateService)
  ngOnInit() {
    this.translate.addLangs(['en', 'hu'])
    this.translate.use('en')
  }

  selectLanguage(event: Event) {
    this.translate.use((event.target as HTMLSelectElement).value)
  }
  
}
