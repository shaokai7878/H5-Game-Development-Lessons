
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {

        this._super();

        var size = cc.winSize;

        var size = cc.winSize;

        var layer1 = new cc.LayerColor(cc.color.RED,200,200);

        layer1.x=size.width/2;
        layer1.y=size.height/2;
        layer1.ignoreAnchor= false;
        this.addChild(layer1);

        return true;
    }
});

var HelloWorldScene = cc.Scene.extend({
    onEnter:function () {
        this._super();
        var layer = new HelloWorldLayer();
        this.addChild(layer);
    }
});

