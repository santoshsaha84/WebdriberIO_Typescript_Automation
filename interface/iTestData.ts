export interface ITestData{

    getTestDataByKey(key:(n:any)=>boolean,filename:string,filepath?:string):any;

    getAllTestData(filename:string,filepath?:string):any;

    getSingleTestDataRecordByKey(key:(n:any)=>boolean,filename:string,filepath?:string):any;
}