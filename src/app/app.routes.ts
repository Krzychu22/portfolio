import {Routes} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./hello-word/hello-word.module').then(m => m.HelloWordModule)
  },
  {
    path: 'hello-word',
    loadChildren: () => import('./hello-word/hello-word.module').then(m => m.HelloWordModule)
  },
  {
    path: 'todo',
    loadChildren: () => import('./todo/todo.module').then(m => m.TodoModule)
  }
];
