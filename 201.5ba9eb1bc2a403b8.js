"use strict";(self.webpackChunksomiadmin=self.webpackChunksomiadmin||[]).push([[201],{9201:(Fe,R,i)=>{i.r(R),i.d(R,{RiderViewModule:()=>Re});var P=i(6889),d=i(9826),_=i(4004),e=i(5e3),g=i(7633),u=i(9808),c=i(939),Z=i(1062);function D(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"tr")(1,"td"),e._uU(2),e.qZA(),e.TgZ(3,"td",3),e._uU(4),e.qZA(),e.TgZ(5,"td")(6,"a",5),e.NdJ("click",function(){const l=e.CHM(n).$implicit;return e.oxw(2).openMap(l.location)}),e._uU(7,"Open In Google Maps"),e.qZA()()()}if(2&t){const n=a.$implicit;e.xp6(2),e.Oqu(n.title),e.xp6(2),e.Oqu(n.details)}}function G(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"nz-table",1,2),e.NdJ("nzQueryParams",function(){return e.CHM(n),e.oxw().tableService.onTableQueryParamsChange}),e.TgZ(2,"thead")(3,"tr")(4,"th"),e._uU(5),e.ALo(6,"translate"),e.qZA(),e.TgZ(7,"th",3),e._uU(8),e.ALo(9,"translate"),e.qZA(),e.TgZ(10,"th"),e._uU(11),e.ALo(12,"translate"),e.qZA()()(),e.TgZ(13,"tbody"),e.YNc(14,D,8,2,"tr",4),e.qZA()()}if(2&t){const n=a.ngIf,r=e.MAs(1);e.Q6J("nzFrontPagination",!1)("nzData",n.nodes),e.xp6(5),e.hij(" ",e.lcZ(6,6,"profile.title")," "),e.xp6(3),e.hij(" ",e.lcZ(9,8,"profile.address")," "),e.xp6(3),e.hij(" ",e.lcZ(12,10,"profile.location")," "),e.xp6(3),e.Q6J("ngForOf",r.data)}}let j=(()=>{class t{constructor(n,r){this.route=n,this.tableService=r}ngOnInit(){this.query=this.route.data.pipe((0,_.U)(n=>n.addresses))}openMap(n){window.open("https://maps.google.com/?q="+n.lat+","+n.lng)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(d.gz),e.Y36(g.w))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-rider-view-addresses"]],decls:2,vars:3,consts:[["nzShowSizeChanger","","nzBordered","",3,"nzFrontPagination","nzData","nzQueryParams",4,"ngIf"],["nzShowSizeChanger","","nzBordered","",3,"nzFrontPagination","nzData","nzQueryParams"],["table",""],[1,"hidden","md:table-cell"],[4,"ngFor","ngForOf"],[3,"click"]],template:function(n,r){if(1&n&&(e.YNc(0,G,15,12,"nz-table",0),e.ALo(1,"async")),2&n){let o;e.Q6J("ngIf",null==(o=e.lcZ(1,1,r.query))||null==o.data?null:o.data.riderAddresses)}},directives:[u.O5,c.N8,c.Om,c.$Z,c.Uo,c._C,c.p0,u.sg],pipes:[u.Ov,Z.X$],encapsulation:2}),t})();var m=i(4362);let w=(()=>{class t{constructor(n,r){this.gql=n,this.tableService=r}resolve(n,r){var o;const l=this.tableService.deserializeQueryParams(n.queryParams);return this.gql.fetch({riderId:null===(o=n.parent)||void 0===o?void 0:o.params.id,paging:l.paging})}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(m.$x7),e.LFG(g.w))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})();var A=i(655),s=i(3075),b=i(5233),M=i(3905),L=i(9083),k=i(9727),F=i(404),U=i(8481),V=i(7484),z=i(4546),T=i(1894),h=i(8054),$=i(656),N=i(1047),x=i(6042),y=i(2643),q=i(2683),O=i(8614);function E(t,a){if(1&t&&(e.TgZ(0,"nz-tag",29),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t){const n=e.oxw().$implicit,r=e.oxw(2);e.Q6J("nzColor",r.tagColor.getTransactionStatusStatusColor(n.status)),e.xp6(1),e.Oqu(e.lcZ(2,2,"enum.transactionStatus."+n.status))}}function H(t,a){if(1&t&&(e.TgZ(0,"a",30),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t){const n=e.oxw().$implicit;e.Q6J("routerLink","/management/users/view/"+n.operatorId),e.xp6(1),e.Oqu(e.lcZ(2,2,"table.viewOperator"))}}function B(t,a){if(1&t&&(e.TgZ(0,"a",30),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t){const n=e.oxw().$implicit;e.Q6J("routerLink","/management/payment-gateways/view/"+n.paymentGatewayId),e.xp6(1),e.Oqu(e.lcZ(2,2,"table.viewGateway"))}}function X(t,a){if(1&t&&(e.TgZ(0,"a",30),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t){const n=e.oxw().$implicit;e.Q6J("routerLink","/requests/view/"+n.requestId),e.xp6(1),e.Oqu(e.lcZ(2,2,"table.viewRequest"))}}function K(t,a){if(1&t&&(e.TgZ(0,"tr")(1,"td",25),e.ALo(2,"date"),e._uU(3),e.ALo(4,"timeago"),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.ALo(7,"translate"),e.ALo(8,"translate"),e.YNc(9,E,3,4,"nz-tag",26),e.qZA(),e.TgZ(10,"td",27),e._uU(11),e.ALo(12,"currency"),e.qZA(),e.TgZ(13,"td",22),e._uU(14),e.qZA(),e.TgZ(15,"td",23),e._uU(16),e.qZA(),e.TgZ(17,"td"),e.YNc(18,H,3,4,"a",28),e.YNc(19,B,3,4,"a",28),e.YNc(20,X,3,4,"a",28),e.qZA()()),2&t){const n=a.$implicit;e.xp6(1),e.Q6J("nz-tooltip",e.xi3(2,12,n.createdAt,"short")),e.xp6(2),e.hij(" ",e.lcZ(4,15,n.createdAt)," "),e.xp6(3),e.hij(" ","Deduct"===n.action?e.lcZ(7,17,"enum.transactionType."+n.deductType):e.lcZ(8,19,"enum.transactionType."+n.rechargeType)," "),e.xp6(3),e.Q6J("ngIf","Done"!=n.status),e.xp6(1),e.Q6J("ngClass","Recharge"===n.action?"text-green-500":"text-red-500"),e.xp6(1),e.AsE(" ","Recharge"===n.action?"+":"","",e.xi3(12,21,n.amount,n.currency)," "),e.xp6(3),e.Oqu(n.refrenceNumber),e.xp6(2),e.Oqu(n.description),e.xp6(2),e.Q6J("ngIf",null!==n.operatorId),e.xp6(1),e.Q6J("ngIf",null!==n.paymentGatewayId),e.xp6(1),e.Q6J("ngIf",null!==n.requestId)}}function W(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"nz-table",19,20),e.NdJ("nzQueryParams",function(o){return e.CHM(n),e.oxw().tableService.onTableQueryParamsChange(o)}),e.TgZ(2,"thead")(3,"tr")(4,"th",21),e._uU(5),e.ALo(6,"translate"),e.qZA(),e.TgZ(7,"th"),e._uU(8),e.ALo(9,"translate"),e.qZA(),e.TgZ(10,"th"),e._uU(11),e.ALo(12,"translate"),e.qZA(),e.TgZ(13,"th",22),e._uU(14),e.ALo(15,"translate"),e.qZA(),e.TgZ(16,"th",23),e._uU(17),e.ALo(18,"translate"),e.qZA(),e.TgZ(19,"th"),e._uU(20),e.ALo(21,"translate"),e.qZA()()(),e.TgZ(22,"tbody"),e.YNc(23,K,21,24,"tr",24),e.qZA()()}if(2&t){const n=a.ngIf,r=e.MAs(1);e.Q6J("nzFrontPagination",!1)("nzData",n.nodes)("nzTotal",n.totalCount),e.xp6(4),e.Q6J("nzSortFn",!0),e.xp6(1),e.hij(" ",e.lcZ(6,11,"profile.dateTime")," "),e.xp6(3),e.hij(" ",e.lcZ(9,13,"profile.transactionType")," "),e.xp6(3),e.hij(" ",e.lcZ(12,15,"profile.amount")," "),e.xp6(3),e.hij(" ",e.lcZ(15,17,"profile.documentNumber")," "),e.xp6(3),e.hij(" ",e.lcZ(18,19,"profile.details")," "),e.xp6(3),e.Oqu(e.lcZ(21,21,"profile.actions")),e.xp6(3),e.Q6J("ngForOf",r.data)}}function ee(t,a){if(1&t&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.ALo(3,"currency"),e.qZA()()),2&t){const n=a.$implicit;e.xp6(2),e.Oqu(e.xi3(3,1,n.balance,n.currency))}}function ne(t,a){if(1&t&&(e.TgZ(0,"nz-table",31,32)(2,"thead")(3,"tr")(4,"th"),e._uU(5,"Amount"),e.qZA()()(),e.TgZ(6,"tbody"),e.YNc(7,ee,4,4,"tr",24),e.qZA()()),2&t){const n=a.ngIf,r=e.MAs(1);e.Q6J("nzData",n)("nzTotal",n.length),e.xp6(7),e.Q6J("ngForOf",r.data)}}function te(t,a){1&t&&e._UZ(0,"div")}function re(t,a){if(1&t&&(e._UZ(0,"nz-option",34),e.ALo(1,"translate")),2&t){const n=a.$implicit;e.Q6J("nzLabel",e.lcZ(1,2,"enum.transactionType."+n))("nzValue",n)}}function ae(t,a){if(1&t&&(e.TgZ(0,"nz-form-item")(1,"nz-form-label"),e._uU(2,"Recharge Type"),e.qZA(),e.TgZ(3,"nz-form-control")(4,"nz-select",33),e.YNc(5,re,2,4,"nz-option",13),e.qZA()()()),2&t){const n=e.oxw();e.xp6(5),e.Q6J("ngForOf",n.rechargeTypes)}}function oe(t,a){if(1&t&&(e._UZ(0,"nz-option",34),e.ALo(1,"translate")),2&t){const n=a.$implicit;e.Q6J("nzLabel",e.lcZ(1,2,"enum.transactionType."+n))("nzValue",n)}}function ie(t,a){if(1&t&&(e.TgZ(0,"nz-form-item")(1,"nz-form-label"),e._uU(2,"Deduct Type"),e.qZA(),e.TgZ(3,"nz-form-control")(4,"nz-select",35),e.YNc(5,oe,2,4,"nz-option",13),e.qZA()()()),2&t){const n=e.oxw();e.xp6(5),e.Q6J("ngForOf",n.deductTypes)}}function le(t,a){if(1&t&&e._UZ(0,"nz-option",34),2&t){const n=a.$implicit;e.Q6J("nzLabel",n.currency)("nzValue",n.currency)}}let se=(()=>{class t{constructor(n,r,o,l,p,we,Le){this.route=n,this.tableService=r,this.tagColor=o,this.fb=l,this.createTransactionGQL=p,this.routerHelper=we,this.msg=Le,this.formTransaction=this.fb.group({action:[null,s.kI.required],rechargeType:[null],deductType:[null],amount:[0,s.kI.required],currency:[null,s.kI.required],description:[null],refrenceNumber:[null]}),this.deductTypes=Object.keys(m.iRv),this.rechargeTypes=Object.keys(m.eew)}ngOnInit(){this.query=this.route.data.pipe((0,_.U)(n=>n.financials))}onSubmitTransaction(){var n;return(0,A.mG)(this,void 0,void 0,function*(){if(this.formTransaction.value.riderId=null===(n=this.route.parent)||void 0===n?void 0:n.snapshot.params.id,"Recharge"!=this.formTransaction.value.action||null!=this.formTransaction.value.rechargeType)if("Deduct"!=this.formTransaction.value.action||null!=this.formTransaction.value.deductType)try{yield(0,M.z)(this.createTransactionGQL.mutate({input:this.formTransaction.value})),this.msg.success("Transaction Submitted."),this.routerHelper.refresh(this.route),this.formTransaction.patchValue({})}catch(r){this.msg.error(r.message)}else this.msg.error("Please select the transaction type.");else this.msg.error("Please select the transaction type.")})}getUniquieCurrencies(n){return null==n?[]:[...new Set(n)]}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(d.gz),e.Y36(g.w),e.Y36(b.k),e.Y36(s.qu),e.Y36(m.UFo),e.Y36(L.b),e.Y36(k.dD))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-rider-view-financials"]],decls:43,vars:20,consts:[["nzTitle","Transactions Records","nzShowSizeChanger","","nzBordered","",3,"nzFrontPagination","nzData","nzTotal","nzQueryParams",4,"ngIf"],["nzTitle","Wallet Summary","nzBordered","",3,"nzFrontPagination","nzData","nzTotal",4,"ngIf"],[3,"nzTitle"],["nz-form","",3,"formGroup","ngSubmit"],[1,"lg:grid","lg:grid-cols-2","lg:gap-2"],["nzRequired",""],["formControlName","action","nzRequired",""],["nzLabel","Deduct","nzValue","Deduct"],["nzLabel","Recharge","nzValue","Recharge"],[4,"ngIf"],["nzRequired","","nzFor","amount"],["formControlName","amount","id","amount","required","",1,"w-full"],["formControlName","currency","id","currency","required",""],[3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nzFor","refrenceNumber"],["nz-input","","formControlName","refrenceNumber","id","refrenceNumber"],["nzFor","description"],["nz-input","","formControlName","description","id","description"],["nz-button","","nzType","default","type","submit",1,"float-right","mt-2",3,"disabled"],["nzTitle","Transactions Records","nzShowSizeChanger","","nzBordered","",3,"nzFrontPagination","nzData","nzTotal","nzQueryParams"],["table",""],["nzColumnKey","createdAt",3,"nzSortFn"],[1,"hidden","lg:table-cell"],[1,"hidden","xl:table-cell"],[4,"ngFor","ngForOf"],[3,"nz-tooltip"],["class","ml-1",3,"nzColor",4,"ngIf"],[3,"ngClass"],[3,"routerLink",4,"ngIf"],[1,"ml-1",3,"nzColor"],[3,"routerLink"],["nzTitle","Wallet Summary","nzBordered","",3,"nzFrontPagination","nzData","nzTotal"],["walletTable",""],["formControlName","rechargeType"],[3,"nzLabel","nzValue"],["formControlName","deductType"]],template:function(n,r){if(1&n&&(e.YNc(0,W,24,23,"nz-table",0),e.ALo(1,"async"),e.YNc(2,ne,8,3,"nz-table",1),e.ALo(3,"async"),e.TgZ(4,"nz-card",2),e.ALo(5,"translate"),e.TgZ(6,"form",3),e.NdJ("ngSubmit",function(){return r.onSubmitTransaction()}),e.TgZ(7,"div",4)(8,"nz-form-item")(9,"nz-form-label",5),e._uU(10,"Type"),e.qZA(),e.TgZ(11,"nz-form-control")(12,"nz-select",6),e._UZ(13,"nz-option",7)(14,"nz-option",8),e.qZA()()(),e.YNc(15,te,1,0,"div",9),e.YNc(16,ae,6,1,"nz-form-item",9),e.YNc(17,ie,6,1,"nz-form-item",9),e.TgZ(18,"nz-form-item")(19,"nz-form-label",10),e._uU(20,"Amount"),e.qZA(),e.TgZ(21,"nz-form-control"),e._UZ(22,"nz-input-number",11),e.qZA()(),e.TgZ(23,"nz-form-item")(24,"nz-form-label",5),e._uU(25,"Currency"),e.qZA(),e.TgZ(26,"nz-form-control")(27,"nz-select",12),e.YNc(28,le,1,2,"nz-option",13),e.ALo(29,"async"),e.qZA()()(),e.TgZ(30,"nz-form-item")(31,"nz-form-label",14),e._uU(32,"Document Number"),e.qZA(),e.TgZ(33,"nz-form-control"),e._UZ(34,"input",15),e.qZA()(),e.TgZ(35,"nz-form-item")(36,"nz-form-label",16),e._uU(37,"Description"),e.qZA(),e.TgZ(38,"nz-form-control"),e._UZ(39,"input",17),e.qZA()()(),e.TgZ(40,"button",18),e._uU(41),e.ALo(42,"translate"),e.qZA()()()),2&n){let o,l,p;e.Q6J("ngIf",null==(o=e.lcZ(1,10,r.query))||null==o.data||null==o.data.rider?null:o.data.rider.transactions),e.xp6(2),e.Q6J("ngIf",null==(l=e.lcZ(3,12,r.query))||null==l.data||null==l.data.rider||null==l.data.rider.wallets?null:l.data.rider.wallets.nodes),e.xp6(2),e.s9C("nzTitle",e.lcZ(5,14,"profile.insertTransaction")),e.xp6(2),e.Q6J("formGroup",r.formTransaction),e.xp6(9),e.Q6J("ngIf",null===r.formTransaction.value.action),e.xp6(1),e.Q6J("ngIf","Recharge"===r.formTransaction.value.action),e.xp6(1),e.Q6J("ngIf","Deduct"===r.formTransaction.value.action),e.xp6(11),e.Q6J("ngForOf",r.getUniquieCurrencies(null==(p=e.lcZ(29,16,r.query))||null==p.data||null==p.data.regions?null:p.data.regions.nodes)),e.xp6(12),e.Q6J("disabled",!r.formTransaction.valid),e.xp6(1),e.hij(" ",e.lcZ(42,18,"profile.submit")," ")}},directives:[u.O5,c.N8,c.Om,c.$Z,c.Uo,c._C,c.qD,c.p0,u.sg,F.SY,U.j,u.mk,d.yS,V.bd,s._Y,s.JL,z.Lr,s.sg,T.SK,z.Nx,T.t3,z.iK,z.Fd,h.Vq,s.JJ,s.u,h.Ip,$._,s.Q7,N.Zp,s.Fj,x.ix,y.dQ,q.w],pipes:[u.Ov,Z.X$,u.uU,O.wr,u.H9],encapsulation:2}),t})(),Q=(()=>{class t{constructor(n,r){this.gql=n,this.tableService=r}resolve(n,r){var o;const l=this.tableService.deserializeQueryParams(n.queryParams);return this.gql.fetch(Object.assign({riderId:null===(o=n.parent)||void 0===o?void 0:o.params.id},l))}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(m.VyS),e.LFG(g.w))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})(),ce=(()=>{class t{constructor(n,r,o,l,p){this.route=n,this.router=r,this.fb=o,this.updateRiderGQL=l,this.routerHelper=p,this.form=this.fb.group({id:[null,s.kI.required],firstName:[null,s.kI.required],lastName:[null,s.kI.required],mobileNumber:[null,s.kI.required],gender:[null],email:[null]})}ngOnDestroy(){var n;null===(n=this.valObserver)||void 0===n||n.unsubscribe()}ngOnInit(){var n;this.valObserver=null===(n=this.route.parent)||void 0===n?void 0:n.data.subscribe(r=>this.form.patchValue(r.rider.data.rider))}onSubmit(){var n;return(0,A.mG)(this,void 0,void 0,function*(){const r=null===(n=this.route.snapshot.parent)||void 0===n?void 0:n.params.id;this.updateRiderGQL.mutate({id:r,update:this.form.value}),this.routerHelper.refresh(this.route)})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(d.gz),e.Y36(d.F0),e.Y36(s.qu),e.Y36(m.Sf3),e.Y36(L.b))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-rider-view-info"]],decls:31,vars:3,consts:[["nz-form","",1,"lg:grid","lg:grid-cols-3","lg:gap-2",3,"nzLayout","formGroup","ngSubmit"],["formControlName","id","type","hidden","hidden",""],["nzRequired","","nzFor","firstName"],["nzErrorTip","The input is not valid First Name"],["nz-input","","formControlName","firstName","id","firstName"],["nzRequired","","nzFor","lastName"],["nzErrorTip","The input is not valid Last Name"],["nz-input","","formControlName","lastName","id","lastName"],["nzFor","mobileNumber","nzRequired",""],["nzErrorTip","The input is not valid Mobile Number"],["nz-input","","formControlName","mobileNumber","id","mobileNumber"],["nzFor","gender"],["formControlName","gender"],["nzLabel","Male","nzValue","Male"],["nzLabel","Female","nzValue","Female"],["nzFor","email","nzRequired",""],["nz-input","","formControlName","email","id","email"],["nz-button","","nzType","default",1,"float-right",3,"disabled","click"]],template:function(n,r){1&n&&(e.TgZ(0,"form",0),e.NdJ("ngSubmit",function(){return r.onSubmit()}),e._UZ(1,"input",1),e.TgZ(2,"nz-form-item")(3,"nz-form-label",2),e._uU(4,"First Name"),e.qZA(),e.TgZ(5,"nz-form-control",3),e._UZ(6,"input",4),e.qZA()(),e.TgZ(7,"nz-form-item")(8,"nz-form-label",5),e._uU(9,"Last Name"),e.qZA(),e.TgZ(10,"nz-form-control",6),e._UZ(11,"input",7),e.qZA()(),e.TgZ(12,"nz-form-item")(13,"nz-form-label",8),e._uU(14,"Mobile Number"),e.qZA(),e.TgZ(15,"nz-form-control",9),e._UZ(16,"input",10),e.qZA()(),e.TgZ(17,"nz-form-item")(18,"nz-form-label",11),e._uU(19,"Gender"),e.qZA(),e.TgZ(20,"nz-form-control")(21,"nz-select",12),e._UZ(22,"nz-option",13)(23,"nz-option",14),e.qZA()()(),e.TgZ(24,"nz-form-item")(25,"nz-form-label",15),e._uU(26,"E-mail"),e.qZA(),e.TgZ(27,"nz-form-control"),e._UZ(28,"input",16),e.qZA()()(),e.TgZ(29,"button",17),e.NdJ("click",function(){return r.onSubmit()}),e._uU(30," Save\n"),e.qZA()),2&n&&(e.Q6J("nzLayout","vertical")("formGroup",r.form),e.xp6(29),e.Q6J("disabled",r.form.invalid))},directives:[s._Y,s.JL,z.Lr,s.sg,s.Fj,s.JJ,s.u,T.SK,z.Nx,T.t3,z.iK,z.Fd,N.Zp,h.Vq,h.Ip,x.ix,y.dQ,q.w],encapsulation:2}),t})();function ue(t,a){if(1&t&&(e.TgZ(0,"tr")(1,"td",6),e.ALo(2,"date"),e._uU(3),e.ALo(4,"timeago"),e.qZA(),e.TgZ(5,"td",4),e._uU(6),e.qZA(),e.TgZ(7,"td"),e._uU(8),e.ALo(9,"currency"),e.qZA(),e.TgZ(10,"td")(11,"nz-tag",7),e._uU(12),e.ALo(13,"translate"),e.qZA()(),e.TgZ(14,"td")(15,"a",8),e._uU(16),e.ALo(17,"translate"),e.qZA()()()),2&t){const n=a.$implicit,r=e.oxw(2);e.xp6(1),e.Q6J("nz-tooltip",e.xi3(2,8,n.createdOn,"short")),e.xp6(2),e.Oqu(e.lcZ(4,11,n.createdOn)),e.xp6(3),e.Oqu(n.addresses[0]),e.xp6(2),e.Oqu(e.xi3(9,13,n.costAfterCoupon,n.currency)),e.xp6(3),e.Q6J("nzColor",r.tagColor.orderStatus(n.status)),e.xp6(1),e.Oqu(e.lcZ(13,16,"enum.request."+n.status)),e.xp6(3),e.Q6J("routerLink","/requests/view/"+n.id),e.xp6(1),e.Oqu(e.lcZ(17,18,"profile.view"))}}function de(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"nz-table",1,2),e.NdJ("nzQueryParams",function(o){return e.CHM(n),e.oxw().tableService.onTableQueryParamsChange(o)}),e.TgZ(2,"thead")(3,"tr")(4,"th",3),e._uU(5),e.ALo(6,"translate"),e.qZA(),e.TgZ(7,"th",4),e._uU(8),e.ALo(9,"translate"),e.qZA(),e.TgZ(10,"th"),e._uU(11),e.ALo(12,"translate"),e.qZA(),e.TgZ(13,"th"),e._uU(14),e.ALo(15,"translate"),e.qZA(),e.TgZ(16,"th"),e._uU(17),e.ALo(18,"translate"),e.qZA()()(),e.TgZ(19,"tbody"),e.YNc(20,ue,18,20,"tr",5),e.qZA()()}if(2&t){const n=a.ngIf,r=e.MAs(1);e.Q6J("nzFrontPagination",!1)("nzData",n.nodes)("nzTotal",n.totalCount),e.xp6(4),e.Q6J("nzSortFn",!0),e.xp6(1),e.hij(" ",e.lcZ(6,10,"profile.dateTime")," "),e.xp6(3),e.hij(" ",e.lcZ(9,12,"profile.locations")," "),e.xp6(3),e.hij(" ",e.lcZ(12,14,"profile.cost")," "),e.xp6(3),e.hij(" ",e.lcZ(15,16,"profile.status")," "),e.xp6(3),e.Oqu(e.lcZ(18,18,"profile.actions")),e.xp6(3),e.Q6J("ngForOf",r.data)}}let me=(()=>{class t{constructor(n,r,o){this.route=n,this.tagColor=r,this.tableService=o,this.statuses=Object.keys(m.iFo).map(l=>({text:l,value:l}))}ngOnInit(){this.query=this.route.data.pipe((0,_.U)(n=>n.orders))}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(d.gz),e.Y36(b.k),e.Y36(g.w))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-rider-view-orders"]],decls:2,vars:3,consts:[["nzShowSizeChanger","","class","mt-4","nzBordered","",3,"nzFrontPagination","nzData","nzTotal","nzQueryParams",4,"ngIf"],["nzShowSizeChanger","","nzBordered","",1,"mt-4",3,"nzFrontPagination","nzData","nzTotal","nzQueryParams"],["table",""],["nzColumnKey","createdOn",3,"nzSortFn"],[1,"hidden","lg:table-cell"],[4,"ngFor","ngForOf"],[3,"nz-tooltip"],[3,"nzColor"],[3,"routerLink"]],template:function(n,r){if(1&n&&(e.YNc(0,de,21,20,"nz-table",0),e.ALo(1,"async")),2&n){let o;e.Q6J("ngIf",null==(o=e.lcZ(1,1,r.query))||null==o.data||null==o.data.rider?null:o.data.rider.orders)}},directives:[u.O5,c.N8,c.Om,c.$Z,c.Uo,c._C,c.qD,c.p0,u.sg,F.SY,U.j,d.yS],pipes:[u.Ov,Z.X$,u.uU,O.wr,u.H9],encapsulation:2}),t})(),S=(()=>{class t{constructor(n,r){this.gql=n,this.tableService=r}resolve(n,r){var o;const l=this.tableService.deserializeQueryParams(n.queryParams);return this.gql.fetch(Object.assign({riderId:null===(o=n.parent)||void 0===o?void 0:o.params.id},l))}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(m.hTS),e.LFG(g.w))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})();var pe=i(2340),f=i(1945),ze=i(6699),C=i(3677),ge=i(647),J=i(4219),I=i(3098),fe=i(4401),v=i(868),_e=i(5390);function Ze(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"li",15),e.NdJ("click",function(){return e.CHM(n),e.oxw(2).changeStatus("blocked")}),e._uU(1),e.ALo(2,"translate"),e.qZA()}2&t&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"enum.rider.status.blocked")))}function Te(t,a){if(1&t){const n=e.EpF();e.TgZ(0,"li",15),e.NdJ("click",function(){return e.CHM(n),e.oxw(2).changeStatus("enabled")}),e._uU(1),e.ALo(2,"translate"),e.qZA()}2&t&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"enum.rider.status.enabled")))}function he(t,a){1&t&&(e.TgZ(0,"a",16),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"riders.tab.details")))}function ve(t,a){1&t&&(e.TgZ(0,"a",17),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"riders.tab.creditrecords")))}function Ae(t,a){1&t&&(e.TgZ(0,"a",18),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"riders.tab.orders")))}function be(t,a){1&t&&(e.TgZ(0,"a",19),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"riders.tab.addresses")))}function xe(t,a){if(1&t&&(e.TgZ(0,"nz-card")(1,"nz-page-header")(2,"nz-page-header-title"),e._UZ(3,"nz-avatar",1),e._uU(4),e.qZA(),e._UZ(5,"nz-page-header-tags"),e.TgZ(6,"nz-page-header-extra")(7,"button",2),e._uU(8),e.ALo(9,"translate"),e._UZ(10,"i",3),e.qZA(),e.TgZ(11,"nz-dropdown-menu",null,4)(13,"ul",5),e.YNc(14,Ze,3,3,"li",6),e.YNc(15,Te,3,3,"li",6),e.qZA()()(),e.TgZ(16,"nz-page-header-content")(17,"nz-descriptions")(18,"nz-descriptions-item",7),e.ALo(19,"translate"),e._uU(20),e.ALo(21,"phone"),e.qZA(),e.TgZ(22,"nz-descriptions-item",8),e.ALo(23,"translate"),e._uU(24),e.ALo(25,"date"),e.qZA(),e.TgZ(26,"nz-descriptions-item",8),e.ALo(27,"translate"),e._UZ(28,"nz-badge",9),e.qZA()()(),e.TgZ(29,"nz-page-header-footer")(30,"nz-tabset",10)(31,"nz-tab"),e.YNc(32,he,3,3,"a",11),e.qZA(),e.TgZ(33,"nz-tab"),e.YNc(34,ve,3,3,"a",12),e.qZA(),e.TgZ(35,"nz-tab"),e.YNc(36,Ae,3,3,"a",13),e.qZA(),e.TgZ(37,"nz-tab"),e.YNc(38,be,3,3,"a",14),e.qZA()(),e._UZ(39,"router-outlet"),e.qZA()()()),2&t){const n=a.ngIf,r=e.MAs(12),o=e.oxw();e.xp6(3),e.Q6J("nzSrc",o.environment.root+(null==n.media?null:n.media.address)),e.xp6(1),e.AsE("",n.firstName," ",n.lastName,""),e.xp6(3),e.Q6J("nzDropdownMenu",r),e.xp6(1),e.hij(" ",e.lcZ(9,16,"driver.profile.changeStatus")," "),e.xp6(6),e.Q6J("ngIf","Enabled"===n.status),e.xp6(1),e.Q6J("ngIf","Disabled"===n.status),e.xp6(3),e.s9C("nzTitle",e.lcZ(19,18,"profile.mobileNumber")),e.Q6J("nzSpan",1),e.xp6(2),e.Oqu(e.lcZ(21,20,n.mobileNumber)),e.xp6(2),e.s9C("nzTitle",e.lcZ(23,22,"profile.registeredOn")),e.xp6(2),e.Oqu(e.xi3(25,24,n.registrationTimestamp,"short")),e.xp6(2),e.s9C("nzTitle",e.lcZ(27,27,"profile.status")),e.xp6(2),e.Q6J("nzStatus","Enabled"===n.status?"success":"error")("nzText",n.status),e.xp6(2),e.Q6J("nzLinkExact",!1)}}let ye=(()=>{class t{constructor(n,r,o,l){this.route=n,this.tagColor=r,this.updateRiderGQL=o,this.router=l,this.environment=pe.N}ngOnInit(){this.query=this.route.data.pipe((0,_.U)(n=>n.rider))}changeStatus(n){return(0,A.mG)(this,void 0,void 0,function*(){this.updateRiderGQL.mutate({id:this.route.snapshot.params.id,update:{status:n}}),this.router.navigate([],{relativeTo:this.route,queryParams:{refresh:(new Date).getTime()},queryParamsHandling:"merge"})})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(d.gz),e.Y36(b.k),e.Y36(m.Sf3),e.Y36(d.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-rider-view"]],decls:2,vars:3,consts:[[4,"ngIf"],["nzIcon","user",3,"nzSrc"],["nz-button","","nz-dropdown","",3,"nzDropdownMenu"],["nz-icon","","nzType","down"],["menu4","nzDropdownMenu"],["nz-menu",""],["nz-menu-item","",3,"click",4,"ngIf"],[3,"nzTitle","nzSpan"],[3,"nzTitle"],[3,"nzStatus","nzText"],["nzLinkRouter","",1,"mb-4",3,"nzLinkExact"],["nz-tab-link","","routerLink","details",4,"nzTabLink"],["nz-tab-link","","routerLink","financials",4,"nzTabLink"],["nz-tab-link","","routerLink","orders",4,"nzTabLink"],["nz-tab-link","","routerLink","addresses",4,"nzTabLink"],["nz-menu-item","",3,"click"],["nz-tab-link","","routerLink","details"],["nz-tab-link","","routerLink","financials"],["nz-tab-link","","routerLink","orders"],["nz-tab-link","","routerLink","addresses"]],template:function(n,r){if(1&n&&(e.YNc(0,xe,40,29,"nz-card",0),e.ALo(1,"async")),2&n){let o;e.Q6J("ngIf",null==(o=e.lcZ(1,1,r.query))||null==o.data?null:o.data.rider)}},directives:[u.O5,V.bd,f.$O,f.u9,ze.Dz,f.ZJ,f.Jp,x.ix,y.dQ,q.w,C.wA,C.cm,ge.Ls,C.RR,J.wO,J.r9,f.u5,I.R7,I.uj,fe.x7,f.$,v.xH,v.xw,v.Fx,v.Ao,d.yS,d.lC],pipes:[u.Ov,Z.X$,_e.E,u.uU],encapsulation:2}),t})(),Y=(()=>{class t{constructor(n){this.gql=n}resolve(n,r){return this.gql.fetch({id:n.params.id})}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(m.oGR))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})();const qe=[{path:"",component:ye,resolve:{rider:Y},runGuardsAndResolvers:"paramsChange",children:[{path:"",redirectTo:"details"},{path:"details",component:ce},{path:"financials",component:se,resolve:{financials:Q},runGuardsAndResolvers:"paramsOrQueryParamsChange"},{path:"orders",component:me,resolve:{orders:S},runGuardsAndResolvers:"paramsOrQueryParamsChange"},{path:"addresses",component:j,resolve:{addresses:w}}]}];let Ce=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[Y,Q,S,w],imports:[[d.Bz.forChild(qe)],d.Bz]}),t})(),Re=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({imports:[[Ce,P.m]]}),t})()}}]);