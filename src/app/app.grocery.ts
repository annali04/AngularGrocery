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
    task:string;
    // task={
    //     name:'',
    //     id:0
    // };


    constructor(){

    }

    onClick(){
        this.tasks.push({name: this.task});
        this.task = '';
        console.log(this.task);
        // if(this.task.id == 0){
        //     this.tasks.push({id: (new Date()).getTime(),name: this.task.name});
        // };
        // console.log((new Date()).getTime());
        // console.log(this.tasks);
    }

    // onEdit(item){
    //     this.task = item;
    //     console.log("hihihih")
    // }
    
 
}