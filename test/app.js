const { spawn } = require('child_process');

function getEc2MonthlyPrice(region, instanceType) {
  const pythonScript = spawn('python.exe', ['.\\API_request\\AWS\\get-ec2-monthly-price.py', region, instanceType]);

  pythonScript.stdout.on('data', (data) => {
    console.log(data.toString());
  });

  pythonScript.stderr.on('data', (data) => {
    console.error(data.toString());
  });

  pythonScript.on('close', (code) => {
    console.log(`child process exited with code ${code}`);
  });
}

getEc2MonthlyPrice('us-east-1', 't2.micro');
