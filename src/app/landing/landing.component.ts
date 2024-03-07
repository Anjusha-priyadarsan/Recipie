import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})
export class LandingComponent implements OnInit {

  recpList:any=[]
  recpName:string=""
  filterData:string=""
  p: number = 1;

constructor(private s:ServiceService){}

  ngOnInit(): void {

    this.getRecp()
   
  }

  getRecp(){
    this.s.getRecp().subscribe((recps:any)=>{

      this.recpList=recps.recipes
      console.log(this.recpList);
      
      

    })
  }

  changeFilterData(data:any){
    this.filterData=data

  }

}
