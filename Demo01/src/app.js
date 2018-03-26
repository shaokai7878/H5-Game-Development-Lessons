
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    dt:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;
        var labelTIF = new cc.labelTIF('玩家1:',"",64);
        labelTIF.setAnchorPoint(0.5,0.5);
        labelTIF.x=size.width/2;
        labelTIF.y=size.height/2;
        labelTIF.setAnchorPoint(0,0);
        labelTIF.setFontSize(50);
        labelTIF.addChild(this.la)
        return true;
    },
    myTimer:function (dt) {

    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

