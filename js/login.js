document.getElementById('submit-btn').addEventListener('click',function()
{
    //for get email
   const emailfield=document.getElementById('get-email');
   const email=emailfield.value;

   //for get password
   const passwordfield=document.getElementById('get-pass');
   const password=passwordfield.value;
   
   if(email==='minhaz@gmail.com' && password === 'secret' )
   {
    window.location.href='bank-inside.html';
   }
   else
   {alert ('invalid user') }
})