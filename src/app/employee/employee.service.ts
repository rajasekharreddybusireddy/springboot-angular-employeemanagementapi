import {Http,Response,RequestOptions,Headers} from '@angular/http';
import{Injectable} from '@angular/core';
import { Observable } from 'rxjs';
import {employee} from './employee';
import 'rxjs/Rx';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
@Injectable()
export class EmployeeService{
    constructor(private _httpService :Http){}

    getAllEmployees():Observable<employee[]>{
return this._httpService.get("http://localhost:9000/allemployees")
           .map((response:Response)=>response.json())           
           .catch(this.handleError);
    }

    private handleError(error:Response){
        return Observable.throw(error);
        
    }
    addEmployee(employee:employee){
        let body=JSON.stringify(employee);
        let headers=new Headers({'Content-Type':'application/json'});
        let options= new RequestOptions({headers:headers});
        if(employee.eno){
            return  this._httpService.put("http://localhost:9000/update",body,options);
        }else{
            return  this._httpService.post("http://localhost:9000/save",body,options);
        } 
        
    }
    deleteEmployee(employeeEno: string){
       return this._httpService.delete("http://localhost:9000/delete/"+employeeEno);
    }
    getEmployeeById(eno: string): Observable<employee>{
        return this._httpService.get("http://localhost:9000/"+eno)
        .map((response:Response)=>response.json())
        .catch(this.handleError);
     }     
}