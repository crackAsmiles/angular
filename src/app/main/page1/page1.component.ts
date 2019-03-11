import { Component, OnInit } from '@angular/core';
import { HttpClient } from"@angular/common/http";
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
	title = 'page1 works!';
	dataList = [
		{ id: 1, name: "张三", age: 15, address: "北京" },
		{ id: 2, name: "李四", age: 16, address: "上海" },
		{ id: 3, name: "王五", age: 18, address: "广州" }
	];
  constructor(private http:HttpClient) { 
  	console.log(this);
  }

  ngOnInit() {
  	this.title = 'hello world'
  }
  handle(){
  	this.http.get("http://localhost:9001/api/getList")
   .subscribe(res=>{
   		console.log(res)
   })
  }

}
