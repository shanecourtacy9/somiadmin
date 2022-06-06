"use strict";(self.webpackChunksomiadmin=self.webpackChunksomiadmin||[]).push([[34],{5034:(X,Z,r)=>{r.r(Z),r.d(Z,{DriversModule:()=>W});var J=r(6889),c=r(9826),N=r(655),u=r(3075),f=r(4362),M=r(3905),Q=r(2583),t=r(5e3),U=r(9083),p=r(1945),_=r(7484),d=r(4546),b=r(1894),v=r(1047),T=r(2683),A=r(8054),z=r(9808),C=r(6042),x=r(2643);function S(n,i){if(1&n&&t._UZ(0,"nz-option",20),2&n){const e=i.$implicit;t.Q6J("nzLabel",e.name+" ("+e.dial_code+")")("nzValue",e.dial_code)}}function O(n,i){if(1&n&&(t.TgZ(0,"nz-select",18),t.YNc(1,S,1,2,"nz-option",19),t.qZA()),2&n){const e=t.oxw();t.xp6(1),t.Q6J("ngForOf",e.countryCodes)}}function P(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"button",21),t.NdJ("click",function(){return t.CHM(e),t.oxw().submitForm()}),t._uU(1," Register "),t.qZA()}if(2&n){const e=t.oxw();t.Q6J("disabled",e.form.invalid)}}const Y=function(n){return[n]};let R=(()=>{class n{constructor(e,l,o,a){this.fb=e,this.createGQL=l,this.routerHelper=o,this.route=a,this.form=this.fb.group({firstName:[null],lastName:[null],phoneNumberPrefix:["+1",u.kI.required],phoneNumber:[null,u.kI.required],gender:[null]}),this.countryCodes=Q.k}submitForm(){return(0,N.mG)(this,void 0,void 0,function*(){const e=this.form.value,{phoneNumber:l,phoneNumberPrefix:o}=e,a=(0,N._T)(e,["phoneNumber","phoneNumberPrefix"]);yield(0,M.z)(this.createGQL.mutate({input:Object.assign({mobileNumber:`${o}${l}`},a)})),this.routerHelper.goToParent(this.route)})}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(u.qu),t.Y36(f.Ae5),t.Y36(U.b),t.Y36(c.gz))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-driver-new"]],decls:30,vars:6,consts:[["nzBackIcon","","nzTitle","New Driver","nzSubtitle","Input Driver's contact details below.",3,"nzGhost"],[3,"nzActions"],["nz-form","",3,"formGroup","ngSubmit"],["nzRequired","","nzFor","firstName"],["nzErrorTip","The input is not valid First Name"],["nz-input","","formControlName","firstName","id","firstName"],["nzRequired","","nzFor","lastName"],["nzErrorTip","The input is not valid Last Name"],["nz-input","","formControlName","lastName","id","lastName"],["nzFor","phoneNumber","nzRequired",""],[3,"nzAddOnBefore"],["addOnBeforeTemplate",""],["formControlName","phoneNumber","id","'phoneNumber'","nz-input",""],["nzFor","gender"],["formControlName","gender"],["nzLabel","Male","nzValue","Male"],["nzLabel","Female","nzValue","Female"],["tmplActions",""],["formControlName","phoneNumberPrefix",1,"phone-select"],[3,"nzLabel","nzValue",4,"ngFor","ngForOf"],[3,"nzLabel","nzValue"],["nz-button","","nzType","default",3,"disabled","click"]],template:function(e,l){if(1&e&&(t._UZ(0,"nz-page-header",0),t.TgZ(1,"nz-card",1)(2,"form",2),t.NdJ("ngSubmit",function(){return l.submitForm()}),t.TgZ(3,"nz-form-item")(4,"nz-form-label",3),t._uU(5,"First Name"),t.qZA(),t.TgZ(6,"nz-form-control",4),t._UZ(7,"input",5),t.qZA()(),t.TgZ(8,"nz-form-item")(9,"nz-form-label",6),t._uU(10,"Last Name"),t.qZA(),t.TgZ(11,"nz-form-control",7),t._UZ(12,"input",8),t.qZA()(),t.TgZ(13,"nz-form-item")(14,"nz-form-label",9),t._uU(15,"Phone Number"),t.qZA(),t.TgZ(16,"nz-form-control")(17,"nz-input-group",10),t.YNc(18,O,2,1,"ng-template",null,11,t.W1O),t._UZ(20,"input",12),t.qZA()()(),t.TgZ(21,"nz-form-item")(22,"nz-form-label",13),t._uU(23,"Gender"),t.qZA(),t.TgZ(24,"nz-form-control")(25,"nz-select",14),t._UZ(26,"nz-option",15)(27,"nz-option",16),t.qZA()()(),t.YNc(28,P,2,1,"ng-template",null,17,t.W1O),t.qZA()()),2&e){const o=t.MAs(19),a=t.MAs(29);t.Q6J("nzGhost",!1),t.xp6(1),t.Q6J("nzActions",t.VKq(4,Y,a)),t.xp6(1),t.Q6J("formGroup",l.form),t.xp6(15),t.Q6J("nzAddOnBefore",o)}},directives:[p.$O,_.bd,u._Y,u.JL,d.Lr,u.sg,b.SK,d.Nx,b.t3,d.iK,d.Fd,v.Zp,u.Fj,u.JJ,u.u,v.gB,T.w,A.Vq,z.sg,A.Ip,C.ix,x.dQ],encapsulation:2}),n})();var j=r(5233),L=r(4610),q=r(4004),F=r(7633),D=r(1062),G=r(647),m=r(939),w=r(8481),B=r(3677),I=r(5390);function V(n,i){if(1&n&&(t.TgZ(0,"tr")(1,"td"),t._uU(2),t.qZA(),t.TgZ(3,"td")(4,"a",22),t._uU(5),t.ALo(6,"phone"),t.qZA()(),t.TgZ(7,"td",23)(8,"nz-tag",24),t._uU(9),t.ALo(10,"translate"),t.qZA()(),t.TgZ(11,"td")(12,"a",25),t._uU(13),t.ALo(14,"translate"),t.qZA()()()),2&n){const e=i.$implicit,l=t.oxw(2);t.xp6(2),t.AsE("",e.firstName," ",e.lastName,""),t.xp6(2),t.Q6J("href","tel:+"+e.mobileNumber,t.LSH),t.xp6(1),t.Oqu(t.lcZ(6,8,e.mobileNumber)),t.xp6(3),t.Q6J("nzColor",l.tagColor.driver(e.status)),t.xp6(1),t.Oqu(t.lcZ(10,10,"enum.driver.status."+l.toCamelCase(e.status))),t.xp6(3),t.Q6J("routerLink","view/"+e.id),t.xp6(1),t.Oqu(t.lcZ(14,12,"table.details"))}}function H(n,i){if(1&n){const e=t.EpF();t.TgZ(0,"nz-table",14,15),t.NdJ("nzQueryParams",function(o){return t.CHM(e),t.oxw().tableService.onTableQueryParamsChange(o)}),t.TgZ(2,"thead")(3,"tr")(4,"th",16),t._uU(5),t.ALo(6,"translate"),t.TgZ(7,"nz-filter-trigger",17),t.ALo(8,"async"),t._UZ(9,"i",18),t.qZA()(),t.TgZ(10,"th",19),t._uU(11),t.ALo(12,"translate"),t.TgZ(13,"nz-filter-trigger",17),t.ALo(14,"async"),t._UZ(15,"i",18),t.qZA()(),t.TgZ(16,"th",20),t._uU(17," Status "),t.qZA(),t.TgZ(18,"th"),t._uU(19),t.ALo(20,"translate"),t.qZA()()(),t.TgZ(21,"tbody"),t.YNc(22,V,15,14,"tr",21),t.qZA()()}if(2&n){const e=i.ngIf,l=t.MAs(1),o=t.oxw(),a=t.MAs(10),s=t.MAs(23);let g,h;t.Q6J("nzFrontPagination",!1)("nzData",e.nodes)("nzTotal",e.totalCount),t.xp6(4),t.Q6J("nzSortFn",!0),t.xp6(1),t.hij(" ",t.lcZ(6,15,"profile.name")," "),t.xp6(2),t.Q6J("nzActive",null==(g=t.lcZ(8,17,o.route.queryParams))||null==g.filter?null:g.filter.includes("lastName|like|"))("nzDropdownMenu",a),t.xp6(3),t.Q6J("nzSortFn",!0),t.xp6(1),t.hij(" ",t.lcZ(12,19,"profile.mobileNumber")," "),t.xp6(2),t.Q6J("nzActive",null==(h=t.lcZ(14,21,o.route.queryParams))||null==h.filter?null:h.filter.includes("mobileNumber|like|"))("nzDropdownMenu",s),t.xp6(3),t.Q6J("nzFilters",o.statuses)("nzFilterFn",!0),t.xp6(3),t.Oqu(t.lcZ(20,23,"profile.actions")),t.xp6(3),t.Q6J("ngForOf",l.data)}}let $=(()=>{class n{constructor(e,l,o,a){this.tagColor=e,this.tableService=l,this.route=o,this.translator=a,this.statuses=Object.values(f.K$m).map(s=>({value:s,text:this.translator.instant(`enum.driver.status.${(0,L.eV)(s)}`)})),this.toCamelCase=L.eV}ngOnInit(){this.query=this.route.data.pipe((0,q.U)(e=>e.drivers))}}return n.\u0275fac=function(e){return new(e||n)(t.Y36(j.k),t.Y36(F.w),t.Y36(c.gz),t.Y36(D.sK))},n.\u0275cmp=t.Xpm({type:n,selectors:[["app-drivers-list"]],decls:34,vars:22,consts:[["nzBackIcon","","nzTitle","Drivers","nzSubtitle","List of all drivers registered",3,"nzGhost"],["nz-button","","nzType","default","routerLink","new"],["nz-icon","","nzType","plus"],["nzShowSizeChanger","","nzBordered","",3,"nzFrontPagination","nzData","nzTotal","nzQueryParams",4,"ngIf"],["filtername","nzDropdownMenu"],[1,"ant-table-filter-dropdown"],[1,"search-box"],["nz-input","",3,"placeholder"],["lastNameInput",""],["nz-button","","nzSize","small","nzType","default",1,"search-button",3,"click"],["nz-button","","nzSize","small",3,"click"],["filtermobile","nzDropdownMenu"],["nz-input","","placeholder","Search Mobile Number"],["mobileNumberInput",""],["nzShowSizeChanger","","nzBordered","",3,"nzFrontPagination","nzData","nzTotal","nzQueryParams"],["table",""],["nzCustomFilter","","nzColumnKey","lastName",3,"nzSortFn"],[3,"nzActive","nzDropdownMenu"],["nz-icon","","nzType","search"],["nzCustomFilter","","nzColumnKey","mobileNumber",3,"nzSortFn"],["nzColumnKey","status",1,"hidden","md:table-cell",3,"nzFilters","nzFilterFn"],[4,"ngFor","ngForOf"],[3,"href"],[1,"hidden","md:table-cell"],[3,"nzColor"],[3,"routerLink"]],template:function(e,l){if(1&e){const o=t.EpF();t.TgZ(0,"nz-page-header",0)(1,"nz-page-header-extra")(2,"button",1),t._UZ(3,"i",2),t._uU(4),t.ALo(5,"translate"),t.qZA()(),t.TgZ(6,"nz-page-header-content"),t.YNc(7,H,23,25,"nz-table",3),t.ALo(8,"async"),t.TgZ(9,"nz-dropdown-menu",null,4)(11,"div",5)(12,"div",6),t._UZ(13,"input",7,8),t.ALo(15,"translate"),t.TgZ(16,"button",9),t.NdJ("click",function(){t.CHM(o);const s=t.MAs(14);return l.tableService.filterText("lastName",s.value)}),t._uU(17),t.ALo(18,"translate"),t.qZA(),t.TgZ(19,"button",10),t.NdJ("click",function(){t.CHM(o);const s=t.MAs(14);return l.tableService.resetFilter("lastName",s)}),t._uU(20),t.ALo(21,"translate"),t.qZA()()()(),t.TgZ(22,"nz-dropdown-menu",null,11)(24,"div",5)(25,"div",6),t._UZ(26,"input",12,13),t.TgZ(28,"button",9),t.NdJ("click",function(){t.CHM(o);const s=t.MAs(27);return l.tableService.filterText("mobileNumber",s.value)}),t._uU(29),t.ALo(30,"translate"),t.qZA(),t.TgZ(31,"button",10),t.NdJ("click",function(){t.CHM(o);const s=t.MAs(27);return l.tableService.resetFilter("mobileNumber",s)}),t._uU(32),t.ALo(33,"translate"),t.qZA()()()()()()}if(2&e){let o;t.Q6J("nzGhost",!1),t.xp6(4),t.hij("",t.lcZ(5,8,"profile.add")," "),t.xp6(3),t.Q6J("ngIf",null==(o=t.lcZ(8,10,l.query))||null==o.data?null:o.data.drivers),t.xp6(6),t.s9C("placeholder",t.lcZ(15,12,"profile.lastName")),t.xp6(4),t.hij(" ",t.lcZ(18,14,"profile.search")," "),t.xp6(3),t.hij(" ",t.lcZ(21,16,"profile.reset")," "),t.xp6(9),t.hij(" ",t.lcZ(30,18,"profile.search")," "),t.xp6(3),t.hij(" ",t.lcZ(33,20,"profile.reset")," ")}},directives:[p.$O,p.Jp,C.ix,x.dQ,T.w,c.rH,G.Ls,p.u5,z.O5,m.N8,m.Om,m.$Z,m.Uo,m._C,m.qD,m.Ql,m.p0,z.sg,w.j,c.yS,B.RR,v.Zp],pipes:[D.X$,z.Ov,I.E],encapsulation:2}),n})(),y=(()=>{class n{constructor(e,l){this.paging=e,this.gql=l}resolve(e,l){const o=this.paging.deserializeQueryParams(e.queryParams);return this.gql.fetch(o)}}return n.\u0275fac=function(e){return new(e||n)(t.LFG(F.w),t.LFG(f.RWY))},n.\u0275prov=t.Yz7({token:n,factory:n.\u0275fac}),n})();const K=[{path:"",component:$,resolve:{drivers:y},runGuardsAndResolvers:"paramsOrQueryParamsChange"},{path:"view/:id",loadChildren:()=>r.e(322).then(r.bind(r,3322)).then(n=>n.DriverProfileModule)},{path:"new",component:R}];let E=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({providers:[y],imports:[[c.Bz.forChild(K)],c.Bz]}),n})(),W=(()=>{class n{}return n.\u0275fac=function(e){return new(e||n)},n.\u0275mod=t.oAB({type:n}),n.\u0275inj=t.cJS({imports:[[J.m,E]]}),n})()}}]);