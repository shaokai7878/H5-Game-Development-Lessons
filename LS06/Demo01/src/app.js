
var HelloWorldLayer = cc.Layer.extend({
    sprite:null,
    ctor:function () {
        this._super();
        var size = cc.winSize;

        var node1 = new cc.Sprite(res.Red);
        node1.setAnchorPoint(cc.p(0.5,0.5));
        node1.x = 150;
        node1.y = 150;
        this.addChild(node1);

        var node2 = new cc.Sprite(res.Yellow);
        node2.setAnchorPoint(cc.p(0.5,0.5));
        node2.x = 200;
        node2.y = 200;
        this.addChild(node2);

        //var point = node2.convertToNodeSpaceAR(node1.getPosition());
        var point = node2.convertToNodeSpace(node1.getPosition());
        cc.log(point.x);
        cc.log(point.y);

        node1._setLocalZOrder(8);
        node2._setLocalZOrder(9);

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

