import { Component, Output, EventEmitter } from '@angular/core'  
  
@Component({  
    selector: 'search-bar',  
    templateUrl: 'search.component.html'  
   // moduleId: module.id  
})  
export class SearchComponent {  
    @Output()  
    Search = new EventEmitter<string>();  
  
    OnStudentSearch(searchTerm:string): void {  
        this.Search.emit(searchTerm);  
    }  
} 