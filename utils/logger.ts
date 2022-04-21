import { ILogger } from "../interface/iLogger";
import logger from "./Log4js";


export class Logger implements ILogger{

    logInfo(message:string){
      logger.info(message)
    }
    logError(error: Error) {
      logger.error(error);
      
    }

}