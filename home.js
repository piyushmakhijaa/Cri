
let c=0;
let img=document.querySelector(".img");
    let textdiv=document.createElement("div");
    let textdiv1=document.createElement("div");
    let textdiv2=document.createElement("div");
    let or=document.querySelector(".or");
    let create=document.querySelector(".create");
    let sign=document.querySelector(".sign");
document.querySelector(".img").addEventListener('mouseover', ()=> {
    img.append(textdiv);
    img.append(textdiv1);
    img.append(textdiv2);
    textdiv.style.color="white";
    textdiv.style.fontSize="100px";
    textdiv.innerText="bat";
    textdiv.style.position="absolute";
    textdiv.style.top="490px"
    textdiv.style.left="15px";
    
    textdiv1.style.color="white";
    textdiv1.style.fontSize="100px";
    textdiv1.innerText="ball";
    textdiv1.style.position="absolute";
    textdiv1.style.top="562px";
    textdiv1.style.left="15px";
    
    textdiv2.style.color="white";
    textdiv2.style.fontSize="100px";
    textdiv2.innerText="banter";
    textdiv2.style.position="absolute";
    textdiv2.style.top="635px";
    textdiv2.style.left="15px";

    or.style.color="white";
    create.style.color="white";
    sign.style.color="white";
    
   /* textdiv2.style.fontFamily="Barriecito"; */
      });

      document.querySelector(".img").addEventListener('mouseout', ()=> {
        img.append(textdiv);
        img.append(textdiv1);
        img.append(textdiv2);
        textdiv.style.color="white";
        textdiv.style.fontSize="100px";
        textdiv.innerText="";
        textdiv.style.position="absolute";
        textdiv.style.top="490px"
        textdiv.style.left="15px";
        
        textdiv1.style.color="white";
        textdiv1.style.fontSize="100px";
        textdiv1.innerText="";
        textdiv1.style.position="absolute";
        textdiv1.style.top="555px";
        textdiv1.style.left="15px";
        
        textdiv2.style.color="white";
        textdiv2.style.fontSize="100px";
        textdiv2.innerText="";
        textdiv2.style.position="absolute";
        textdiv2.style.top="635px";
        textdiv2.style.left="15px";
        or.style.color="black";
    create.style.color="black";
    sign.style.color="black";
          });
          let dropdiv=document.createElement("select");
          let opt1=document.createElement("option");
          let opt2=document.createElement("option");
          let opt3=document.createElement("option");
          let opt4=document.createElement("option");
          opt1.innerText="INDIA";
          opt2.innerText="AUSTRALIA";
          opt3.innerText="ENGLAND";
          opt4.innerText="SRI LANKA";
          dropdiv.append(opt1);
          dropdiv.append(opt2);
          dropdiv.append(opt3);
          dropdiv.append(opt4);

          document.querySelector(".teams").addEventListener('mouseover', ()=> {
           
            document.querySelector(".teams").append(dropdiv);
            
               
          });