class spaceman{
  //(初始X，初始Y，缩放比例，左大腿角度，左小腿角度)
  constructor(){
    //this.Left_leg2_rd=Left_led2_rd;
    this.img_leg1 = loadImage('data/leg1.png');
    this.img_leg2 = loadImage('data/leg2.png');
    this.img_arm1 = loadImage('data/arm1.png');
    this.img_arm2 = loadImage('data/arm2.png');
    this.img_back = loadImage('data/back.png');
    this.img_head = loadImage('data/head.png');
    
    this.backgroundPic=loadImage('background/'+int(random(1,100))+'.png');

    this.Left_leg1_endX = 0;
    this.Left_leg1_endY = 0; 
    
    

    this.head_div
    this.head_endX;
    this.head_endY;

    this.L_leg1_endX;
    this.L_leg1_endY;

    this.L_arm1_endX;
    this.L_arm1_endY;
    


    this.back2headX;this.back2headY;

    this.back2armX;this.back2armY;
    this.back2legX;this.back2legY;


    //image(this.img_leg1, 0, 0, width/2, height/2);
    //this,img_leg2 = loadImage('leg2.png'); 
    this.background_k=0.95;//背景图框比例


  
  }

  display(PosX,PosY,scale,select, manX,manY, head_rd,back_rd,l_leg1_rd,l_leg2_rd,r_leg1_rd,r_leg2_rd,l_arm1_rd,l_arm2_rd,r_arm1_rd,r_arm2_rd){  
    this.Scale = 0.3*scale;
    this.PosX = PosX;this.PosY = PosY;
    //X = -50~50 Y = -50 ~ 50
    this.manX = PosX+manX;this.manY = PosY+manY;


    //-20~50
    this.head_rd = head_rd;
    //360
    this.back_rd = back_rd;

    //-20~130
    this.l_leg1_rd = -l_leg1_rd;
    //0~150
    this.l_leg2_rd = l_leg2_rd;   
    this.r_leg1_rd = -r_leg1_rd;
    this.r_leg2_rd = r_leg2_rd;                                                                                             


    //-90~180 
    this.l_arm1_rd = -l_arm1_rd;
    //0~150
    this.l_arm2_rd = -l_arm2_rd;   
    this.r_arm1_rd = r_arm1_rd;
    this.r_arm2_rd = -r_arm2_rd;   

    // this.Left_leg1_rd=Left_led1_rd;
    // this.Left_leg2_rd=Left_led2_rd;
    this.innerszie = scale*1000;
    this.selcetstate = select;

    this.background(this.selcetstate);
    this.back(this.manX,this.manY,this.back_rd,this.Scale);
    this.leg1(this.back2legX,this.back2legY,this.back_rd-this.l_leg1_rd ,this.Scale);
    this.leg2(this.L_leg1_endX,this.L_leg1_endY,(this.back_rd-this.l_leg1_rd)-this.l_leg2_rd,this.Scale);
    this.leg1(this.back2legX,this.back2legY,this.back_rd-this.l_leg1_rd ,this.Scale);
    this.arm1(this.back2armX,this.back2armY,this.back_rd-this.l_arm1_rd ,this.Scale);
    this.arm2(this.L_arm1_endX,this.L_arm1_endY,(this.back_rd-this.l_arm1_rd)-this.l_arm2_rd,this.Scale);
    this.leg1(this.back2legX,this.back2legY,this.back_rd-this.r_leg1_rd ,this.Scale);
    this.leg2(this.L_leg1_endX,this.L_leg1_endY,(this.back_rd-this.r_leg1_rd)-this.r_leg2_rd,this.Scale);
    this.leg1(this.back2legX,this.back2legY,this.back_rd-this.r_leg1_rd ,this.Scale);
    this.back(this.manX,this.manY,this.back_rd,this.Scale);
    this.head(this.back2headX,this.back2headY,-this.back_rd,this.head_rd,this.Scale);
    this.arm1(this.back2armX,this.back2armY,this.back_rd-this.r_arm1_rd ,this.Scale);
    this.arm2(this.L_arm1_endX,this.L_arm1_endY,(this.back_rd-this.r_arm1_rd)-this.r_arm2_rd,this.Scale);
  }

  //背景框
  background(state){
    rectMode(CENTER);

    //选中状态
    if(state == 1){
      if(this.background_k<1.01){
        this.background_k+=0.01;}
      //选中框颜色
      fill(211);
      noStroke(); 
      rect(this.PosX,this.PosY,this.background_k*this.innerszie,this.background_k*this.innerszie);
    }
    //非选中状态
    if(state == 0){
      if(this.background_k>0.95){
        this.background_k-=0.01;}
      //默认颜色
      fill(245);
      noStroke(); 
      rect(this.PosX,this.PosY,this.background_k*this.innerszie,this.background_k*this.innerszie);

  }
    //点击
    if(state == 2){
      if(this.background_k<1.01){
        this.background_k+=0.01;}
      //默认颜色
      fill(100);
      noStroke(); 
      rect(this.PosX,this.PosY,this.background_k*this.innerszie,this.background_k*this.innerszie);
    }
    imageMode(CENTER);
    image(this.backgroundPic,this.PosX,this.PosY,this.background_k*this.innerszie,this.background_k*this.innerszie);


    rectMode(CORNERS);
  }


  //背
  back(posX,posY,angle,scale){
    this.posX=posX;this.posY=posY;this.angle=angle;this.scale=scale;

    this.S_headX = 92     *this.scale;
    this.S_headY = -434 *this.scale; 

    this.S_armX = 128     *this.scale;
    this.S_armY = -362  *this.scale; 

    this.S_legX = 0     *this.scale;
    this.S_legY = 0  *this.scale; 

    
    ////////////////////////////
    push();
    translate(this.posX, this.posY);
    rotate(this.angle*PI/180);//角度偏置
    //随机颜色测试
    //tint(0, 0, random(255)); 
    
    image(this.img_back, (0)*this.scale, (0)*this.scale,this.img_back.width*this.scale,this.img_back.height*this.scale);
    
     // // 向量
     // line(0,0,this.S_headX,this.S_headY);
     // circle(this.S_headX,this.S_headY,5);  

     //// 相对坐标中心线
     // stroke(2);
     // line(0,-1000,0,1000);
     // line(-1000,0,1000,0);

    //相对坐标转换绝对坐标
    rotate(-(this.angle*PI/180));
    this.back2headX= this.posX+(this.S_headX*cos(this.angle*PI/180)-this.S_headY*sin(this.angle*PI/180));
    this.back2headY= this.posY+(this.S_headY*cos(this.angle*PI/180)+this.S_headX*sin(this.angle*PI/180));


    this.back2armX= this.posX+(this.S_armX*cos(this.angle*PI/180)-this.S_armY*sin(this.angle*PI/180));
    this.back2armY= this.posY+(this.S_armY*cos(this.angle*PI/180)+this.S_armX*sin(this.angle*PI/180));

    this.back2legX= this.posX+(this.S_legX*cos(this.angle*PI/180)-this.S_legY*sin(this.angle*PI/180));
    this.back2legY= this.posY+(this.S_legY*cos(this.angle*PI/180)+this.S_legX*sin(this.angle*PI/180));

     //print(this.back2headY);

//     // 绝对坐标中心线 
//     line(0,-1000,0,1000);
//     line(-1000,0,1000,0);

//    //末端绝对坐标值
//     // fill('rgb(0,255,0)');

//    //head
//     text('X'+this.back2headX+'Y'+this.back2headY,this.back2headX-this.posX,this.back2headY-this.posY);
    
    pop(); 
    ////////////////////////

    // // 末端圆 head
    // circle(this.back2headX,this.back2headY,5);  
    // //末端圆 arm
    // circle(this.back2armX,this.back2armY,5); 
    //末端圆 leg
    // circle(this.back2legX,this.back2legY,5); 

  }

  //头
  head(posX,posY,div_angle,angle,scale){



    this.posX=posX-(72)*sin((div_angle-10)*PI/180)*this.scale;
    this.posY=posY-(72)*cos((div_angle-10)*PI/180)*this.scale;
    this.angle=angle;this.scale=scale;

    this.endX = 0   *this.scale;
    this.endY = 128  *this.scale; 

    
    ////////////////////////////
    push();
    translate(this.posX, this.posY);
    rotate(-div_angle*PI/180);
    rotate(this.angle*PI/180);//角度偏置
    //随机颜色测试
    //tint(0, 0, random(255)); 
    
    image(this.img_head, (0)*this.scale, (0)*this.scale,this.img_head.width*this.scale,this.img_head.height*this.scale);
    
     // // 向量
     // line(0,0,this.endX,this.endY);
     // circle(this.endX,this.endY,5);  

    // 相对坐标中心线
     // stroke(2);
     // line(0,-1000,0,1000);
     // line(-1000,0,1000,0);

    //相对坐标转换绝对坐标
    rotate(-(this.angle*PI/180));
    this.head_endX= this.posX+(this.endX*cos(this.angle*PI/180)-this.endY*sin(this.angle*PI/180));
    this.head_endY= this.posY+(this.endY*cos(this.angle*PI/180)+this.endX*sin(this.angle*PI/180));
    // print(this.head_endY);

    //绝对坐标中心线 
    // line(0,-1000,0,1000);
    // line(-1000,0,1000,0);

    //末端绝对坐标值
    // // fill('rgb(0,255,0)');
    // text('X'+this.head_endX+'Y'+this.head_endY,this.head_endX-this.posX,this.head_endY-this.posY);
    
    pop(); 
    ////////////////////////

    //末端圆
    // circle( this.head_endX, this.head_endY,5);  
  }

  //大腿            
  leg1(posX,posY,angle,scale){

    this.posX=posX;this.posY=posY;
    this.angle=angle;this.scale=scale;

    this.endX = -300  *this.scale;
    this.endY = 302  *this.scale; 

    
    ////////////////////////////
    push();
    translate(this.posX, this.posY);

    rotate(this.angle*PI/180);//角度偏置
    //随机颜色测试
    //tint(0, 0, random(255)); 
    
    image(this.img_leg1, (0)*this.scale, (0)*this.scale,this.img_leg1.width*this.scale,this.img_leg1.height*this.scale);
    
     // // 向量
     // line(0,0,this.endX,this.endY);
     // circle(this.endX,this.endY,5);  

    // 相对坐标中心线
     // stroke(2);
     // line(0,-1000,0,1000);
     // line(-1000,0,1000,0);

    //相对坐标转换绝对坐标
    rotate(-(this.angle*PI/180));
    this.L_leg1_endX= this.posX+(this.endX*cos(this.angle*PI/180)-this.endY*sin(this.angle*PI/180));
    this.L_leg1_endY= this.posY+(this.endY*cos(this.angle*PI/180)+this.endX*sin(this.angle*PI/180));
    // print(this.L_leg1_endX);

    //绝对坐标中心线 
    // line(0,-1000,0,1000);
    // line(-1000,0,1000,0);

    //末端绝对坐标值
    // // fill('rgb(0,255,0)');
    // text('X'+this.L_leg1_endX+'Y'+this.L_leg1_endX,this.L_leg1_endX-this.posX,this.L_leg1_endX-this.posY);
    
    pop(); 
    ////////////////////////

    //末端圆
    // circle( this.L_leg1_endX, this.L_leg1_endY,5);  
  }
  //小腿            
  leg2(posX,posY,angle,scale){

    this.posX=posX;this.posY=posY;
    this.angle=angle;this.scale=scale;
   
    ////////////////////////////
    push();
    translate(this.posX, this.posY);

    rotate(this.angle*PI/180);//角度偏置
    //随机颜色测试
    //tint(0, 0, random(255)); 
    
    image(this.img_leg2, (0)*this.scale, (0)*this.scale,this.img_leg2.width*this.scale,this.img_leg2.height*this.scale);
    

    pop(); 
  }
    //大腿            
  arm1(posX,posY,angle,scale){

    this.posX=posX;this.posY=posY;
    this.angle=angle;this.scale=scale;

    this.endX = -6  *this.scale;
    this.endY = 292  *this.scale; 

    
    ////////////////////////////
    push();
    translate(this.posX, this.posY);

    rotate(this.angle*PI/180);//角度偏置
    //随机颜色测试
    //tint(0, 0, random(255)); 
    
    image(this.img_arm1, (0)*this.scale, (0)*this.scale,this.img_arm1.width*this.scale,this.img_arm1.height*this.scale);
    
     // // 向量
     // line(0,0,this.endX,this.endY);
     // circle(this.endX,this.endY,5);  

    // 相对坐标中心线
     // stroke(2);
     // line(0,-1000,0,1000);
     // line(-1000,0,1000,0);

    //相对坐标转换绝对坐标
    rotate(-(this.angle*PI/180));
    this.L_arm1_endX= this.posX+(this.endX*cos(this.angle*PI/180)-this.endY*sin(this.angle*PI/180));
    this.L_arm1_endY= this.posY+(this.endY*cos(this.angle*PI/180)+this.endX*sin(this.angle*PI/180));
    // print(this.L_arm1_endX);

    //绝对坐标中心线 
    // line(0,-1000,0,1000);
    // line(-1000,0,1000,0);

    //末端绝对坐标值
    // // fill('rgb(0,255,0)');
    // text('X'+this.L_arm1_endX+'Y'+this.L_arm1_endX,this.L_arm1_endX-this.posX,this.L_arm1_endX-this.posY);
    
    pop(); 
    ////////////////////////

    //末端圆
    // circle( this.L_arm1_endX, this.L_arm1_endY,5);  
  }
  //小腿            
  arm2(posX,posY,angle,scale){

    this.posX=posX;this.posY=posY;
    this.angle=angle;this.scale=scale;
   
    ////////////////////////////
    push();
    translate(this.posX, this.posY);

    rotate(this.angle*PI/180);//角度偏置
    //随机颜色测试
    //tint(0, 0, random(255)); 
    
    image(this.img_arm2, (0)*this.scale, (0)*this.scale,this.img_arm2.width*this.scale,this.img_arm2.height*this.scale);
    

    pop(); 
  }





}
