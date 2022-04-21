import { ILogger } from "../interface/iLogger";
import { ITestData } from "../interface/iTestData";
import { ExcelUtil } from "../utils/excelTestData";
import { JsonUtil } from "../utils/jsonTestData";
import { Logger } from "../utils/logger";

export class Factory{

    public getTestData(sheetName?:string):ITestData{
        switch(process.env.DATA)
        {
            case "Excel":
                return new ExcelUtil(sheetName);
                break;
            case "Json":
                return new JsonUtil();
            default:
                console.log("Enter valid value for DATA");

        }
    }

    public getLogger():ILogger{
        switch(process.env.LOG)
        {
            case "Log4js":
                return new Logger();
                break;
            default:
                    console.log("Enter valid value for LOG");
        }
    }


}