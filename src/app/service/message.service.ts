import { Injectable } from '@angular/core';

/*
* 短信服务
* */

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  messages: string[] = [];

  constructor() { }

  // 往缓存中添加一个信息
  addMessage(message: string) {
    this.messages.push(message);
  }

  // 清空信息缓存
  clearMessage() {
    this.messages = [];
  }

}
