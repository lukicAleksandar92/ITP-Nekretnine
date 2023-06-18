import { ChartComponent, ApexAxisChartSeries, ApexChart, ApexXAxis, ApexTitleSubtitle} from "ng-apexcharts";
export class User {
  ime: string = '';
  prezime: string = '';
  datumRodjenja: string = '';
  grad: string = '';
  telefon: number = 0;
  email: string = '';
  kor_ime: string = '';
  lozinka: string = '';
  tip: string = '';
  selectedAgency: string = '';
  licenca: number = 0;
  omiljeniOglasi: string[] = [];
}

export interface LoggedUser {
  kor_ime: string;
  tip: string;
}

export interface UserName {
  kor_ime: string;
}

export interface UserFavoriteListing {
  kor_ime: string;
  omiljeniOglasi: string[];
}

export interface ChartOptions {
  series: ApexAxisChartSeries;
  chart: ApexChart;
  colors: any[];
  xaxis: ApexXAxis;
  title: ApexTitleSubtitle;
}
