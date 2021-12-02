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
import { AppInputStyleSwitchModule } from './shared/template/switchtheme/app.inputstyleswitch.component';
import { AppTopBarComponent } from './shared/template/topbar/app.topbar.component';
import {InputMaskModule} from 'primeng/inputmask';
import {InputTextModule} from 'primeng/inputtext';
import { RouterModule } from '@angular/router';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import { ConfirmationService, MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { DialogModule } from 'primeng/dialog';
import { ConfirmPopupModule } from 'primeng/confirmpopup';
import { ToastModule } from 'primeng/toast';
import { CadastrarComponent } from './cliente/cadastrar/cadastrar.component';
import { ListarComponent } from './cliente/listar/listar.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AppNewsComponent,
    AppTopBarComponent,
    AppMenuComponent,
    AppConfigComponent,
    AppFooterComponent,
    CadastrarComponent,
    ListarComponent,
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
    TableModule,
    DialogModule,
    ConfirmPopupModule,
    ToastModule
    

  ],
  providers: [ AppConfigService,  MessageService, ConfirmationService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
