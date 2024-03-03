import { Component, OnInit } from "@angular/core";
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from "@angular/forms";
import { Router } from "@angular/router";
import { timer } from "rxjs";
import { AuthService } from "../../../app/auth.service";
import { ApiService } from "../../pages/api.service";

@Component({
  selector: "ngx-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
  providers: [AuthService],
})
export class LoginComponent implements OnInit {
  loginStatus: any;
  loginStatusMessage: any;
  loginForm = this.fb.group({
    email: [
      "",
      [
        Validators.required,
        Validators.pattern("[a-z0-9._%+-]+@[a-z0-9.-]+.[a-z]{2,3}$"),
      ],
    ],
    password: ["", [Validators.required]],
  });
  constructor(
    public fb: FormBuilder,
    private _auth: AuthService,
    private _service: ApiService,
    private router: Router
  ) {}

  ngOnInit(): void {}
  login() {
    if (this.loginForm.valid) {
      // this._auth.login(this.loginForm.value);
      this._service
        .CommonPostApi(this.loginForm.value, "common/login/admin")
        .subscribe({
          next: (res) => {
            if (res.type == "success") {
              localStorage.setItem("AdminDetails",JSON.stringify(res.data.admin))
              localStorage.setItem("token", res.data.token);
              this.loginStatus = res.type;
              this.loginStatusMessage = res.message;

              timer(2000).subscribe((res) => {
                this.router.navigate(["/pages/dashboard"]);
              });
              // setTimeout(() => {
              //   this.router.navigate(["/pages/dashboard"]);
              // }, 5000);
              console.log("log", res.data.message);
            }
          },
          error: (error) => {
            this.loginStatus = error.error.type;
            this.loginStatusMessage = error.error.message;
            this.router.navigate(["/pages/dashboard"]);
          },
        });
    }
  }
}
