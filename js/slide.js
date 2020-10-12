"use strict"
{
  const images = [
    "img/slide/music.gif",
    "img/slide/PC.jpg",
    "img/slide/pc-1.jpg",
    "img/slide/tee.gif"
  ];

  const largeImg = [
    "img/slide/music_large.gif",
    "img/slide/SP.jpg",
    "img/slide/SP-1.jpg",
    "img/slide/tee_large.gif"
  ];

  //はじめに表示されている画像をあらわす
  let  currentIndex = 0; 
  let img;
  
  function checkWidth() {
  	if(window.innerWidth >= 640) {
  		img = images;
  	} else {
  		img = largeImg;
  	}
  
  
  }   
  window.onload =  checkWidth(); 
  
  

  const mainPic = document.getElementById("mainPic");
 
  
  window.addEventListener("resize", () => {
  	     checkWidth()
  });  
  
  
  const list = document.querySelectorAll(".list");
  function changeOpacity(currentIndex) {
  	for(let i = 0; i < currentIndex; i++) {
	  	
  		if(i === currentIndex) {
  			
  			list[i].style.opacity = 1;
  		} else {
  			list[i].style.opacity = 0.5;
  		}                       	
  	}
  } 
  
  console.log(list);

  //次へボタンの実装
  const next = document.getElementById("next");
  next.addEventListener("click", () =>  {
    
    
    let target = currentIndex ++;
    
    if (target === img.length) {
      currentIndex = 0;
      target = currentIndex;
      mainPic.src = img[target];
    }
    mainPic.src = img[target];


  });
  

    //前へボタンの実装
  const prev = document.getElementById("prev");
  prev.addEventListener("click", () =>  {

    //前のサムネイルを現在のサムネから+1と表現している
    let target = currentIndex --;


    //最初のサムネまで行ったら最初に戻る処理
    if (target < 0) {
      currentIndex = img.length -1;
      target = currentIndex;
      mainPic.src = img[target];  
      
    }
    mainPic.src = img[target];
  });

  let timeout;

function count() {
  next.click(); 
   changeOpacity(currentIndex);
   console.log(currentIndex);
  timeout = setTimeout(count, 3000);
}

count(); 

}