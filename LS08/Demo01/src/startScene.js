var startLayer = cc.Layer.extend({
    ctor:function(){
        this._super();
        var layer = new cc.LayerColor(cc.color.BLUE);
        this.addChild(layer);

        var size = cc.winSize;//获得屏幕尺寸

        var label = new cc.LabelTTF("这是开始场景","",50);
        label.x = size.width/2;
        label.y = size.height*0.7;
        this.addChild(label);

        var menuItem = new cc.MenuItemFont("跳转到主游戏场景",function () {
            //cc.director.runScene(new MainScene());
            cc.director.runScene(new cc.TransitionMoveInR(2,new MainScene()));
        },this);
        var menu =new cc.Menu(menuItem);
        menu.setPosition(0,0);
        menuItem.x = size.width/2;
        menuItem.y = size.height*0.3;
        this.addChild(menu);
    }
});

var startScene = cc.Scene.extend({
    ctor:function () {
        this._super();
        //var layer = new cc.LayerColor(cc.color.RED);
        var layer = new startLayer();
        this.addChild(layer);
    }
});