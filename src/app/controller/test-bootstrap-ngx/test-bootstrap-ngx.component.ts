import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-test-bootstrap-ngx',
  templateUrl: './test-bootstrap-ngx.component.html',
  styleUrls: ['./test-bootstrap-ngx.component.scss']
})
export class TestBootstrapNgxComponent implements OnInit {

  oneAtATime: boolean = true;

  constructor() { }

  ngOnInit() {
  }

}
