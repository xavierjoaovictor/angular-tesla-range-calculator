import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'inter-test',
    templateUrl: './interRH.component.html',
    styleUrls: ['./interRH.component.scss']
})
export class InterComponent implements OnInit {
    title: string = 'Teste de digitação';

    ngOnInit(){
        
    }
}