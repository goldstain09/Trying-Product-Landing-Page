// Main nav bar 

window.onscroll = () => {
    if (document.body.scrollTop > 0 || document.documentElement.scrollTop > 0) {
        document.getElementById('mnvbar').style.backgroundColor = 'white';
        document.getElementById('mnvbar').style.transition = 'all 1s';
        // document.getElementById('quboh1').style.color='black';

        var a = document.getElementsByClassName('mnvbrli');
        for (var i = 0; i < a.length; i++) {
            a[i].style.color = 'black';

        }

    }

    else {
        // document.getElementById('quboh1').style.color='grey'
        document.getElementById('mnvbar').style.backgroundColor = 'transparent';


        var a = document.getElementsByClassName('mnvbrli');
        for (var i = 0; i < a.length; i++) {
            a[i].style.color = 'white';
        }
    }

// features transform

    if( document.body.scrollTop>400 || document.documentElement.scrollTop>400){
        document.getElementById('featurediv1').style.transform ='translateX(0%)';
        document.getElementById('featurediv2').style.transform ='translateX(0%)';
        document.getElementById('featurediv3').style.transform ='translateX(0%)';

    }
    else{
        document.getElementById('featurediv1').style.transform ='translateX(100%)';
        document.getElementById('featurediv2').style.transform ='translateX(100%)';
        document.getElementById('featurediv3').style.transform ='translateX(100%)';

    }

    // some special features transform

    if( document.body.scrollTop>1200 || document.documentElement.scrollTop>1200){

        document.getElementById('smespecialfeatureimgdiv1').style.transform='translateY(0%)';
        document.getElementById('smespecialfeaturetextdiv1').style.transform='translateX(0%)';

    }
    else{
        document.getElementById('smespecialfeatureimgdiv1').style.transform='translateY(100%)';
        document.getElementById('smespecialfeaturetextdiv1').style.transform='translateX(100%)';
    }

    if( document.body.scrollTop>1800 || document.documentElement.scrollTop>1800){

        document.getElementById('smespecialfeatureimgdiv2').style.transform='translateY(0%)';
        document.getElementById('smespecialfeaturetextdiv2').style.transform='translateX(0%)';

    }
    else{
        document.getElementById('smespecialfeatureimgdiv2').style.transform='translateY(100%)';
        document.getElementById('smespecialfeaturetextdiv2').style.transform='translateX(100%)';

    }

    if( document.body.scrollTop>2400 || document.documentElement.scrollTop>2400){

        document.getElementById('smespecialfeatureimgdiv3').style.transform='translateY(0%)';
        document.getElementById('smespecialfeaturetextdiv3').style.transform='translateX(0%)';

    }
    else{
        document.getElementById('smespecialfeatureimgdiv3').style.transform='translateY(100%)';
        document.getElementById('smespecialfeaturetextdiv3').style.transform='translateX(100%)';

    }

    // about transform

    if(document.body.scrollTop>3000 || document.documentElement.scrollTop>3000){
        document.getElementById('aboutsectionchildodd1').style.transform='translateX(0%)';
        document.getElementById('aboutsectionchildeven1').style.transform='translateX(0%)';
    }
    else{
        document.getElementById('aboutsectionchildodd1').style.transform='translateX(-100%)';
        document.getElementById('aboutsectionchildeven1').style.transform='translateX(100%)';

    }


    if(document.body.scrollTop>3300 || document.documentElement.scrollTop>3300){
        document.getElementById('aboutsectionchildodd2').style.transform='translateX(0%)';
        document.getElementById('aboutsectionchildeven2').style.transform='translateX(0%)';
    }
    else{
        document.getElementById('aboutsectionchildodd2').style.transform='translateX(-100%)';
        document.getElementById('aboutsectionchildeven2').style.transform='translateX(100%)';

    }


    if(document.body.scrollTop>3600 || document.documentElement.scrollTop>3600){
        document.getElementById('aboutsectionchildodd3').style.transform='translateX(0%)';
        document.getElementById('aboutsectionchildeven3').style.transform='translateX(0%)';
    }
    else{
        document.getElementById('aboutsectionchildodd3').style.transform='translateX(-100%)';
        document.getElementById('aboutsectionchildeven3').style.transform='translateX(100%)';

    }

    if(document.body.scrollTop>3900 || document.documentElement.scrollTop>3900){
        document.getElementById('aboutsectionchildodd4').style.transform='translateX(0%)';
        document.getElementById('aboutsectionchildeven4').style.transform='translateX(0%)';
    }
    else{
        document.getElementById('aboutsectionchildodd4').style.transform='translateX(-100%)';
        document.getElementById('aboutsectionchildeven4').style.transform='translateX(100%)';

    }

    // reviews transform

    if(document.body.scrollTop>4450 || document.documentElement.scrollTop>4450){
        document.getElementById('reviewdiv').style.transform='translateY(0%)';
    }
    else{       
         document.getElementById('reviewdiv').style.transform='translateY(100%)';

    }








    var links=document.querySelectorAll('.links');
    var sections = document.querySelectorAll('.sections');
    
    var current='home';
    sections.forEach((section)=>{
        const sectionTop = section.offsetTop;
        if(pageYOffset >= sectionTop-60){
            current = section.getAttribute('id');
        }
    })

    links.forEach((item)=>{
        item.classList.remove('active');
        if(item.href.includes(current)){
            item.classList.add('active');
        }
        else{
            item.classList.remove('active');
        }
    })





}

console.log( innerWidth);




