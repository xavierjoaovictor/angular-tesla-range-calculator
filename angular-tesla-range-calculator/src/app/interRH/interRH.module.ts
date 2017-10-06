import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// services
import {InterRHService} from './interRH.service';

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    providers: [
        InterRHService
    ],
    exports: []
})

export class InterRHModule { }