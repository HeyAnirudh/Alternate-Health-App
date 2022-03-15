import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup } from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';
import { ApiService } from './shared/api.service';
import { MedicineModel } from './medicine.model';

@Component({
  selector: 'app-medicine',
  templateUrl: './medicine.component.html',
  styleUrls: ['./medicine.component.css']
})
export class MedicineComponent implements OnInit {

  formValue !:FormGroup;
  medicineModelObj: MedicineModel=new MedicineModel();
  medicineData !:any;
  showAdd!:boolean;
  showUpdate!:boolean;

  constructor(private formbuilder: FormBuilder,private _http:HttpClient, private router:Router,private api:ApiService) { }

  ngOnInit(): void {
    this.formValue = this.formbuilder.group({
      medicineName:[''],
      dose:[''],
      morningTime:[''],
      noonTime:[''],
      bedTime:[''],
      startDate:[''],
      endDate:['']
    })
    this.getAllmedicine();
  }
  clickAddMedicine(){
    this.formValue.reset();
    this.showAdd=true;
    this.showUpdate=false;
  }
  postMedicineDetails(){
    this.medicineModelObj.medicineName=this.formValue.value.medicineName;
    this.medicineModelObj.dose=this.formValue.value.dose;
    this.medicineModelObj.morningTime=this.formValue.value.morningTime;
    this.medicineModelObj.noonTime=this.formValue.value.noonTime;
    this.medicineModelObj.bedTime=this.formValue.value.bedTime;
    this.medicineModelObj.startDate=this.formValue.value.startDate;
    this.medicineModelObj.endDate=this.formValue.value.endDate;

    this.api.postMedicine(this.medicineModelObj)
    .subscribe(res=>{
      console.log(res);
      alert("Medicines details added")
      let ref=document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllmedicine();
    })





  }
  getAllmedicine(){
    this.api.getMedicine(this.formValue)
    .subscribe(res=>{
      this.medicineData =res;
    })
  }
  deleteMedicine(row:any){
    this.api.deleteMedicine(row.id)
    .subscribe(res=>{
      alert("Details deleted");
      this.getAllmedicine();
    })
  }
  onEdit(row:any){
    this.showAdd=false;
    this.showUpdate=true;
    this.medicineModelObj.id=row.id;
    this.formValue.controls['medicineName'].setValue(row.medicineName);
    this.formValue.controls['dose'].setValue(row.dose);
    this.formValue.controls['morningTime'].setValue(row.morningTime);
    this.formValue.controls['noonTime'].setValue(row.noonTime);
    this.formValue.controls['bedTime'].setValue(row.bedTime);
    this.formValue.controls['startDate'].setValue(row.startDate);
    this.formValue.controls['endDate'].setValue(row.endDate);
  }
  updateMedicineDetails(){
    this.medicineModelObj.medicineName=this.formValue.value.medicineName;
    this.medicineModelObj.dose=this.formValue.value.dose;
    this.medicineModelObj.morningTime=this.formValue.value.morningTime;
    this.medicineModelObj.noonTime=this.formValue.value.noonTime;
    this.medicineModelObj.bedTime=this.formValue.value.bedTime;
    this.medicineModelObj.startDate=this.formValue.value.startDate;
    this.medicineModelObj.endDate=this.formValue.value.endDate;
    
    this.api.updateMedicine(this.medicineModelObj,this.medicineModelObj.id)   
    .subscribe(res=>{
      alert("Updated successfully")
      let ref=document.getElementById('cancel')
      ref?.click();
      this.formValue.reset();
      this.getAllmedicine();
    })
  }

}
