document.getElementById('btn-deposite').addEventListener('click',function()
{
    // take deposite ammount field
    const depositefield=document.getElementById('deposite');
    const deposite=depositefield.value;
    const depositeasnum=parseFloat(deposite);

    // deposite store
    const depositestorefield=document.getElementById('depositestorefield');
    const depositestore=depositestorefield.innerText;
    const depositestoreasnum=parseFloat(depositestore);
   
    // deoposite ammount assign to deposite field by addition of previous and new money
    const currenttotaldepositestore= depositestoreasnum+depositeasnum
    depositestorefield.innerText=currenttotaldepositestore;
    depositefield.value='';

    // add in balance field
    const balancefield=document.getElementById('balancefield');
    const balance=balancefield.innerText;
    const balanceasnum=parseFloat(balance)
    const currentNewBalance=balanceasnum+depositeasnum;
    balancefield.innerText=currentNewBalance;


}) 