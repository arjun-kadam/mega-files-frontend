import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { MenubarModule } from 'primeng/menubar';
import { TabViewModule } from 'primeng/tabview';
import { InputTextModule } from 'primeng/inputtext';
import { DividerModule } from 'primeng/divider';
import { PasswordModule } from 'primeng/password';
import { RippleModule } from 'primeng/ripple';
import { ToastModule } from 'primeng/toast';
import { MessagesModule } from 'primeng/messages';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { OverlayPanelModule } from 'primeng/overlaypanel';
import { AvatarModule } from 'primeng/avatar';



@NgModule({
  exports: [
    CommonModule,
    ButtonModule,
    CardModule,
    MenubarModule,
    TabViewModule,
    InputTextModule,
    DividerModule,
    PasswordModule,
    RippleModule,
    ToastModule,
    MessagesModule,
    TableModule,
    TagModule,
    OverlayPanelModule,
    AvatarModule
  ],
})
export class PrimeNgModule {}
