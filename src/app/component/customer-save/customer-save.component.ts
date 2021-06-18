import { Component, OnInit } from '@angular/core';
import { Customer } from 'src/app/domain/customer';
import { CustomerService } from 'src/app/service/customer.service';
import { DocumentTypeService } from 'src/app/service/document-type.service';
@Component({
  selector: 'app-customer-save',
  templateUrl: './customer-save.component.html',
  styleUrls: ['./customer-save.component.css']
})
export class CustomerSaveComponent implements OnInit {


  public customer:Customer;
  public documentTypes:DocumentType[];


  public showMssg:boolean=false;
  public messages:string[]=[""];

  constructor(
    public customerService:CustomerService,
    public documentTypeService:DocumentTypeService
  ) { }

  ngOnInit(): void {
    this.customer = {
      address:'',
      custId:0,
      dotyId:0,
      email:'',
      name:'',
      phone:'',
      token:'',
      enable:'true'
    }
    this.findAllDocumentType();
  }


  findAllDocumentType(){
    this.documentTypeService.findAll().subscribe(data=>{
      this.documentTypes = data;
    })
  }

  save():void{
    this.messages=[];
    console.log(this.customer)
    this.customerService.save(this.customer).subscribe(data =>{
      this.showMssg= true;
      this.messages[0] = "El customer se grabo con exito";
    }, error =>{
      this.showMssg=true;
      this.messages=error.error.error;
      console.log(error.error.error)
    })
  }


}
