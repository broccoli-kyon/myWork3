"use strict"; 
{
  const menu = document.getElementById("menu");
  
  menu.addEventListener("click", () => {
    const topMenu = document.getElementById("topMenu");
    topMenu.classList.toggle("hidden");
  });  
  
  
  const about = document.getElementById("about");
  
  about.addEventListener("click", () => {
    const aboutDeploy = document.getElementById("aboutDeploy");
    aboutDeploy.classList.toggle("hidden");
  });   
  
  const team = document.getElementById("team");
  
  team.addEventListener("click", () => {
    const teamDeploy = document.getElementById("teamDeploy");
    teamDeploy.classList.toggle("hidden");
  }); 
  
  const house = document.getElementById("house");
  
  house.addEventListener("click", () => {
    const houseDeploy = document.getElementById("houseDeploy");
    houseDeploy.classList.toggle("hidden");
  });
  
  const product = document.getElementById("product");
  
  product.addEventListener("click", () => {
    const productDeploy = document.getElementById("productDeploy");
    productDeploy.classList.toggle("hidden");
  });
   
  
  const shop = document.getElementById("shop");
  
  shop.addEventListener("click", () => {
    const shopDeploy = document.getElementById("shopDeploy");
    shopDeploy.classList.toggle("hidden");
  });


     
     
     
     
  //右下矢印クリックでページトップで戻る
  const back = document.getElementById("back");

  back.addEventListener("click", () => {
    scrollTo(0, 0);
  }); 
  
  

  const deploy = document.querySelectorAll(".deploy");
  
  

       
	const bottomContents = document.getElementById("bottomContents");
  
  bottomContents.addEventListener("click", () => {
    const bottomContentsDeploy = document.getElementById("bottomContentsDeploy");
    bottomContentsDeploy.classList.toggle("hidden");
  }); 
         
  
  const bottomSupport = document.getElementById("bottomSupport");
  
  bottomSupport.addEventListener("click", () => {
    const bottomSupportDeploy = document.getElementById("bottomSupportDeploy");
    bottomSupportDeploy.classList.toggle("hidden");
  });       
  
  
  const bottomContact = document.getElementById("bottomContact");
  
  bottomContact.addEventListener("click", () => {
    const bottomContactDeploy = document.getElementById("bottomContactDeploy");
    bottomContactDeploy.classList.toggle("hidden");
  });
           
}