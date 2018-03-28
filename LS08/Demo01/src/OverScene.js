var OverLayer = cc.Layer.extend({
    ctor:function(){
        this._super();
        var layer = new cc.LayerColor(cc.color.GREEN);
        this.addChild(layer);

        var size = cc.winSize;//获得屏幕尺寸

        var label = new cc.LabelTTF("这是结束场景","",50);
        label.x = size.width/2;
        label.y = size.height*0.7;
        this.addChild(label);

        var menuItem = new cc.MenuItemFont("跳转到开始场景",function () {
            //cc.director.runScene(new startScene());
            //cc.director.runScene(new cc.TransitionCrossFade(2,new startScene()));
            cc.director.runScene(new cc.TransitionShrinkGrow(2,new startScene()) );
        },this);
        var menu =new cc.Menu(menuItem);
        menu.setPosition(0,0);
        menuItem.x = size.width/2;
        menuItem.y = size.height*0.3;
        this.addChild(menu);
    }
});

var OverScene = cc.Scene.extend({
    ctor:function () {
        this._super();
        //var layer = new cc.LayerColor(cc.color.RED);
        var layer = new OverLayer();
        this.addChild(layer);
    }
});