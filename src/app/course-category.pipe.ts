import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'courseCategory'
})
export class CourseCategory implements PipeTransform {

  transform(value: string, courseName: string): string {
     
    if(value.substring(1,1)=="M" )
    {
      return value + " Post Graduation ";
    }
    else
    
    return value + " Graduation ";
  }
  }


