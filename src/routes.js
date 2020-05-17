import Todo from './components/Todo'
import Login from './components/Login'

export const routes = [
  {path: '', component: Login},
  {path: '/login', component: Login},
  {path: '/todo', component: Todo}
];
