import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
let url ='http://localhost:8085/stockwatch/api/v1/';
@Injectable({
  providedIn: 'root'
})
export class StockwatchServiceService {

  constructor(private http: HttpClient) { }

  getAllStock(offset:number,pageSize:number):Observable<any>{
   
    return this.http.get(url+`stocks/Pagenation/${offset}/${pageSize}`);
  }
 
  addNewStockDetails(data:any){
   
    return this.http.post<any>(url+`stock`,data);
  }

  updateStockDetails(name:string,data:any){
    return this.http.put(url+`stock/${name}`,data);
  }
   
  getAllStockBySort(offset:number,pageSize:number,feildName:String,sortType:String){
    return this.http.get(url+`stocks/Pagenationandsort/${offset}/${pageSize}?feildName=${feildName}&sortOder=${sortType}`);
  }

}
