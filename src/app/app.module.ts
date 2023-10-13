import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import { AdminComponent } from './admin/admin.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { FooterComponent } from './footer/footer.component';

const routes: Routes = [
  { path: "admin", component: AdminComponent },
  { path: "login", component: LoginComponent },
  { path: "register", component: RegisterComponent }, // Tambahkan rute untuk Register
  { path: "", redirectTo: "login", pathMatch: "full" }
]

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    RegisterComponent,
    AdminComponent,
    HeaderComponent,
    SidebarComponent,
    ContentComponent,
    FooterComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
