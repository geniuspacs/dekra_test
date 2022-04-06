import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { FlexLayoutModule } from '@angular/flex-layout';



@NgModule({
  declarations: [
    ModalComponent
  ],
  imports: [
    CommonModule,
    MatButtonModule,
    FlexLayoutModule,
    MatDialogModule
  ],
  exports: [ModalComponent]
})
export class SharedModule { }
