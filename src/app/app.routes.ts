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
  },
  {
    path: "button",
    loadChildren: () => import('./crack-button/crack-button.module').then(m => m.CrackButtonModule)
  },
  {
    path: "redux",
    loadChildren: () => import('./sample-redux/sample-redux.module').then(m => m.SampleReduxModule)
  }
];
