x=1;
function slider(){
    img=document.getElementById("imgslide");
     if(x<5) 
        {
           x++;   }
       else{
            x=1;    }
    img.src="image/slider"+x+".jpg";
}
function slider_time(){
   setInterval("slider()",2000);
}

