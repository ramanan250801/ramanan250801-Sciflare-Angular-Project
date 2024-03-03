import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { environment } from "../../environments/environment";

@Injectable({
  providedIn: "root",
})
export class ApiService {
  constructor(private http: HttpClient) {}

  CommonGetApi(path: string): Observable<any> {
    return this.http.get<any>(environment.API_ENDPOINT + path);
  }
  CommonPostApi(inputs: any, path: string): Observable<any> {
    return this.http.post<any>(environment.API_ENDPOINT + path, inputs);
  }
  CommonPutApi(id: any, inputs: any, path: string): Observable<any> {
    return this.http.put<any>(
      environment.API_ENDPOINT + path + "/" + id,
      inputs
    );
  }
  CommonDeleteApi(id: any, path: string): Observable<any> {
    return this.http.delete<any>(environment.API_ENDPOINT + path + "/" + id);
  }

}
