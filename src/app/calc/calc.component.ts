import { Component, OnInit } from '@angular/core';
import { CalculateTotalPointerService } from '../calculate-total-pointer.service';

@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit {

  constructor(private cacService: CalculateTotalPointerService) { }

    getTGPA: number;

    mainData = {
      spec: "Select a specialization",
      trimester: "Select a Trimester",
    }

    formData = {
      rm: "",
      alg: "",
      dpdw: "",
      lp1: "",
      wpc1: "",
      ps: "",
      fdm: "",
      dsm: "",
      lp2: "",
      wpc2: "",
      ml: "",
      dap: "",
      cc: "",
      lp3: "",
      seminar1: "",
      wpc3: "",
      ap: "",
      acn:"",
      aml:"",
      nmpe:"",
      nadm:"",
      np:""

    };

    storeTGPA = {
      sem1:0,
      sem2:0,
      sem3:0,
      total:0
    };

    SemesterChanged()
    {
      this.getTGPA = 0;
    }

    onSubmit()
    {
      let calculatePointer = this.cacService.calculatePointer(this.formData,this.mainData);
      this.getTGPA = Math.round(calculatePointer * 100) / 100;

      this.storeTGPA[this.mainData.trimester] = this.getTGPA;
      
      let TotalCGPA = ((this.storeTGPA.sem1 * this.cacService.subcredits.sem1) + (this.storeTGPA.sem2 * this.cacService.subcredits.sem2) + (this.storeTGPA.sem3 * this.cacService.subcredits.sem3))/(this.cacService.subcredits.sem1 + this.cacService.subcredits.sem2 + this.cacService.subcredits.sem3);

      this.storeTGPA.total = Math.round(TotalCGPA * 100) / 100;

      // this.mainData.trimester = "Select a Trimester";
      this.formData.rm=  "";
      this.formData.alg=  "",
      this.formData.dpdw=  "",
      this.formData.lp1=  "",
      this.formData.wpc1=  "";
      this.formData.ps=  "";
      this.formData.fdm=  "";
      this.formData.dsm=  "";
      this.formData.lp2=  "";
      this.formData.wpc2=  "";
      this.formData.ml=  "";
      this.formData.dap=  "";
      this.formData.cc=  "";
      this.formData.lp3=  "";
      this.formData.seminar1=  "";
      this.formData.wpc3=  "";
      this.formData.ap = "";
      this.formData.acn = "";
      this.formData.aml = "";
      this.formData.nmpe = "";
      this.formData.nadm = "";
      this.formData.np = "";
    }

    ResetCGPA()
    {
      this.storeTGPA.sem1 = 0;
      this.storeTGPA.sem2 = 0;
      this.storeTGPA.sem3 = 0;
      this.storeTGPA.total = 0
    }

  ngOnInit() {
  }

}
