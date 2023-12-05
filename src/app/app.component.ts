import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { UserComponent } from './components/user/user.component';
import { FooterComponent } from './components/footer/footer.component';


@Component({
  selector: 'app-root', 
  standalone: true,
  imports: [CommonModule, 
            RouterOutlet,
            UserComponent,
            FooterComponent          
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  /* Ejemplo de @Input parte2 */
  userOcuppation: string = "Developer";
  city: string = ' A Santiago'; /* <--- */
  title = 'angular17-tutorial';
}
