import * as puppeteer from 'puppeteer';

const saveScreenshot = async (url:string, path:string) => {


    const browser = await puppeteer.launch();

    const page = await browser.newPage();
  
    page.setViewport({
      width:1376,
      height:768
    })
  
    await page.goto(url);
  

  
    await page.screenshot({path});
  
    await browser.close();

  
 
}

(async ()=>{
  await saveScreenshot('http://localhost:8712/','/Users/neoddish/Desktop/xxxbaid.png')
})();