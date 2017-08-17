import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AlicloudFeedback } from './service';
export * from './service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  exports: []
})
export class AlicloudFeedbackModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: AlicloudFeedbackModule,
      providers: [AlicloudFeedback]
    };
  }
}
