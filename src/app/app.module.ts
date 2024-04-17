import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MiniPostComponent } from './components/mini-post/mini-post.component';
import { SearchComponent } from './components/search/search.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import { TruncatePipe } from './pipes/truncate.pipe';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { ArticleEditorComponent } from './components/article-editor/article-editor.component';
import { HomeComponent } from './views/home/home.component';
import { AuthComponent } from './views/auth/auth.component';
import {RouterModule, RouterOutlet, Routes} from "@angular/router";
import {CommonModule} from "@angular/common";


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'auth', component: AuthComponent, children: [
      {path: 'login', component: LoginComponent},
      {path: 'register', component: RegisterComponent},
      {path: '**', redirectTo: 'login', pathMatch: 'prefix'} // path: '**' signifie 'tout le reste' ('**' fait office de 'wildcards')
    ]},
  {path: 'article/:id', component: ArticleEditorComponent},
  {path: '**', redirectTo: '/', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SidebarComponent,
    MiniPostComponent,
    SearchComponent,
    TruncatePipe,
    LoginComponent,
    RegisterComponent,
    ArticleEditorComponent,
    HomeComponent,
    AuthComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterOutlet,
    RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', useHash: true}) // Veillez à toujours récupérer cette config pour votre RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
