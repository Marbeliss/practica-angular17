import { Component } from '@angular/core';


@Component({
  selector: 'footer-component',
  standalone: true,
  imports: [],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.css'
})
export class FooterComponent {
  Username: string = "Elis";
  doesUserExists: boolean = true;
}
