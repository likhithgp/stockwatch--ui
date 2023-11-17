import { Component, OnInit } from '@angular/core';
import { StockwatchServiceService } from 'src/app/service/stockwatch-service.service';

@Component({
  selector: 'app-sorted-pagination',
  templateUrl: './sorted-pagination.component.html',
  styleUrls: ['./sorted-pagination.component.css']
})
export class SortedPaginationComponent implements OnInit {
  title:any="Pagination";
  POST:any;
  displayData:any;
  page:number= 1;
  count:number=0;
  pageSize:number=10;
  tableSize:number = 0;
  tableSizes:any = [10,20,50,100]
  sortFields:any = ["stockName",
  "stockSymbol",
  "currencyType",
  "currentPrice",
  "highOf52weeks",
  "lowOf52weeks"]
  sortOrders = ["ASC","DESC"]
  sortField = "stockName"
  sortOrder = "ASC"
  formData:any={}
  constructor(private service:StockwatchServiceService) { }

  ngOnInit(): void {

    this.getStockDetailsBySort();
  }

  getStockDetailsBySort():any{
    this.service.getAllStockBySort(this.count,this.pageSize,this.sortField,this.sortOrder).subscribe(response=>{
      this.POST=response;
      this.displayData=this.POST.content;
      this.tableSize=this.POST.totalElements
    })
  }

  onTableDataChange(event: number): void {
   this.count=event-1;
   this.page=event;
   this.getStockDetailsBySort();

  }

  onTableSizeChange(event: any):void{
       this.pageSize=event.target.value;
       this.page=1;
       this.count=0;
       this.getStockDetailsBySort();
  }

  onSortColumnChange(event: any):void{
    console.log(event.target.value);
    this.sortField=event.target.value;
    this.getStockDetailsBySort();
}

onSortOrderChange(event: any):void{
  console.log(event.target.value);
  this.sortOrder=event.target.value;
  this.getStockDetailsBySort();
}

}
