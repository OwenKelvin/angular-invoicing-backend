!function(){function t(n,e){return(t=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(n,e)}function n(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var c,o=r(t);if(n){var i=r(this).constructor;c=Reflect.construct(o,arguments,i)}else c=o.apply(this,arguments);return e(this,c)}}function e(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function r(t){return(r=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function c(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function o(t,n,e){return n&&c(t.prototype,n),e&&c(t,e),t}function i(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{B3RB:function(t,n,e){"use strict";e.d(n,"a",function(){return o});var r=e("ofXK"),c=e("fXoL"),o=function(){var t=function t(){i(this,t)};return t.\u0275mod=c.Kb({type:t}),t.\u0275inj=c.Jb({factory:function(n){return new(n||t)},imports:[[r.c]]}),t}()},R2ID:function(e,r,c){"use strict";c.r(r),c.d(r,"PurchasesReportModule",function(){return F});var a,u=c("ofXK"),s=c("tyNb"),b=c("3Pt+"),l=c("+Kmi"),f=c("2Vo4"),p=c("5+tZ"),d=c("lJxs"),h=c("fXoL"),m=c("tk/3"),y=((a=function(){function t(n){var e=this;i(this,t),this.http=n,this.purchases$=function(t){return e.http.get("api/reports/purchases/?".concat(t))},this.transformPurchases=function(t){return t.map(function(t){return{id:t.id,productId:t.product_id,productName:t.product_name,sellerId:t.seller_id,sellerName:t.seller_name,quantity:t.quantity,unitPrice:t.unit_price,purchaseDate:t.purchase_date,total:t.quantity*t.unit_price}})}}return o(t,[{key:"getReport",value:function(t){var n=t.startDate,e=t.endDate,r=c("r8II").stringify({start_date:n,end_date:e});return this.purchases$(r).pipe(Object(d.a)(this.transformPurchases))}}]),t}()).\u0275fac=function(t){return new(t||a)(h.Wb(m.b))},a.\u0275prov=h.Ib({token:a,factory:a.\u0275fac,providedIn:"root"}),a),R=c("oGmh"),S=c("aFxk");function v(t,n){1&t&&h.Nb(0,"i",17)}function g(t,n){1&t&&h.Nb(0,"i",18)}function w(t,n){if(1&t&&(h.Sb(0,"tr"),h.Sb(1,"td"),h.Ac(2),h.Rb(),h.Sb(3,"td"),h.Ac(4),h.Rb(),h.Sb(5,"td"),h.Ac(6),h.cc(7,"titlecase"),h.Rb(),h.Sb(8,"td"),h.Ac(9),h.Rb(),h.Sb(10,"td"),h.Ac(11),h.cc(12,"currency"),h.Rb(),h.Sb(13,"td"),h.Ac(14),h.cc(15,"currency"),h.Rb(),h.Rb()),2&t){var e=n.$implicit;h.Ab(2),h.Bc(e.purchaseDate),h.Ab(2),h.Dc("#",e.productId,"/ ",e.id,""),h.Ab(2),h.Bc(h.dc(7,7,e.productName)),h.Ab(3),h.Bc(e.quantity),h.Ab(2),h.Bc(h.ec(12,9,e.unitPrice," ")),h.Ab(3),h.Bc(h.ec(15,12,e.total," "))}}function A(t,n){1&t&&(h.Sb(0,"tr"),h.Sb(1,"td",21),h.Sb(2,"section",22),h.Ac(3,"No Data Found"),h.Rb(),h.Rb(),h.Rb())}function P(t,n){if(1&t&&(h.Qb(0),h.yc(1,w,16,15,"tr",19),h.yc(2,A,4,0,"tr",20),h.Pb()),2&t){var e=n.ngIf;h.Ab(1),h.hc("ngForOf",e),h.Ab(1),h.hc("ngIf",e.length<1)}}function I(t,n){1&t&&(h.Sb(0,"tr"),h.Sb(1,"td",21),h.Nb(2,"app-loading-bubble"),h.Rb(),h.Rb())}var j,k,D,O=[{path:"",pathMatch:"full",component:(j=function(e){!function(n,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");n.prototype=Object.create(e&&e.prototype,{constructor:{value:n,writable:!0,configurable:!0}}),e&&t(n,e)}(c,e);var r=n(c);function c(t,n){var e;return i(this,c),(e=r.call(this)).fb=t,e.purchasesReportService=n,e.salesReportForm=e.fb.group({startDate:[(new Date).toISOString().substring(0,10),b.v.required],endDate:[(new Date).toISOString().substring(0,10),b.v.required]}),e.dataRefreshSubject$=new f.a(e.salesReportForm.value),e.dataRefresh$=e.dataRefreshSubject$.asObservable(),e.purchases$=e.dataRefresh$.pipe(Object(p.a)(function(t){return e.purchasesReportService.getReport(t)})),e.total$=e.purchases$.pipe(Object(d.a)(function(t){return t.reduce(function(t,n){return t+n.total},0)})),e}return o(c,[{key:"getSalesReport",value:function(){this.dataRefreshSubject$.next(this.salesReportForm.value)}}]),c}(Object(l.a)()),j.\u0275fac=function(t){return new(t||j)(h.Mb(b.d),h.Mb(y))},j.\u0275cmp=h.Gb({type:j,selectors:[["app-purchases-report"]],features:[h.xb],decls:48,vars:18,consts:[[3,"formGroup","submit"],[1,"d-flex","align-items-end","flex-wrap"],[1,"col-sm-6","col-md-6","col-lg-4","col-xl-3"],["for","startDate",1,"control-label"],["formControlName","startDate","type","date","id","startDate",1,"form-control"],["for","endDate",1,"control-label"],["formControlName","endDate","type","date","id","endDate",1,"form-control"],[1,"col-sm-6","col-md-6","col-lg-4","col-xl-3","mt-md-2","mt-sm-2"],[1,"btn","btn-primary",3,"disabled"],["class","icon-ok",4,"ngIf"],["class","icon-spin3 animate-spin",4,"ngIf"],[1,"d-flex","justify-content-end"],["selector",".printable"],[1,"printable"],[1,"table","table-dark"],[4,"ngIf","ngIfElse"],["loading",""],[1,"icon-ok"],[1,"icon-spin3","animate-spin"],[4,"ngFor","ngForOf"],[4,"ngIf"],["colspan","5"],[1,"alert","alert-info"]],template:function(t,n){if(1&t&&(h.Sb(0,"h1"),h.Ac(1,"Purchases Report"),h.Rb(),h.Sb(2,"form",0),h.Zb("submit",function(){return n.getSalesReport()}),h.Sb(3,"section",1),h.Sb(4,"section",2),h.Sb(5,"label",3),h.Ac(6,"From"),h.Rb(),h.Nb(7,"input",4),h.Rb(),h.Sb(8,"section",2),h.Sb(9,"label",5),h.Ac(10,"To"),h.Rb(),h.Nb(11,"input",6),h.Rb(),h.Sb(12,"section",7),h.Sb(13,"button",8),h.Ac(14," Generate Report "),h.yc(15,v,1,0,"i",9),h.cc(16,"async"),h.yc(17,g,1,0,"i",10),h.cc(18,"async"),h.Rb(),h.Rb(),h.Rb(),h.Sb(19,"div",11),h.Nb(20,"app-print",12),h.Rb(),h.Sb(21,"section",13),h.Sb(22,"table",14),h.Sb(23,"thead"),h.Sb(24,"tr"),h.Sb(25,"th"),h.Ac(26,"Date"),h.Rb(),h.Sb(27,"th"),h.Ac(28,"Product Id/ Purchase Id"),h.Rb(),h.Sb(29,"th"),h.Ac(30,"Product Name"),h.Rb(),h.Sb(31,"th"),h.Ac(32,"Quantity Purchased"),h.Rb(),h.Sb(33,"th"),h.Ac(34,"Price Per Unit"),h.Rb(),h.Sb(35,"th"),h.Ac(36,"Total"),h.Rb(),h.Rb(),h.Rb(),h.Sb(37,"tbody"),h.yc(38,P,3,2,"ng-container",15),h.cc(39,"async"),h.yc(40,I,3,0,"ng-template",null,16,h.zc),h.Rb(),h.Nb(42,"tfoot"),h.Rb(),h.Sb(43,"div"),h.Sb(44,"b"),h.Ac(45),h.cc(46,"currency"),h.cc(47,"async"),h.Rb(),h.Rb(),h.Rb(),h.Rb()),2&t){var e=h.qc(41);h.Ab(2),h.hc("formGroup",n.salesReportForm),h.Ab(11),h.hc("disabled",n.salesReportForm.invalid),h.Ab(2),h.hc("ngIf",n.salesReportForm.valid&&!1===h.dc(16,7,n.submitInProgressAction$)),h.Ab(2),h.hc("ngIf",h.dc(18,9,n.submitInProgressAction$)),h.Ab(21),h.hc("ngIf",h.dc(39,11,n.purchases$))("ngIfElse",e),h.Ab(7),h.Cc("Total Purchases: ",h.ec(46,13,h.dc(47,16,n.total$),"KES "),"")}},directives:[b.x,b.n,b.h,b.b,b.m,b.g,u.n,R.a,u.m,S.a],pipes:[u.b,u.d,u.u],styles:[""]}),j),data:{breadcrumb:null}}],x=((k=function t(){i(this,t)}).\u0275mod=h.Kb({type:k}),k.\u0275inj=h.Jb({factory:function(t){return new(t||k)},imports:[[s.j.forChild(O)],s.j]}),k),_=c("jdGB"),N=c("RecK"),$=c("B3RB"),F=((D=function t(){i(this,t)}).\u0275mod=h.Kb({type:D}),D.\u0275inj=h.Jb({factory:function(t){return new(t||D)},imports:[[u.c,x,b.s,_.a,N.a,$.a]]}),D)},aFxk:function(t,n,e){"use strict";e.d(n,"a",function(){return c});var r=e("fXoL"),c=function(){var t=function(){function t(){i(this,t)}return o(t,[{key:"ngOnInit",value:function(){}}]),t}();return t.\u0275fac=function(n){return new(n||t)},t.\u0275cmp=r.Gb({type:t,selectors:[["app-loading-bubble"]],decls:4,vars:0,consts:[["role","status",1,"spinner-grow"],[1,"sr-only"]],template:function(t,n){1&t&&(r.Sb(0,"div",0),r.Sb(1,"span",1),r.Ac(2,"Loading..."),r.Rb(),r.Rb(),r.Ac(3,"\nPlease wait..."))},styles:[""]}),t}()},bxdZ:function(t,n,e){"use strict";e.d(n,"a",function(){return c});var r=e("fXoL"),c=function(){var t=function(){function t(){i(this,t)}return o(t,[{key:"popupPrint",value:function(t){var n=document.querySelector(t).innerHTML,e=window.open("","_blank","top=0,left=0,height=auto,width=auto");null==e||e.document.open(),null==e||e.document.write('\n      <html>\n        <head>\n          <title>Print tab</title>\n          <style>\n            .d-flex  {\n              width: 100%;\n              display: flex;\n              justify-content: between;\n            }\n            .table {\n              text-align: left;\n              width: 100%;\n              margin-bottom: 1rem;\n            }\n            .table td, .table th {\n              padding: .75rem;\n              vertical-align: top;\n              border-top: 1px solid #dee2e6;\n            }\n            td {\n              display: table-cell;\n            }\n            @media print {\n              .d-print-none {\n                display: none;\n              }\n            }\n          </style>\n        </head>\n        <body>\n          <section class=\'d-print-none\'>\n            <button onclick="window.print();">Print</button>\n            <button onclick="window.close();">Cancel</button>\n          </section>\n         '.concat(n,"\n        </body>\n        <script>\n          window.print();\n        <\/script>\n      </html>"))}}]),t}();return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},oGmh:function(t,n,e){"use strict";e.d(n,"a",function(){return a});var r=e("fXoL"),c=e("bxdZ"),a=function(){var t=function(){function t(n){i(this,t),this.printService=n}return o(t,[{key:"print",value:function(){this.printService.popupPrint(this.selector)}}]),t}();return t.\u0275fac=function(n){return new(n||t)(r.Mb(c.a))},t.\u0275cmp=r.Gb({type:t,selectors:[["app-print"]],inputs:{selector:"selector"},decls:3,vars:0,consts:[["type","button",1,"btn","btn-secondary","btn-sm",3,"click"],[1,"icon-print"]],template:function(t,n){1&t&&(r.Sb(0,"button",0),r.Zb("click",function(){return n.print()}),r.Ac(1,"Print "),r.Nb(2,"span",1),r.Rb())},styles:[""]}),t}()}}])}();