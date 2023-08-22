document.getElementById('btn-submit').addEventListener('click',function(){
    const emailFeild=document.getElementById('user-email');
    const email=emailFeild.value;
    console.log(email);
    // password set er jonno first a 1.set id on the html element. 2.get the element. 3.get the value from the element
    const passwordFeild=document.getElementById('user-password');
    const password=passwordFeild.value;
    console.log(password);

    // Danger: Do not veriffy email , password on the client side
    // verify email or password
    if(email=='musabalmahi53@gmail.com' && password==='@#@Mahi1'){
       window.location.href='bank.html';
    }
    else{
       alert('Tui password kno vulli?');
    }
})