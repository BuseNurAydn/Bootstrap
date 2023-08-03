let sonuc = document.querySelector(".inner");
let optButton = document.querySelectorAll("#optButton");
let btnNumber = document.querySelectorAll("#btnNumber");
let clear = document.querySelector(".clear");
let eşittir = document.querySelector(".equal");
/*SEÇME İŞLEMİNİ YAPTIK*/


clear.onclick = function(element){
      sonuc.value = "0";
}
btnNumber.forEach(function (element) {
   element.onclick = function(e){
      sonuc.value += this.textContent;
   }
});

optButton.forEach(function(element){
   element.onclick = function(e){
    sonuc.value += this.textContent;
   };
});

eşittir.onclick = function(element){
    sonuc.value = eval(sonuc.value);
};



    

