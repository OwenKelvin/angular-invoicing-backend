(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{B3RB:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n("ofXK"),c=n("fXoL");let o=(()=>{class t{}return t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({factory:function(e){return new(e||t)},imports:[[r.c]]}),t})()},R2ID:function(t,e,n){"use strict";n.r(e),n.d(e,"PurchasesReportModule",function(){return x});var r=n("ofXK"),c=n("tyNb"),o=n("3Pt+"),s=n("+Kmi"),a=n("2Vo4"),i=n("5+tZ"),b=n("lJxs"),l=n("fXoL"),u=n("tk/3");let p=(()=>{class t{constructor(t){this.http=t,this.purchases$=t=>this.http.get(`api/reports/purchases/?${t}`),this.transformPurchases=t=>t.map(t=>({id:t.id,productId:t.product_id,productName:t.product_name,sellerId:t.seller_id,sellerName:t.seller_name,quantity:t.quantity,unitPrice:t.unit_price,purchaseDate:t.purchase_date,total:t.quantity*t.unit_price}))}getReport({startDate:t,endDate:e}){const r=n("r8II").stringify({start_date:t,end_date:e});return this.purchases$(r).pipe(Object(b.a)(this.transformPurchases))}}return t.\u0275fac=function(e){return new(e||t)(l.Wb(u.b))},t.\u0275prov=l.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})();var d=n("oGmh"),f=n("aFxk");function h(t,e){1&t&&l.Nb(0,"i",17)}function m(t,e){1&t&&l.Nb(0,"i",18)}function R(t,e){if(1&t&&(l.Sb(0,"tr"),l.Sb(1,"td"),l.Ac(2),l.Rb(),l.Sb(3,"td"),l.Ac(4),l.Rb(),l.Sb(5,"td"),l.Ac(6),l.cc(7,"titlecase"),l.Rb(),l.Sb(8,"td"),l.Ac(9),l.Rb(),l.Sb(10,"td"),l.Ac(11),l.cc(12,"currency"),l.Rb(),l.Sb(13,"td"),l.Ac(14),l.cc(15,"currency"),l.Rb(),l.Rb()),2&t){const t=e.$implicit;l.Ab(2),l.Bc(t.purchaseDate),l.Ab(2),l.Dc("#",t.productId,"/ ",t.id,""),l.Ab(2),l.Bc(l.dc(7,7,t.productName)),l.Ab(3),l.Bc(t.quantity),l.Ab(2),l.Bc(l.ec(12,9,t.unitPrice," ")),l.Ab(3),l.Bc(l.ec(15,12,t.total," "))}}function S(t,e){1&t&&(l.Sb(0,"tr"),l.Sb(1,"td",21),l.Sb(2,"section",22),l.Ac(3,"No Data Found"),l.Rb(),l.Rb(),l.Rb())}function y(t,e){if(1&t&&(l.Qb(0),l.yc(1,R,16,15,"tr",19),l.yc(2,S,4,0,"tr",20),l.Pb()),2&t){const t=e.ngIf;l.Ab(1),l.hc("ngForOf",t),l.Ab(1),l.hc("ngIf",t.length<1)}}function g(t,e){1&t&&(l.Sb(0,"tr"),l.Sb(1,"td",21),l.Nb(2,"app-loading-bubble"),l.Rb(),l.Rb())}const A=[{path:"",pathMatch:"full",component:(()=>{class t extends(Object(s.a)()){constructor(t,e){super(),this.fb=t,this.purchasesReportService=e,this.salesReportForm=this.fb.group({startDate:[(new Date).toISOString().substring(0,10),o.v.required],endDate:[(new Date).toISOString().substring(0,10),o.v.required]}),this.dataRefreshSubject$=new a.a(this.salesReportForm.value),this.dataRefresh$=this.dataRefreshSubject$.asObservable(),this.purchases$=this.dataRefresh$.pipe(Object(i.a)(t=>this.purchasesReportService.getReport(t))),this.total$=this.purchases$.pipe(Object(b.a)(t=>t.reduce((t,{total:e})=>t+e,0)))}getSalesReport(){this.dataRefreshSubject$.next(this.salesReportForm.value)}}return t.\u0275fac=function(e){return new(e||t)(l.Mb(o.d),l.Mb(p))},t.\u0275cmp=l.Gb({type:t,selectors:[["app-purchases-report"]],features:[l.xb],decls:48,vars:18,consts:[[3,"formGroup","submit"],[1,"d-flex","align-items-end","flex-wrap"],[1,"col-sm-6","col-md-6","col-lg-4","col-xl-3"],["for","startDate",1,"control-label"],["formControlName","startDate","type","date","id","startDate",1,"form-control"],["for","endDate",1,"control-label"],["formControlName","endDate","type","date","id","endDate",1,"form-control"],[1,"col-sm-6","col-md-6","col-lg-4","col-xl-3","mt-md-2","mt-sm-2"],[1,"btn","btn-primary",3,"disabled"],["class","icon-ok",4,"ngIf"],["class","icon-spin3 animate-spin",4,"ngIf"],[1,"d-flex","justify-content-end"],["selector",".printable"],[1,"printable"],[1,"table","table-dark"],[4,"ngIf","ngIfElse"],["loading",""],[1,"icon-ok"],[1,"icon-spin3","animate-spin"],[4,"ngFor","ngForOf"],[4,"ngIf"],["colspan","5"],[1,"alert","alert-info"]],template:function(t,e){if(1&t&&(l.Sb(0,"h1"),l.Ac(1,"Purchases Report"),l.Rb(),l.Sb(2,"form",0),l.Zb("submit",function(){return e.getSalesReport()}),l.Sb(3,"section",1),l.Sb(4,"section",2),l.Sb(5,"label",3),l.Ac(6,"From"),l.Rb(),l.Nb(7,"input",4),l.Rb(),l.Sb(8,"section",2),l.Sb(9,"label",5),l.Ac(10,"To"),l.Rb(),l.Nb(11,"input",6),l.Rb(),l.Sb(12,"section",7),l.Sb(13,"button",8),l.Ac(14," Generate Report "),l.yc(15,h,1,0,"i",9),l.cc(16,"async"),l.yc(17,m,1,0,"i",10),l.cc(18,"async"),l.Rb(),l.Rb(),l.Rb(),l.Sb(19,"div",11),l.Nb(20,"app-print",12),l.Rb(),l.Sb(21,"section",13),l.Sb(22,"table",14),l.Sb(23,"thead"),l.Sb(24,"tr"),l.Sb(25,"th"),l.Ac(26,"Date"),l.Rb(),l.Sb(27,"th"),l.Ac(28,"Product Id/ Purchase Id"),l.Rb(),l.Sb(29,"th"),l.Ac(30,"Product Name"),l.Rb(),l.Sb(31,"th"),l.Ac(32,"Quantity Purchased"),l.Rb(),l.Sb(33,"th"),l.Ac(34,"Price Per Unit"),l.Rb(),l.Sb(35,"th"),l.Ac(36,"Total"),l.Rb(),l.Rb(),l.Rb(),l.Sb(37,"tbody"),l.yc(38,y,3,2,"ng-container",15),l.cc(39,"async"),l.yc(40,g,3,0,"ng-template",null,16,l.zc),l.Rb(),l.Nb(42,"tfoot"),l.Rb(),l.Sb(43,"div"),l.Sb(44,"b"),l.Ac(45),l.cc(46,"currency"),l.cc(47,"async"),l.Rb(),l.Rb(),l.Rb(),l.Rb()),2&t){const t=l.qc(41);l.Ab(2),l.hc("formGroup",e.salesReportForm),l.Ab(11),l.hc("disabled",e.salesReportForm.invalid),l.Ab(2),l.hc("ngIf",e.salesReportForm.valid&&!1===l.dc(16,7,e.submitInProgressAction$)),l.Ab(2),l.hc("ngIf",l.dc(18,9,e.submitInProgressAction$)),l.Ab(21),l.hc("ngIf",l.dc(39,11,e.purchases$))("ngIfElse",t),l.Ab(7),l.Cc("Total Purchases: ",l.ec(46,13,l.dc(47,16,e.total$),"KES "),"")}},directives:[o.x,o.n,o.h,o.b,o.m,o.g,r.n,d.a,r.m,f.a],pipes:[r.b,r.d,r.u],styles:[""]}),t})(),data:{breadcrumb:null}}];let w=(()=>{class t{}return t.\u0275mod=l.Kb({type:t}),t.\u0275inj=l.Jb({factory:function(e){return new(e||t)},imports:[[c.j.forChild(A)],c.j]}),t})();var v=n("jdGB"),I=n("RecK"),P=n("B3RB");let x=(()=>{class t{}return t.\u0275mod=l.Kb({type:t}),t.\u0275inj=l.Jb({factory:function(e){return new(e||t)},imports:[[r.c,w,o.s,v.a,I.a,P.a]]}),t})()},aFxk:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n("fXoL");let c=(()=>{class t{constructor(){}ngOnInit(){}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Gb({type:t,selectors:[["app-loading-bubble"]],decls:4,vars:0,consts:[["role","status",1,"spinner-grow"],[1,"sr-only"]],template:function(t,e){1&t&&(r.Sb(0,"div",0),r.Sb(1,"span",1),r.Ac(2,"Loading..."),r.Rb(),r.Rb(),r.Ac(3,"\nPlease wait..."))},styles:[""]}),t})()},bxdZ:function(t,e,n){"use strict";n.d(e,"a",function(){return c});var r=n("fXoL");let c=(()=>{class t{constructor(){}popupPrint(t){const e=document.querySelector(t).innerHTML,n=window.open("","_blank","top=0,left=0,height=auto,width=auto");null==n||n.document.open(),null==n||n.document.write(`\n      <html>\n        <head>\n          <title>Print tab</title>\n          <style>\n            .d-flex  {\n              width: 100%;\n              display: flex;\n              justify-content: between;\n            }\n            .table {\n              text-align: left;\n              width: 100%;\n              margin-bottom: 1rem;\n            }\n            .table td, .table th {\n              padding: .75rem;\n              vertical-align: top;\n              border-top: 1px solid #dee2e6;\n            }\n            td {\n              display: table-cell;\n            }\n            @media print {\n              .d-print-none {\n                display: none;\n              }\n            }\n          </style>\n        </head>\n        <body>\n          <section class='d-print-none'>\n            <button onclick="window.print();">Print</button>\n            <button onclick="window.close();">Cancel</button>\n          </section>\n         ${e}\n        </body>\n        <script>\n          window.print();\n        <\/script>\n      </html>`)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},oGmh:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n("fXoL"),c=n("bxdZ");let o=(()=>{class t{constructor(t){this.printService=t}print(){this.printService.popupPrint(this.selector)}}return t.\u0275fac=function(e){return new(e||t)(r.Mb(c.a))},t.\u0275cmp=r.Gb({type:t,selectors:[["app-print"]],inputs:{selector:"selector"},decls:3,vars:0,consts:[["type","button",1,"btn","btn-secondary","btn-sm",3,"click"],[1,"icon-print"]],template:function(t,e){1&t&&(r.Sb(0,"button",0),r.Zb("click",function(){return e.print()}),r.Ac(1,"Print "),r.Nb(2,"span",1),r.Rb())},styles:[""]}),t})()}}]);