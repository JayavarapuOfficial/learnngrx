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

@NgModule({
  declarations: [
    AppComponent,
    CounterbuttonComponent,
    CounterdisplayComponent,
    CustomcomponentComponent,
  ],
  imports: [
    BrowserModule,
    MatmoduleModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot({ counter: counterReducer }),
  ],
  providers: [provideAnimationsAsync()],
  bootstrap: [AppComponent],
})
export class AppModule {}
  