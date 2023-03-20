import { Component } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {

clicked:boolean=false

formData:Array<{data:String,status:Number,id:number}>=[]
temp:String =""

text:String = 'default value';
keyup(value:String) {
  this.temp = value;
}

addData(){
this.clicked=true
let id:number = (!this.formData.length)?0:this.formData[(this.formData.length)-1].id+1
this.formData.push({data:this.temp,status:0,id:id})
this.clicked=false
}

clickEvent(goal:any){
this.formData[this.formData.indexOf(goal)].status=1
}

Delete(goal:any){
this.formData.splice(this.formData.indexOf(goal),1) ;
}

}

