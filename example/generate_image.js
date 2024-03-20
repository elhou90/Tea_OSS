
import { generateScreenshot } from "../src/image/get_image.js";


let url = 'https://www.baidu.com'
let outputFileName = 'test.png'


generateScreenshot(url, outputFileName)
    .then(() => console.log(`Screenshot generated: ${outputFileName}`))
    .catch(err => console.error('Screenshot generation failed:', err));