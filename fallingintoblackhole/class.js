//鼠标锚点
let markX=0;let markY =0;
function mousegrid(){
  //十字标
  push();
  fill(65,105,225);
  stroke(2);
  line(mouseX,0,mouseX,height);
  line(0,mouseY,width,mouseY);
  textSize(30);
  if (mouseIsPressed){
    //Canvassize(100);
    markX=mouseX;
    markY=mouseY;
  }
  text('X'+mouseX+'Y'+mouseY, mouseX, mouseY);
  text('EX'+(mouseX-windowWidth/2)+'EY'+(mouseY-windowHeight/2), mouseX, mouseY+30);
  pop();
  //
  fill(65,105,225);
  text('X'+markX+'Y'+markY, 32, 30);
  text('EX'+(markX-windowWidth/2)+'EY'+(markY-windowHeight/2), 32, 60);

  fill('rgb(0,255,0)');
  



  textSize(32);
  circle(markX, markY, 5);
}


//鼠标放大图块切换
function Clicksize(){
  //分度间隔
  let interval = 10;
  if (mouseIsPressed){
    
    if (blocksize < windowWidth & blocksize < windowHeight ){
    blocksize+= interval;

    }
    
    if (blocksize > windowWidth || blocksize > windowHeight ){
      blocksize -= interval;
    }
           
    Canvassize(blocksize);
    
  }
}


//鼠标选中图块切换
function ClickSelectTest(){
  //分度间隔
  if (mouseIsPressed){
    clickstate = 1;
  }
  else{
    clickstate = 0;
  }
}






let reset_buttonsize_k = 1;
function reset_button(){
  if(mouseX>3/10*windowWidth-1/8*blocksize&&mouseX<3/10*windowWidth+1/8*blocksize
    &&mouseY>9/10*windowHeight-1/8*blocksize&&mouseY<9/10*windowHeight+1/8*blocksize){
    if (reset_buttonsize_k<=1.05) {reset_buttonsize_k+=0.01;}
  }
  else{
    if (reset_buttonsize_k>=1.00) {reset_buttonsize_k-=0.01;}
  }
  imageMode(CENTER);
  image(reset_ico,3/10*windowWidth,9/10*windowHeight,1/4*blocksize*reset_buttonsize_k,1/4*blocksize*reset_buttonsize_k);
  // rect(1/6*windowWidth,9/10*windowHeight,
  // 3/18*windowWidth,1/16*windowHeight);
  // imageMode(CORNERS);

}





let conform_buttonsize_k = 1;


function conform_button(){

  if(mouseX>7/10*windowWidth-1/8*blocksize&&mouseX<7/10*windowWidth+1/8*blocksize
    &&mouseY>9/10*windowHeight-1/8*blocksize&&mouseY<9/10*windowHeight+1/8*blocksize){
    if (conform_buttonsize_k<=1.05) {conform_buttonsize_k+=0.01;}
  }
  else{
    if (conform_buttonsize_k>=1.00) {conform_buttonsize_k-=0.01;}
  }
  imageMode(CENTER);
  image(checked_ico,7/10*windowWidth,9/10*windowHeight,1/4*blocksize*conform_buttonsize_k,1/4*blocksize*conform_buttonsize_k);
  

}

let generative_buttonsize_k = 1;
function generative_button(state){
  if(mouseX>5/10*windowWidth-1/8*blocksize&&mouseX<5/10*windowWidth+1/8*blocksize
    &&mouseY>9/10*windowHeight-1/8*blocksize&&mouseY<9/10*windowHeight+1/8*blocksize){
    if (generative_buttonsize_k<=1.05) {generative_buttonsize_k+=0.01;}
  }
  else{
    if (generative_buttonsize_k>=1.00) {generative_buttonsize_k-=0.01;}
  }
  imageMode(CENTER);
  image(generative_ico,5/10*windowWidth,9/10*windowHeight,1/4*blocksize*generative_buttonsize_k,1/4*blocksize*generative_buttonsize_k);
  
}


////手调函数

//let Scale = 0.5;
//let v_leg1;let leg1_endx;let leg1_endy;let leg1_endX;let leg1_endY;
//let leg1_rd=0;
//let leg2_rd=0;

//function leg1(posX,posY,angle,scale){
//  push();
//  translate(posX, posY);
//  rotate((angle-90)*PI/180);//角度偏置
//  image(img_leg1, (400 - 529)*scale, (400 - 416)*scale,img_leg1.width*scale,img_leg1.height*scale);
//  //末端点位置  -v_leg1.x  -v_leg1.y
//  v_leg1 = createVector((400-138)*scale,(400-380)*scale);
//  leg1_endx=-v_leg1.x;
//  leg1_endy=-v_leg1.y;

//  // // 向量
//  // line(0,0,-v_leg1.x,-v_leg1.y);
//  //circle(-v_leg1.x,-v_leg1.y,5);  
  
//  // //相对坐标中心线
//  // line(0,-1000,0,1000);
//  // line(-1000,0,1000,0);
  
//  //相对坐标转换绝对坐标
//  rotate(-((angle-90)*PI/180));
//  leg1_endX= posX+(leg1_endx*cos((90-angle)*PI/180)+leg1_endy*sin((90-angle)*PI/180));
//  leg1_endY= posY+(leg1_endy*cos((90-angle)*PI/180)-leg1_endx*sin((90-angle)*PI/180));
  
//  // //绝对坐标中心线 
//  // line(0,-1000,0,1000);
//  // line(-1000,0,1000,0);
  
//  // //末端绝对坐标下旋转中心值
//  // fill('rgb(0,255,0)');
//  // text('X'+leg1_endX+'Y'+leg1_endY,leg1_endX-posX,leg1_endY-posY);
//  pop(); 
//  // //末端圆
//  // circle(leg1_endX,leg1_endY,5);  
  
//}


//function leg2(posX,posY,angle,scale){
//  push();
//  translate(posX, posY);
//  rotate((angle)*PI/180);//角度偏置

//  image(img_leg2, (0-18)*scale, (0+5)*scale,img_leg2.width*scale,img_leg2.height*scale);
//  circle(0, 0, 5);
//  // //中心线
//  // line(0,-1000,0,1000);
//  // line(-1000,0,1000,0);
//  pop();
//}
