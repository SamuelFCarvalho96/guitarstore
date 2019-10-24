import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-preco',
  templateUrl: './preco.component.html',
  styleUrls: ['./preco.component.scss'],
})
export class PrecoComponent implements OnInit {
  @Input()
  preco: number;

  constructor() { }

  ngOnInit() {}

}
