import { Component, OnInit } from '@angular/core';
import {TestserviceService} from "../testservice.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private _data: TestserviceService) { }

  ngOnInit() {
    // this._data.getData();
  }

}
