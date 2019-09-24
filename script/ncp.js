const ncp = require('ncp').ncp;
const path = require('path');
const reslove = (src) =>  {
  return path.join(__dirname, src);
};

ncp(reslove('../script'), reslove('../hi/'), err => {
  if(err) console.log(err);
})