import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'inbox',
    pathMatch: 'full',
  },
  {
    path: 'inbox',
    loadComponent: () => import('./pages/inbox/inbox.page').then((m) => m.InboxPage),
  },
  {
    path: 'sent',
    loadComponent: () => import('./pages/sent/sent.page').then((m) => m.SentPage),
  },
  {
    path: 'trash',
    loadComponent: () => import('./pages/trash/trash.page').then((m) => m.TrashPage),
  },
];
