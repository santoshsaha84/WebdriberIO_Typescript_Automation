import { ITestData } from "../interface/iTestData"
var path=require('path');
var XLSX=require('xlsx');

export class ExcelUtil implements ITestData{

constructor(public sheetName:string){}

getTestDataByKey(expression:(n:any)=>boolean,filename:string ,filepath:string=process.env.ROOT.toString()):any
{
    if(filepath==process.env.ROOT.toString())
    filepath=path.join(filepath,"resources","excel",filename);
    else
    filepath=path.join(filepath,filename);
    var filterResult=this.getResult(expression,filepath);
    return filterResult;

}

getAllTestData(filename:string,filepath:string=process.env.ROOT.toString()):any
{
    if(filepath==process.env.ROOT.toString())
    filepath=path.join(filepath,"resources","excel",filename);
    else
    filepath=path.join(filepath,filename);
    var workbook=XLSX.readFile(filepath);
    var workSheet=workbook.Sheets[this.sheetName];
    var array=XLSX.utils.sheet_to_json(workSheet);
    return array;

}

getResult(expression:(n:any)=>boolean,filepath)
{
var workbook=XLSX.readFile(filepath);
var workSheet=workbook.Sheets[this.sheetName];
var array=XLSX.utils.sheet_to_json(workSheet);
var filterResult=array.filter(expression);
return filterResult
}

getSingleTestDataRecordByKey(expression:(n:any)=>boolean,filename:string,filepath:string=process.env.ROOT.toString()):any
{
    if(filepath==process.env.ROOT.toString())
    filepath=path.join(filepath,"resources","excel",filename);
    else
    filepath=path.join(filepath,filename);
    var filterResult=this.getResult(expression,filepath);
    return filterResult[0];
}

}