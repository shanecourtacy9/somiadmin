"use strict";(self.webpackChunksomiadmin=self.webpackChunksomiadmin||[]).push([[486],{7633:(y,T,s)=>{s.d(T,{w:()=>z});var v=s(5e3),h=s(9826);let z=(()=>{class t{constructor(o,i){this.router=o,this.route=i}serializeQueryParams(o){const i={};if(i.pageIndex=(null==o?void 0:o.pageIndex)>1?o.pageIndex:void 0,10!=(null==o?void 0:o.pageSize)&&(i.pageSize=o.pageSize),null!=o.filter){const d=o.filter.filter(c=>null!=c.value&&c.value.length>0).map(c=>`${c.key}|${Array.isArray(c.value)?"in":"eq"}|${Array.isArray(c.value)?c.value.join("-"):c.value}`);i.filter=d.length>0?d.join(","):void 0}if(null!=o.sort&&o.sort.length>0){const d=o.sort.filter(c=>null!=c.value).map(c=>`${c.key}|${"ascend"==c.value?"ASC":"DESC"}`);i.sort=d.length>0?d.join(","):void 0}return i}onTableQueryParamsChange(o){const i=this.serializeQueryParams(o);this.router.navigate([],{relativeTo:this.route,queryParams:i,queryParamsHandling:"merge"})}filterText(o,i){var d;const p=null!==(d=this.deserializeQueryParams(this.route).filter)&&void 0!==d?d:{};p[o]=null!=i?{like:i}:{};const C=Object.keys(p).map(l=>{if(Object.keys(p[l]).length<1)return null;const m=Object.keys(p[l])[0];return`${l}|${m}|${"in"==m?p[l][m].join("-"):p[l][m]}`}).filter(l=>null!=l),g=C.length>0?C.join(","):void 0;this.router.navigate([],{relativeTo:this.route,queryParams:{filter:g},queryParamsHandling:"merge"})}filterRange(o,i){var d;const p=null!==(d=this.deserializeQueryParams(this.route).filter)&&void 0!==d?d:{};p[o]=null!=i?{between:i}:{};const C=Object.keys(p).map(l=>{if(Object.keys(p[l]).length<1)return null;const m=Object.keys(p[l])[0];return`${l}|${m}|${"in"==m||"between"==m?p[l][m].join("-"):p[l][m]}`}).filter(l=>null!=l),g=C.length>0?C.join(","):void 0;this.router.navigate([],{relativeTo:this.route,queryParams:{filter:g},queryParamsHandling:"merge"})}resetFilter(o,i){this.filterText(o,void 0),i.value=""}downloadURI(o,i){const d=document.createElement("a");d.download=i,d.href=o,d.target="_blank",document.body.appendChild(d),d.click(),document.body.removeChild(d)}deserializeQueryParams(o){var i;const d=o.sort?o.sort.split(",").map(g=>({field:g.split("|")[0],direction:g.split("|")[1]})):[],c={};null!=o.filter&&o.filter.split(",").forEach(g=>{const l={},m=g.split("|")[1];if("in"==m){const f=g.split("|")[2].split("-");l[m]=f}else if("between"==m){const f=g.split("|")[2].split("-");l[m]={lower:f[0],upper:f[1]}}else l[m]=g.split("|")[2];c[g.split("|")[0]]=l});const p=null!=o.pageIndex?parseInt(o.pageIndex):1,C=null!=o.pageSize?parseInt(o.pageSize):10;return{sorting:d.length>0?d:void 0,paging:{offset:null!==(i=(p-1)*C)&&void 0!==i?i:void 0,limit:C},filter:null!=c&&Object.keys(c).length>0?c:void 0}}}return t.\u0275fac=function(o){return new(o||t)(v.LFG(h.F0),v.LFG(h.gz))},t.\u0275prov=v.Yz7({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},9486:(y,T,s)=>{s.r(T),s.d(T,{ManagementCarsModule:()=>U});var v=s(9826),h=s(655),z=s(4362),A=s(4004),M=s(3905),t=s(5e3),L=s(9083),o=s(7633),i=s(1945),d=s(6042),c=s(2643),p=s(2683),C=s(647),g=s(9808),l=s(939),m=s(1047),f=s(3075),O=s(2121),I=s(1062);function Q(n,u){if(1&n&&(t.TgZ(0,"div",14)(1,"div",15),t._uU(2),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.hij(" ",e.name," ")}}function S(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"input",16),t.NdJ("ngModelChange",function(a){return t.CHM(e),t.oxw().$implicit.name=a})("keyup.enter",function(){t.CHM(e);const a=t.oxw().$implicit;return t.oxw(2).onSubmitEditModel(a.id,a.name)}),t.qZA()}if(2&n){const e=t.oxw().$implicit;t.Q6J("ngModel",e.name)}}function $(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"tr",10),t.NdJ("click",function(a){const x=t.CHM(e).$implicit;return t.oxw(2).startEdit(x.id,a)}),t.TgZ(1,"td"),t.YNc(2,Q,3,1,"div",11),t.YNc(3,S,1,1,"ng-template",null,12,t.W1O),t.qZA(),t.TgZ(5,"td")(6,"a",13),t.NdJ("nzOnConfirm",function(){const _=t.CHM(e).$implicit;return t.oxw(2).onDeleteModel(_.id)}),t.ALo(7,"translate"),t._uU(8),t.ALo(9,"translate"),t.qZA()()()}if(2&n){const e=u.$implicit,r=t.MAs(4),a=t.oxw(2);t.xp6(2),t.Q6J("ngIf",a.editId!==e.id)("ngIfElse",r),t.xp6(4),t.s9C("nzPopconfirmTitle",t.lcZ(7,4,"message.areYouSure")),t.xp6(2),t.Oqu(t.lcZ(9,6,"profile.delete"))}}function D(n,u){if(1&n&&(t.TgZ(0,"nz-table",6,7)(2,"thead")(3,"tr")(4,"th",8),t._uU(5),t.ALo(6,"translate"),t.qZA(),t.TgZ(7,"th"),t._uU(8),t.ALo(9,"translate"),t.qZA()()(),t.TgZ(10,"tbody"),t.YNc(11,$,10,8,"tr",9),t.qZA()()),2&n){const e=u.ngIf,r=t.MAs(1);t.Q6J("nzData",e),t.xp6(5),t.Oqu(t.lcZ(6,4,"profile.name")),t.xp6(3),t.Oqu(t.lcZ(9,6,"profile.actions")),t.xp6(3),t.Q6J("ngForOf",r.data)}}function E(n,u){if(1&n&&(t.TgZ(0,"div",14)(1,"div",15),t._uU(2),t.qZA()()),2&n){const e=t.oxw().$implicit;t.xp6(2),t.hij(" ",e.name," ")}}function J(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"input",16),t.NdJ("ngModelChange",function(a){return t.CHM(e),t.oxw().$implicit.name=a})("keyup.enter",function(){t.CHM(e);const a=t.oxw().$implicit;return t.oxw(2).onSubmitEditColor(a.id,a.name)}),t.qZA()}if(2&n){const e=t.oxw().$implicit;t.Q6J("ngModel",e.name)}}function G(n,u){if(1&n){const e=t.EpF();t.TgZ(0,"tr",10),t.NdJ("click",function(a){const x=t.CHM(e).$implicit;return t.oxw(2).startEditColor(x.id,a)}),t.TgZ(1,"td"),t.YNc(2,E,3,1,"div",11),t.YNc(3,J,1,1,"ng-template",null,12,t.W1O),t.qZA(),t.TgZ(5,"td")(6,"a",13),t.NdJ("nzOnConfirm",function(){const _=t.CHM(e).$implicit;return t.oxw(2).onDeleteColor(_.id)}),t.ALo(7,"translate"),t._uU(8),t.ALo(9,"translate"),t.qZA()()()}if(2&n){const e=u.$implicit,r=t.MAs(4),a=t.oxw(2);t.xp6(2),t.Q6J("ngIf",a.editColorId!==e.id)("ngIfElse",r),t.xp6(4),t.s9C("nzPopconfirmTitle",t.lcZ(7,4,"message.areYouSure")),t.xp6(2),t.Oqu(t.lcZ(9,6,"profile.delete"))}}function j(n,u){if(1&n&&(t.TgZ(0,"nz-table",17,18)(2,"thead")(3,"tr")(4,"th",8),t._uU(5),t.ALo(6,"translate"),t.qZA(),t.TgZ(7,"th"),t._uU(8),t.ALo(9,"translate"),t.qZA()()(),t.TgZ(10,"tbody"),t.YNc(11,G,10,8,"tr",9),t.qZA()()),2&n){const e=u.ngIf,r=t.MAs(1);t.Q6J("nzData",e),t.xp6(5),t.Oqu(t.lcZ(6,4,"profile.name")),t.xp6(3),t.Oqu(t.lcZ(9,6,"profile.actions")),t.xp6(3),t.Q6J("ngForOf",r.data)}}let F=(()=>{class n{constructor(e,r,a,_,x,Z,H,w,B){this.route=e,this.routerHelper=r,this.tableService=a,this.deleteCarModelGQL=_,this.deleteCarColorGQL=x,this.updateCarModelGQL=Z,this.updateCarColorGQL=H,this.createCarModelGQL=w,this.createCarColorGQL=B}ngOnInit(){this.query=this.route.data.pipe((0,A.U)(e=>e.cars))}startEdit(e,r){r.preventDefault(),r.stopPropagation(),this.editId=e}onSubmitEditModel(e,r){return(0,h.mG)(this,void 0,void 0,function*(){yield(0,M.z)(this.updateCarModelGQL.mutate({id:e,input:{name:r}})),this.editId=void 0})}onAddModel(){return(0,h.mG)(this,void 0,void 0,function*(){yield(0,M.z)(this.createCarModelGQL.mutate({input:{name:""}})),this.routerHelper.refresh(this.route)})}onDeleteModel(e){return(0,h.mG)(this,void 0,void 0,function*(){yield(0,M.z)(this.deleteCarModelGQL.mutate({id:e})),this.routerHelper.refresh(this.route)})}startEditColor(e,r){r.preventDefault(),r.stopPropagation(),this.editColorId=e}onSubmitEditColor(e,r){return(0,h.mG)(this,void 0,void 0,function*(){yield(0,M.z)(this.updateCarColorGQL.mutate({id:e,input:{name:r}})),this.editColorId=void 0})}onAddColor(){return(0,h.mG)(this,void 0,void 0,function*(){yield(0,M.z)(this.createCarColorGQL.mutate({input:{name:""}})),this.routerHelper.refresh(this.route)})}onDeleteColor(e){return(0,h.mG)(this,void 0,void 0,function*(){yield(0,M.z)(this.deleteCarColorGQL.mutate({id:e})),this.routerHelper.refresh(this.route)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(v.gz),t.Y36(L.b),t.Y36(o.w),t.Y36(z.E2S),t.Y36(z.Rsx),t.Y36(z.Ol1),t.Y36(z.ifc),t.Y36(z.eDJ),t.Y36(z.h0b))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-management-cars-list"]],decls:15,vars:13,consts:[["nzBackIcon","","nzTitle","Cars","nzSubtitle","Basic car info definitions",3,"nzGhost"],["nz-button","","nzType","default",3,"click"],["nz-icon","","nzType","plus"],["nzBordered","","nzTitle","Models",3,"nzData",4,"ngIf"],["nz-button","","nzType","default",1,"float-right","mb-2",3,"click"],["nzBordered","","nzTitle","Colors",3,"nzData",4,"ngIf"],["nzBordered","","nzTitle","Models",3,"nzData"],["ajaxTable",""],["nzWidth","80%"],["class","editable-row",3,"click",4,"ngFor","ngForOf"],[1,"editable-row",3,"click"],["class","editable-cell",4,"ngIf","ngIfElse"],["editTpl",""],["nz-popconfirm","",3,"nzPopconfirmTitle","nzOnConfirm"],[1,"editable-cell"],[1,"editable-cell-value-wrap"],["nz-input","",3,"ngModel","ngModelChange","keyup.enter"],["nzBordered","","nzTitle","Colors",3,"nzData"],["colorTable",""]],template:function(e,r){if(1&e&&(t.TgZ(0,"nz-page-header",0)(1,"nz-page-header-extra")(2,"button",1),t.NdJ("click",function(){return r.onAddModel()}),t._UZ(3,"i",2),t._uU(4),t.ALo(5,"translate"),t.qZA()(),t.TgZ(6,"nz-page-header-content"),t.YNc(7,D,12,8,"nz-table",3),t.ALo(8,"async"),t.TgZ(9,"button",4),t.NdJ("click",function(){return r.onAddColor()}),t._UZ(10,"i",2),t._uU(11),t.ALo(12,"translate"),t.qZA(),t.YNc(13,j,12,8,"nz-table",5),t.ALo(14,"async"),t.qZA()()),2&e){let a,_;t.Q6J("nzGhost",!1),t.xp6(4),t.hij("",t.lcZ(5,5,"profile.add")," "),t.xp6(3),t.Q6J("ngIf",null==(a=t.lcZ(8,7,r.query))||null==a.data||null==a.data.carModels?null:a.data.carModels.nodes),t.xp6(4),t.hij("",t.lcZ(12,9,"profile.add")," "),t.xp6(2),t.Q6J("ngIf",null==(_=t.lcZ(14,11,r.query))||null==_.data?null:_.data.carColors)}},directives:[i.$O,i.Jp,d.ix,c.dQ,p.w,C.Ls,i.u5,g.O5,l.N8,l.Om,l.$Z,l.Uo,l._C,l.p0,g.sg,m.Zp,f.Fj,f.JJ,f.On,O.JW],pipes:[I.X$,g.Ov],encapsulation:2}),n})(),b=(()=>{class n{constructor(e,r){this.paging=e,this.gql=r}resolve(e,r){return this.paging.deserializeQueryParams(e.queryParams),this.gql.fetch({})}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(o.w),t.LFG(z.nr6))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();const Y=[{path:"",component:F,resolve:{cars:b},runGuardsAndResolvers:"paramsOrQueryParamsChange"}];let N=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[b],imports:[[v.Bz.forChild(Y)],v.Bz]}),n})();var P=s(6889);let U=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[],imports:[[N,P.m]]}),n})()}}]);