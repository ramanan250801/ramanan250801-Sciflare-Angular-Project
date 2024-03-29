/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from "@angular/platform-browser";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";
import { NgModule } from "@angular/core";
import {
  HttpClientModule,
  HttpClient,
  HTTP_INTERCEPTORS,
} from "@angular/common/http";
import { CoreModule } from "./@core/core.module";
import { ThemeModule } from "./@theme/theme.module";
import { AppComponent } from "./app.component";
import { AppRoutingModule } from "./app-routing.module";
import { NbMenuModule, NbSidebarModule } from "@nebular/theme";
import {
  NbAuthJWTToken,
  NbAuthModule,
  NbPasswordAuthStrategy,
} from "@nebular/auth";
import { NbToastrModule } from "@nebular/theme";
import { environment, LanguageSettings } from "../environments/environment";
import { NgSelectModule } from "@ng-select/ng-select";
import { FormsModule } from "@angular/forms";
import { TranslateModule, TranslateLoader } from "@ngx-translate/core";
import { TranslateHttpLoader } from "@ngx-translate/http-loader";
import { AuthService } from "./auth.service";
import { AuthGuard } from "./auth.guard";
import { AuthInterceptor } from "./auth.interceptor";
import { OwlDateTimeModule, OwlNativeDateTimeModule } from "ng-pick-datetime";

export function HttpLoaderFactory(httpClient: HttpClient) {
  const checkLang = LanguageSettings["fetchTranslateFilesFromAPI"]
    ? LanguageSettings["fetchTranslateFilesFromAPI"]
    : false;
  if (checkLang) {
    return new TranslateHttpLoader(
      httpClient,
      `${environment.BASEURL}` + "public/adminLanguageFile/",
      ".json"
    );
  } else {
    console.log("data")
    return new TranslateHttpLoader(httpClient, "./assets/i18n/", ".json");
  }
}

@NgModule({
  declarations: [AppComponent],
  imports: [
    FormsModule,
    NgSelectModule,
    BrowserModule,
    NbToastrModule.forRoot(),
    BrowserAnimationsModule,
    HttpClientModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient],
      },
    }),
    AppRoutingModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),

    ThemeModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: "email",
          baseEndpoint: "http://localhost:3001/adminapi/",
          login: {
            endpoint: "login",
            method: "post",
            redirect: {
              success: "/",
              failure: null,
            },
            defaultErrors: [
              "Login/Email combination is not correct, please try again.",
            ],
            defaultMessages: ["You have been successfully logged in."],
          },
          register: {
            endpoint: "sign-up",
            method: "post",
          },
          logout: {
            endpoint: "logout",
            method: "get",
            redirect: {
              success: "/auth/login",
              failure: null,
            },
          },
          requestPass: {
            endpoint: "forgotPassword",
            method: "put",
          },
          resetPass: {
            endpoint: "/auth/reset-pass",
            method: "post",
          },
          token: {
            class: NbAuthJWTToken,
            key: "data.token", // this parameter tells where to look for the token
          },
        }),
      ],
      forms: {
        login: {
          rememberMe: false,
          strategy: "email",
          redirectDelay: 2000,
          showMessages: {
            success: true,
            error: true,
          },
        },
      },
    }),

    CoreModule.forRoot(),
    OwlDateTimeModule,
    OwlNativeDateTimeModule,
  ],
  bootstrap: [AppComponent],
  providers: [
    AuthService,
    AuthGuard,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
  ],
})
export class AppModule {}
