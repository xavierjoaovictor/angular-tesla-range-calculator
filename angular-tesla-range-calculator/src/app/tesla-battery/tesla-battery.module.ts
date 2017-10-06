import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

// services
import {BatteryService} from './tesla-battery.service';

// containers
import { TeslaBatteryComponent } from './containers/tesla-battery/tesla-battery.component'

@NgModule({
    declarations: [],
    imports: [
        CommonModule,
        ReactiveFormsModule
    ],
    providers: [
        BatteryService
    ],
    exports: []
})

export class TeslaBatteryModule { }