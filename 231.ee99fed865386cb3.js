"use strict";(self.webpackChunksomiadmin=self.webpackChunksomiadmin||[]).push([[231],{2231:(on,x,s)=>{s.r(x),s.d(x,{ConfigModule:()=>tn});var m=s(9808),M=s(7957),u=s(9826),C=s(655),c=s(4362),S=s(2340),I=s(4004),d=s(3905),n=s(5e3),y=s(9727),b=s(2013),Z=s(1047),h=s(3075),G=s(5052),J=s(2683),Y=s(647),w=s(6042),N=s(2643),T=s(3478),P=s(8054);const k=["tplContent"],O=["tplFooter"];function K(e,r){if(1&e&&(n.TgZ(0,"nz-steps",6),n._UZ(1,"nz-step",7)(2,"nz-step",8)(3,"nz-step",9),n.qZA()),2&e){const t=n.oxw();n.Q6J("nzCurrent",t.currentStep)}}function Q(e,r){if(1&e){const t=n.EpF();n.TgZ(0,"div",10)(1,"input",11),n.NdJ("ngModelChange",function(i){return n.CHM(t),n.oxw().currentConfig.currentConfiguration.purchaseCode=i}),n.qZA()()}if(2&e){const t=n.oxw();n.xp6(1),n.Q6J("ngModel",t.currentConfig.currentConfiguration.purchaseCode)}}function L(e,r){if(1&e){const t=n.EpF();n.TgZ(0,"div",10)(1,"input",12),n.NdJ("ngModelChange",function(i){return n.CHM(t),n.oxw().currentConfig.currentConfiguration.backendMapsAPIKey=i}),n.qZA(),n.TgZ(2,"input",13),n.NdJ("ngModelChange",function(i){return n.CHM(t),n.oxw().currentConfig.currentConfiguration.adminPanelAPIKey=i}),n.qZA()()}if(2&e){const t=n.oxw();n.xp6(1),n.Q6J("ngModel",t.currentConfig.currentConfiguration.backendMapsAPIKey),n.xp6(1),n.Q6J("ngModel",t.currentConfig.currentConfiguration.adminPanelAPIKey)}}function U(e,r){if(1&e){const t=n.EpF();n.TgZ(0,"div",10)(1,"nz-upload",14),n.NdJ("nzChange",function(i){return n.CHM(t),n.oxw().handleChange(i)}),n.TgZ(2,"p",15),n._UZ(3,"i",16),n.qZA(),n.TgZ(4,"p",17),n._uU(5,"Firebase Project Private Key"),n.qZA(),n.TgZ(6,"p",18),n._uU(7," Upload private key json file received from firebase project under Service Account and by clicking on the `Generate Private Key` button. "),n.qZA()()()}if(2&e){const t=n.oxw();n.xp6(1),n.Q6J("nzAction",t.root+"config/upload")}}function j(e,r){if(1&e){const t=n.EpF();n.TgZ(0,"button",21),n.NdJ("click",function(){return n.CHM(t),n.oxw(2).pre()}),n._uU(1," Previous "),n.qZA()}}function D(e,r){if(1&e){const t=n.EpF();n.TgZ(0,"button",21),n.NdJ("click",function(){return n.CHM(t),n.oxw(2).next()}),n._uU(1," Next "),n.qZA()}}function H(e,r){if(1&e){const t=n.EpF();n.TgZ(0,"button",21),n.NdJ("click",function(){return n.CHM(t),n.oxw(2).done()}),n._uU(1," Done "),n.qZA()}}function B(e,r){if(1&e&&(n.TgZ(0,"div",19),n.YNc(1,j,2,0,"button",20),n.YNc(2,D,2,0,"button",20),n.YNc(3,H,2,0,"button",20),n.qZA()),2&e){const t=n.oxw();n.xp6(1),n.Q6J("ngIf",t.currentStep>0),n.xp6(1),n.Q6J("ngIf",t.currentStep<2),n.xp6(1),n.Q6J("ngIf",2===t.currentStep)}}function E(e,r){1&e&&(n.TgZ(0,"nz-result",22)(1,"div",23)(2,"button",24),n._uU(3,"Go Login"),n.qZA()()())}function R(e,r){if(1&e&&n._UZ(0,"nz-option",27),2&e){const t=r.$implicit;n.Q6J("nzValue",t)("nzLabel",t)}}function q(e,r){if(1&e){const t=n.EpF();n.TgZ(0,"p"),n._uU(1," This purchase code seems to have been used by another server `in past`/`right now`. You can select to disable the previous server from below list and continue using on this server. "),n.qZA(),n.TgZ(2,"nz-select",25),n.NdJ("ngModelChange",function(i){return n.CHM(t),n.oxw().selectedClient=i}),n.YNc(3,R,1,2,"nz-option",26),n.qZA()}if(2&e){const t=n.oxw();n.xp6(2),n.Q6J("ngModel",t.selectedClient),n.xp6(1),n.Q6J("ngForOf",t.clients)}}function V(e,r){if(1&e){const t=n.EpF();n.TgZ(0,"button",28),n.NdJ("click",function(){return n.CHM(t),n.oxw().disableServer()}),n._uU(1," Disable Selected Server "),n.qZA()}if(2&e){const t=n.oxw();n.Q6J("nzLoading",t.tplModalButtonLoading)("disabled",null===t.selectedClient)}}let $=(()=>{class e{constructor(t,o,i,a,g,f,p){this.route=t,this.updatePurchaseGql=o,this.updateMapsGql=i,this.updateFirebaseGql=a,this.disableServerGql=g,this.modalService=f,this.msg=p,this.currentStep=0,this.root=S.N.root,this.clients=[],this.configed=!1,this.tplModalButtonLoading=!1}ngOnInit(){this.remoteConfig=this.route.data.pipe((0,I.U)(t=>t.config)),this.configSubscription=this.remoteConfig.subscribe(t=>this.currentConfig=t.data)}ngOnDestroy(){var t;null===(t=this.configSubscription)||void 0===t||t.unsubscribe()}pre(){this.currentStep-=1}next(){var t,o,i,a,g,f,p,_,v,z;return(0,C.mG)(this,void 0,void 0,function*(){switch(this.currentStep){case 0:{if(null==this.currentConfig.currentConfiguration.purchaseCode)return void this.msg.error("Purchase code is invalid.");const l=yield(0,d.z)(this.updatePurchaseGql.mutate({code:null!==(t=this.currentConfig.currentConfiguration.purchaseCode)&&void 0!==t?t:""}));if(console.log(l),(null===(o=l.data)||void 0===o?void 0:o.updatePurchaseCode.status)==c.xzO.ClientFound)return this.clients=null!==(g=null===(a=null===(i=l.data)||void 0===i?void 0:i.updatePurchaseCode.clients)||void 0===a?void 0:a.map(en=>en.ip))&&void 0!==g?g:[],void this.createClientsModal();(null===(f=l.data)||void 0===f?void 0:f.updatePurchaseCode.status)==c.xzO.Invalid&&this.msg.error("Purchase code is Invalid. You can contact minimalistic.apps@gmail.com for more information."),(null===(p=l.data)||void 0===p?void 0:p.updatePurchaseCode.status)==c.xzO.Ok&&(this.currentStep+=1);break}case 1:{if(null==this.currentConfig.currentConfiguration.adminPanelAPIKey||this.currentConfig.currentConfiguration.adminPanelAPIKey.length<10||null==this.currentConfig.currentConfiguration.backendMapsAPIKey||this.currentConfig.currentConfiguration.backendMapsAPIKey.length<10)return void this.msg.error("Google Maps API Keys seems invalid.");const l=yield(0,d.z)(this.updateMapsGql.mutate({backend:this.currentConfig.currentConfiguration.backendMapsAPIKey,adminPanel:this.currentConfig.currentConfiguration.adminPanelAPIKey}));(null===(_=l.data)||void 0===_?void 0:_.updateMapsAPIKey.status)==c.Syb.Ok?this.currentStep+=1:this.msg.error(null!==(z=null===(v=l.data)||void 0===v?void 0:v.updateMapsAPIKey.message)&&void 0!==z?z:"Unknown Error");break}}})}createClientsModal(){this.tplModal=this.modalService.create({nzTitle:"License Verification",nzContent:this.clientModalContent,nzFooter:this.clientModalFooter,nzMaskClosable:!1,nzClosable:!1})}disableServer(){return(0,C.mG)(this,void 0,void 0,function*(){this.tplModalButtonLoading=!0,yield(0,d.z)(this.disableServerGql.mutate({ip:this.selectedClient})),this.msg.success("Disable was successful."),this.tplModal.close()})}done(){var t,o,i;return(0,C.mG)(this,void 0,void 0,function*(){if(null==this.currentConfig.currentConfiguration.firebaseProjectPrivateKey)return void this.msg.error("Firebase Project key seems invalid.");const a=yield(0,d.z)(this.updateFirebaseGql.mutate({keyFileName:this.currentConfig.currentConfiguration.firebaseProjectPrivateKey}));(null===(t=a.data)||void 0===t?void 0:t.updateFirebase.status)==c.Syb.Ok?this.configed=!0:this.msg.error(null!==(i=null===(o=a.data)||void 0===o?void 0:o.updateFirebase.message)&&void 0!==i?i:"Unknown error")})}handleChange(t){const o=t.file.status;"done"===o?(this.msg.success(`${t.file.name} file uploaded successfully.`),this.currentConfig.currentConfiguration.firebaseProjectPrivateKey=t.file.name):"error"===o&&this.msg.error(`${t.file.name} file upload failed.`)}}return e.\u0275fac=function(t){return new(t||e)(n.Y36(u.gz),n.Y36(c.s6P),n.Y36(c.Uhd),n.Y36(c.hyv),n.Y36(c.uSm),n.Y36(M.Sf),n.Y36(y.dD))},e.\u0275cmp=n.Xpm({type:e,selectors:[["app-config"]],viewQuery:function(t,o){if(1&t&&(n.Gf(k,5),n.Gf(O,5)),2&t){let i;n.iGM(i=n.CRH())&&(o.clientModalContent=i.first),n.iGM(i=n.CRH())&&(o.clientModalFooter=i.first)}},decls:10,vars:6,consts:[["nzType","navigation",3,"nzCurrent",4,"ngIf"],["class","step-content",4,"ngIf"],["class","steps-action",4,"ngIf"],["nzStatus","success","nzTitle","Configuration Done!","nzSubTitle","Your configuration steps are done now! You will need to wait for around 30 seconds so system would set it up then you can go to login screen using button below.",4,"ngIf"],["tplContent",""],["tplFooter",""],["nzType","navigation",3,"nzCurrent"],["nzTitle","Purchase Code","nzDescription","License Verification"],["nzTitle","Maps API","nzDescription","Google Maps API Keys"],["nzTitle","Firebase Admin SDK","nzDescription","Notification & Auth"],[1,"step-content"],["nz-input","","placeholder","Purchase Code",3,"ngModel","ngModelChange"],["nz-input","","placeholder","Backend Maps API key",3,"ngModel","ngModelChange"],["nz-input","","placeholder","Dashboard Maps API key",3,"ngModel","ngModelChange"],["nzType","drag","nzAccept",".json,application/json",3,"nzAction","nzChange"],[1,"ant-upload-drag-icon"],["nz-icon","","nzType","inbox"],[1,"ant-upload-text"],[1,"ant-upload-hint"],[1,"steps-action"],["nz-button","","nzType","default",3,"click",4,"ngIf"],["nz-button","","nzType","default",3,"click"],["nzStatus","success","nzTitle","Configuration Done!","nzSubTitle","Your configuration steps are done now! You will need to wait for around 30 seconds so system would set it up then you can go to login screen using button below."],["nz-result-extra",""],["nz-button","","nzType","default","routerLink","../login"],["nzAllowClear","","nzPlaceHolder","Choose",2,"width","100%",3,"ngModel","ngModelChange"],[3,"nzValue","nzLabel",4,"ngFor","ngForOf"],[3,"nzValue","nzLabel"],["nz-button","","nzType","default",3,"nzLoading","disabled","click"]],template:function(t,o){1&t&&(n.YNc(0,K,4,1,"nz-steps",0),n.YNc(1,Q,2,1,"div",1),n.YNc(2,L,3,2,"div",1),n.YNc(3,U,8,1,"div",1),n.YNc(4,B,4,3,"div",2),n.YNc(5,E,4,0,"nz-result",3),n.YNc(6,q,4,2,"ng-template",null,4,n.W1O),n.YNc(8,V,2,2,"ng-template",null,5,n.W1O)),2&t&&(n.Q6J("ngIf",!o.configed),n.xp6(1),n.Q6J("ngIf",0===o.currentStep),n.xp6(1),n.Q6J("ngIf",1===o.currentStep),n.xp6(1),n.Q6J("ngIf",2===o.currentStep&&!o.configed),n.xp6(1),n.Q6J("ngIf",!o.configed),n.xp6(1),n.Q6J("ngIf",o.configed))},directives:[m.O5,b.iy,b.$W,Z.Zp,h.Fj,h.JJ,h.On,G.FY,J.w,Y.Ls,w.ix,N.dQ,T.ml,T.ey,u.rH,P.Vq,m.sg,P.Ip],styles:["nz-steps[_ngcontent-%COMP%]{display:block;margin:10px}.steps-action[_ngcontent-%COMP%]{display:block;margin-left:10px;margin-top:24px}button[_ngcontent-%COMP%]{margin-right:8px}.step-content[_ngcontent-%COMP%]{margin-left:10px;margin-right:10px;margin-top:16px;border:1px dashed #e9e9e9;border-radius:6px;background-color:#fafafa}.step-content[_ngcontent-%COMP%]   input[_ngcontent-%COMP%], .step-content[_ngcontent-%COMP%]   nz-upload[_ngcontent-%COMP%]{width:90%;display:block;margin:50px auto}"]}),e})(),A=(()=>{class e{constructor(t,o,i){this.router=t,this.msg=o,this.currentConfigGql=i}canActivate(t,o){return(0,C.mG)(this,void 0,void 0,function*(){return null==(yield(0,d.z)(this.currentConfigGql.fetch({}))).data.currentConfiguration.firebaseProjectPrivateKey||(this.msg.warning("System is already configured. Try with admin password parameter"),this.router.navigate(["../login"]),!1)})}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(u.F0),n.LFG(y.dD),n.LFG(c.T8B))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac}),e})(),F=(()=>{class e{constructor(t){this.currentConfigGql=t}resolve(t,o){return this.currentConfigGql.fetch({})}}return e.\u0275fac=function(t){return new(t||e)(n.LFG(c.T8B))},e.\u0275prov=n.Yz7({token:e,factory:e.\u0275fac}),e})();const W=[{path:"",component:$,canActivate:[A],resolve:{config:F}}];let X=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({providers:[A,F],imports:[[u.Bz.forChild(W)],u.Bz]}),e})();var nn=s(6889);let tn=(()=>{class e{}return e.\u0275fac=function(t){return new(t||e)},e.\u0275mod=n.oAB({type:e}),e.\u0275inj=n.cJS({providers:[M.Sf],imports:[[m.ez,X,nn.m]]}),e})()}}]);