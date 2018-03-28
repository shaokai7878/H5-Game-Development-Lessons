
var HelloWorldLayer = cc.Layer.extend({
    setScene:SetScene,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        var helloLayer = new cc.LayerColor(cc.color.RED);
        this.addChild(helloLayer);
        var setScene = new SetScene();
        var btn1  = new cc.MenuItemFont("设置",function () {
            cc.director.pushScene(setScene);
        },this);
        var menu1 =new cc.Menu(btn1);
        btn1.setPosition(0,0);
        menu1.x=size.width/2;
        menu1.y=size.height/2;
        this.addChild(menu1);

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    ctor:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});
var SetLayer = cc.Layer.extend({
    ctor:function () {
        this._super();
        var size = cc.winSize;
        var btn2 =  new cc.MenuItemFont("返回",function () {
            cc.director.popScene();
        },this);
        var menu2 = new cc.Menu(btn2);
        btn2.setPosition(0,0);
        menu2.x=size.width/2;
        menu2.y=size.height/2;
        this.addChild(menu2);
        return true;
    }
})
var SetScene = cc.Scene.extend({
    ctor:function () {
        this._super();
        var setLayer = new SetLayer();
        this.addChild(setLayer);
    },
    onEnter:function () {
        cc.log('onEnter worked!');
    },
    onExit:function(){
        cc.log('onExit worked!');
    }
})

