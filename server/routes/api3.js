const express = require('express');
const router = express.Router();

const AWS = require('aws-sdk');
const fs = require('fs');
const BUCKET_NAME = 'meanstack';
const IAM_USER_KEY = 'AKIA3KP6MQOSLJIGTGX7';
const IAM_USER_SECRET = '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';
var multiparty = require('multiparty');


const Busboy = require('busboy');

// const api3 = express.Router();

// function uploadToS3(file) {
//   let s3bucket = new AWS.S3({
//     accessKeyId: IAM_USER_KEY,
//     secretAccessKey: IAM_USER_SECRET,
//     Bucket: BUCKET_NAME
//   });
//   s3bucket.createBucket(function () {
//       var params = {
//         Bucket: BUCKET_NAME,
//         Key: file.name,
//         Body: file.data
//       };
//       s3bucket.upload(params, function (err, data) {
//         if (err) {
//           console.log('error in callback');
//           console.log(err);
//         }
//         console.log('success');
//         console.log(data);
//       });
//   });
// }

// module.exports = (api3) => {
//   // The following is an example of making file upload with additional body
//   // parameters.
//   // To make a call with PostMan
//   // Don't put any headers (content-type)
//   // Under body:
//   // check form-data
//   // Put the body with "element1": "test", "element2": image file

//   api3.post('/upload', function (req, res, next) {
//     // This grabs the additional parameters so in this case passing in
//     // "element1" with a value.
//     const element1 = req.body.element1;

//     var busboy = new Busboy({ headers: req.headers });

//     // The file upload has completed
//     busboy.on('finish', function() {
//       console.log('Upload finished');
      
//       // Your files are stored in req.files. In this case,
//       // you only have one and it's req.files.element2:
//       // This returns:
//       // {
//       //    element2: {
//       //      data: ...contents of the file...,
//       //      name: 'Example.jpg',
//       //      encoding: '7bit',
//       //      mimetype: 'image/png',
//       //      truncated: false,
//       //      size: 959480
//       //    }
//       // }
      
//       // Grabs your file object from the request.
//       const file = req.files.element2;
//       console.log(file);
      
//       // Begins the upload to the AWS S3
//       uploadToS3(file);
//     });

//     req.pipe(busboy);
//   });
// }

router.post('/upload', (req, res) => {
  
  AWS.config.update({
    accessKeyId: IAM_USER_KEY,
    secretAccessKey: IAM_USER_SECRET,
    region: 'eu-west-1'
  })
  
  var s3 = new AWS.S3()

  var form = new multiparty.Form();
  var destPath;
  form.on('field', function(name, value) {
    if (name === 'path') {
      destPath = value;
    }
  });

  form.on('part', function(part) {
    // const localImage = './cat.png'
  // const imageRemoteName = `uploaded_${new Date().getTime()}.png`

  s3.putObject({
    Bucket: BUCKET_NAME,
    Body: part,
    Key: destPath
  })
    .promise()
    .then(response => {
      console.log(`done! - `, response)
      console.log(
        `The URL is ${s3.getSignedUrl('getObject', { Bucket: BUCKET_NAME, Key: imageRemoteName })}`
      )
    })
    .catch(err => {
      console.log('failed:', err)
    })
  });
  form.parse(req);
});

module.exports = router