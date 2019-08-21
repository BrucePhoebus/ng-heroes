import { Component, OnInit } from '@angular/core';

import { MessageService } from '../../service/message.service';

/*
* 短信组件
* */

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.scss']
})
export class MessagesComponent implements OnInit {

  constructor(
      // 注入MessageService服务，public声明为公共属性用于模块绑定
      public messageService: MessageService
  ) { }

  ngOnInit() {
  }

}
