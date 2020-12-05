const crypto = require('crypto');  
const secret = 'sefsfasfafffffffff';  
const hash = crypto.createHmac('sha256', secret)  
                   .update('onetwo34.;')  
                   .digest('hex');  
console.log(hash);  




const cipher = crypto.createCipher('aes192', 'a password');  
var encrypted = cipher.update('Hello JavaTpoint', 'utf8', 'hex');  
encrypted =  encrypted + cipher.final('hex');  
console.log(encrypted);