

1. Install
  

```javascript
  npm install puppeteer2pdf2png
```

2. Usage
  

```javascript
import { generateScreenshot } from "./src/image/get_image.js";

import { generatePDF } from "./src/pdf/get_pdf.js";

let url = 'https://www.xxx.com'

let outputFileName = 'xx.png'

generateScreenshot(url, outputFileName)
    .then(() => console.log(`Screenshot generated: ${outputFileName}`))
    .catch(err => console.error('Screenshot generation failed:', err));

```
