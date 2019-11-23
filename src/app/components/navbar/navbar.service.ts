import { Injectable } from '@angular/core';
@Injectable()
export class navBarService {
  visible: boolean;
  constructor() {
    this.visible = false;
  }
  public show(){
    this.visible = false;
  }
  public hide(){
    this.visible = true;
  }
}