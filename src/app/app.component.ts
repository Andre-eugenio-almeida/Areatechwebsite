import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NavbarComponent } from "./sharepege/navbar/navbar.component";
import { FooterComponent } from "./sharepege/footer/footer.component";
import { HomeComponent } from "./pages/home/home.component";

@Component({
    selector: 'app-root',
    standalone: true,
    templateUrl: './app.component.html',
    styleUrl: './app.component.css',
    imports: [RouterOutlet, NavbarComponent, FooterComponent, HomeComponent]
})
export class AppComponent {
  title = 'areatechbr';
}
