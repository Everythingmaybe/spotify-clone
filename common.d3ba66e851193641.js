"use strict";(self.webpackChunkclient_open=self.webpackChunkclient_open||[]).push([[592],{5505:(P,O,n)=>{n.d(O,{H:()=>d});var t=n(5879),a=n(183),p=n(7398),l=n(3997),E=n(2572),o=n(8180),u=n(4664),c=n(7574),r=n(6603),y=n(2504),v=n(4752),D=n(6814);function g(s,M){if(1&s){const _=t.EpF();t.TgZ(0,"button",1),t.NdJ("click",function(i){const C=t.CHM(_).spLet;return t.oxw().onClick(C),i.preventDefault(),t.KtG(i.stopPropagation())}),t._UZ(1,"sp-icon",2),t.qZA()}if(2&s){const _=M.spLet;t.xp6(1),t.Q6J("name",_?"pause":"play")}}let d=(()=>{var s;class M{constructor(){this.playerService=(0,t.f3M)(a.l),this.isActiveTrack$=this.playerService.trackId$.pipe((0,p.U)(e=>e===this.id),(0,l.x)()),this.currentIsPlaying$=(0,E.a)([this.isActiveTrack$,this.playerService.isPlaying$]).pipe((0,p.U)(([e,i])=>i&&e),(0,l.x)())}onClick(e){this.isActiveTrack$.pipe((0,o.q)(1),(0,u.w)(i=>this.playerService.action(i?{type:e?c.MF.Pause:c.MF.Resume}:{type:c.MF.PlayTrack,payload:this.id}))).subscribe()}}return(s=M).\u0275fac=function(e){return new(e||s)},s.\u0275cmp=t.Xpm({type:s,selectors:[["sp-play-button"]],inputs:{id:"id"},decls:2,vars:3,consts:[["class","sp-play-button","spIconButton","",3,"click",4,"spLet"],["spIconButton","",1,"sp-play-button",3,"click"],[3,"name"]],template:function(e,i){1&e&&(t.YNc(0,g,2,1,"button",0),t.ALo(1,"async")),2&e&&t.Q6J("spLet",t.lcZ(1,1,i.currentIsPlaying$))},dependencies:[r.r,y.o,v.e,D.Ov],styles:[".sp-play-button-small[_nghost-%COMP%]{--sp-button-size: 16px;--sp-icon-size: 16px}.sp-play-button-medium[_nghost-%COMP%]{--sp-button-size: 48px;--sp-icon-size: 24px}.sp-play-button-large[_nghost-%COMP%]{--sp-button-size: 56px;--sp-icon-size: 24px}.sp-play-button[_ngcontent-%COMP%]{opacity:1}"],changeDetection:0}),M})()},9518:(P,O,n)=>{n.d(O,{O:()=>E});var t=n(5879),a=n(8632),p=n(7266),l=n(1993);let E=(()=>{var o;class u{constructor(){this.intersectionObserverDirective=(0,t.f3M)(a.Z7,{self:!0}),this.topMenuBackgroundOpacityService=(0,t.f3M)(p.J),this.destroyRef=(0,t.f3M)(t.ktI)}ngOnInit(){this.intersectionObserverDirective.options={threshold:[0,.1,.2,.3,.4,.5,.6,.7,.8,.9,1]},this.intersectionObserverDirective.eventEmitter.pipe((0,l.sL)(this.destroyRef)).subscribe(({intersectionRatio:r})=>{this.topMenuBackgroundOpacityService.next(1-r)}),this.intersectionObserverDirective.init()}ngOnDestroy(){this.topMenuBackgroundOpacityService.next(0)}}return(o=u).\u0275fac=function(r){return new(r||o)},o.\u0275dir=t.lG2({type:o,selectors:[["","spTopMenuBackgroundOpacityTrigger",""]],standalone:!0,features:[t.zW0([a.Z7])]}),u})()}}]);