import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms'
import { StockwatchServiceService } from 'src/app/service/stockwatch-service.service';

@Component({
  selector: 'app-inputform',
  templateUrl: './inputform.component.html',
  styleUrls: ['./inputform.component.css']
})
export class InputformComponent implements OnInit {

  constructor(private service:StockwatchServiceService) { }
  
  stockDetails:any={}
  ngOnInit(): void {
  }

  getData(data:NgForm){
    this.stockDetails=data;
    console.log(data)
  }

  onClick(data:NgForm):any{
    this.stockDetails=data
   
    this.service.addNewStockDetails(this.stockDetails).subscribe(response=>{
     
      alert('Added successfully');
    })
  }

  onClickUpdate(data:NgForm):any{
    this.stockDetails=data;
    this.service.updateStockDetails(this.stockDetails.stockName,this.stockDetails).subscribe(response=>{
      alert('Updated successfully');
    })
  }

}
