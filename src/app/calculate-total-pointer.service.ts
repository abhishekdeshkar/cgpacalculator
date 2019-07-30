import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CalculateTotalPointerService {

  constructor() { }

  getPointer: number;

  subcredits = { rm: 2, alg: 2,dpdw: 2,wpc1: 2,lp1:3,ps:2,fdm:2,dsm:2,lp2:3,wpc2:2,ml:2,dap:2,cc:2,lp3:3,seminar1:2,wpc3:2,sem1:11,sem2:11,sem3:13,ap:2,acn:2,aml:2,nmpe:2,nadm:2,np:2,ssa:2,wcc:2,rap:2,asn:2,nsm:2, aw:2,pn:2 };

  calculatePointer(getformdata:any,getmaindata:any)
  {
    let Total = 0;
    for(let key in getformdata)
    {
      let subMarks = getformdata[key];
      let subCred = this.subcredits[key];

      if(subMarks != "")
      {
        let SubMarksPointer = this.calculatePointersFromMarks(subMarks);
        Total = Total + SubMarksPointer*subCred;
      }

    }

    let Pointer = Total/this.subcredits[getmaindata.trimester];

    return Pointer;
    
  }


  calculatePointersFromMarks(marks:number)
  {
   
    if(marks>=80 && marks <=100)
    {
      this.getPointer = 10;
    }
    if(marks>=70 && marks <=79)
    {
      this.getPointer = 9;
    }
    if(marks>=60 && marks <=69)
    {
      this.getPointer = 8;
    }
    if(marks>=55 && marks <=59)
    {
      this.getPointer = 7;
    }
    if(marks>=50 && marks <=54)
    {
      this.getPointer = 6;
    }
    if(marks>=45 && marks <=49)
    {
      this.getPointer = 5;
    }
    if(marks>=40 && marks <=44)
    {
      this.getPointer = 4;
    }


    return this.getPointer;

  }


}
