import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { HeaderComponent } from './core/header/header.component';
import { ShoppingListModule } from './shopping-list/shopping-list.module';
// import { ShoppingListService } from './shopping-list/shopping-list.service';
// import { RecipeService } from './recipes/recipe.service';
// import { RecipesModule } from './recipes/recipes.module';
// import { DataStorageService } from './shared/data-storage.service';
// import { AuthService } from './auth/auth.service';
// import { AuthGuard } from './auth/auth-guard.service'; 
import { AuthModule } from './auth/auth.module';
import { MaterialModules } from './material-components'; 
import { CoreModule } from './core/core.module';
// import { SharedModule } from './shared/shared.module';
// import { HomeComponent } from './core/home/home.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModules,
    // RecipesModule,
    ShoppingListModule,
    AuthModule,
    CoreModule
    // SharedModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
