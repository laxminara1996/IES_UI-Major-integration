import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ReportSearchCriteria } from './report-search-criteria';
import { Observable } from 'rxjs';
import { ReportResponse } from './report-response';

@Injectable({
  providedIn: 'root'
})
export class ReportService {
private REPORT_API_URL="http://localhost:8092"
  constructor(private httpClient:HttpClient) { }
 getReportData(reportSearchCriteria:ReportSearchCriteria):Observable<ReportResponse[]>{
  return this.httpClient.get<ReportResponse[]>(`${this.REPORT_API_URL}/report`);
 }

}
