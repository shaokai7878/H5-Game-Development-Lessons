var OverLayer = cc.Layer.extend({
    currentScore:0,
    bestScore:0,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        //重玩样式
        var replayLabel = new cc.LabelTTF("重　玩");
        replayLabel.setFontSize(size.width/8);
        replayLabel.setFontFillColor(cc.color.ORANGE);
        replayLabel.enableStroke(cc.color.YELLOW,5);

        var replayItem = new cc.MenuItemLabel(replayLabel,function(){
            cc.director.runScene(new MainScene());
        },this);

        var menu = new cc.Menu(replayItem);
        menu.y = size.height/5;
        this.addChild(menu);
        //logo
        var logo = new cc.LabelTTF("Game　Over");
        logo.setFontSize(size.width/8);
        logo.enableStroke(cc.color.RED,5);
        logo.x = size.width/2;
        logo.y = size.height*0.8;
        this.addChild(logo);

        //locaoStorage存贮
        var ls = cc.sys.localStorage;
        var currentScore = ls.getItem("currentScore");
        var bestScore = ls.getItem("bestScore");

        //本次成绩
        var currentScore = new cc.LabelTTF("本次成绩："+currentScore+"米");
        currentScore.setPosition(size.width/2,size.height*0.55);
        currentScore.setFontSize(size.width/12);
        this.addChild(currentScore);

        //历史最佳
        var bestScore = new cc.LabelTTF("历史最佳："+bestScore+"米");
        bestScore.setPosition(size.width/2,size.height*0.45);
        bestScore.setFontSize(size.width/12);
        this.addChild(bestScore);
        this.bestScore = bestScore;

        return true;
    }
});

var OverScene = cc.Scene.extend({
    ctor:function () {
        this._super();
        var layer = new OverLayer();
        this.addChild(layer);
    }
});
