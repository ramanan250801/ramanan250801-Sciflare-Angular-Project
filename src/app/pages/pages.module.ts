import { NgModule } from "@angular/core";
import { NbButtonModule, NbCardModule, NbDialogModule, NbMenuModule } from "@nebular/theme";

import { ThemeModule } from "../@theme/theme.module";
import { PagesComponent } from "./pages.component";
import { PagesRoutingModule } from "./pages-routing.module";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ECommerceComponent } from "./e-commerce/e-commerce.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { TranslateModule } from "@ngx-translate/core";

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbCardModule,
    NbButtonModule,
    TranslateModule,
    NbDialogModule.forRoot()
  ],
  declarations: [
    PagesComponent,
    DashboardComponent,
    ECommerceComponent,
    NotFoundComponent,
  ],
})
export class PagesModule {}
