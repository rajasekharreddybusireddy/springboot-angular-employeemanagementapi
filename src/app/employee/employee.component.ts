import {Component,OnInit} from '@angular/core';
import {employee} from './employee';
import { EmployeeService } from './employee.service';
@Component(    
    {
        selector:'app-employee',
        templateUrl:'./employee.component.html',
        styleUrls:['./employee.component.css']
    }
)
export class EmployeeComponent implements OnInit{
  employee= new employee();
employees:employee[];
constructor(private _employeeService :EmployeeService){}
ngOnInit(): void {
    this.getEmployees();
}
    getEmployees():void {
        this._employeeService.getAllEmployees()
        .subscribe((employeeData)=>{
            this.employees=employeeData,
            console.log(employeeData)
        },(error)=>{
            console.log(error)
        })
    }

    addEmployee():void{
    this._employeeService.addEmployee(this.employee)
    .subscribe((response)=>{console.log(response);
        this.reset();
        this.getEmployees();
    
    },(error)=>{
        console.log(error);
    })
        
    }

    deleteEmployee(employeeEno: string){
        this._employeeService.deleteEmployee(employeeEno)
        .subscribe((response)=>{console.log(response);
            this.getEmployees();        
        },(error)=>{
            console.log(error);
        })
            
        }
        getEmployeeById(eno: string){
            this._employeeService.getEmployeeById(eno)
            .subscribe((employeeData)=>{this.employee=employeeData;
                this.getEmployees();                      
            },(error)=>{
                console.log(error);
            })
                
            }
    private reset(){
        this.employee.eno=null;
        this.employee.name=null;
        this.employee.salary=null;
    }
}