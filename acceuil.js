let buttonAdd=document.querySelector('.btn');
let response=document.querySelector('.response');


buttonAdd.addEventListener('click',()=>{

    let content=document.createElement("div");
    content.style.margin="15px";
    
    let inputtext=document.querySelector('.form-control').value;
    let btnComplete = document.createElement("BUTTON");
    btnComplete.innerHTML="Complete";
    btnComplete.setAttribute("style","color: #fff !important;margin:5px;textTransform:uppercase;textDecoration:none;background: #4696E5;borderRadius: 50px;display: inline-block;border: none;transition: all 0.4s ease 0s;");
  
    
    let btnUpdate = document.createElement("BUTTON");
    btnUpdate.innerHTML="Update";
    btnUpdate.setAttribute("style","color: #fff !important;margin:5px;textTransform:uppercase;textDecoration:none;background: #4696E5;borderRadius: 50px;display: inline-block;border: none;transition: all 0.4s ease 0s;");
    


    let btnRemove=document.createElement("button");
    btnRemove.innerHTML="Remove";
    btnRemove.setAttribute("style","color: #fff !important;margin:5px;textTransform:uppercase;textDecoration:none;background: #4696E5;borderRadius: 50px;display: inline-block;border: none;transition: all 0.4s ease 0s;");
    
    let input=document.createElement("input");
    input.style.border="none";
    input.value=inputtext;



    
    content.appendChild(btnComplete);
    content.appendChild(btnRemove);
    content.appendChild(btnUpdate);
    content.appendChild(input);
    response.prepend(content);
    
    btnComplete.addEventListener('click',()=>{
     if(btnComplete.innerHTML=="Complete"){
         btnComplete.innerHTML="Undo";
         input.style.textDecoration="line-through";
        }
     else{
         btnComplete.innerHTML="Complete";
         input.style.textDecoration="none";
     }
     
    });

    btnRemove.addEventListener('click',()=>{
        response.removeChild(content);
    });

    btnUpdate.addEventListener('click',()=>{
        let btnSave=document.createElement("button");
        btnSave.innerHTML="Save";
        btnSave.setAttribute("style","color: #fff !important;margin:5px;textTransform:uppercase;textDecoration:none;background: #60a3bc;borderRadius: 50px;display: inline-block;border: none;transition: all 0.4s ease 0s;");
    
        content.appendChild(btnSave);
        response.prepend(content);

        btnSave.addEventListener('click',()=>{
            content.removeChild(btnSave);
        })
    })

});




