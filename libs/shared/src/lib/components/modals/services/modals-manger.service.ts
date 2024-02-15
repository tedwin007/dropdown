import {
  ApplicationRef,
  createComponent,
  EnvironmentInjector,
  inject,
  Injectable,
  Input,
  TemplateRef
} from '@angular/core';
import {OpenModalResult, UsingComponentRef, UsingTemplateRef} from "../types/modal.interface";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {ModalSize} from "@tw/shared";
import {ModalContainerComponent} from "../modal-container/modal-container.component";
import {TemplateRefModalComponent} from "../modal-container/template-ref-modal/template-ref-modal.component";

@Injectable({
  providedIn: 'root'
})
export class ModalsMangerService {
  private dialogService: MatDialog = inject(MatDialog)
  private readonly defaultConfig: { config: Partial<MatDialogConfig> } = {
    config: {
      width: ModalSize.M,
      hasBackdrop: true,
      backdropClass: 'backdrop',
      direction: 'ltr',
      enterAnimationDuration: '300ms',
      exitAnimationDuration: '200ms'
    }
  }

  constructor(private injector: EnvironmentInjector,
              private appRef: ApplicationRef) {
  }

  open(config: UsingTemplateRef | UsingComponentRef<Input>): OpenModalResult {
    return this.isTemplateRefType(config) ?
      this.openUsingTemplateRef(config) :
      this.dialogService.open(config.type, config.config)
  }

  private openUsingTemplateRef(config: UsingTemplateRef) {
    const modalContainerComponentComponentRef = createComponent(TemplateRefModalComponent, {
      environmentInjector: this.injector
    });
    console.log(modalContainerComponentComponentRef)
    console.log(modalContainerComponentComponentRef)
    modalContainerComponentComponentRef.setInput('data', config.config.data);
    modalContainerComponentComponentRef.setInput('templateConfig', {
      data: config.config.data,
      context: config.context,
      tempRef: config.type
    });

    this.appRef.attachView(modalContainerComponentComponentRef.hostView);

    return this.dialogService.open(modalContainerComponentComponentRef as any, config.config) as any

  }

  private isTemplateRefType(config: UsingTemplateRef | UsingComponentRef): config is UsingTemplateRef {
    return config.type instanceof TemplateRef;
  }

}
