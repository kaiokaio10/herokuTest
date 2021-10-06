import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AutoCompleteModule } from 'primeng/autocomplete';
import { ButtonModule } from 'primeng/button';
import { InputSwitchModule } from 'primeng/inputswitch';
import { RadioButtonModule } from 'primeng/radiobutton';
import { TooltipModule } from 'primeng/tooltip';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppConfigComponent } from './shared/template/appconfig/app.config.component';
import { AppDemoActionsModule } from './shared/template/demoaction/app.demoactions.component';
import { AppFooterComponent } from './shared/template/footer/app.footer.component';
import { AppMenuComponent } from './shared/template/menu/app.menu.component';
import { AppNewsComponent } from './shared/template/news/app.news.component';
import { AppConfigService } from './shared/template/service/appconfigservice';
import { VersionService } from './shared/template/service/versionservice';
import { AppInputStyleSwitchModule } from './shared/template/switchtheme/app.inputstyleswitch.component';
import { AppTopBarComponent } from './shared/template/topbar/app.topbar.component';
import { ClienteComponent } from './cadastro/cliente/cliente.component';
import {InputMaskModule} from 'primeng/inputmask';
import {InputTextModule} from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppNewsComponent,
    AppTopBarComponent,
    AppMenuComponent,
    AppConfigComponent,
    AppFooterComponent,
    ClienteComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AutoCompleteModule,
    ButtonModule,
    RadioButtonModule,
    InputSwitchModule,
    TooltipModule,
    AppInputStyleSwitchModule,
    AppDemoActionsModule,
    InputMaskModule,
    InputTextModule,
    RouterModule,
    MessagesModule,
    MessageModule,

  ],
  providers: [VersionService, AppConfigService],
  bootstrap: [AppComponent]
})
export class AppModule { }
