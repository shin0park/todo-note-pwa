import Todo from './components/Todo'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

export const routes = [
  {path: '', component: Login},
  {path: '/login', component: Login},
  {path: '/dashboard', component: Dashboard},
  {path: '/todo', component: Todo}
];
