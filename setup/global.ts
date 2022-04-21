import { Factory } from "./factory";
import { Settings } from "./settings";

export namespace Global{
    export var factory:Factory=new Factory();
    export var settings:Settings=new Settings();
}

process.env.DATA="Json";
process.env.LOG="Log4js";
process.env.ENV="";
process.env.ROLE="";
process.env.ROOT=require('path').resolve('./');

