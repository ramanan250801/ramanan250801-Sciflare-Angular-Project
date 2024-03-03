import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import { LocalDataSource, ServerDataSource } from "ng2-smart-table";
import { environment } from "../../../../environments/environment";
import { ApiService } from "../../api.service";
import { DataService } from "../../data.service";
import { TranslateService } from "@ngx-translate/core";

@Component({
  selector: 'ngx-view-event',
  templateUrl: './view-event.component.html',
  styleUrls: ['./view-event.component.scss']
})
export class ViewEventComponent implements OnInit {
  settings = {
    pager: {
      display: true,
      perPage: 10,
    },
    mode: "external",

    add: {
      addButtonContent: '<i class="nb-plus"></i>',
      // createButtonContent: '<i class="nb-checkmark"></i>',
      // cancelButtonContent: '<i class="nb-close"></i>',
      // confirmCreate: true,
    },
    edit: {
      editButtonContent: '<i class="nb-compose"></i>',
      // saveButtonContent: '<i class="nb-checkmark"></i>',
      // cancelButtonContent: '<i class="nb-close"></i>',
    },
    // delete: {
    //   deleteButtonContent: '<i class="nb-trash"></i>',
    //   confirmDelete: true,
    // },
    actions: { delete: false },
    columns: {
      eventconductor: {
        title: "Event Conductor",
        type: "string",
      },
      eventconductorphone:
      {
        title: "Phone No",
        type: "string",
      },
      address: {
        title: "Address",
        type: "string",
      },
      coordinator: {
        title: "Coordinator",
        type: "string",
      },
      event: {
        title: "Event Name",
        type: "string",
      },
    },
  };
  baseurl = environment.BASEURL;
  source: ServerDataSource;

  constructor(
    private router: Router,
    private dataService: DataService,
    private http: HttpClient,
    private apiservice: ApiService,
    private translateService: TranslateService
  ) { }

  ngOnInit(): void {
    this.initialTableDataRender();
  }

  data = [
    {
      "_id": "12345678",
      "event": "Interview",
      "address": "Madurai",
      "coordinator": "Test",
      "eventconductor": "Ramanan",
      "eventconductorphone": "9361045761"
  }
  ]

  initialTableDataRender(): void {
    this.source = new ServerDataSource(this.http, {
      endPoint: environment.API_ENDPOINT + "unicorns",
      dataKey: "",
      pagerPageKey: "page",
      pagerLimitKey: "limit",
      totalKey: "data.total",
      filterFieldKey: "#field#",
    });
  }

  onDeleteConfirm(event): void {
    if (window.confirm("Are you sure you want to delete?")) {
      event.confirm.resolve();
    } else {
      event.confirm.reject();
    }
  }

  onAdd(event: Event) {
    this.router.navigateByUrl("pages/event/add-event");
    this.dataService.setNewRowInfo({});
  }

  onEdit(event: Event) {
    this.router.navigateByUrl("pages/event/add-event");
    this.dataService.setNewRowInfo(event);
  }

}
