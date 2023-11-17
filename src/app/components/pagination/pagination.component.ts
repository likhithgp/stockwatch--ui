import { Component, OnInit } from '@angular/core';
import { StockwatchServiceService } from 'src/app/service/stockwatch-service.service';
@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  
  title:any="Pagination";
  POST:any;
  displayData:any;
  page:number= 1;
  count:number=0;
  pageSize:number=10;
  tableSize:number = 0;
  tableSizes:any = [10,20,50,100]
  constructor(private service:StockwatchServiceService) { }

  ngOnInit(): void {
    this.getStockDetails();
  }

  getStockDetails():any{
    this.service.getAllStock(this.count,this.pageSize).subscribe(response=>{
      this.POST=response;
      this.displayData=this.POST.content;
      this.tableSize=this.POST.totalElements;
    })
  }

  onTableDataChange(event: number): void {
   this.count=event-1;
   this.page=event;
   this.getStockDetails()
    
  }

  onTableSizeChange(event: any):void{
       this.pageSize=event.target.value;
       this.page=1;
       this.count=0;
       this.getStockDetails();
  }

}
