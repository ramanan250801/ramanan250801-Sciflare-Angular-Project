import { inject, Injectable } from "@angular/core";
import { Router } from "@angular/router";
import { ApiService } from "./pages/api.service";
@Injectable({
  providedIn: "root",
})
export class AuthService {
  constructor(private _service: ApiService, private router: Router) {}

  login(data: any) {
    this._service.CommonPostApi(data, "common/login/admin").subscribe({
      next: (res) => {
        localStorage.setItem("AdminDetails",JSON.stringify(res.data.admin))
        localStorage.setItem("token", res.data.token);
        this.router.navigate(["/pages/dashboard"]);
        // setTimeout(() => {
        // this.router.navigate(["/pages/dashboard"]);
        // }, 2000);
      },
      error: (error) => {
        this.router.navigate(["/auth/login"]);
      },
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(["/auth/login"]);
  }
}
