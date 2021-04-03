var rects=document.querySelectorAll('.rainbow')
var colors=['whitesmoke', 'gainsboro','#c8c8c8', 
'#b0b0b0', '#989898']
rects.forEach((element, index)=>{
  element.addEventListener('mouseover', function(){
    element.style.backgroundColor=colors[index]
    myVar = setTimeout(function()       {element.style.backgroundColor='#fff'},1000);
    
  })
})

/*Slider*/
let btn=document.querySelector(".circle");
let whole=document.querySelector(".outer");
whole.addEventListener("click", function(){
  if(btn.classList.contains('left'))
    btn.style.marginLeft="45px";
  else
     btn.style.marginLeft="0px";
  btn.classList.toggle('left')
    
})