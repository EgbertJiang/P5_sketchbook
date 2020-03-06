let man = []; //太空人对象数组
var state_v_spaceman = [];//太空人对象数组的坐标和比例
var angle_v_spaceman = [];//太空人对象各个关节的角度数组

var generative_V = [];
var sum_V = [];
var mean_V = [];
let click_generative_times=0;
let init_size = 500;
//一个块的尺寸
let blocksize;
//偏置用
let list;let row;let up_offset;let left_offset;
let clickstate= [];

let wholewidth;

let reset_ico;
let checked_ico;
let generative_ico;

function setup() {

  imageMode(CENTER);
  //frameRate(5);
  createCanvas(windowWidth, windowHeight);
  init_size = windowWidth /3;
  init(init_size);
  
  reset_ico = loadImage('data/refresh.png');
  checked_ico = loadImage('data/checked.png');
  generative_ico = loadImage('data/generative.png');

  


}



function Canvassize(size){
  list = Math.floor(windowWidth  /  size);  //列数
  row  = Math.floor(windowHeight /  size); //行数
  left_offset= windowWidth - size *list;
  wholewidth = windowWidth - 2 *left_offset;
  up_offset =  windowHeight - 1.2*size *row;
  num = list*row;
  blocksize = size;
  // clickstate=0;
  for(let i=0;i<(row*list);i++){
    man[i] = new spaceman();
    state_v_spaceman[i] = [];
    angle_v_spaceman[i] = [];
    generative_V[i] = [];
  }
 }




function init(size){
    Canvassize(size);
    generative_V = [];
    sum_V = [];
    mean_V = [];
    click_generative_times=0;
  ////行列数显示
  //text(list+' '+row,10,10);

  for(let i = 0; i<row*list;i++){
    angle_v_spaceman[i] = [random(-50,50),random(-50,50), //坐标
                  random(-20,50),random(360), //head back
                  random(-20,130),random(0,150), //l leg
                  random(-20,130),random(0,150), //r leg
                  random(-90,180),random(0,150),  
                  random(-90,180),random(0,150)];
    clickstate[i]=0;
  }

}





let click_tag = 0;
let click_generatvie_Ptimes=0;
function mouseClicked() {
  //鼠标在设计区域中
  if(mouseX>left_offset&&mouseX<windowWidth-left_offset&&mouseY>up_offset&&mouseY<windowHeight-up_offset){
      for(let i=0;i<row;i++){
        for(let j=0;j<list;j++){
          let Mouselength = dist(mouseX,mouseY,j*blocksize + left_offset/2+0.5*blocksize , up_offset/2 +i*blocksize+0.5*blocksize);
          if (Mouselength<blocksize/2 ){

            //选中设计
            if(clickstate[j+i*list] != 2){
                clickstate[j+i*list]=2;}
            //删选设计
            else{clickstate[j+i*list]=1;}
            }
        }
      }
  }

  // //鼠标选中重置
  if(mouseX>3/10*windowWidth-1/8*blocksize&&mouseX<3/10*windowWidth+1/8*blocksize
    &&mouseY>9/10*windowHeight-1/8*blocksize&&mouseY<9/10*windowHeight+1/8*blocksize){
    init(init_size);
  }

  //鼠标选中迭代
  if(mouseX>5/10*windowWidth-1/8*blocksize&&mouseX<5/10*windowWidth+1/8*blocksize
    &&mouseY>9/10*windowHeight-1/8*blocksize&&mouseY<9/10*windowHeight+1/8*blocksize){
    click_generatvie_Ptimes=click_generative_times;
    for(let i = 0; i<num+1;i++){
      //generative_V[i]=angle_v_spaceman[i];
      //print(clickstate[i]);

        if(clickstate[i]){
          generative_V[click_generative_times]=angle_v_spaceman[i];
          //print(generative_V[click_generative_times][1]);
          click_generative_times++;
           
        }
      }
      click_tag=click_generative_times-click_generatvie_Ptimes;
      
     print(click_tag);
    
    for (let i = 0 ; i<generative_V[0].length ; i++){
      sum_V[i]=0;
      // print(sum_V[i]);
    }
       

    if(click_tag !=0){

         for(let i =0 ; i <generative_V[0].length  ; i++){
           //print(generative_V[i]);
           for (let j = 0 ; j < click_generative_times ; j++){
             sum_V[i]+=generative_V[j][i];
             
           }
           mean_V[i] = sum_V[i]/click_generative_times;
           print(mean_V[i]);
         }

      for(let i =0 ; i <num+1 ; i++){
         for (let j = 0 ; j < angle_v_spaceman[i].length ; j++){
           angle_v_spaceman[i][j] = mean_V[j]+ random(angle_v_spaceman[i][j]-mean_V[j]);
           print(clickstate[angle_v_spaceman[i][j] ]);
         }

      }


      for(let i =0;i<num+1;i++){
        clickstate[i]=0;
      }
    }
      
  }

  // //鼠标选中确认
  if(mouseX>7/10*windowWidth-1/8*blocksize&&mouseX<7/10*windowWidth+1/8*blocksize
    &&mouseY>9/10*windowHeight-1/8*blocksize&&mouseY<9/10*windowHeight+1/8*blocksize){

  }


}
     
function draw() { 
  //Canvassize(300);
  clear();

  ////画布偏置标记
  //text(left_offset+' '+up_offset,10,200);
  //text(list+' '+row,10,250);
  //text(windowWidth+' '+windowHeight,10,150);


  //状态向量赋值
  for(let _i=0;_i<row;_i++){
    for(let _j=0;_j<list;_j++){
      
      //鼠标悬停效果
      let Mouselength = dist(mouseX,mouseY,_j*blocksize + left_offset/2+0.5*blocksize , up_offset/2 +_i*blocksize+0.5*blocksize);
      if (Mouselength<blocksize/2 ){
        if(clickstate[_j+_i*list] != 2){
          clickstate[_j+_i*list]=1;
        }
        // //显示鼠标到最近设计中点位置
        //text(Mouselength,state_v_spaceman[_j+_i*list][0]-blocksize/2,state_v_spaceman[_j+_i*list][1]-blocksize/2);
      }
      else if (clickstate[_j+_i*list] != 2){
        clickstate[_j+_i*list]=0;
      }
      //调整比例，整体参数赋值
      state_v_spaceman[_j+_i*list] = [_j*blocksize + left_offset/2+0.5*blocksize , up_offset/2 +_i*blocksize+0.5*blocksize,blocksize/1000,clickstate[_j+_i*list]];
      // angle_v_spaceman[_j+_i*list] = [random(360),random(360)];
      num = _j+_i*list; 
    }   
  }
  

  //作图
   for(let i=0;i<row*list;i++){
     man[i].display(state_v_spaceman[i][0],state_v_spaceman[i][1],state_v_spaceman[i][2],state_v_spaceman[i][3],angle_v_spaceman[i][0],angle_v_spaceman[i][1],angle_v_spaceman[i][2],angle_v_spaceman[i][3],
       angle_v_spaceman[i][4],angle_v_spaceman[i][5],angle_v_spaceman[i][6],angle_v_spaceman[i][7],angle_v_spaceman[i][8],angle_v_spaceman[i][9],angle_v_spaceman[i][10],angle_v_spaceman[i][11]);
     ////编号
     //fill(0);
     //text(clickstate[i],state_v_spaceman[i][0],state_v_spaceman[i][1]);
   }
  
  generative_button();
  reset_button();
  conform_button();
  // 鼠标锚点
  //mousegrid();
   //鼠标放大图块切换
   //Clicksize();
  //////点击选中测试
  //ClickSelectTest();
}
