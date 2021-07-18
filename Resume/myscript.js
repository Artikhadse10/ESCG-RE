// Work experience
function addNewWEField() {

let newNode =document.createElement("textarea");
newNode.classList.add("form-control");
newNode.classList.add("weField");
newNode.classList.add("mt-2")
newNode.setAttribute("rows", 3);
newNode.setAttribute("placeholder", "Enter Here");

let weOb=document.getElementById("we");
let weAddButtonOb=document.getElementById("weAddButton");

weOb.insertBefore(newNode, weAddButtonOb);
}

// academic qualification
function addNewEqField() {

    let newNode =document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("eqField");
    newNode.classList.add("mt-2")
    newNode.setAttribute("rows", 3);
    newNode.setAttribute("placeholder", "Enter Here");
    
    let eqOb=document.getElementById("eq");
    let eqAddButtonOb=document.getElementById("eqAddButton");
    
    eqOb.insertBefore(newNode, eqAddButtonOb);
    }

    // 
    function generateCV() {

        // name 
       let nameField = document.getElementById("nameField").value;

       let nameT1 = document.getElementById("nameT1");

       nameT1.innerHTML = nameField;

       document.getElementById("nameT2").innerHTML = nameField;

    //  your contact

    let contactField = document.getElementById("contactField").value;

       let contactT = document.getElementById("contactT");

       contactT.innerHTML = contactField;

        //  your address

    let addressField = document.getElementById("addressField").value;

    let addressT = document.getElementById("addressT");

    addressT.innerHTML = addressField;

    // links

    document.getElementById("fbT").innerHTML =document.getElementById("fbField").value;
    
    document.getElementById("instaT").innerHTML =document.getElementById("instaField").value;
    
    document.getElementById("linkedT").innerHTML =document.getElementById("linkedField").value;

    // objectives
    document.getElementById("objectiveT").innerHTML =document.getElementById("objectiveField").value;

    // work experience

    let wes=document.getElementsByClassName("weField");
    let str="";

    for(let e of wes)
    {
        str = str + `<li> ${e.value} </li>`;
    }
    
    document.getElementById("weT").innerHTML =str;

    // Academic qualification
    
    let eqs=document.getElementsByClassName("eqField");
    let str1="";

    for(let a of eqs)
    {
        str1 = str1 + `<li> ${a.value} </li>`;
    }
    
    document.getElementById("eqT").innerHTML = str1;

    // uplode img
    
    let file =document.getElementById("imgField").files[0];
    
    console.log(file);
    let reader =new FileReader();
    reader.readAsDataURL(file);
    console.log(reader.result);

   reader.onloadend =function() {
    document.getElementById("imgT").src =reader.result;
   }

    document.getElementById('cv-form').style.display ='none';
    document.getElementById('cv-template').style.display ='block';




    }