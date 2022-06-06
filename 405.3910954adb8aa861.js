"use strict";(self.webpackChunksomiadmin=self.webpackChunksomiadmin||[]).push([[405],{5405:(ce,F,a)=>{a.r(F),a.d(F,{FleetViewModule:()=>me});var m=a(9826),T=a(655),l=a(3075),v=a(3315),f=a(4362),y=a(5233),I=a(2583),A=a(3905),e=a(5e3),q=a(9727),c=a(4546),h=a(1894),x=a(1047),C=a(656),w=a(6042),N=a(2643),U=a(2683);let M=(()=>{class t{constructor(n,o,i,s,u,z){this.route=n,this.fb=o,this.tagColor=i,this.updateGQL=s,this.msg=u,this.router=z,this.form=this.fb.group({id:[null,l.kI.required],name:[null,l.kI.required],phoneNumber:[null,l.kI.required],mobileNumber:[null,l.kI.required],accountNumber:[null,l.kI.required],commissionSharePercent:[0,l.kI.required],commissionShareFlat:[0,l.kI.required],address:[null],exclusivityAreas:[null]}),this.center={lat:24,lng:12},this.countryCodes=I.k,this.polygons=[]}ngAfterViewInit(){this.initializeDrawingManager()}initializeDrawingManager(){var n;this.subscription=this.route.parent.data.subscribe(o=>{if(null!=o.fleet){const s=o.fleet.data.fleet;if(null!=s&&(this.form.patchValue(s),null!=s.exclusivityAreas&&s.exclusivityAreas.length>0)){const u=new google.maps.LatLngBounds;for(const z of s.exclusivityAreas)for(const b of z)u.extend(b);this.map.fitBounds(u)}}}),this.drawingManager=new google.maps.drawing.DrawingManager({drawingMode:google.maps.drawing.OverlayType.POLYGON,drawingControl:!0,map:null===(n=this.map)||void 0===n?void 0:n.googleMap,drawingControlOptions:{position:google.maps.ControlPosition.TOP_CENTER,drawingModes:[google.maps.drawing.OverlayType.POLYGON]}}),google.maps.event.addListener(this.drawingManager,"overlaycomplete",o=>{var i;if(null===(i=this.polygons)||void 0===i||i.push(o.overlay),o.type===google.maps.drawing.OverlayType.POLYGON){const s=o.overlay.getPath().getArray();s.push(s[0]),null==this.form.value.exclusivityAreas?this.form.value.exclusivityAreas=[s]:this.form.value.exclusivityAreas.push(s)}})}onSubmit(){return(0,T.mG)(this,void 0,void 0,function*(){const n=this.form.value,{id:o}=n,i=(0,T._T)(n,["id"]);try{yield(0,A.z)(this.updateGQL.mutate({id:o,update:i})),this.msg.success("Success"),this.router.navigateByUrl("/management/fleets")}catch(s){this.msg.error(s.message)}})}clearMap(){var n;for(let o of this.polygons)o.setMap(null);this.polygons=[],this.form.patchValue({exclusivityAreas:[]}),null===(n=this.drawingManager)||void 0===n||n.setValues(null)}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(m.gz),e.Y36(l.qu),e.Y36(y.k),e.Y36(f.q0r),e.Y36(q.dD),e.Y36(m.F0))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-fleet-view-details"]],viewQuery:function(n,o){if(1&n&&e.Gf(v.b6,5),2&n){let i;e.iGM(i=e.CRH())&&(o.map=i.first)}},decls:52,vars:10,consts:[["nz-form","","nzLayout","vertical",3,"formGroup","ngSubmit"],["frm",""],["type","hidden","formControlName","id"],[1,"md:grid","md:grid-cols-4","md:gap-2"],["nzRequired","","nzFor","name"],["nzErrorTip","The input is not valid Name"],["nz-input","","formControlName","name","id","name"],["nzFor","phoneNumber","nzRequired",""],["formControlName","phoneNumber","id","phoneNumber",1,"w-full"],["nzFor","mobileNumber","nzRequired",""],["formControlName","mobileNumber","id","mobileNumber",1,"w-full"],["nzRequired","","nzFor","commissionSharePercent"],["required","","id","commissionSharePercent","formControlName","commissionSharePercent",1,"w-full",3,"nzMin","nzMax"],["nzRequired","","nzFor","commissionShareFlat"],["required","","id","commissionShareFlat","formControlName","commissionSharePercent",1,"w-full",3,"nzMin","nzMax"],["nzRequired","","nzFor","accountNumber"],["nz-input","","required","","id","accountNumber","formControlName","accountNumber"],["nzFor","address"],["nz-input","","id","address","formControlName","address"],["type","hidden","hidden","","formControlName","exclusivityAreas"],["height","400px","width","100%",3,"center","zoom"],[3,"paths"],["poly",""],[1,"float-right"],["nz-button","","type","button",2,"margin","4px",3,"disabled","click"],["nz-button","","nzType","default","type","submit",3,"disabled"]],template:function(n,o){1&n&&(e.TgZ(0,"form",0,1),e.NdJ("ngSubmit",function(){return o.onSubmit()}),e._UZ(2,"input",2),e.TgZ(3,"div",3)(4,"nz-form-item")(5,"nz-form-label",4),e._uU(6,"Name"),e.qZA(),e.TgZ(7,"nz-form-control",5),e._UZ(8,"input",6),e.qZA()(),e.TgZ(9,"nz-form-item")(10,"nz-form-label",7),e._uU(11,"Phone Number"),e.qZA(),e.TgZ(12,"nz-form-control"),e._UZ(13,"nz-input-number",8),e.qZA()(),e.TgZ(14,"nz-form-item")(15,"nz-form-label",9),e._uU(16,"Mobile Number"),e.qZA(),e.TgZ(17,"nz-form-control"),e._UZ(18,"nz-input-number",10),e.qZA()(),e.TgZ(19,"nz-form-item")(20,"nz-form-label",11),e._uU(21,"Commission Percentage"),e.qZA(),e.TgZ(22,"nz-form-control"),e._UZ(23,"nz-input-number",12),e.qZA()(),e.TgZ(24,"nz-form-item")(25,"nz-form-label",13),e._uU(26,"Commission Flat"),e.qZA(),e.TgZ(27,"nz-form-control"),e._UZ(28,"nz-input-number",14),e.qZA()(),e.TgZ(29,"nz-form-item")(30,"nz-form-label",15),e._uU(31,"Bank Account Info"),e.qZA(),e.TgZ(32,"nz-form-control"),e._UZ(33,"input",16),e.qZA()(),e.TgZ(34,"nz-form-item")(35,"nz-form-label",17),e._uU(36,"Address"),e.qZA(),e.TgZ(37,"nz-form-control"),e._UZ(38,"input",18),e.qZA()()(),e.TgZ(39,"nz-form-item")(40,"nz-form-label",17),e._uU(41,"Exclusivity Area"),e.qZA(),e.TgZ(42,"nz-form-control"),e._UZ(43,"input",19),e.TgZ(44,"google-map",20),e._UZ(45,"map-polygon",21,22),e.qZA()()(),e.TgZ(47,"div",23)(48,"button",24),e.NdJ("click",function(){return o.clearMap()}),e._uU(49," Clear Map "),e.qZA(),e.TgZ(50,"button",25),e._uU(51," Register "),e.qZA()()()),2&n&&(e.Q6J("formGroup",o.form),e.xp6(23),e.Q6J("nzMin",0)("nzMax",100),e.xp6(5),e.Q6J("nzMin",0)("nzMax",100),e.xp6(16),e.Q6J("center",o.center)("zoom",4),e.xp6(1),e.Q6J("paths",o.form.value.exclusivityAreas),e.xp6(3),e.Q6J("disabled",0==o.polygons.length),e.xp6(2),e.Q6J("disabled",o.form.invalid))},directives:[l._Y,l.JL,c.Lr,l.sg,l.Fj,l.JJ,l.u,h.SK,c.Nx,h.t3,c.iK,c.Fd,x.Zp,C._,l.Q7,v.b6,v.oM,w.ix,N.dQ,U.w],encapsulation:2}),t})();var L=a(4004),V=a(7633),R=a(9083),p=a(9808),d=a(939),P=a(404),Q=a(7484),J=a(8054),_=a(1062),D=a(8614);function G(t,r){if(1&t&&(e.TgZ(0,"a",30),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t){const n=e.oxw().$implicit;e.Q6J("routerLink","/management/users/view/"+n.operatorId),e.xp6(1),e.Oqu(e.lcZ(2,2,"table.viewOperator"))}}function j(t,r){if(1&t&&(e.TgZ(0,"a",30),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t){const n=e.oxw().$implicit;e.Q6J("routerLink","/requests/view/"+n.requestId),e.xp6(1),e.Oqu(e.lcZ(2,2,"table.viewRequest"))}}function $(t,r){if(1&t&&(e.TgZ(0,"tr")(1,"td",27),e.ALo(2,"date"),e._uU(3),e.ALo(4,"timeago"),e.qZA(),e.TgZ(5,"td"),e._uU(6),e.ALo(7,"translate"),e.ALo(8,"translate"),e.qZA(),e.TgZ(9,"td",28),e._uU(10),e.ALo(11,"currency"),e.qZA(),e.TgZ(12,"td",24),e._uU(13),e.qZA(),e.TgZ(14,"td",25),e._uU(15),e.qZA(),e.TgZ(16,"td"),e.YNc(17,G,3,4,"a",29),e.YNc(18,j,3,4,"a",29),e.qZA()()),2&t){const n=r.$implicit;e.xp6(1),e.Q6J("nz-tooltip",e.xi3(2,10,n.transactionTimestamp,"short")),e.xp6(2),e.hij(" ",e.lcZ(4,13,n.transactionTimestamp)," "),e.xp6(3),e.hij(" ","Deduct"===n.action?e.lcZ(7,15,"enum.transactionType."+n.deductType):e.lcZ(8,17,"enum.transactionType."+n.rechargeType)," "),e.xp6(3),e.Q6J("ngClass","Recharge"===n.action?"text-green-500":"text-red-500"),e.xp6(1),e.AsE(" ","Recharge"===n.action?"+":"","",e.xi3(11,19,n.amount,n.currency)," "),e.xp6(3),e.Oqu(n.refrenceNumber),e.xp6(2),e.Oqu(n.description),e.xp6(2),e.Q6J("ngIf",null!==n.operatorId),e.xp6(1),e.Q6J("ngIf",null!==n.requestId)}}function B(t,r){if(1&t){const n=e.EpF();e.TgZ(0,"nz-table",20,21),e.NdJ("nzQueryParams",function(){return e.CHM(n),e.oxw().tableService.onTableQueryParamsChange}),e.TgZ(2,"thead")(3,"tr")(4,"th",22),e._uU(5),e.ALo(6,"translate"),e.qZA(),e.TgZ(7,"th",23),e._uU(8),e.ALo(9,"translate"),e.qZA(),e.TgZ(10,"th"),e._uU(11),e.ALo(12,"translate"),e.qZA(),e.TgZ(13,"th",24),e._uU(14),e.ALo(15,"translate"),e.qZA(),e.TgZ(16,"th",25),e._uU(17),e.ALo(18,"translate"),e.qZA(),e.TgZ(19,"th"),e._uU(20),e.ALo(21,"translate"),e.qZA()()(),e.TgZ(22,"tbody"),e.YNc(23,$,19,22,"tr",26),e.qZA()()}if(2&t){const n=r.ngIf,o=e.MAs(1);e.Q6J("nzFrontPagination",!1)("nzData",n.nodes)("nzTotal",n.totalCount),e.xp6(5),e.hij(" ",e.lcZ(6,10,"profile.dateTime")," "),e.xp6(3),e.hij(" ",e.lcZ(9,12,"profile.transactionType")," "),e.xp6(3),e.hij(" ",e.lcZ(12,14,"profile.amount")," "),e.xp6(3),e.hij(" ",e.lcZ(15,16,"profile.documentNumber")," "),e.xp6(3),e.hij(" ",e.lcZ(18,18,"profile.details")," "),e.xp6(3),e.Oqu(e.lcZ(21,20,"profile.actions")),e.xp6(3),e.Q6J("ngForOf",o.data)}}function k(t,r){if(1&t&&(e.TgZ(0,"tr")(1,"td"),e._uU(2),e.ALo(3,"currency"),e.qZA()()),2&t){const n=r.$implicit;e.xp6(2),e.Oqu(e.xi3(3,1,n.balance,n.currency))}}function K(t,r){if(1&t&&(e.TgZ(0,"nz-table",31,32)(2,"thead")(3,"tr")(4,"th"),e._uU(5,"Amount"),e.qZA()()(),e.TgZ(6,"tbody"),e.YNc(7,k,4,4,"tr",26),e.qZA()()),2&t){const n=r.ngIf,o=e.MAs(1);e.Q6J("nzData",n)("nzTotal",n.length),e.xp6(7),e.Q6J("ngForOf",o.data)}}function E(t,r){1&t&&e._UZ(0,"div")}function H(t,r){if(1&t&&(e._UZ(0,"nz-option",34),e.ALo(1,"translate")),2&t){const n=r.$implicit;e.Q6J("nzLabel",e.lcZ(1,2,"enum.transactionType."+n))("nzValue",n)}}function X(t,r){if(1&t&&(e.TgZ(0,"nz-form-item")(1,"nz-form-label"),e._uU(2,"Recharge Type"),e.qZA(),e.TgZ(3,"nz-form-control")(4,"nz-select",33),e.YNc(5,H,2,4,"nz-option",14),e.qZA()()()),2&t){const n=e.oxw();e.xp6(5),e.Q6J("ngForOf",n.rechargeTypes)}}function W(t,r){if(1&t&&(e._UZ(0,"nz-option",34),e.ALo(1,"translate")),2&t){const n=r.$implicit;e.Q6J("nzLabel",e.lcZ(1,2,"enum.transactionType."+n))("nzValue",n)}}function ee(t,r){if(1&t&&(e.TgZ(0,"nz-form-item")(1,"nz-form-label"),e._uU(2,"Deduct Type"),e.qZA(),e.TgZ(3,"nz-form-control")(4,"nz-select",35),e.YNc(5,W,2,4,"nz-option",14),e.qZA()()()),2&t){const n=e.oxw();e.xp6(5),e.Q6J("ngForOf",n.deductTypes)}}function ne(t,r){if(1&t&&e._UZ(0,"nz-option",34),2&t){const n=r.$implicit;e.Q6J("nzLabel",n.currency)("nzValue",n.currency)}}let te=(()=>{class t{constructor(n,o,i,s,u,z,b){this.route=n,this.tagColor=o,this.tableService=i,this.fb=s,this.msg=u,this.routerHelper=z,this.createTransactionGQL=b,this.formTransaction=this.fb.group({action:[null,l.kI.required],rechargeType:[null],deductType:[null],amount:[0,l.kI.required],currency:[null,l.kI.required],description:[null],refrenceNumber:[null]}),this.deductTypes=Object.keys(f.b4s),this.rechargeTypes=Object.keys(f.$m4)}ngOnInit(){this.query=this.route.data.pipe((0,L.U)(n=>n.financials))}getUniquieCurrencies(n){return null==n?[]:[...new Set(n)]}onSubmitTransaction(){var n;return(0,T.mG)(this,void 0,void 0,function*(){if(this.formTransaction.value.fleetId=null===(n=this.route.parent)||void 0===n?void 0:n.snapshot.params.id,"Deduct"!=this.formTransaction.value.action||null!=this.formTransaction.value.deductType)if("Recharge"!=this.formTransaction.value.action||null!=this.formTransaction.value.rechargeType)try{yield(0,A.z)(this.createTransactionGQL.mutate({input:this.formTransaction.value})),this.msg.success("Transaction Submitted."),this.routerHelper.refresh(this.route),this.formTransaction.patchValue({})}catch(o){this.msg.error(o.message)}else this.msg.error("Please select the transaction type.");else this.msg.error("Please select the transaction type.")})}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(m.gz),e.Y36(y.k),e.Y36(V.w),e.Y36(l.qu),e.Y36(q.dD),e.Y36(R.b),e.Y36(f.iaw))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-fleet-view-financials"]],decls:44,vars:20,consts:[["fxLayout","row","fxLayoutGap","4px",1,"dt-actionbar"],["nzTitle","Transactions Records","nzShowSizeChanger","","nzBordered","",3,"nzFrontPagination","nzData","nzTotal","nzQueryParams",4,"ngIf"],["nzTitle","Wallet Summary","nzBordered","","class","mt-2",3,"nzFrontPagination","nzData","nzTotal",4,"ngIf"],[1,"mt-2",3,"nzTitle"],["nz-form","",3,"formGroup","ngSubmit"],[1,"lg:grid","lg:grid-cols-2","lg:gap-2"],["nzRequired",""],["formControlName","action","nzRequired",""],["nzLabel","Deduct","nzValue","Deduct"],["nzLabel","Recharge","nzValue","Recharge"],[4,"ngIf"],["nzRequired","","nzFor","amount"],["formControlName","amount","id","amount","required","",1,"w-full"],["formControlName","currency","id","currency","required",""],[3,"nzLabel","nzValue",4,"ngFor","ngForOf"],["nzFor","refrenceNumber"],["nz-input","","formControlName","refrenceNumber","id","refrenceNumber"],["nzFor","description"],["nz-input","","formControlName","description","id","description"],["nz-button","","nzType","default","type","submit",1,"float-right","mt-2",3,"disabled"],["nzTitle","Transactions Records","nzShowSizeChanger","","nzBordered","",3,"nzFrontPagination","nzData","nzTotal","nzQueryParams"],["table",""],["nzShowSort","","nzColumnKey","transactionTime"],["nzShowSort","","nzColumnKey","transactionType"],[1,"hidden","lg:table-cell"],[1,"hidden","xl:table-cell"],[4,"ngFor","ngForOf"],[3,"nz-tooltip"],[3,"ngClass"],[3,"routerLink",4,"ngIf"],[3,"routerLink"],["nzTitle","Wallet Summary","nzBordered","",1,"mt-2",3,"nzFrontPagination","nzData","nzTotal"],["walletTable",""],["formControlName","rechargeType"],[3,"nzLabel","nzValue"],["formControlName","deductType"]],template:function(n,o){if(1&n&&(e._UZ(0,"div",0),e.YNc(1,B,24,22,"nz-table",1),e.ALo(2,"async"),e.YNc(3,K,8,3,"nz-table",2),e.ALo(4,"async"),e.TgZ(5,"nz-card",3),e.ALo(6,"translate"),e.TgZ(7,"form",4),e.NdJ("ngSubmit",function(){return o.onSubmitTransaction()}),e.TgZ(8,"div",5)(9,"nz-form-item")(10,"nz-form-label",6),e._uU(11,"Type"),e.qZA(),e.TgZ(12,"nz-form-control")(13,"nz-select",7),e._UZ(14,"nz-option",8)(15,"nz-option",9),e.qZA()()(),e.YNc(16,E,1,0,"div",10),e.YNc(17,X,6,1,"nz-form-item",10),e.YNc(18,ee,6,1,"nz-form-item",10),e.TgZ(19,"nz-form-item")(20,"nz-form-label",11),e._uU(21,"Amount"),e.qZA(),e.TgZ(22,"nz-form-control"),e._UZ(23,"nz-input-number",12),e.qZA()(),e.TgZ(24,"nz-form-item")(25,"nz-form-label",6),e._uU(26,"Currency"),e.qZA(),e.TgZ(27,"nz-form-control")(28,"nz-select",13),e.YNc(29,ne,1,2,"nz-option",14),e.ALo(30,"async"),e.qZA()()(),e.TgZ(31,"nz-form-item")(32,"nz-form-label",15),e._uU(33,"Document Number"),e.qZA(),e.TgZ(34,"nz-form-control"),e._UZ(35,"input",16),e.qZA()(),e.TgZ(36,"nz-form-item")(37,"nz-form-label",17),e._uU(38,"Description"),e.qZA(),e.TgZ(39,"nz-form-control"),e._UZ(40,"input",18),e.qZA()()(),e.TgZ(41,"button",19),e._uU(42),e.ALo(43,"translate"),e.qZA()()()),2&n){let i,s,u;e.xp6(1),e.Q6J("ngIf",null==(i=e.lcZ(2,10,o.query))||null==i.data||null==i.data.fleet?null:i.data.fleet.transactions),e.xp6(2),e.Q6J("ngIf",null==(s=e.lcZ(4,12,o.query))||null==s.data||null==s.data.fleet?null:s.data.fleet.wallets),e.xp6(2),e.s9C("nzTitle",e.lcZ(6,14,"profile.insertTransaction")),e.xp6(2),e.Q6J("formGroup",o.formTransaction),e.xp6(9),e.Q6J("ngIf",null===o.formTransaction.value.action),e.xp6(1),e.Q6J("ngIf","Recharge"===o.formTransaction.value.action),e.xp6(1),e.Q6J("ngIf","Deduct"===o.formTransaction.value.action),e.xp6(11),e.Q6J("ngForOf",o.getUniquieCurrencies(null==(u=e.lcZ(30,16,o.query))||null==u.data||null==u.data.regions?null:u.data.regions.nodes)),e.xp6(12),e.Q6J("disabled",!o.formTransaction.valid),e.xp6(1),e.hij(" ",e.lcZ(43,18,"profile.submit")," ")}},directives:[p.O5,d.N8,d.Om,d.$Z,d.Uo,d._C,d.qD,d.p0,p.sg,P.SY,p.mk,m.yS,Q.bd,l._Y,l.JL,c.Lr,l.sg,h.SK,c.Nx,h.t3,c.iK,c.Fd,J.Vq,l.JJ,l.u,J.Ip,C._,l.Q7,x.Zp,l.Fj,w.ix,N.dQ,U.w],pipes:[p.Ov,_.X$,p.uU,D.wr,p.H9],encapsulation:2}),t})(),S=(()=>{class t{constructor(n,o){this.gql=n,this.tableService=o}resolve(n,o){var i;const s=this.tableService.deserializeQueryParams(n.queryParams);return this.gql.fetch(Object.assign({id:null===(i=n.parent)||void 0===i?void 0:i.params.id},s))}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(f.LK1),e.LFG(V.w))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})();var g=a(1945),O=a(3098),Z=a(868);function oe(t,r){1&t&&(e.TgZ(0,"a",8),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"profile.details")))}function re(t,r){1&t&&(e.TgZ(0,"a",9),e._uU(1),e.ALo(2,"translate"),e.qZA()),2&t&&(e.xp6(1),e.Oqu(e.lcZ(2,1,"profile.financialRecords")))}function ae(t,r){if(1&t&&(e.TgZ(0,"nz-card")(1,"nz-page-header")(2,"nz-page-header-title"),e._uU(3),e.qZA(),e._UZ(4,"nz-page-header-tags")(5,"nz-page-header-extra"),e.TgZ(6,"nz-page-header-content")(7,"div",1)(8,"div",2)(9,"nz-descriptions",3)(10,"nz-descriptions-item",4),e.ALo(11,"translate"),e._uU(12),e.qZA(),e.TgZ(13,"nz-descriptions-item",4),e.ALo(14,"translate"),e._uU(15),e.qZA()()()()(),e.TgZ(16,"nz-page-header-footer")(17,"nz-tabset",5)(18,"nz-tab"),e.YNc(19,oe,3,3,"a",6),e.qZA(),e.TgZ(20,"nz-tab"),e.YNc(21,re,3,3,"a",7),e.qZA()(),e._UZ(22,"router-outlet"),e.qZA()()()),2&t){const n=r.ngIf;e.xp6(3),e.Oqu(n.name),e.xp6(6),e.Q6J("nzColumn",2),e.xp6(1),e.s9C("nzTitle",e.lcZ(11,8,"profile.phoneNumber")),e.Q6J("nzSpan",1),e.xp6(2),e.Oqu(n.phoneNumber),e.xp6(1),e.s9C("nzTitle",e.lcZ(14,10,"profile.address")),e.Q6J("nzSpan",2),e.xp6(2),e.Oqu(n.address)}}let ie=(()=>{class t{constructor(n,o,i){this.route=n,this._tagColor=o,this.translation=i,this.tagColor=o}ngOnInit(){this.query=this.route.data.pipe((0,L.U)(n=>n.fleet))}}return t.\u0275fac=function(n){return new(n||t)(e.Y36(m.gz),e.Y36(y.k),e.Y36(_.sK))},t.\u0275cmp=e.Xpm({type:t,selectors:[["app-fleet-view"]],decls:2,vars:3,consts:[[4,"ngIf"],[1,"content"],[1,"main"],[3,"nzColumn"],[3,"nzTitle","nzSpan"],["nzLinkRouter","",1,"mb-2"],["nz-tab-link","","routerLink","details",4,"nzTabLink"],["nz-tab-link","","routerLink","financials",4,"nzTabLink"],["nz-tab-link","","routerLink","details"],["nz-tab-link","","routerLink","financials"]],template:function(n,o){if(1&n&&(e.YNc(0,ae,23,12,"nz-card",0),e.ALo(1,"async")),2&n){let i;e.Q6J("ngIf",null==(i=e.lcZ(1,1,o.query))||null==i.data?null:i.data.fleet)}},directives:[p.O5,Q.bd,g.$O,g.u9,g.ZJ,g.Jp,g.u5,O.R7,O.uj,g.$,Z.xH,Z.xw,Z.Fx,Z.Ao,m.yS,m.lC],pipes:[p.Ov,_.X$],encapsulation:2}),t})(),Y=(()=>{class t{constructor(n){this.gql=n}resolve(n,o){return this.gql.fetch({id:n.params.id})}}return t.\u0275fac=function(n){return new(n||t)(e.LFG(f.vab))},t.\u0275prov=e.Yz7({token:t,factory:t.\u0275fac}),t})();const le=[{path:"",component:ie,resolve:{fleet:Y},children:[{path:"",redirectTo:"details",pathMatch:"full"},{path:"details",component:M},{path:"financials",component:te,resolve:{financials:S},runGuardsAndResolvers:"paramsOrQueryParamsChange"}]}];let se=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[Y,S],imports:[[m.Bz.forChild(le)],m.Bz]}),t})();var ue=a(6889);let me=(()=>{class t{}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=e.oAB({type:t}),t.\u0275inj=e.cJS({providers:[],imports:[[se,ue.m]]}),t})()}}]);