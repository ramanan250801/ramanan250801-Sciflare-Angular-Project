import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";

@Injectable()
export class DataService {
  constructor() {}

  private rowData = new BehaviorSubject<any>({});
  private driverData = new BehaviorSubject<any>({});

  setNewRowInfo(data: any) {
    this.rowData.next(data);
  }

  getNewRowInfo() {
    return this.rowData.asObservable();
  }

  setDriverDataInfo(data: any) {
    this.driverData.next(data);
  }

  getDriverDataInfo() {
    return this.driverData.asObservable();
  }
}
