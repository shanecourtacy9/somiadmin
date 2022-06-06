"use strict";(self.webpackChunksomiadmin=self.webpackChunksomiadmin||[]).push([[473],{3473:(ne,Z,o)=>{o.r(Z),o.d(Z,{ManagementFleetsModule:()=>H});var L=o(6889),m=o(9826),g=o(655),i=o(3075),b=o(4362),S=o(2583),M=o(3905),e=o(5e3),J=o(9727),z=o(1945),Q=o(7484),p=o(4546),F=o(1894),h=o(1047),v=o(2683),N=o(8054),f=o(9808),U=o(656),T=o(6042),A=o(2643);function q(n,a){if(1&n&&e._UZ(0,"nz-option",23),2&n){const t=a.$implicit;e.Q6J("nzLabel",t.name+" ("+t.dial_code+")")("nzValue",t.dial_code)}}function P(n,a){if(1&n&&(e.TgZ(0,"nz-select",21),e.YNc(1,q,1,2,"nz-option",22),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.countryCodes)}}function O(n,a){if(1&n&&e._UZ(0,"nz-option",23),2&n){const t=a.$implicit;e.Q6J("nzLabel",t.name+" ("+t.dial_code+")")("nzValue",t.dial_code)}}function _(n,a){if(1&n&&(e.TgZ(0,"nz-select",24),e.YNc(1,O,1,2,"nz-option",22),e.qZA()),2&n){const t=e.oxw();e.xp6(1),e.Q6J("ngForOf",t.countryCodes)}}let I=(()=>{class n{constructor(t,l,r,s,c){this.fb=t,this.createRiderGQL=l,this.messageService=r,this.router=s,this.route=c,this.form=this.fb.group({name:[null,i.kI.required],phoneNumberPrefix:["+1",i.kI.required],phoneNumber:[null,i.kI.required],mobileNumberPrefix:["+1",i.kI.required],mobileNumber:[null,i.kI.required],accountNumber:[null,i.kI.required],commissionSharePercent:[0,i.kI.required],commissionShareFlat:[0,i.kI.required],address:[null]}),this.countryCodes=S.k}submitForm(){var t,l,r;return(0,g.mG)(this,void 0,void 0,function*(){const s=this.form.value,{phoneNumber:c,phoneNumberPrefix:d,mobileNumber:X,mobileNumberPrefix:W}=s,k=(0,g._T)(s,["phoneNumber","phoneNumberPrefix","mobileNumber","mobileNumberPrefix"]),y=yield(0,M.z)(this.createRiderGQL.mutate({input:Object.assign({phoneNumber:`${d.substring(1)}${c}`,mobileNumber:`${W.substring(1)}${X}`},k)}));(null!==(l=null===(t=y.errors)||void 0===t?void 0:t.length)&&void 0!==l?l:0)>0?this.messageService.error((null!==(r=y.errors)&&void 0!==r?r:[]).map(ee=>ee.message).join(",")):this.messageService.success("Success"),this.router.navigateByUrl("/management/fleets")})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(i.qu),e.Y36(b.cws),e.Y36(J.dD),e.Y36(m.F0),e.Y36(m.gz))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-fleet-new"]],decls:47,vars:9,consts:[["nzBackIcon","","nzTitle","New Fleet","nzSubtitle","Input new Fleet's details below.",3,"nzGhost"],["nz-form","",3,"formGroup","ngSubmit"],["frm",""],["nzRequired","","nzFor","name"],["nzErrorTip","The input is not valid Name"],["nz-input","","formControlName","name","id","name"],["nzFor","phoneNumber","nzRequired",""],[3,"nzAddOnBefore"],["addOnBeforeTemplate",""],["formControlName","phoneNumber","id","phoneNumber",1,"w-full"],["nzFor","mobileNumber","nzRequired",""],["formControlName","mobileNumber","id","mobileNumber",1,"w-full"],["nzRequired","","nzFor","commissionSharePercent"],["required","","id","commissionSharePercent","formControlName","commissionSharePercent",1,"w-full",3,"nzMin","nzMax"],["nzRequired","","nzFor","commissionShareFlat"],["required","","id","commissionShareFlat","formControlName","commissionSharePercent",1,"w-full",3,"nzMin","nzMax"],["nzRequired","","nzFor","accountNumber"],["nz-input","","required","","id","accountNumber","formControlName","accountNumber"],["nzFor","address"],["nz-input","","id","address","formControlName","address"],["nz-button","","nzType","default","type","submit",1,"float-right",3,"disabled"],["formControlName","phoneNumberPrefix",1,"phone-select"],[3,"nzLabel","nzValue",4,"ngFor","ngForOf"],[3,"nzLabel","nzValue"],["formControlName","mobileNumberPrefix",1,"phone-select"]],template:function(t,l){if(1&t&&(e._UZ(0,"nz-page-header",0),e.TgZ(1,"nz-card")(2,"form",1,2),e.NdJ("ngSubmit",function(){return l.submitForm()}),e.TgZ(4,"nz-form-item")(5,"nz-form-label",3),e._uU(6,"Name"),e.qZA(),e.TgZ(7,"nz-form-control",4),e._UZ(8,"input",5),e.qZA()(),e.TgZ(9,"nz-form-item")(10,"nz-form-label",6),e._uU(11,"Phone Number"),e.qZA(),e.TgZ(12,"nz-form-control")(13,"nz-input-group",7),e.YNc(14,P,2,1,"ng-template",null,8,e.W1O),e._UZ(16,"nz-input-number",9),e.qZA()()(),e.TgZ(17,"nz-form-item")(18,"nz-form-label",10),e._uU(19,"Mobile Number"),e.qZA(),e.TgZ(20,"nz-form-control")(21,"nz-input-group",7),e.YNc(22,_,2,1,"ng-template",null,8,e.W1O),e._UZ(24,"nz-input-number",11),e.qZA()()(),e.TgZ(25,"nz-form-item")(26,"nz-form-label",12),e._uU(27,"Commission Percentage"),e.qZA(),e.TgZ(28,"nz-form-control"),e._UZ(29,"nz-input-number",13),e.qZA()(),e.TgZ(30,"nz-form-item")(31,"nz-form-label",14),e._uU(32,"Commission Flat"),e.qZA(),e.TgZ(33,"nz-form-control"),e._UZ(34,"nz-input-number",15),e.qZA()(),e.TgZ(35,"nz-form-item")(36,"nz-form-label",16),e._uU(37,"Bank Account Info"),e.qZA(),e.TgZ(38,"nz-form-control"),e._UZ(39,"input",17),e.qZA()(),e.TgZ(40,"nz-form-item")(41,"nz-form-label",18),e._uU(42,"Address"),e.qZA(),e.TgZ(43,"nz-form-control"),e._UZ(44,"input",19),e.qZA()(),e.TgZ(45,"button",20),e._uU(46," Register "),e.qZA()()()),2&t){const r=e.MAs(15);e.Q6J("nzGhost",!1),e.xp6(2),e.Q6J("formGroup",l.form),e.xp6(11),e.Q6J("nzAddOnBefore",r),e.xp6(8),e.Q6J("nzAddOnBefore",r),e.xp6(8),e.Q6J("nzMin",0)("nzMax",100),e.xp6(5),e.Q6J("nzMin",0)("nzMax",100),e.xp6(11),e.Q6J("disabled",l.form.invalid)}},directives:[z.$O,Q.bd,i._Y,i.JL,p.Lr,i.sg,F.SK,p.Nx,F.t3,p.iK,p.Fd,h.Zp,i.Fj,i.JJ,i.u,h.gB,v.w,N.Vq,f.sg,N.Ip,U._,i.Q7,T.ix,A.dQ],encapsulation:2}),n})();var R=o(5233),Y=o(4004),C=o(7633),B=o(647),u=o(939),w=o(3677),G=o(1062),V=o(5390);function j(n,a){if(1&n&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td"),e._uU(4),e.ALo(5,"phone"),e.qZA(),e.TgZ(6,"td")(7,"a",18),e._uU(8),e.ALo(9,"translate"),e.qZA()()()),2&n){const t=a.$implicit;e.xp6(2),e.Oqu(t.name),e.xp6(2),e.Oqu(e.lcZ(5,4,t.phoneNumber)),e.xp6(3),e.Q6J("routerLink","view/"+t.id),e.xp6(1),e.Oqu(e.lcZ(9,6,"table.details"))}}function $(n,a){if(1&n){const t=e.EpF();e.TgZ(0,"nz-table",10,11),e.NdJ("nzQueryParams",function(r){return e.CHM(t),e.oxw().tableService.onTableQueryParamsChange(r)}),e.TgZ(2,"thead")(3,"tr")(4,"th",12),e._uU(5),e.ALo(6,"translate"),e.TgZ(7,"nz-filter-trigger",13),e.ALo(8,"async"),e._UZ(9,"i",14),e.qZA()(),e.TgZ(10,"th",15),e._uU(11),e.ALo(12,"translate"),e.TgZ(13,"nz-filter-trigger",16),e.ALo(14,"async"),e._UZ(15,"i",14),e.qZA()(),e.TgZ(16,"th"),e._uU(17),e.ALo(18,"translate"),e.qZA()()(),e.TgZ(19,"tbody"),e.YNc(20,j,10,8,"tr",17),e.qZA()()}if(2&n){const t=a.ngIf,l=e.MAs(1),r=e.oxw(),s=e.MAs(10);let c,d;e.Q6J("nzFrontPagination",!1)("nzData",t.nodes)("nzTotal",t.totalCount),e.xp6(4),e.Q6J("nzSortFn",!0),e.xp6(1),e.hij(" ",e.lcZ(6,12,"profile.name")," "),e.xp6(2),e.Q6J("nzActive",!0===(null==(c=e.lcZ(8,14,r.route.params))||null==c.filter?null:c.filter.includes("lastName")))("nzDropdownMenu",s),e.xp6(3),e.Q6J("nzSortFn",!0),e.xp6(1),e.hij(" ",e.lcZ(12,16,"profile.mobileNumber")," "),e.xp6(2),e.Q6J("nzActive",!0===(null==(d=e.lcZ(14,18,r.route.params))||null==d.filter?null:d.filter.includes("mobileNumber"))),e.xp6(4),e.Oqu(e.lcZ(18,20,"profile.actions")),e.xp6(3),e.Q6J("ngForOf",l.data)}}let D=(()=>{class n{constructor(t,l,r,s){this.route=t,this.router=l,this.tagColor=r,this.tableService=s}ngOnInit(){this.query=this.route.data.pipe((0,Y.U)(t=>t.fleets))}filter(){return(0,g.mG)(this,void 0,void 0,function*(){this.router.navigate([],{relativeTo:this.route,queryParams:{search:JSON.stringify({name:this.nameSearchValue?{like:this.nameSearchValue}:void 0})},queryParamsHandling:"merge"})})}}return n.\u0275fac=function(t){return new(t||n)(e.Y36(m.gz),e.Y36(m.F0),e.Y36(R.k),e.Y36(C.w))},n.\u0275cmp=e.Xpm({type:n,selectors:[["app-fleets-list"]],decls:21,vars:17,consts:[["nzBackIcon","","nzTitle","Fleets","nzSubtitle","List of all the fleets registered",3,"nzGhost"],["nz-button","","nzType","default","routerLink","new"],["nz-icon","","nzType","plus"],["nzShowSizeChanger","","nzBordered","",3,"nzFrontPagination","nzData","nzTotal","nzQueryParams",4,"ngIf"],["filtername","nzDropdownMenu"],[1,"ant-table-filter-dropdown"],[1,"search-box"],["type","text","nz-input","",3,"placeholder","ngModel","ngModelChange"],["nz-button","","nzSize","small","nzType","default",1,"search-button",3,"click"],["nz-button","","nzSize","small",3,"click"],["nzShowSizeChanger","","nzBordered","",3,"nzFrontPagination","nzData","nzTotal","nzQueryParams"],["table",""],["nzCustomFilter","","nzColumnKey","lastName",3,"nzSortFn"],[3,"nzActive","nzDropdownMenu"],["nz-icon","","nzType","search"],["nzCustomFilter","","nzColumnKey","mobileNumber",3,"nzSortFn"],[3,"nzActive"],[4,"ngFor","ngForOf"],[3,"routerLink"]],template:function(t,l){if(1&t&&(e.TgZ(0,"nz-page-header",0)(1,"nz-page-header-extra")(2,"button",1),e._UZ(3,"i",2),e._uU(4),e.ALo(5,"translate"),e.qZA()(),e.TgZ(6,"nz-page-header-content"),e.YNc(7,$,21,22,"nz-table",3),e.ALo(8,"async"),e.qZA()(),e.TgZ(9,"nz-dropdown-menu",null,4)(11,"div",5)(12,"div",6)(13,"input",7),e.NdJ("ngModelChange",function(s){return l.nameSearchValue=s}),e.ALo(14,"translate"),e.qZA(),e.TgZ(15,"button",8),e.NdJ("click",function(){return l.filter()}),e._uU(16),e.ALo(17,"translate"),e.qZA(),e.TgZ(18,"button",9),e.NdJ("click",function(){return l.filter()}),e._uU(19),e.ALo(20,"translate"),e.qZA()()()()),2&t){let r;e.Q6J("nzGhost",!1),e.xp6(4),e.hij("",e.lcZ(5,7,"profile.add")," "),e.xp6(3),e.Q6J("ngIf",null==(r=e.lcZ(8,9,l.query))||null==r.data?null:r.data.fleets),e.xp6(6),e.s9C("placeholder",e.lcZ(14,11,"profile.name")),e.Q6J("ngModel",l.nameSearchValue),e.xp6(3),e.hij(" ",e.lcZ(17,13,"profile.view")," "),e.xp6(3),e.hij(" ",e.lcZ(20,15,"profile.reset")," ")}},directives:[z.$O,z.Jp,T.ix,A.dQ,v.w,m.rH,B.Ls,z.u5,f.O5,u.N8,u.Om,u.$Z,u.Uo,u._C,u.qD,u.Ql,u.p0,f.sg,m.yS,w.RR,h.Zp,i.Fj,i.JJ,i.On],pipes:[G.X$,f.Ov,V.E],encapsulation:2}),n})(),x=(()=>{class n{constructor(t,l){this.paging=t,this.gql=l}resolve(t,l){const r=this.paging.deserializeQueryParams(t.queryParams);return this.gql.fetch(r)}}return n.\u0275fac=function(t){return new(t||n)(e.LFG(C.w),e.LFG(b.tdB))},n.\u0275prov=e.Yz7({token:n,factory:n.\u0275fac}),n})();const K=[{path:"",component:D,resolve:{fleets:x}},{path:"view/:id",loadChildren:()=>Promise.all([o.e(592),o.e(405)]).then(o.bind(o,5405)).then(n=>n.FleetViewModule)},{path:"new",component:I}];let E=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({providers:[x],imports:[[m.Bz.forChild(K)],m.Bz]}),n})(),H=(()=>{class n{}return n.\u0275fac=function(t){return new(t||n)},n.\u0275mod=e.oAB({type:n}),n.\u0275inj=e.cJS({imports:[[E,L.m]]}),n})()}}]);