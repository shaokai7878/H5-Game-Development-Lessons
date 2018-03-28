var MainLayer = cc.Layer.extend({
    arr:[],//存放两个图片
    plane:null,//存放飞机
    scoreLabel:null,//存放分数label
    score:0,//存放成绩
    enemy:null,
    speed:4,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        //首先实现一个无限滚屏
        for(var i=0;i<2;i++){
            var bg = new cc.Sprite(res.bg1_jpg);
            bg.setPosition(size.width/2,size.height/2+i*(bg.getBoundingBox().height));
            this.addChild(bg);
            this.arr[i]=bg;
        }
        //创建我方飞机
        var p1= new cc.Sprite(res.p1_png);
        p1.setPosition(size.width/2,size.height*0.3);
        this.addChild(p1);
        this.plane=p1;
        //创建控制按钮
            var leftItem = new cc.MenuItemFont("左移",function(){
                if(p1.x>100){
                    p1.x-=50;
                }
            },this);
            var rightItem = new cc.MenuItemFont("右移",function(){
                if(p1.x<size.width-100){
                    p1.x+=50;
                }
            },this)
            leftItem.setFontSize(120);
            leftItem.setColor(cc.color.ORANGE);
            rightItem.setFontSize(120);
            rightItem.setColor(cc.color.ORANGE);

            var menu = new cc.Menu(leftItem,rightItem);
            menu.y=size.height/5;
            menu.alignItemsHorizontallyWithPadding(200);
            this.addChild(menu);
            //创建敌方飞机
            var enemy = new cc.Sprite(res.p2_png);
            enemy.setRotation(180);
            enemy.setPosition(size.width/2,size.height);
            this.addChild(enemy);
            this.enemy=enemy;
            //分数标签
            var scoreLabel = new cc.LabelTTF("0米","",size.width/10);
            scoreLabel.setPosition(size.width/2,size.height-100);
            scoreLabel.setColor(cc.color.YELLOW);
            this.addChild(scoreLabel,1);
            this.scoreLabel = scoreLabel;


            this.schedule(this.bgCallBack,0.01);//滚屏回调函数
            this.schedule(this.enemyCallback,0.01);//随机敌人回调函数
        return true;
    },
    bgCallBack:function(dt){//无限滚屏
        for(var i in this.arr){
            if(this.arr[i].y<-720){
                this.arr[i].y+=2*1440;
            }
            this.arr[i].y-=2;
            this.score+=1;
            this.scoreLabel.setString(this.score+"米");
        }
    },
    enemyCallback:function(dt){
        if(this.enemy.y < 0){
            this.enemy.y = cc.winSize.height;
            this.enemy.x = cc.winSize.width*cc.random0To1();
            this.speed +=2;
        }else{
            this.enemy.y-=this.speed;//y>0时，下降的高度等于速度值，下降的speed越快，高度越大
            //碰撞检测
            if(cc.rectContainsPoint(this.plane.getBoundingBox(),this.enemy.getPosition())){
                cc.log("碰到了");
                var ls = cc.sys.localStorage;
                ls.setItem("currentScore",this.score);
                if(this.score>ls.getItem("bestScore")){
                    ls.setItem("bestScore",this.score);
                }
                cc.director.runScene(new OverScene());
            }
        }
    }

});

var MainScene = cc.Scene.extend({
    ctor:function () {
        this._super();
        var layer = new MainLayer();
        this.addChild(layer);
    }
});
