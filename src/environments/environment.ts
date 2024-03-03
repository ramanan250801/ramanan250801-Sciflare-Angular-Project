/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  API_ENDPOINT: "https://crudcrud.com/api/3c00b7bb397d46b598e54d0e653eb6c4/",
  BASEURL: "https://crudcrud.com/api/3c00b7bb397d46b598e54d0e653eb6c4/",
  GoogleMapKey: "AIzaSyB2aP3m5pGRNQd3JB7ZjVjHMITXLkaiBEs",
  defaultCountryLat: 9.924,
  defaultCountryLan: 78.1222,
};
export class Year_selection {
  public static year = () => {
    let startYear = new Date().getFullYear();
    let range = [];
    for (let i = 0; i < 24; i++) {
      range.push(startYear - i);
    }
    console.log("YEAR", range.map(String));
    return range.map(String);
  };
}

export class LanguageSettings {
  public static languages = ["en", "ta"];
  public static defaultSelectedLang = "en";
  public static setLanguageForMenus = false;
  public static showTranslateOption = false;
  public static fetchTranslateFilesFromAPI = false;
}

export class CommonData {
  public static AC_or_NonAC = [
    { value: "AC", label: "AC" },
    { value: "Non AC", label: "Non AC" },
  ];

  public static currency = [
    { value: "INR", label: "India - INR" },
    { value: "US", label: "USA - $" },
  ];
  public static language = [
    { value: "en", label: "English" },
    { value: "ta", label: "Tamil" },
    { value: "id", label: "Indonesian" },
    { value: "ml", label: "Malayalam" },
  ];
  public static phoneCode = [
    { value: "+91", label: "+91" },
    { value: "+541", label: "+541" },
  ];
  public static adminType = [
    { value: "superadmin", label: "Super Admin" },
    { value: "citywiseadmin", label: "City Wise Admin" },
  ];
  public static serviceAvailableCitie = [
    { value: "1", label: "Default" },
    { value: "2", label: "Madurai" },
  ];
  public static servicetype = [
    { value: "Alo Lite", label: "Alo Lite" },
    { value: "Alo Plus", label: "Alo Plus" },
    { value: "Alo Taxi", label: "Alo Taxi" },
  ];
  public static ownertype = [
    { value: "COMPANY", label: "Company" },
    { value: "PARTNER", label: "Partner" },
  ];
  public static gender = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Others", label: "Others" },
  ];
  public static genders = [
    { value: "Male", label: "Male" },
    { value: "Female", label: "Female" },
    { value: "Others", label: "Others" },
    { value: "All", label: "All" },
  ];
  public static tripType = [
    { value: "daily", label: "Daily" },
    // { value: "rental", label: "Rental" },
    // { value: "outstation", label: "Outstation" },
  ];
  public static offerTypes = [
    { value: "Flate Rate", label: "Flate Rate" },
    { value: "Percentage", label: "Percentage" },
  ];
  public static true_or_false = [
    { value: true, label: "Yes" },
    { value: false, label: "No" },
  ];
  public static available_or_unavailable = [
    { value: "Available", label: "Yes" },
    { value: "UnAvailable", label: "No" },
  ];
  public static promotions_or_promocode = [
    { value: "promotion", label: "Yes" },
    { value: "promoCode", label: "No" },
  ];
  public static status = [
    { value: true, label: "Enable" },
    { value: false, label: "Disable" },
  ];
  public static category = [
    { value: "Promotion", label: "Promotion" },
    { value: "PromoCode", label: "PromoCode" },
  ];
  public static apply_type = [
    { value: "Auto", label: "Auto" },
    { value: "Manual", label: "Manual" },
  ];
  public static fareType0 = [
    { value: "unitRate", label: "Unit Rate" },
    { value: "flatRate", label: "Flate Rate" },
  ];
  public static fareType1 = [
    { value: "amount", label: "Amount" },
    { value: "percentage", label: "Percentage" },
  ];
}
