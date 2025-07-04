import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { provideAnimationsAsync } from '@angular/platform-browser/animations/async';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { EffectsModule } from '@ngrx/effects';
import { MatmoduleModule } from './matmodule/matmodule.module';
import { CounterbuttonComponent } from './components/counterbutton/counterbutton.component';
import { CounterdisplayComponent } from './components/counterdisplay/counterdisplay.component';
import { counterReducer } from './shared/store/counter.reducers';
import { CustomcomponentComponent } from './components/customcomponent/customcomponent.component';
import { MenuheaderComponent } from './components/menuheader/menuheader.component';
import { Route, RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { HomeComponent } from './components/home/home.component';
import { CounterComponent } from './components/counter/counter.component';
import { blogReducer } from './shared/store/blog/blog.reducers';
import { AppStore } from './shared/store/global/app.state';
import { AddblogComponent } from './components/addblog/addblog.component';
const routes: Routes = [
  { path: '', redirectTo: '/Home', pathMatch: 'full' },
  { path: 'Home', component: HomeComponent },
  { path: 'counter', component: CounterComponent },
  { path: 'blog', component: BlogComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    CounterbuttonComponent,
    CounterdisplayComponent,
    CustomcomponentComponent,
    MenuheaderComponent,
    BlogComponent,
    HomeComponent,
    CounterComponent,
    AddblogComponent,
  ],
  imports: [
    BrowserModule,
    MatmoduleModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(AppStore),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: !isDevMode() }),
    RouterModule.forRoot(routes),
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
