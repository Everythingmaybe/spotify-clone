import { Route } from '@angular/router';

export const appRoutes: Route[] = [
  {
    path: '',
    loadComponent: () =>
      import('./core/components/layout/layout.component').then(
        (c) => c.LayoutComponent
      ),
    children: [
      {
        path: 'search',
        loadComponent: () =>
          import('./pages/search/search.component').then(
            (c) => c.SearchComponent
          ),
      },
      {
        path: 'artist/:id',
        loadComponent: () =>
          import('./pages/artist/artist.component').then(
            (c) => c.ArtistComponent
          ),
      },
      {
        path: '',
        pathMatch: 'full',
        loadComponent: () =>
          import('./pages/home/home.component').then((c) => c.HomeComponent),
      },
    ],
  },
  {
    path: '',
    loadChildren: () =>
      import('./pages/auth/auth.routes').then((c) => c.authRoutes),
  },
];
