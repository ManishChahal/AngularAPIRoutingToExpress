import { Component } from '@angular/core';
import { ApiServiceService } from './api-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  constructor(private apiService : ApiServiceService){}

  private postData = {fName : 'Gareth',lName :'Bale',league:'La Liga',goalsScored : 50 , year:2011};
  private putDataUpdate = { year :2011, goalsScored :100};
  private deleteData = {fName : "Gareth" , lName : "Bale"};
  private deleteDataFName = "Gareth";
  private deleteDataLName = "Bale";
  private getDataFName = "Lionel";
  private getDataLName = "Messi";
  private putDataFName = "Cristiano";
  private putDataYear = "2015";
  private postDataWithParametersFName = "Gareth";
  private postDataWithParametersLName = "Bale";
  private postDataWithParametersObj = {league:'La Liga',goalsScored : 50 , year:2011};
  private putDataWithParameters = 500;
  private dataReceivedFromServer;
  private dataBoundToTableGetRequest;
  private dataBoundToTablePostRequest;
  private dataUpdatedOnTheServer;
  private deleteDataFromServer;
  private dataBoundToTableGetRequestWithParameters;
  private dataBoundToTablePostRequestWithParameters;
  private dataUpdatedOnTheServerWithParameters;
  private deleteDataFromServerWithParameters;

  functionToSetUndefined()
  {
  this.dataReceivedFromServer = undefined;
  this.dataBoundToTableGetRequest = undefined;
  this.dataBoundToTablePostRequest = undefined;
  this.dataUpdatedOnTheServer = undefined;
  this.deleteDataFromServer = undefined;
  this.dataBoundToTableGetRequestWithParameters = undefined;
  this.dataBoundToTablePostRequestWithParameters = undefined;
  this.dataUpdatedOnTheServerWithParameters = undefined;
  this.deleteDataFromServerWithParameters = undefined;
  }

  //Function to make http get request
  private getAPIRequest(){
    this.functionToSetUndefined();
    this.apiService.getRequest().subscribe(
      data => {this.dataReceivedFromServer = data ;
        this.dataBoundToTableGetRequest = JSON.parse(this.dataReceivedFromServer.data);
        console.log(this.dataBoundToTableGetRequest)},
      error => console.log(error)
    );
  }

  //Function to make http post request
  private postAPIRequest(){
    this.functionToSetUndefined();
     this.apiService.postRequest(JSON.stringify(this.postData)).subscribe(
      data => {this.dataBoundToTablePostRequest = JSON.parse(data.data); 
        console.log(this.dataBoundToTablePostRequest)},
      error => console.log(error)
    );
  }

  //Function to make http put request
  private putAPIRequest(){
    this.functionToSetUndefined();
    this.apiService.putRequest(this.putDataUpdate).subscribe(
      data => {this.dataReceivedFromServer = data;
        this.dataUpdatedOnTheServer = JSON.parse(this.dataReceivedFromServer.data).actualData;
      console.log(this.dataUpdatedOnTheServer)},
      error => console.log(error)
    );
  }

  //Function to make http delete request
  private deleteAPIRequest(){
    this.functionToSetUndefined();
    this.apiService.deleteRequest(this.deleteData).subscribe(
      data => {this.dataReceivedFromServer = data;
      this.deleteDataFromServer = JSON.parse(this.dataReceivedFromServer.data).dataToBeDeleted;
      },
      error => console.log(error)
    );
  }

  //Function to make http get request with parameters
  private getAPIRequestWithParameters(){
    this.functionToSetUndefined();
    this.apiService.getRequestWithParameters(this.getDataFName,this.getDataLName).subscribe(
      data => {this.dataReceivedFromServer = data ;
        this.dataBoundToTableGetRequestWithParameters = JSON.parse(this.dataReceivedFromServer.data);
        console.log(this.dataBoundToTableGetRequestWithParameters)},
      error => console.log(error)
    );
  }

  //Function to make http post request with parameters
  private postAPIRequestWithParameters(){
    this.functionToSetUndefined();
    this.apiService.postRequestWithParameters(this.postDataWithParametersFName , this.postDataWithParametersLName,JSON.stringify(this.postDataWithParametersObj)).subscribe(
      data => {
        this.dataBoundToTablePostRequestWithParameters = JSON.parse(data.data); 
        console.log(this.dataBoundToTablePostRequestWithParameters)},
      error => console.log(error)
    );
  }

  ////Function to make http put request with parameters
  private putAPIRequestWithParameters(){
    this.functionToSetUndefined();
    this.apiService.putRequestWithParameters(this.putDataFName , this.putDataYear , this.putDataWithParameters).subscribe(
      data => {
        this.dataReceivedFromServer = data;
        this.dataUpdatedOnTheServerWithParameters = JSON.parse(this.dataReceivedFromServer.data).actualData;
        console.log(this.dataUpdatedOnTheServerWithParameters);
      },
      error => console.log(error)
    )
  }

  //Function to make http delete request with parameters
  private deleteAPIRequestWithParameters(){
    this.functionToSetUndefined();
    this.apiService.deleteRequestWithParameters(this.deleteDataFName,this.deleteDataLName).subscribe(
      data => {
        this.dataReceivedFromServer = data;
        this.deleteDataFromServerWithParameters = JSON.parse(this.dataReceivedFromServer.data).dataToBeDeleted;
        console.log(this.deleteDataFromServerWithParameters);
        },
        error => console.log(error)
    );
  }
}
