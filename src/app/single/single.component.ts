import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-single',
  templateUrl: './single.component.html',
  styleUrls: ['./single.component.css']
})
export class SingleComponent implements OnInit {

  id:any=""
  singleRecp:any={}

result:any={}

  constructor(private s:ServiceService, private rout:ActivatedRoute){}
  ngOnInit(): void {
    this.getRecp()
  }

  getRecp(){
    this.rout.params.subscribe((data:any)=>{
      this.result=data.recipes
      console.log(this.result);
      
      this.id=data.id
      console.log(this.id);
      this.s.getSinglRecp(this.id).subscribe((response:any)=>{
      this.singleRecp=  response
      console.log(this.singleRecp);
      
      })
      
    })
      

    
  }

}
