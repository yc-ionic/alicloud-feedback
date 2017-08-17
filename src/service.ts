import { Injectable } from '@angular/core';

declare var window;

@Injectable()
export class AlicloudFeedback {
  open(obj: any): Promise<any> {
    return new Promise((resolve, reject) => {
      window.AlicloudFeedback.open(obj, () => resolve(), e => reject(e));
    });
  }

  fetchUnreadCount(): Promise<number> {
    return new Promise((resolve, reject) => {
      window.AlicloudFeedback.fetchUnreadCount(c => resolve(c), e => reject(e));
    });
  }
}
