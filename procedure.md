First make a server 
```bash
mpm init 
```

Then create a new procedure
```bash
nom i express pg cors
```

and then create a new file called `index.js` and add the following code
```javascript

const express = require('express');
const app = express();

app.listen(5000, () => {
    console.log("Server has Started Working on Port 5000");
});

```

and the in the terminal run the following command
```bash
nodemon index.js
```

and then upgrate the code to the following
```javascript

const express = require('express');
const app = express();
const cors = require('cors');


app.use(cors());
app.use(express.json());

app.listen(5000, () => {
    console.log("Server has Started Working on Port 5000");
});
    
    ```