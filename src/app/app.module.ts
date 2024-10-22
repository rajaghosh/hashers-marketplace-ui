import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { CommonModule, DatePipe } from '@angular/common';
// import { FormsModule} from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialuiModule } from './materialui.module';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AddComponent } from './components/item/add/add.component';
import { EditComponent } from './components/item/edit/edit.component';
import { ListComponent } from './components/item/list/list.component';
import { DetailComponent } from './components/transaction/detail/detail.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConfirmDialogComponent } from './components/confirm-dialog/confirm-dialog.component';
import { AuthService } from './services/auth/auth.service';


import { ServiceUrl } from './service-url';
import { UserService } from './services/http-services/user.service';

import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './services/auth/token-interceptor.service';
import { RegisterComponent } from './components/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    AddComponent,
    EditComponent,
    ListComponent,
    DetailComponent,
    HeaderComponent,
    FooterComponent,
    ConfirmDialogComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MaterialuiModule,

    HttpClientModule,
    CommonModule,
  ],
  providers: [
    DatePipe,
    UserService,
    ServiceUrl,
    AuthService,
    { provide: HTTP_INTERCEPTORS, useClass: TokenInterceptorService, multi: true },
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
