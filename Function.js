function buttons(misti1,mistirname) {
    document.getElementById(misti1).addEventListener('click',function(){

        var Misti = document.getElementById(mistirname).innerText;
        
    
        var ght=document.getElementById('Dekhabe');
        var li =document.createElement('li');
        li.innerText=Misti;

        ght.appendChild(li);
        
        var fgh=document.getElementById('Dekhabe').childElementCount;
        
        
        
    
    })
}
buttons('Buttonone','Chamchom');
buttons('Button2','text2');
buttons('Button3','text4');
buttons('Button4','text4');
buttons('Button5','text5');
buttons('Button6','text6');
buttons('Button7','text7');
buttons('Button8','text8');
buttons('Button9','text9');
buttons('Button10','text10');
buttons('Button11','text11');
buttons('Button12','text12');



