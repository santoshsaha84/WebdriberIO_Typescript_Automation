import { ITestData } from "../interface/iTestData"
var path=require('path');
import * as fs from "fs";


export class JsonUtil implements ITestData{



getTestDataByKey(expression:(n:any)=>boolean,filename:string,filepath:string=process.env.ROOT.toString()):any
{
    if(filepath==process.env.ROOT.toString())
    filepath=path.join(filepath,"resources","json",filename);
    else
    filepath=path.join(filepath,filename);
    var filterResult=this.getResult(expression,filepath);
    return filterResult;

}

getAllTestData(filename:string,filepath:string=process.env.ROOT.toString()):any
{
    if(filepath==process.env.ROOT.toString())
    filepath=path.join(filepath,"resources","json",filename);
    else
    filepath=path.join(filepath,filename);
    var data=fs.readFileSync(filepath,"utf-8");
    var array=JSON.parse(data);
    
    return array;

}

getResult(expression:(n:any)=>boolean ,filepath)
{
    var data=fs.readFileSync(filepath,"utf-8");
    var array=JSON.parse(data);
    var filterResult=array.filter(expression);
    return filterResult
}

getSingleTestDataRecordByKey(expression:(n:any)=>boolean,filename:string,filepath:string=process.env.ROOT.toString()):any
{
    if(filepath==process.env.ROOT.toString())
    filepath=path.join(filepath,"resources","json",filename);
    else
    filepath=path.join(filepath,filename);
    var filterResult=this.getResult(expression,filepath);
    return filterResult[0];
}

}