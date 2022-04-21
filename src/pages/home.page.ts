import { getText } from "../../common/command";
import Page from "./page";

class HomePage extends Page{
   async getUserNameText() {
          await (await this.loggedInUserName).waitForDisplayed();
         // return await (await this.loggedInUserName).getText();
        return await getText(this.loggedInUserName);
    }
    public get loggedInUserName () {
        return $("//h6[@class='top-bar-name']");
    }
}

export default new HomePage();