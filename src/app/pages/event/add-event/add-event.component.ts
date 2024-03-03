import {
  Component, OnDestroy, OnInit, TemplateRef,
  ViewChild,
} from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  ValidatorFn,
  ValidationErrors,
  FormArray,
} from "@angular/forms";
import { Router } from "@angular/router";
import { DataService } from "../../data.service";
import {
  environment,
  CommonData,
  LanguageSettings,
} from "../../../../environments/environment";
import { formatDate } from "@angular/common";
import { ApiService } from "../../api.service";
import {
  NbDialogService,
  NbMenuService,
  NbToastrService,
} from "@nebular/theme";
import { Location } from "@angular/common";
import { TranslateService } from "@ngx-translate/core";
import { HttpClient } from "@angular/common/http";

@Component({
  selector: 'ngx-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.scss']
})
export class AddEventComponent implements OnInit, OnDestroy {
  initial = 0;
  @ViewChild("dialog") deleteDialog: TemplateRef<any>;
  items = [
    { icon: "trash-2", title: this.translate.instant("EVENT.DELETEVENT") },
  ];
  subscribeToMenuItem() {
    this.dialogObservable = this.menuService
      .onItemClick()
      .subscribe((event) => {
        if (
          event.item.title === this.translate.instant("EVENT.DELETEVENT")
        ) {
          this.openDeleteDialog(this.deleteDialog);
        }
      });
  }
  baseurl = environment.BASEURL;
  commondata = CommonData;
  eventForm: FormGroup;
  contributionForm: FormGroup;

  constructor(
    private dataService: DataService,
    private router: Router,
    private fb: FormBuilder,
    private apiservice: ApiService,
    private toasterService: NbToastrService,
    private location: Location,
    public translate: TranslateService,
    private dialogService: NbDialogService,
    private menuService: NbMenuService,
    private translateService: TranslateService,
    private http: HttpClient
  ) { }
  dialogObservable: any;
  ngOnInit(): void {
    this.initializeEventForm();
    this.patcheventForm();
    this.subscribeToMenuItem();
  }

  ngOnDestroy(): void {
    // this.dataService.setEventDataInfo({});
    this.dataService.setNewRowInfo({});
    this.dialogObservable.unsubscribe();
  }

  initializeEventForm() {
    this.eventForm = new FormGroup(
      {
        id: new FormControl(""),
        event: new FormControl("", Validators.required),
        address: new FormControl("", Validators.required),
        coordinator: new FormControl("", Validators.required),
        eventconductor: new FormControl("", Validators.required),
        eventconductorphone: new FormControl("", Validators.required),
      }
    );
  }
  get event() {
    return this.eventForm.get("event");
  }
  get address() {
    return this.eventForm.get("address");
  } 
  get coordinator() {
    return this.eventForm.get("coordinator");
  }
  get eventconductor() {
    return this.eventForm.get("eventconductor");
  }
  get eventconductorphone() {
    return this.eventForm.get("eventconductorphone");
  }

  patcheventForm(): void {
    this.dataService.getNewRowInfo().subscribe((data) => {
      const rowData = data;
      if (JSON.stringify(rowData) !== "{}") {
        this.eventForm.patchValue({
          id: rowData._id,
          event: rowData.event,
          address: rowData.address,
          coordinator: rowData.coordinator,
          eventconductor: rowData.eventconductor,
eventconductorphone: rowData.eventconductorphone,
        });
      }
    });
  }

  goBackBtn() {
    this.location.back();
  }

  addOrEditEvent() {
    if (this.eventForm.invalid) {
      this.eventForm.markAllAsTouched();
    } else {
      const payload = {
      _id : this.eventForm.value.id,
      event : this.eventForm.value.event,
      address : this.eventForm.value.address,
      coordinator : this.eventForm.value.coordinator,
      eventconductor : this.eventForm.value.eventconductor,
      eventconductorphone : this.eventForm.value.eventconductorphone,
      }

      if (this.eventForm.value.id) {
        this.apiservice
          .CommonPutApi(this.eventForm.value.id, payload, "unicorns")
          .subscribe({
            next: (res) => {
              const data = res.data;
              this.toasterService.success(data.message);
            },
            error: (error) => {
              this.toasterService.danger(error.message);
            },
          });
      } else {
        this.apiservice.CommonPostApi(payload, "unicorns ").subscribe({
          next: (res) => {
            const data = res.data;
            this.toasterService.success(data.message);
            this.goBackBtn();
          },
          error: (error) => {
            this.toasterService.danger(error.message);
          },
        });
      }
    }
  }

  deleteEvent() {
    this.apiservice
      .CommonDeleteApi(this.eventForm.value.id, "unicorns")
      .subscribe((res) => {
        const data = res.data;
        this.toasterService.success(data.message);
        this.goBackBtn();
      });
  }

  openDeleteDialog(dialog: TemplateRef<any>) {
    this.dialogService.open(dialog, {
      context:
        this.translate.instant("COMMON.AREYOUSURE") +
        " " +
        this.translate.instant("EVENT.EVENT"),
      autoFocus: false,
    });
  }

}
