import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab-violao',
  templateUrl: './tab-violao.page.html',
  styleUrls: ['./tab-violao.page.scss'],
})
export class TabViolaoPage implements OnInit {
  produtos: Observable<any[]>;

  constructor(private router: Router) { }

  ngOnInit() {
  }

}
