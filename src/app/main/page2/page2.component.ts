import { Component, OnInit } from '@angular/core';
import { HttpClient } from"@angular/common/http";
@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  constructor(private http:HttpClient) { }

  ngOnInit() {
  	this.http.get('http://localhost:9001/api/getList')
  	.subscribe(res => {
  		console.log(res)
  		this.dataList = res;
  	})
  }

}
