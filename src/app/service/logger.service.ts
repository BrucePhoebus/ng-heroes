import { Injectable } from '@angular/core';

/*
* 日志记录服务
* */

@Injectable({
    providedIn: 'root'
})
export class LoggerService {

    constructor() {
    }

    log(msg: any) {
        console.log(msg);
    }

    error(msg: any) {
        console.error(msg);
    }

    warn(msg: any) {
        console.warn(msg);
    }
}
