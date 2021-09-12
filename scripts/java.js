//#region Skill Region


//----------------------------SKILL SCRIPT------------------------------

const skillContent = document.getElementsByClassName ('skill_name1_content'),
skillHeader = document.querySelectorAll ('.uil-angle-double-down');

function myfun (){
    const arrow_index = parseInt (this.parentNode.id);
    this.classList.add("uil-angle-double-up");

    if (skillContent[arrow_index].className === 'skill_name1_content') {

       
        this.classList.remove("uil-angle-double-up");
        
        skillContent[arrow_index].className = 'skill_name1_content desplegable_close';
        

    }else{ for (let index = 0; index < skillContent.length; index++) {
        
      

        skillContent[arrow_index].className = 'skill_name1_content';
 
   }}
}

skillHeader.forEach ((el) => {
    el.addEventListener ('click' , myfun)});



//----------------------------***************************------------------------------

//#endregion



//#region Menu NAV BAR
//----------------------------  MENU SCRIPT ------------------------------

const menuContainer = document.getElementsByClassName ('__nav_options-item-container'),
menuBtton = document.getElementById ('doma'),
nav = document.getElementsByClassName('fadeIn');




function menufunc (){

    //const arrow_index = parseInt (this.parentNode.id);
    //this.classList.add("uil-angle-double-up");
    
    if (menuContainer[0].className === '__nav_options-item-container') {
    
           
        menuContainer[0].className = '__nav_options-item-container __nav_options-item-container__clase_pa_closear';
        nav[0].className = 'nav_radius fadeIn';
 
    
    }else{ for (let index = 0; index < menuContainer.length; index++) {
            
        menuContainer[0].className = '__nav_options-item-container';
        nav[0].className = ' fadeIn';
     

    }}
}
    
menuBtton.addEventListener('click',menufunc);
    

//----------------------------***************************------------------------------

//#endregion


//#region EXPERIENCIA




//----------------------------  EXPERIECNIA  SCRIPT ------------------------------


const  descBtton = document.querySelectorAll('.spani'),
counter = parseInt (descBtton[0].id),
desCIMA = document.getElementById ('descr_CIMA_id'),
desULTRATEL = document.getElementById ('descr_ULTRATEL_id'),
desTELCO = document.getElementById ('descr_TELCONET_id'),
desCNT = document.getElementById ('descr_CNT_id'),
closeBtton = document.querySelectorAll ('.bttonCloseJobs'),
miarray = [document.querySelectorAll('.experiencia_title_CIMA'), 
document.querySelectorAll('.experiencia_title_ULTRATEL'),
document.querySelectorAll('.experiencia_title_TELCONET'),
document.querySelectorAll('.experiencia_title_CNT') ];
  




function descfun(){

    let numId = this.id;
    numId = parseInt ( numId , 0);

    switch (numId) {
        case 0:
            desCIMA.className = 'descr_CIMA';
            break;
    
        case 1:
            desULTRATEL.className = 'descr_ULTRATEL';
        break;

        case 2:
            desTELCO.className = 'descr_TELCONET';
        break;

        case 3:
            desCNT.className = 'descr_CNT';
        break;


        default:
           
            break;
    }


    miarray.forEach(clase => {

        clase[0].classList.toggle("opacity");
        
    });

    
    

}

function closefun(){

    if (this.id === 'close_CIMA') {

       
        desCIMA.className = 'descr_CIMA_closed';

    }
    if (this.id === 'close_TELCONET') {

       
        desTELCO.className = 'descr_TELCONET_closed';

    }

    if (this.id === 'close_CNT') {

       
        desCNT.className = 'descr_CNT_closed';

    }
    if (this.id === 'close_ULTRATEL') {

       
        desULTRATEL.className = 'descr_ULTRATEL_closed';

    }
    
    miarray.forEach(clase => {

        clase[0].classList.toggle("opacity");
        
    });


}


closeBtton.forEach ((el_close) => {el_close.addEventListener ('click',closefun)});
descBtton.forEach ((el) => {el.addEventListener ('click',descfun)});



//----------------------------***************************------------------------------

//#endregion