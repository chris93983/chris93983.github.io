"use strict";(self.webpackChunktriple_vanish=self.webpackChunktriple_vanish||[]).push([[114],{114:(w,i,a)=>{a.r(i),a.d(i,{AccountModule:()=>m});var s=a(895),g=a(466),r=a(322),n=a(256);const f=["food"];const l=[{path:"",redirectTo:"login",pathMatch:"full"},{path:"login",component:(()=>{class t{constructor(){this.food=null}ngAfterViewInit(){this.food?.nativeElement.addEventListener("animationend",()=>this.food?.nativeElement.classList.add("shadow")),this.food?.nativeElement.addEventListener("animationstart",()=>this.food?.nativeElement.classList.add("show-food")),this.food?.nativeElement.classList.add("animate")}}return t.\u0275fac=function(o){return new(o||t)},t.\u0275cmp=n.Xpm({type:t,selectors:[["tv-login"]],viewQuery:function(o,d){if(1&o&&n.Gf(f,7),2&o){let h;n.iGM(h=n.CRH())&&(d.food=h.first)}},decls:8,vars:0,consts:[[1,"vine","center"],[1,"banner","center"],[1,"food-frame","center"],["food",""],[1,"food"],[1,"character","center"],["routerLink","/main","text","\u767b\u5165\u6e38\u620f",1,"btn-login","btn-light","center"],[1,"grass"]],template:function(o,d){1&o&&(n._UZ(0,"div",0)(1,"div",1),n.TgZ(2,"div",2,3),n._UZ(4,"div",4),n.qZA(),n._UZ(5,"div",5)(6,"button",6)(7,"div",7))},dependencies:[r.rH],styles:['.vine[_ngcontent-%COMP%], .banner[_ngcontent-%COMP%], .food-frame[_ngcontent-%COMP%], .character[_ngcontent-%COMP%], .character[_ngcontent-%COMP%]:before, .character[_ngcontent-%COMP%]:after, .banner[_ngcontent-%COMP%]:before, .grass[_ngcontent-%COMP%], .btn-login[_ngcontent-%COMP%]{position:absolute;width:var(--width)}.center.vine[_ngcontent-%COMP%], .center.banner[_ngcontent-%COMP%], .center.food-frame[_ngcontent-%COMP%], .center.character[_ngcontent-%COMP%], .center.character[_ngcontent-%COMP%]:before, .center.character[_ngcontent-%COMP%]:after, .center.banner[_ngcontent-%COMP%]:before, .center.grass[_ngcontent-%COMP%], .center.btn-login[_ngcontent-%COMP%]{left:calc((100vw - var(--width)) / 2)}@keyframes vine{0%{transform:scaleY(1)}to{transform:scaleY(.95)}}@keyframes food{0%{opacity:0;transform:scale(0)}to{opacity:1;transform:scale(1)}}@keyframes food-shown{0%{transform:scale(1)}to{transform:scale(1.02)}}@keyframes fix-shadow{0%{filter:drop-shadow(0px calc(var(--height) * .141) 1px rgba(23,22,42,.3))}to{filter:drop-shadow(.0001px calc(var(--height) * .141) 1px rgba(23,22,42,.3))}}[_nghost-%COMP%]{background-image:var(--login-background)}[_nghost-%COMP%]:before{content:"";width:100%;height:100%;background-image:var(--login-light)}.vine[_ngcontent-%COMP%]{--width: 100%;height:45.58vw;background-image:var(--login-vine);top:0;z-index:9;transform-origin:center top;animation:vine 2s infinite alternate-reverse}.banner[_ngcontent-%COMP%]{--width: min(73.52vw, 43vh);height:calc(var(--width) * .5644);background-image:var(--login-banner);top:max(8vh,5%);z-index:2}.banner[_ngcontent-%COMP%]:before{content:"";width:23.42%;height:12.98%;background-image:var(--login-title);left:38.29%!important;bottom:23%}.food-frame[_ngcontent-%COMP%]{--width: min(89.26vw, 46.4vh);--height: min(calc(var(--width) / 1.106), 79.62vh);height:var(--height);z-index:2;bottom:19vh}.food-frame[_ngcontent-%COMP%]:before, .food-frame[_ngcontent-%COMP%]:after{width:100%;height:100%;content:"";transition:opacity .2s ease-out;opacity:0}.food-frame[_ngcontent-%COMP%]:before{background-image:var(--login-food-light)}.food-frame[_ngcontent-%COMP%]:after{background-image:var(--login-food-with-shadow);transform:translateY(-200%)}.food-frame.animate[_ngcontent-%COMP%]{animation:food .5s;animation-delay:.5s}.food-frame.show-food[_ngcontent-%COMP%]:before, .food-frame.show-food[_ngcontent-%COMP%] > .food[_ngcontent-%COMP%]{opacity:1}.food-frame.shadow[_ngcontent-%COMP%]{animation:food-shown 3s infinite alternate-reverse}.food-frame.shadow[_ngcontent-%COMP%]:before{opacity:0}.food-frame.shadow[_ngcontent-%COMP%]:after{opacity:1}.food-frame[_ngcontent-%COMP%] > .food[_ngcontent-%COMP%]{width:100%;height:100%;background-image:var(--login-food);transform:translateY(-100%);opacity:0}.character[_ngcontent-%COMP%]{--width: min(52.82vw, 27.46vh);height:min(90.38vw,47vh);bottom:15vh;z-index:2}.character[_ngcontent-%COMP%]:before{content:"";width:100%;height:100%;background-image:var(--login-character);left:0!important;z-index:2}.character[_ngcontent-%COMP%]:after{content:"";width:121.41%;height:56.02%;background-image:var(--login-character-shadow);transform:translate(34%,170%);left:0!important;z-index:1}.btn-login[_ngcontent-%COMP%]{--shadow-color: #209a26;--shadow-depth: min(.11vw, 1px);--width: min(180px, 26vw);--height: calc(var(--width) / 2.768817);height:var(--height);bottom:min(6.5%,30px + 4vw);z-index:9;font-size:calc(var(--width) * .13888);text-shadow:calc(var(--shadow-depth) * 2) 0 var(--shadow-depth) var(--shadow-color),calc(var(--shadow-depth) * 2) calc(var(--shadow-depth) * 2) var(--shadow-depth) var(--shadow-color),0 calc(var(--shadow-depth) * 2) var(--shadow-depth) var(--shadow-color),calc(0px - var(--shadow-depth) * 2) calc(var(--shadow-depth) * 2) var(--shadow-depth) var(--shadow-color),calc(0px - var(--shadow-depth) * 2) 0 var(--shadow-depth) var(--shadow-color),calc(0px - var(--shadow-depth) * 2) calc(0px - var(--shadow-depth) * 2) var(--shadow-depth) var(--shadow-color),0 calc(0px - var(--shadow-depth) * 2) var(--shadow-depth) var(--shadow-color),calc(var(--shadow-depth) * 2) calc(0px - var(--shadow-depth) * 2) var(--shadow-depth) var(--shadow-color);overflow:visible}.btn-login[_ngcontent-%COMP%]:before, .btn-login[_ngcontent-%COMP%]:after{position:absolute;top:0;left:0;z-index:2;width:100%;height:100%}.btn-login[_ngcontent-%COMP%]:before{content:"";animation:fix-shadow 100s infinite;background-image:var(--login-btn-login)}.btn-login[_ngcontent-%COMP%]:after{content:attr(text);width:100%;height:100%;display:flex;align-items:center;justify-content:center;padding-bottom:6%}.grass[_ngcontent-%COMP%]{--width: 100vw;height:calc(var(--width) * .5092);background-image:var(--login-grass);transform-origin:center bottom;animation:vine 2s infinite alternate-reverse;z-index:8;left:0;bottom:0}']}),t})()}];let v=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[r.Bz.forChild(l),r.Bz]}),t})(),m=(()=>{class t{}return t.\u0275fac=function(o){return new(o||t)},t.\u0275mod=n.oAB({type:t}),t.\u0275inj=n.cJS({imports:[s.ez,v,g.m]}),t})()}}]);