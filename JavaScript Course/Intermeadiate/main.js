
//grabbing all the necessary element 
const selectedOne = document.getElementById('selections');
const leftInput = document.getElementById('leftInput');
const rightInput = document.getElementById('rightInput');
const listGroup = document.getElementById('recent-ones');

// adding event listeners to all necessary element required
selectedOne.addEventListener('change',decisionMaking);
leftInput.addEventListener('input',calculateLeft);
rightInput.addEventListener('input',calculateRight);
listGroup.addEventListener('click',deletingFindingRow);


//helping function to calculate right condition requested by user
function decisionMaking(e){

    //collecting innertext of options and values of selected option
    let position = selectedOne.value;
    let texts = selectedOne.textContent.split('\n');
    
    //creating new array
    let itemsConversion = new Array();
    
    //preparing element of array created from innertext of selection
    texts.forEach(function(item){
        if(item != "" && item.trim() != "Select Conversion"){
           itemsConversion.push(item.trim());
        }
    })      
    
    // item variable holds the item selected and its splitted into two and set as placeholders
    let item = itemsConversion[position];
    leftInput.setAttribute('placeholder',item.split('-')[0].trim());
    rightInput.setAttribute('placeholder',item.split('-')[1].trim());
   
}


function calculateLeft(e){

    //check if input has value 
    if(leftInput.value == ""){
        return;
    }
   
    //get value of placeholder
    let placeholder = leftInput.getAttribute('placeholder');
    let placeholder2 = rightInput.getAttribute('placeholder');

    //check if placeholder is null
    if(placeholder != "" && placeholder2 != ""){

        //checking the value in placeholder
        
        switch(placeholder){

            //switch through value of placeholder and call function
            case 'meter':
                //check placeholder 2
                if(placeholder2 == "centimeter")
                {
                    //change meter to centi
                    meterToCentimeter(leftInput.value);
                }
                if(placeholder2 == "millimeter")
                {
                    //change to millimeter
                    meterToMillimeter(leftInput.value)
                }
                if(placeholder2 == "kilometer"){

                    //change to kilometer
                    meterToKilometer(leftInput.value);
                } break;

            case 'centimeter':
                if(placeholder2 == "meter")
                {
                    //change centimeter to meter
                    centimeterToMeter(leftInput.value);
                    
                }
                if(placeholder2 == "millimeter")
                {
                    //change to millimeter
                    centimeterToMillimeter(leftInput.value);
                    
                }
                if(placeholder2 == "kilometer"){

                    //change to kilometer
                    centimeterToKilometer(leftInput.value);                    
                } break;

            case 'millimeter':
                if(placeholder2 == "meter"){

                    //change to meter
                    millimeterToMeter(leftInput.value);
                }
                if(placeholder2 == "centimeter"){

                    //change to millimeter
                    millimeterToCentimeter(leftInput.value);
                }
                if(placeholder2 == "kilometer"){

                    //change to kilometer
                    millimeterToKilometer(leftInput.value);
                }break;
            
            case 'kilometer':
                if(placeholder2 == "meter"){

                    // change to meter
                    convertKmToMt(leftInput.value);
                }
                if(placeholder2 == "centimeter"){

                    // change to centimeter
                    convertKmToCm(leftInput.value);
                }
                if(placeholder2 == "millimeter"){

                    // change to millimeter
                    convertKmToMm(leftInput.value);
                }break;
            default: console.log("unknown");
        }
    }
   
}


function calculateRight(e){

    if(rightInput.value == ""){
        return;
    }
   
    //get value of placeholder
    let placeholder = leftInput.getAttribute('placeholder');
    let placeholder2 = rightInput.getAttribute('placeholder');

    //check if placeholder is null
    if(placeholder != "" && placeholder2 != ""){

        //checking the value in placeholder
        
        switch(placeholder2){

            //switch through value of placeholder and call function
            case 'meter':
                if(placeholder == "centimeter")
                {
                    //change meter to centi
                    meterToCentimeterRight(rightInput.value);
                    
                }
                if(placeholder == "millimeter")
                {
                    //change to millimeter
                    meterToMillimeterRight(rightInput.value)
                    
                }
                if(placeholder == "kilometer"){

                    //change to kilometer
                    meterToKilometerRight(rightInput.value)
                    
                } break;

            case 'centimeter':
                if(placeholder == "meter")
                {
                    //change centimeter to meter
                    centimeterToMeterRight(rightInput.value);
                    
                }
                if(placeholder == "millimeter")
                {
                    //change to millimeter
                    centimeterToMillimeterRight(rightInput.value);
                    
                }
                if(placeholder == "kilometer"){

                    //change to kilometer
                    centimeterToKilometerRight(leftInput.value);                    
                } break;

            case 'millimeter':
                if(placeholder == "meter"){
                    
                    //change to meter
                    millimeterToMeterRight(rightInput.value);
                }
                if(placeholder == "centimeter"){
                    
                    //change to centimeter
                    millimeterToCentimeterRight(rightInput.value);
                }
                if(placeholder == "kilometer"){
                    
                    //change to kilometer
                    millimeterToKilometerRight(rightInput.value);
                }break;

           
            default: console.log("unknown");
        }
    }
}


function makingListItem(right, left, comments){

    //grab the selected convirsion
    let conv = selectedOne.textContent.split('\n');
    let pos = selectedOne.value;
  
    // clearing up the conviersion text
    let listmade =new Array();

    conv.forEach(function(c){
        if(c != "" && c.trim() != "Select Conversion"){
            listmade.push(c.trim());
        }
    })

    let conversionSelected = listmade[pos];

    //making list item ti show as Findings
    let listitem = document.createElement('li');
    listitem.className = 'list-group-item lead';

    let badge = document.createElement('span');
    badge.className = 'badge text-bg-warning ms-3';
    let comment = document.createTextNode("Formula");
    badge.appendChild(comment);
   
    let values =`${conversionSelected} ${left} = ${right} `;
    let text = document.createTextNode(values);
    
    let formula = document.createElement('span');
    formula.className ='lead ms-2';
    let formulatext = document.createTextNode(comments);
    formula.appendChild(formulatext);

    let buttonsdelete = document.createElement('button');
    buttonsdelete.className ="btn btn-danger btn-sm float-end delete";
    buttonsdelete.id = "listRemove";
    buttonsdelete.appendChild(document.createTextNode('x'));
  

    listitem.appendChild(text);
    listitem.appendChild(badge);
    listitem.appendChild(formula);
    listitem.appendChild(buttonsdelete);

   
    //made item appended to ul tag in page 
    listGroup.appendChild(listitem);

}


function deletingFindingRow(e){ 
    
    if(e.target.classList.contains('delete')){
        
        if(confirm("Are you sure ?")){
            let parentOfDeleteButton = e.target.parentElement;
            listGroup.removeChild(parentOfDeleteButton);
        }
    }
}

//functions below does the calculations

// 1. calculation function below meter to something

function meterToCentimeter(metergive){
    
    rightInput.value = metergive * 100;
    makingListItem(rightInput.value,metergive,"Value Multiple by 100");
}

function meterToMillimeter(metergive){

    rightInput.value = metergive * 1000;
    makingListItem(rightInput.value,metergive, "Value Multiple by 1000");
}

function meterToKilometer(metergive){
    rightInput.value = metergive / 1000;
    makingListItem(rightInput.value,metergive,"Value Divide by 1000"); 
}

function meterToCentimeterRight(metergive){

    leftInput.value = metergive * 100;
    makingListItem(metergive,leftInput.value,"Value Multiple by 100");
}

function meterToMillimeterRight(metergive){

    leftInput.value = metergive * 1000;
    makingListItem(metergive,leftInput.value,"Value Multiple by 1000");
}

function meterToKilometerRight(metergive){

    leftInput.value = metergive / 1000;
    makingListItem(metergive,leftInput.value,"Value Divide by 1000");
}



// 2. calculation function below centimeter to something

function centimeterToMeter(centigive){

    rightInput.value = centigive / 100;
    makingListItem(rightInput.value,centigive, "Value Divide by 100");
}

function centimeterToMillimeter(centigive){

    rightInput.value = centigive * 10;
    makingListItem(rightInput.value,centigive, "Value Multiple by 10");   
}

function centimeterToKilometer(centigive){

    rightInput.value = centigive / 100000;
    makingListItem(rightInput.value,centigive, "Value Divide by 100000");
}


function centimeterToMeterRight(centigive){

    leftInput.value = centigive / 100;
    makingListItem(centigive,leftInput.value, "Value Divide by 100");
}

function centimeterToMillimeterRight(centigive){

    leftInput.value = centigive * 10;
    makingListItem(centigive,leftInput.value, "Value Multiple by 10");   
}

function centimeterToKilometerRight(centigive){

    leftInput.value = centigive / 100000;
    makingListItem(centigive,leftInput.value, "Value Divide by 100000");
}



// 3. calculation function below millimeter to something

function millimeterToMeter(milligive){

    rightInput.value = milligive / 1000;
    makingListItem(rightInput.value,milligive, "Value Divide by 1000"); 
}

function millimeterToCentimeter(milligive){

    rightInput.value = milligive / 10;
    makingListItem(rightInput.value,milligive, "Value Divide by 1000"); 
}

function millimeterToKilometer(milligive){

    rightInput.value = milligive / 1e+6;
    makingListItem(rightInput.value,milligive, "Value Divide by 1e+6"); 
}

function millimeterToMeterRight(milligive){

    leftInput.value = milligive * 1000;
    makingListItem(milligive,leftInput.value, "Value Multiple by 1000"); 
}

function millimeterToCentimeterRight(milligive){

    leftInput.value = milligive * 10;
    makingListItem(milligive,leftInput.value, "Value Multiple by 1000"); 
}

function millimeterToKilometerRight(milligive){

    leftInput.value = milligive / 1e+6;
    makingListItem(milligive,leftInput.value, "Value Divide by 1e+6"); 
}



// 4. calculation functions below kilometer to something ........ by marcos jova

function convertKmToMt(kilogive){

  //document.getElementById("rightInput").innerHTML = kilogive*1e+3 // or 1000 - one thousand
  document.getElementById("rightInput").value = kilogive*1e+3 // or 1000 - one thousand
   makingListItem(rightInput.value,kilogive,"Value Multiple by 1000"); 
}

function convertKmToCm(kilogive){

    //document.getElementById("rightInput").innerHTML = kilogive*1e+5 // or 100000  - one thousand
    document.getElementById("rightInput").value = kilogive*1e+5 // or 100000  - one thousand
    makingListItem(rightInput.value,kilogive,"Value Multiple by 1e+5");
}

function convertKmToMm(kilogive){

    //document.getElementById("rightInput").innerHTML = kilogive*1e+6 // or 1000000  - one thousand
    document.getElementById("rightInput").value = kilogive*1e+6 // or 1000000  - one thousand
    makingListItem(rightInput.value,kilogive,"Value Multiple by 1e+6");
}




