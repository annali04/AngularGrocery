import { Component, OnInit } from "@angular/core";
import {MatButtonModule} from '@angular/material/button';
import { FormControl } from "@angular/forms";



@Component({
    selector: 'app-grocery',
    templateUrl: './app.grocery.html',
    styleUrls: [
        '../assets/css/bootstrap.min.css'
    ]
})

export class GroceryComponent {
    tasks = [];
    // item = new FormControl();
    task:string;

    constructor(){

    }

    onClick(){
        this.tasks.push({name: this.task});
        this.task = '';
        console.log(this.task);
    }
    
 
}