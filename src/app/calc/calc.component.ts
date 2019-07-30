import { Component, OnInit } from '@angular/core';
import { CalculateTotalPointerService } from '../calculate-total-pointer.service';


@Component({
  selector: 'app-calc',
  templateUrl: './calc.component.html',
  styleUrls: ['./calc.component.css']
})
export class CalcComponent implements OnInit 
{


  constructor(private cacService: CalculateTotalPointerService) 
  {
    
  }
    
  public getTGPA: number;


  mainData = {
    spec: "Select a specialization",
    trimester: "Select a Trimester",
  }

  formData = {
    rm: 0,
    alg: 0,
    dpdw: 0,
    lp1: 0,
    wpc1: 0,
    ps: 0,
    fdm: 0,
    dsm: 0,
    lp2: 0,
    wpc2: 0,
    ml: 0,
    dap: 0,
    cc: 0,
    lp3: 0,
    seminar1: 0,
    wpc3: 0,
    ap: 0,
    acn:0,
    aml:0,
    nmpe:0,
    nadm:0,
    np:0,
    ssa:0,
    wcc:0,
    rap:0,
    asn:0,
    nsm:0,
    aw:0,
    pn:0

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
    this.formData.rm=  0;
    this.formData.alg=  0,
    this.formData.dpdw=  0,
    this.formData.lp1=  0,
    this.formData.wpc1=  0;
    this.formData.ps=  0;
    this.formData.fdm=  0;
    this.formData.dsm=  0;
    this.formData.lp2=  0;
    this.formData.wpc2=  0;
    this.formData.ml=  0;
    this.formData.dap= 0;
    this.formData.cc=  0;
    this.formData.lp3= 0;
    this.formData.seminar1=  0;
    this.formData.wpc3=  0;
    this.formData.ap = 0;
    this.formData.acn = 0;
    this.formData.aml = 0;
    this.formData.nmpe = 0;
    this.formData.nadm = 0;
    this.formData.np = 0;
    this.formData.ssa= 0;
    this.formData.wcc= 0;
    this.formData.rap= 0;
    this.formData.asn= 0;
    this.formData.nsm= 0;
    this.formData.aw= 0;
    this.formData.pn= 0;
  }

  ResetCGPA()
  {

    this.storeTGPA.sem1 = 0;
    this.storeTGPA.sem2 = 0;
    this.storeTGPA.sem3 = 0;
    this.storeTGPA.total = 0
  }

  ngOnInit() 
  {  }

}
