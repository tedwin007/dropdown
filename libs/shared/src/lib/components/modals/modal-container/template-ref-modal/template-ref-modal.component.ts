import {AfterViewInit, ApplicationRef, Component, createComponent, EnvironmentInjector, Input} from '@angular/core';
import {TemplateRefModal} from "@tw/shared";
import {ModalContainerComponent} from "../modal-container.component";

@Component({
  selector: 'template-ref-modal',
  template: `
    <modal-container>
      <ng-container *ngTemplateOutlet="templateConfig.tempRef;context: templateConfig?.context"></ng-container>
    </modal-container>`,
})
export class TemplateRefModalComponent<T = any>  {
  @Input() templateConfig = {} as TemplateRefModal



}
