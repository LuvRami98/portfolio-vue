import { createRouter, createWebHashHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import ToDoView from '../views/ToDoView.vue'
import ToDo2View from '../views/ToDo2View.vue'
import BlogsView from '../views/BlogsView.vue'
import Blogs2View from '../views/Blogs2View.vue'
import Blogs3View from '../views/Blogs3View.vue'
import BooksView from '../views/BooksView.vue'
import Books2View from '../views/Books2View.vue'
import LoansView from '../views/LoansView.vue'
import Loans2View from '../views/Loans2View.vue'
import StoreView from '../views/StoreView.vue'
import Store2View from '../views/Store2View.vue'
import Store3View from '../views/Store3View.vue'
import AboutView from '../views/AboutView.vue'
import About2View from '../views/About2View.vue'
import About3View from '../views/About3View.vue'
import About4View from '../views/About4View.vue'
import RecipeView from '../views/RecipeView.vue' 
import Recipe2View from '../views/Recipe2View.vue' 
import Recipe3View from '../views/Recipe3View.vue' 
import Recipe4View from '../views/Recipe4View.vue' 
import Recipe5View from '../views/Recipe5View.vue'
import Recipe6View from '../views/Recipe6View.vue' 
import RecipeMVCView from '../views/RecipeMVCView.vue'
import TicTacToeView from '../views/TicTacToeView.vue'
import CompanyView from '../views/CompanyView.vue'
import ExerciseView from '../views/ExerciseView.vue'
import BlogView from '../views/BlogView.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/about',
    name: 'about',
    component: AboutView
  },
  {
    path: '/about2',
    name: 'about2',
    component: About2View
  },
  {
    path: '/about3',
    name: 'about3',
    component: About3View
  },
  {
    path: '/about4',
    name: 'about4',
    component: About4View
  },
  {
    path: '/todo',
    name: 'ToDoView',
    component: ToDoView
  },
  {
    path: '/todo/:id',
    name: 'todo2',
    component: ToDo2View
  },
  {
    path: '/blogs',
    name: 'blogs',
    component: BlogsView
  },
  {
    path: '/blogs/:id',
    name: 'oneBlog',
    component: Blogs2View
  },
  {
    path: '/blogs/:id/edit',
    name: 'editBlog',
    component: Blogs3View
  },
  {
    path: '/books',
    name: 'books',
    component: BooksView
  },
  {
    path: '/books/:id',
    name: 'singleBook',
    component: Books2View
  },
  {
    path: '/loans',
    name: 'loans',
    component: LoansView
  },
  {
    path: '/loans/:id',
    name: 'loanDetail',
    component: Loans2View
  },
  {
    path: '/store',
    name: 'store',
    component: StoreView
  },
  {
    path: '/form/:product',
    name: 'FormView',
    component: Store2View,
    props: true
  },
  {
    path: '/thanks',
    name: 'thanks',
    component: Store3View
  },
  {
    path: '/recipe',
    name: 'RecipeView',
    component: RecipeView 
  },
  {
    path: '/recipe/create',
    name: 'recipeCreate',
    component: Recipe2View 
  },
  {
    path: '/recipe/:id/show',
    name: 'recipeShow',
    component: Recipe3View, 
    props: true
  },
  {
    path: '/recipe/:id/edit',
    name: 'recipeEdit',
    component: Recipe4View, 
    props: true
  },
  {
    path: '/recipe/:id/delete',
    name: 'recipeDelete',
    component: Recipe5View, 
    props: true
  },
  {
    path: '/recipe/code',
    name: 'recipeCode',
    component: Recipe6View
  },
  {
    path: '/recipemvc',
    name: 'recipemvc',
    component: RecipeMVCView
  },
  {
    path: '/tictactoe',
    name: 'tictactoe',
    component: TicTacToeView
  },
  {
    path: '/company',
    name: 'company',
    component: CompanyView
  },
  {
    path: '/exercise',
    name: 'exercise',
    component: ExerciseView
  },
  {
    path: '/blog',
    name: 'blog',
    component: BlogView
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
