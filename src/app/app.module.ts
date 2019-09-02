import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SearchComponent } from './search/search.component';
import { StudentListComponent } from './student-list/student-list.component';
import { CourseCategory } from './course-category.pipe';
import { MainCompComponent } from './main-comp/main-comp.component';
import { CalledCompComponent } from './called-comp/called-comp.component';
import { ParentCompComponent } from './parent-comp/parent-comp.component';
import { ChildCompComponent } from './child-comp/child-comp.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    StudentListComponent,
    CourseCategory,
    MainCompComponent,
    CalledCompComponent,
    ParentCompComponent,
    ChildCompComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
