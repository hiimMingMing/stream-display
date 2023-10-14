System.register("chunks:///_virtual/PlayerAnimation.ts",["./_rollupPluginModLoBabelHelpers.js","cc"],(function(i){"use strict";var n,e,r,t,o,a,l,c,u;return{setters:[function(i){n=i.applyDecoratedDescriptor,e=i.inheritsLoose,r=i.initializerDefineProperty,t=i.assertThisInitialized,o=i.defineProperty},function(i){a=i.cclegacy,l=i._decorator,c=i.Animation,u=i.Component}],execute:function(){var s,p,m,y,A;i("PLAYER_ANIMS",void 0),a._RF.push({},"4861ecsES5FzJEMzqOwaR5L","PlayerAnimation",void 0);var f,d=l.ccclass,v=l.property;!function(i){i[i.run=0]="run",i[i.jump=1]="jump",i[i.idle=2]="idle"}(f||(f=i("PLAYER_ANIMS",{})));i("PlayerAnimation",(s=d("PlayerAnimation"),p=v(c),s((A=n((y=function(i){function n(){for(var n,e=arguments.length,a=new Array(e),l=0;l<e;l++)a[l]=arguments[l];return n=i.call.apply(i,[this].concat(a))||this,r(t(n),"anim",A,t(n)),o(t(n),"currentAnim",f.idle),n}return e(n,i),n.prototype.setAnim=function(i,n){var e;if(void 0===n&&(n=!1),n||this.currentAnim!==i){var r=f[i];this.currentAnim=i,null===(e=this.anim)||void 0===e||e.play(r)}},n}(u)).prototype,"anim",[p],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),m=y))||m));a._RF.pop()}}}));

System.register("chunks:///_virtual/PlayerController.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./PlayerMovement.ts"],(function(e){"use strict";var t,o,n,r,i,s,l,c,a,v;return{setters:[function(e){t=e.inheritsLoose,o=e.defineProperty,n=e.assertThisInitialized},function(e){r=e.cclegacy,i=e._decorator,s=e.systemEvent,l=e.SystemEventType,c=e.macro,a=e.Component},function(e){v=e.PlayerMovement}],execute:function(){var u;r._RF.push({},"4c2f0UEh51CHbuj9UmQX5E+","PlayerController",void 0);var h=i.ccclass;i.property,e("PlayerController",h("PlayerController")(u=function(e){function r(){for(var t,r=arguments.length,i=new Array(r),s=0;s<r;s++)i[s]=arguments[s];return t=e.call.apply(e,[this].concat(i))||this,o(n(t),"movement",void 0),t}t(r,e);var i=r.prototype;return i.onLoad=function(){this.movement=this.getComponent(v),s.on(l.KEY_DOWN,this.onKeyDown,this),s.on(l.KEY_UP,this.onKeyUp,this)},i.onKeyDown=function(e){switch(e.keyCode){case c.KEY.left:var t;null===(t=this.movement)||void 0===t||t.MoveLeft();break;case c.KEY.right:var o;null===(o=this.movement)||void 0===o||o.MoveRight()}},i.onKeyUp=function(e){switch(e.keyCode){case c.KEY.left:case c.KEY.right:var t;null===(t=this.movement)||void 0===t||t.Stop()}},r}(a))||u);r._RF.pop()}}}));

System.register("chunks:///_virtual/GameplayDefines.ts",["cc"],(function(e){"use strict";var t;return{setters:[function(e){t=e.cclegacy}],execute:function(){t._RF.push({},"a4053gKx/lLCpEeloXFR8Tk","GameplayDefines",void 0);e("GameplayDefines",{PLAYER_MOVE_SPEED:20});t._RF.pop()}}}));

System.register("chunks:///_virtual/PlayerMovement.ts",["./_rollupPluginModLoBabelHelpers.js","cc","./PlayerAnimation.ts","./GameplayDefines.ts"],(function(e){"use strict";var t,i,n,o,r,a,s,l,c,h,u,y,p,d;return{setters:[function(e){t=e.applyDecoratedDescriptor,i=e.inheritsLoose,n=e.initializerDefineProperty,o=e.assertThisInitialized,r=e.defineProperty},function(e){a=e.cclegacy,s=e._decorator,l=e.RigidBody2D,c=e.Vec3,h=e.Vec2,u=e.Component},function(e){y=e.PlayerAnimation,p=e.PLAYER_ANIMS},function(e){d=e.GameplayDefines}],execute:function(){var v,m,f,A,P;a._RF.push({},"b78ecZWeRBOX7WhmgnztTjA","PlayerMovement",void 0);var b=s.ccclass,E=s.property;e("PlayerMovement",(v=b("PlayerMovement"),m=E(y),v((P=t((A=function(e){function t(){for(var t,i=arguments.length,a=new Array(i),s=0;s<i;s++)a[s]=arguments[s];return t=e.call.apply(e,[this].concat(a))||this,n(o(t),"playerAnimation",P,o(t)),r(o(t),"rb",void 0),t}i(t,e);var a=t.prototype;return a.onLoad=function(){this.rb=this.getComponent(l)},a.MoveLeft=function(){var e;null===(e=this.playerAnimation)||void 0===e||e.setAnim(p.run);var t=this.node.scale.x>0?this.node.scale.x:-this.node.scale.x;this.node.setScale(new c(t,this.node.scale.y,this.node.scale.z)),this.rb&&(this.rb.linearVelocity=new h(-d.PLAYER_MOVE_SPEED,0))},a.MoveRight=function(){var e;null===(e=this.playerAnimation)||void 0===e||e.setAnim(p.run);var t=this.node.scale.x>0?-this.node.scale.x:this.node.scale.x;this.node.setScale(new c(t,this.node.scale.y,this.node.scale.z)),this.rb&&(this.rb.linearVelocity=new h(d.PLAYER_MOVE_SPEED,0))},a.Stop=function(){var e;null===(e=this.playerAnimation)||void 0===e||e.setAnim(p.idle),this.rb&&(this.rb.linearVelocity=h.ZERO)},t}(u)).prototype,"playerAnimation",[m],{configurable:!0,enumerable:!0,writable:!0,initializer:null}),f=A))||f));a._RF.pop()}}}));

System.register("chunks:///_virtual/main",["./PlayerAnimation.ts","./GameplayDefines.ts","./PlayerMovement.ts","./PlayerController.ts"],(function(){"use strict";return{setters:[null,null,null,null],execute:function(){}}}));

(function(r) {
  r('virtual:///prerequisite-imports/main', 'chunks:///_virtual/main'); 
})(function(mid, cid) {
    System.register(mid, [cid], function (_export, _context) {
    return {
        setters: [function(_m) {
            var _exportObj = {};

            for (var _key in _m) {
              if (_key !== "default" && _key !== "__esModule") _exportObj[_key] = _m[_key];
            }
      
            _export(_exportObj);
        }],
        execute: function () { }
    };
    });
});