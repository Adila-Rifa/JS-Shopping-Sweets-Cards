document.getElementById("Calculate").addEventListener('click',function(){
    var sweets=document.getElementById("Select-sweets").value;
    var convertsweers=parseFloat(sweets);
    var Hisab=convertsweers*3;
    // console.log(Hisab);
    var Taka = document.getElementById("teka");
    Taka.innerText=Hisab;
    

})
document.getElementById("Total-Cal").addEventListener('click',function(){

    var ParMisti=document.getElementById("Per-Sweets").value;
    var Persweets=parseFloat(ParMisti);
    
    var  err=document.getElementById("Vat-Tex").value;
    var err2=parseFloat(err);

    var asd=document.getElementById('teka').innerText;
    var asdconvert=parseFloat(asd);

    var add= Persweets+err2+asdconvert;
    
    var All = document.getElementById("Total");
     All.innerText=add;
    
    



})