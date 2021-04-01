var rects=document.querySelectorAll('.rainbow')
var colors=['#9400D3', '#4B0082','#0000FF', 
'#00FF00', '#ffff00', '#ff7f00', '#ff0000']
rects.forEach((element, index)=>{
  element.addEventListener('mouseover', function(){
    element.style.backgroundColor=colors[index]
    myVar = setTimeout(function()       {element.style.backgroundColor='#fff'},1000);
    
  })
})
