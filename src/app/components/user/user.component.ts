import { Component, Input } from '@angular/core';

@Component({
	selector: 'user-component', /* <--Ahora crea el componente en la 4 y 5 - */
	standalone: true,     /* <--- */
	imports: [], /*A veces importa CommonModule*/
	templateUrl: './user.component.html',/* <--- */
	styleUrl: './user.component.css'
})
export class UserComponent {
	/* Ejemplo de @Input parte1 */
	@Input() occupation: string = "";
	Username: string = "Elis"; /* Colocar el titulo del componente part1 */
	doesUserExists: boolean = true; /*Colocar el titulo del componente part2*/
	operatingSystems = [{ id: 'win', name: 'Windows' },
	                    { id: 'osx', name: 'MacOS' },
	                    { id: 'linux', name: 'Linux' }];
	/* <--Property binding/paso:2 */
	isEditable: boolean = true;
	/*  evento handling/paso:2 */
	onMouseOver(osName: string): void {
		console.log(osName);

	}

}	
