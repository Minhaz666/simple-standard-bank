document.getElementById('btn-withdraw').addEventListener('click',function(){
// take withdraw amount field
    const withdrawfield =document.getElementById('withdrawfield');
    const withdraw=withdrawfield.value;
    const withdrawasnum=parseFloat(withdraw);
//withdraw store
    const withdrawstorefield=document.getElementById('withdrawstorefield')
    const withdrawstore=withdrawstorefield.innerHTML;
    const withdrawstoreasnum=parseFloat(withdrawstore);
    
// assign withdraw  field to withdraw store
const totalWithdraw= withdrawstoreasnum+withdrawasnum ;
const totalWithdrawasnum=parseFloat(totalWithdraw);
withdrawstorefield.innerHTML=totalWithdrawasnum;
withdrawfield.value='';

// minise form total balance
const balancefield=document.getElementById('balancefield');
const balance=balancefield.innerText;
const balanceasnum=parseFloat(balance)
const totalbalance=balanceasnum-withdrawasnum
balancefield.innerText=totalbalance;
})