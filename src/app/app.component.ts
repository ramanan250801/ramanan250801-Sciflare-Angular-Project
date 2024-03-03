/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { Component, OnInit } from "@angular/core";
import { LanguageSettings } from "../environments/environment";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: "ngx-app",
  template: "<router-outlet></router-outlet>",
})
export class AppComponent implements OnInit {
  constructor(
    public translate: TranslateService,
  ) {
    translate.addLangs(LanguageSettings.languages);
    translate.setDefaultLang(LanguageSettings.defaultSelectedLang);
  }

  ngOnInit(): void {}
}
