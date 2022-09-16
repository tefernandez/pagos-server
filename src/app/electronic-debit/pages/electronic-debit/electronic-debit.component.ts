import { ElectronicDebitService } from './../../services/electronic-debit.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-electronic-debit',
  templateUrl: './electronic-debit.component.html',
  styleUrls: ['./electronic-debit.component.css']
})
export class ElectronicDebitComponent implements OnInit {

  constructor(
    public _router: Router,
    private ElectronicDebitService: ElectronicDebitService ) { }

  ngOnInit(): void {
    this.ElectronicDebitService.getCec()
      .subscribe( resp => console.log(resp));
  }


}
