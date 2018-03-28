// var CustomLayer = cc.Layer.extend({
//     ctor:function () {
//         this._super();
//         var size = cc.winSize;
//
//         var menuItem = new cc.MenuItemFont("这是CustomLayer层");
//         var menu = new cc.Menu(menuItem);
//         menu.setPosition(0,0);
//         menuItem.x = size.width/2;
//         menuItem.y = size.height*0.7;
//         this.addChild(menu);
//     }
// });
// var Bglayer = cc.Layer.extend({
//     ctor:function () {
//         this._super();
//         // this.addChild(cc.LayerColor(cc.color.WHITE));
//
//         var gdLayer1 = new cc.LayerGradient(cc.color.RED,new cc.Color(255,0,0),cc.p(0,-1));
//         var gdLayer2 = new cc.LayerGradient(cc.color.RED,new cc.Color(255,0,0),cc.p(0,-1),
//             [{p:0,color:cc.color.RED},
//                 {p:5,color:new cc.Color(0,0,0,0)},
//                 {p:1,color:cc.color.RED}]);
//         this.addChild(gdLayer1);
//         //this.addChild(gdLayer2);
//     }
// });
//
//
// var MainScene = cc.Scene.extend({
//     ctor:function () {
//         this._super();
//         //var layer = new cc.LayerColor(cc.color.RED);
//         var bgLayer = new Bglayer();
//         this.addChild(bgLayer);
//         var customLayer = new CustomLayer();
//         this.addChild(customLayer);
//         // var layer = new MainLayer();
//         // this.addChild(layer);
//     }
// });