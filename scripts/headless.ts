import * as puppeteer from 'puppeteer';
import * as path from 'path';
import * as fse from 'fs-extra';

const saveScreenshot = async (url:string, path:string) => {


    const browser = await puppeteer.launch();

    const page = await browser.newPage();
  
    page.setViewport({
      width:1376,
      height:768
    })
  
    await page.goto(url);
  
    await page.waitForTimeout(3000)
  
    const area = await page.evaluate(()=>document.querySelector('#area svg')?.outerHTML)

    await fse.writeFile('src/area.svg',area);

    await page.screenshot({path});
  
    await browser.close();

  
 
}

(async ()=>{

  const htmlFile = `<html>
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>Code</title>
    <script type="text/javascript" src="https://unpkg.com/@antv/g2plot@latest/dist/g2plot.min.js"></script>
  </head>
  <body>
    <div id="area"></div>
  </body>
  <script>
    const { Area } = G2Plot;

    const data = [
      { 'year': 2016, value: 150 },
      { 'year': 2017, value: 90 },
      { 'year': 2018, value: 180 },
      { 'year': 2019, value: 170 },
      { 'year': 2020, value: 240 },
    ]
    
    const area = new Area('area', {
      height: 200,
      width: 200,
      autoFit: false,
      data,
      xField: 'year',
      yField: 'value',
      xAxis: {
        range: [0, 1],
        label: {
          style: {
            fontSize: 12
          }
        }
      },
      yAxis:{
        tickInterval:100,
        label:{
          style:{
            fontSize:12
          }
        }
      },
      renderer: 'svg'
    });
    area.render();
  </script>
</html>
`

  const codeFileDir = path.resolve(__dirname,'../..');
  const codeFilePath = path.join(codeFileDir,'src/code.html');

  try {
    await fse.ensureDir(codeFileDir);
    await fse.writeFile(codeFilePath, htmlFile);


    await saveScreenshot(`file:${codeFilePath}`,'/Users/neoddish/Desktop/xxxbaid.png')
  } catch (error) {
    console.log(error)
  }

})();