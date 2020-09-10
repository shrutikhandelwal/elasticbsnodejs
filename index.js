require("appdynamics").profile({
    controllerHostName: 'dotnetces.saas.appdynamics.com',                    
    controllerPort: '80', 
    controllerSslEnabled: false,  // Set to true if controllerPort is SSL
    accountName: 'dotnetces',
    accountAccessKey: '90qkwvk6dwz1', //required
    applicationName: 'testingappskkk2',
    tierName: ' testingapptier2', 
    nodeName: ' testingappnode2',
    reuseNode: true,
    reuseNodePrefix: 'testingapptier2-pods',
   // debug:true
   // analytics: {
   //   host: "dotnetces.saas.appdynamics.com",
   //     port: 80,
   //    ssl: false
   // }
   logging: {
    'logfiles': [
      {
        'root_directory': '/tmp/appd',
		'filename': 'echo_%N.log',
        'level': 'TRACE',
        'max_size': 5242880,
        'max_files': 10,
       // 'outputType': 'console'  // Set this parameter if you want to log to STDOUT/STDERR. Omit this parameter if you want to log to a file.
       'filename': 'nodejs_agent_%N.protolog', 'level': 'TRACE', 'channel': 'protobuf'  
    }
    ]
  }
  

   });

const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.send('An alligator approaches!');
});

app.listen(3001, () => console.log('Gator app listening on port 3001!'));

