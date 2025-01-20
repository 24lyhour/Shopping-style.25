const shirt = 40;
const pants = 40;

function priceView(bank) {
    const dis = 20;
    const total = shirt + pants - dis;
    document.getElementById('pric').innerHTML = bank + total;
    // alert('See this');

}

// ==============video loop==================
const vdLoop = document.getElementById('myVideo');
    vdLoop.loop = true;
    vdLoop.play();

// ==============video loop-ending==================


// =================change-color back-ground==================

const body = document.body;

function changeBodyColor() {
    
    if (body.style.backgroundColor === "white"){

        body.style.backgroundColor = "black";
        body.style.transition = 'ease-in-out 0.5s';
    } else {
        body.style.backgroundColor = "white";
        body.style.transition = 'ease-in-out 0.5s'
    };


};

// =====ending ------color ==============


// ================nav-top-btn================
const btn = document.getElementById('btn');
const option = document.getElementById('option');

btn.addEventListener('click', () => {
    if (option.style.display === 'none' || option.style.display === '') {
       
        option.style.display = 'block';
         menufive.style.transition = 'ease-in-out 0.5s';
        setTimeout(() => {
                option.style.opacity = '1';
        }, 50);


    }else{

        option.style.opacity = '0';
        setTimeout(() => {
            option.style.display = 'none';
            menufive.style.transition = 'ease-in-out 0.5s';
        }, 500);

    }
});


// ================nav-top-btn-ending================





// ==============order-menu==================={
const chager = shirt + pants;


function payMen(card) {
    let dic = 20;
    var payment = chager - dic;
    if (document.getElementById('chager').innerHTML = card + payment) {

    } else {
        payMen.style.display = 'none';
    }

};
const buttom = document.getElementById('Shop');
const menu = document.getElementById('menu');
// add action on buttom
buttom.addEventListener('click', () => {
    if (menu.style.display === 'none' || menu.style.display === '') {
        
        menu.style.display = 'block ';
        menu.style.transition = 'ease-in-out 0.5s';
        setTimeout(() => (menu.style.opacity = '1'), 10);

    } else {
        // menu.style.display = 'none';
        menu.style.opacity = '0'
        setTimeout(() => (menu.style.display = 'none'), 500);
        menu.style.transition = 'ease-in-out 0.5s';


    };
});

// ==================ending-menu========================};



// =================card-2-alert  ================={


const av = 70;
const khor = 70;
function plucMenu(show){
        var prm = av + khor - 20; 
        document.getElementById('View-price').innerHTML = prm  + show;
};

const btns = document.getElementById('Views') ;
const menuCard = document.getElementById('menu-card');

btns.addEventListener('click', () =>{

if(menuCard.style.display === 'none' || menuCard.style.display === ''){
               
        menuCard.style.display = 'block';
    menuCard.style.transition = 'ease-in-out 0.5s';
        setTimeout(() => {
                menuCard.style.opacity = '1';
        }, 100);

    }else{
        menuCard.style.opacity = '0';
        setTimeout(() => {
            menuCard.style.display = 'none';
        menuCard.style.transition = 'ease-in-out 0.5s';


        }, 500);
    }

});
const offCard = document.getElementById('offCard');
function offMenu(){
    menuCard.style.display ='none';
    setTimeout(() => {
        menuCard.style.opacity = '0';
    }, 500);

}



// ==================card-ending ===================};




// =====================view-1-of card- alert========================{

const nums  = av + 60 ;

function viewOne(show){
    var d = nums - 20;
    document.getElementById('view-One').innerHTML = d + show ;
};
const btn1 = document.getElementById('View1');
const menu1 = document.getElementById('menu-card1');

btn1.addEventListener ('click' , () =>{
    if(menu1.style.display === 'none' || menu1.style.display === ''){
         
        menu1.style.display = 'block';
        menu1.style.transition = 'ease-in-out 0.5s';
        setTimeout(() => {
            menu1.style.opacity = '1';
        }, 100);
    }else{

        menu1.style.opacity = '0';
        setTimeout(() => {
                menu1.style.display = 'none';
        menu1.style.transition = 'ease-in-out 0.5s';

        }, 500);
    }
    

});
const offOne = document.getElementById ('offOne');
function offMenuOne(){
    menu1.style.display = 'none';
    setTimeout(() => {
        menu1.style.opacity = '0';
    }, 500);
};





const view2 = av + 80 + 40;
function viewTwo(vT){
    var v2 = view2 - 20;
    document.getElementById('view-One2').innerHTML = v2 + vT;
}

const btn2 = document.getElementById ('View2');
const menu2 = document.getElementById('menu-card2');

btn2.addEventListener('click' , () =>{
    if(menu2.style.display === 'none' || menu2.style.display === ''){
       
        menu2.style.display ='block';
        menu2.style.transition = 'ease-in-out 0.5s';
        setTimeout(() => {
            menu2.style.opacity = '1';
        menu2.style.transition = 'ease-in-out 0.5s';

        }, 100);
    }else{
        menu2.style.opacity = '0';
        setTimeout(() => {
            menu2.style.display = 'none';
        }, 500);
    };
});
const offTwo = document.getElementById('offTwo');
function offMenuTwo(){
    menu2.style.display = 'none';
    setTimeout(() => {
        menu2.style.opacity = '0';
    }, 500);
}




// =====================tree view==============

const view3 = 80;
const ch = 80 + av 
function viewTree(trees){
    var  tree =  ch -20;
    document.getElementById('view-One3').innerHTML = trees + tree;

};
const btn3 = document.getElementById('View3');
const menuTree = document.getElementById('menu-card3');

btn3.addEventListener('click', () =>{
    if(menuTree.style.display === 'none' || menuTree.style.display === ''){
       
        menuTree.style.display ='block';
        menuTree.style.transition ='ease-in-out 0.5s';
        setTimeout(() => {
            menuTree.style.opacity = '1';
        }, 100);
    }else{
        menuTree.style.opacity = '0';
        setTimeout(() => {
            menuTree.style.display = 'none';
        menuTree.style.transition ='ease-in-out 0.5s';

        }, 500);
    }
});
const offTree = document.getElementById('offTree');
function offMenuTree(){
    menuTree.style.display = 'none';
    setTimeout(() => {
        menuTree.style.opacity = '0'
    }, 500);
};








const view4 = 80 ;
const v4 = av + view4;
function viewFour(is){
    var viewdis =  v4 - 20;
    document.getElementById('view-One4').innerHTML = viewdis + is ;
};
const btn4 = document.getElementById('View4');
const menufour = document.getElementById('menu-card4');

btn4.addEventListener('click' , () =>{
    if(menufour.style.display === 'none' || menufour.style.display === ''){
        menufour.style.display = 'block';
        menufive.style.transition = 'ease-in-out 0.5s';
        setTimeout(() => {
            menufour.style.opacity = '1';
        }, 100);
    }else{
        menufour.style.opacity = '0';
        setTimeout(() => {
            menufour.style.display = 'none';
            menufive.style.transition = 'ease-in-out 0.5s';
        }, 500);
    }
});
const offFour = document.getElementById('offFour');
function offMenuFour(){
    menufour.style.display ='none';
    setTimeout(() => {
        menufour.style.opacity = '0'
        menufive.style.transition = 'ease-in-out 0.5s';
    }, 500);
};









const view5 = 80;
const v5 = av + view5;
function viewFive(vfive){
    var view5 = v5 - 20;
    document.getElementById('view-One5').innerHTML = view5 + vfive ;
};

const btn5 = document.getElementById('View5');
const menufive = document.getElementById('menu-card5');

btn5.addEventListener('click', ()=>{
    if(menufive.style.display === 'none' || menufive.style.display === ''){
        
        menufive.style.display = 'block';
        menufive.style.transition = 'ease-in-out 0.5s';
        setTimeout(() => {
            menufive.style.opacity = '1';
        }, 100);
    }else{
        menufive.style.opacity = '0';
        setTimeout(() => {
            menufive.style.display = 'none';
        menufive.style.transition = 'ease-in-out 0.5s';

        }, 500);
    }
});
const off5  = document.getElementById('offFive');
function offMenuFive(){
    menufive.style.display ='none';
   
    setTimeout(() => {
        menufive.style.opacity ='0';
        menufive.style.transition = 'ease-in-out 0.5s';
    }, 500);
}








// ===========================view--of- card-alert====================}




// ======================seeMore-==================
const pt = 100;
const ptAv = 70;
const shose  = 110;
function showPrice(pricemore){
    var ptTotal = pt + ptAv + shose ;
    let ptd = ptTotal - 30 ;
    document.getElementById('showPrice').innerHTML = ptTotal + pricemore;
    document.getElementById('interface').innerHTML = ptTotal + pricemore;   
};

const moreOne = document.getElementById('seeMore');
const alertCd = document.getElementById('alertCd');
moreOne.addEventListener('click' , () =>{
    if(alertCd.style.display ==='none' || alertCd.style.display ===''){
        alertCd.style.display = 'block';
        alertCd.style.transition = 'ease-in-out 0.5s';
        setTimeout(() => {
            alertCd.style.opacity = '1';
        }, 100);

    }else{
        alertCd.style.opacity = '0';
        alertCd.style.transition = 'ease-in-out 0.5s';
        setTimeout(() => {
            alertCd.style.display = 'none';
        }, 500);
    }
});
const backMore = document.getElementById('alertCd');
function backMoreOne(){
    backMore.style.display = 'none';
};





// ----------------------
const shoseOne = 120;
const ptAvOne = 110;
function showPriceOne(two){
    var prTotal = shoseOne + ptAvOne + pt - 30;
    document.getElementById ('showPriceTwo').innerHTML = prTotal + two;
    document.getElementById('interfaceTwo').innerHTML = prTotal + two
};

const btnSeeTwo = document.getElementById('seeMoreTwo');
const alertCdTwo = document.getElementById('alertCdTwo');
btnSeeTwo.addEventListener('click' ,  ()=>{
    if(alertCdTwo.style.display === 'none' || alertCdTwo.style.display ===''){
        alertCdTwo.style.display = 'block';
        alertCdTwo.style.transition = 'ease-in-out 0.5s';
        setTimeout(() => {
            alertCdTwo.style.opacity = '1';
        }, 100);
    }else{
        alertCdTwo.style.opacity = '0';
        alertCdTwo.style.transition = 'ease-in-out 0.5s';
        setTimeout(() => {
            alertCdTwo.style.display = 'none';
        }, 500);
    }
});
const backMoreTwo = document.getElementById('alertCdTwo');
function backTwoMore(){
    backMoreTwo.style.display ='none';
    backMoreTwo.style.transition = 'ease-in-out 0.5s';

};





const pr = 100;
const avPr = 110;
const shoseTree = 100;
function showPriceTree(tree){
    var prTotals = pr + avPr + shoseTree - 30;
    document.getElementById('showPriceTree').innerHTML = prTotals + tree ;
    document.getElementById('interfaceTree').innerHTML = prTotals + tree;

};


const seeMoreTree = document.getElementById('seeMoreTree');
const alertCdTree = document.getElementById('alertCdTree');

seeMoreTree.addEventListener('click',  () =>{
    if(alertCdTree.style.display ==='none' || alertCdTree.style.display === ''){
        alertCdTree.style.display = 'block';
        alertCdTree.style.transition = 'ease-in-out 0.5s';
        setTimeout(() => {
            alertCdTree.style.opacity = '1';
        }, 100);
    }else{
        alertCdTree.style.opacity = '0';
        alertCdTree.style.transition ='ease-in-out 0.5s';
        setTimeout(() => {
            alertCdTree.style.display = 'none';
        }, 500);
    }
});
const backMoreTree = document.getElementById('alertCdTree');
function backTwoTree(){
    backMoreTree.style.display = 'none';
    backMoreTree.style.transition ='ease-in-out 0.5s';
};






// -----------------------
const prF = 100;
const avPrF = 110;
const shoseFour = 100;
function showPriceFour(treeF){
    var prTotalsf = prF + avPrF + shoseFour - 30;
    document.getElementById('showPriceFour').innerHTML = prTotalsf + treeF ;
    document.getElementById('interfaceFour').innerHTML = prTotalsf + treeF;

};

const seeMoreFour = document.getElementById('seeMoreFour');
const alertFour = document.getElementById('alertCdFour');
seeMoreFour.addEventListener('click', ()=>{
    if(alertFour.style.display === 'none' || alertFour.style.display ===''){
        alertFour.style.display = 'block';
        alertFour.style.transition = 'ease-in-out 0.5s';
        setTimeout(() => {
            alertFour.style.opacity = '1';
        }, 100);
    }else{
        alertFour.style.opacity = '0';
        alertFour.style.transition = 'ease-in-out 0.5s';
        setTimeout(() => {
            alertFour.style.display = 'none';
        }, 500);
    }
});
const backMoreFour = document.getElementById('alertCdFour');
function backFour(){
    backMoreFour.style.display ='none';
    backMoreFour.style.transition = 'ease-in-out 0.5s'; 
};






const fiveMenu = 100;
const menuAv = 100;
function fiveMenuSee(five){
    var fiveTotal = fiveMenu + menuAv - 30 ;
    document.getElementById('showFive').innerHTML = fiveTotal + five ;
    document.getElementById('showPriceFive').innerHTML  = fiveTotal + five ;


};
const seeMoreBtn = document.getElementById('SeeMoreFive');
const menuShow = document.getElementById('alertCdFive');
seeMoreBtn.addEventListener('click', ()=>{
    if(menuShow.style.display =="none"|| menuShow.style.display ==""){

        menuShow.style.display ='block';
        menuShow.style.transition = 'ease-in-out 0.5s';
        setTimeout(() => {
            menuShow.style.opacity = '1';
        }, 100);
    }else{
        menuShow.style.opacity = '0';
        menuShow.style.transition = 'ease-in-out 0.5s';
        setTimeout(() => {
            menuShow.style.display = 'none';
        }, 500);
    }
});
const backMoreFive = document.getElementById('alertCdFive');
function backMorefive(){
    backMoreFive.style.display ='none';
    setTimeout(() => {
        backMoreFive.style.transition='ease-in-out 0.5s';
    }, 500);
};


// ==================seeMore-ending================


// =======================menuDropNav=================

const menuDrop = document.getElementById('menu-icon');
const ulNavMenu = document.getElementById('menuDropNav');
menuDrop.addEventListener('click', ()=>{
    if(ulNavMenu.style.display =='none' || ulNavMenu.style.display == ''){
        ulNavMenu.style.display = 'block';
        ulNavMenu.style.transition = 'ease-in-out 0.5s';
        setTimeout(() => {
            ulNavMenu.style.opacity = '1';
        }, 100);
    }else{
        ulNavMenu.style.opacity = '0';
        ulNavMenu.style.transition = 'ease-in-out 0.5s';
        setTimeout(() => {
            ulNavMenu.style.display = 'none';
        }, 500);
    };
});