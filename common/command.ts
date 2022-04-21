export const setText=async(element:Promise<WebdriverIO.Element>,text:string)=>{
    await (await element).setValue(text);
}

export const selectByVisibleText=async(element:Promise<WebdriverIO.Element>,text:string)=>{
    await (await element).selectByVisibleText(text);
}

export const click=async(element:Promise<WebdriverIO.Element>)=>{
    await (await element).click();
}

export const getText=async(element:Promise<WebdriverIO.Element>):Promise<string>=>{
   return await (await element).getText();
}