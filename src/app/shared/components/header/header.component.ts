import { Component, OnInit, Input } from '@angular/core';

interface HeaderOption {
  title: string;
  url: string;
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Input() brandUrl: string;
  @Input() brand: string;
  @Input() logo: string;
  @Input() options: HeaderOption[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
