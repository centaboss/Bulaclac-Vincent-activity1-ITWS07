import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { IonButtons, IonHeader, IonMenuButton, IonTitle, IonToolbar, IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent } from '@ionic/angular/standalone';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: true,
  imports: [IonButtons, IonMenuButton, IonHeader, IonToolbar, IonTitle, IonContent, IonButton, IonCard, IonCardHeader, IonCardTitle, IonCardSubtitle, IonCardContent],
})
export class HomePage {
  private authService = inject(AuthService);
  private router = inject(Router);

  get isLoggedIn(): boolean {
    return this.authService.isLoggedIn();
  }

  toggleAuth(): void {
    if (this.authService.isLoggedIn()) {
      this.authService.logout();
    } else {
      this.authService.login();
      this.router.navigate(['/sent']);
    }
  }
}
