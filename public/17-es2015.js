(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{B3RB:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var c=n("ofXK"),i=n("fXoL");let o=(()=>{class t{}return t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({factory:function(e){return new(e||t)},imports:[[c.c]]}),t})()},CG4G:function(t,e,n){"use strict";n.d(e,"a",function(){return c});const c=(t=class{})=>class extends t{getColorString(t){return["hsl(",Math.floor(120*t/100),",100%,50%)"].join("")}}},a1ig:function(t,e,n){"use strict";n.r(e),n.d(e,"ProductsModule",function(){return Y});var c=n("ofXK"),i=n("tyNb"),o=n("l7P3"),r=n("gJ3R"),b=n("pLZG"),s=n("5+tZ"),l=n("vkgz"),d=n("1G5W"),a=n("XNiG"),u=n("nPLa"),p=n("3Pt+"),m=n("CRaK"),h=n("sEf6"),f=n("+Kmi"),g=n("fXoL"),S=n("2qjx"),y=n("ChtM"),R=n("QlUG"),A=n("dZIy");function v(t,e){if(1&t){const t=g.Tb();g.Sb(0,"li",35),g.Zb("click",function(){g.tc(t);const n=e.$implicit;return g.bc(2).selectedBuyingPriceCurrency.setValue(n)}),g.Sb(1,"span",36),g.Ac(2),g.Rb(),g.Rb()}if(2&t){const t=e.$implicit;g.Ab(2),g.Bc(t)}}function P(t,e){if(1&t&&(g.Sb(0,"ul",33),g.yc(1,v,3,1,"li",34),g.cc(2,"async"),g.Rb()),2&t){const t=g.bc();g.Ab(1),g.hc("ngForOf",g.dc(2,1,t.currencies$))}}function w(t,e){if(1&t){const t=g.Tb();g.Sb(0,"li",35),g.Zb("click",function(){g.tc(t);const n=e.$implicit;return g.bc(2).selectedSellingPriceCurrency.setValue(n)}),g.Sb(1,"span",36),g.Ac(2),g.Rb(),g.Rb()}if(2&t){const t=e.$implicit;g.Ab(2),g.Bc(t)}}function C(t,e){if(1&t&&(g.Sb(0,"ul",37),g.yc(1,w,3,1,"li",34),g.cc(2,"async"),g.Rb()),2&t){const t=g.bc();g.Ab(1),g.hc("ngForOf",g.dc(2,1,t.currencies$))}}function x(t,e){1&t&&g.Nb(0,"i",38)}function j(t,e){1&t&&g.Nb(0,"i",39)}let I=(()=>{class t extends(Object(f.a)(Object(h.a)())){constructor(t,e,n,c){super(),this.store=t,this.fb=e,this.productService=n,this.currencyService=c,this.productIdSubject$=new a.a,this.product$=this.productIdSubject$.asObservable().pipe(Object(b.a)(t=>t>0),Object(s.a)(t=>this.store.pipe(Object(o.t)(Object(r.b)({id:t})),Object(l.a)(t=>{this.productForm.patchValue(t),this.productForm.updateValueAndValidity()}),Object(d.a)(this.destroyed$)))),this.currencies$=this.currencyService.loadCurrencies$,this.productForm=this.fb.group({id:[0],name:["",[p.v.required]],buyingPrice:[0],buyingPriceCurrency:["KES"],sellingPrice:[0],sellingPriceCurrency:["KES"],minAmountCheck:[5,[p.v.required]],maxAmountCheck:[15,[p.v.required]]})}ngOnInit(){this.product$.subscribe(),this.productIdSubject$.next(this.id),this.store.dispatch(Object(u.b)())}closeModal(){this.itemForm=this.productForm,this.closeFormDialog()&&this.store.dispatch(Object(u.a)())}productFormSubmit(){this.productForm.valid&&(this.submitInProgressSubject$.next(!0),this.productService.saveProduct(this.productForm.value).subscribe({next:t=>{this.submitInProgressSubject$.next(!1),this.store.dispatch(Object(u.a)()),this.store.dispatch(Object(m.d)({data:[t]}))},error:()=>this.submitInProgressSubject$.next(!1)}))}get selectedBuyingPriceCurrency(){return this.productForm.get("buyingPriceCurrency")}get selectedSellingPriceCurrency(){return this.productForm.get("sellingPriceCurrency")}}return t.\u0275fac=function(e){return new(e||t)(g.Mb(o.h),g.Mb(p.d),g.Mb(S.a),g.Mb(y.a))},t.\u0275cmp=g.Gb({type:t,selectors:[["app-product-maintenance"]],inputs:{id:"id"},features:[g.xb],decls:54,vars:11,consts:[[1,"bg-dark"],[3,"formGroup","submit"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"d-flex","flex-wrap"],[1,"col-lg-6"],["label","Product Name","placeholder","e.g XYZ Bolt No. 55","id","productName","formControlName","name"],["for","productBuyingPrice",1,"control-label"],[1,"input-group","mb-3"],[1,"input-group-prepend"],["dropdown","",1,"btn-group"],["type","button",1,"btn","bg-light","text-dark"],["id","button-split","type","button","dropdownToggle","","aria-controls","dropdown-split",1,"btn","bg-light","text-dark","dropdown-toggle","dropdown-toggle-split"],[1,"caret"],[1,"sr-only"],["id","dropdown-split","class","dropdown-menu","role","menu","aria-labelledby","button-split",4,"dropdownMenu"],["id","productBuyingPrice","formControlName","buyingPrice","type","number",1,"form-control"],["for","productSellingPrice",1,"control-label"],["id","button-split-1","type","button","dropdownToggle","","aria-controls","dropdown-split",1,"btn","bg-light","text-dark","dropdown-toggle","dropdown-toggle-split"],["id","dropdown-split","class","dropdown-menu","role","menu","aria-labelledby","button-split-1",4,"dropdownMenu"],["id","productSellingPrice","formControlName","sellingPrice","type","number",1,"form-control"],[1,"d-flex"],[1,"col-6","col-lg-6","p-0","m-0"],["label","Min Threshold","type","number","id","minThreshold","formControlName","minAmountCheck"],[1,"col-6","col-lg-6","p-0","m-0","ml-1"],["label","Max Threshold","type","number","id","maxThreshold","formControlName","maxAmountCheck"],[1,"card-footer","d-flex","justify-content-between"],[1,"btn","btn-success",3,"disabled"],["class","icon-ok",4,"ngIf"],["class","icon-spin3 animate-spin",4,"ngIf"],["type","button",1,"btn","btn-secondary",3,"click"],[1,"icon-cancel"],["id","dropdown-split","role","menu","aria-labelledby","button-split",1,"dropdown-menu"],["role","menuitem",3,"click",4,"ngFor","ngForOf"],["role","menuitem",3,"click"],[1,"dropdown-item"],["id","dropdown-split","role","menu","aria-labelledby","button-split-1",1,"dropdown-menu"],[1,"icon-ok"],[1,"icon-spin3","animate-spin"]],template:function(t,e){1&t&&(g.Sb(0,"section",0),g.Sb(1,"form",1),g.Zb("submit",function(){return e.productFormSubmit()}),g.Sb(2,"section",2),g.Sb(3,"section",3),g.Sb(4,"h2"),g.Ac(5),g.Rb(),g.Rb(),g.Sb(6,"section",4),g.Sb(7,"section",5),g.Sb(8,"section",6),g.Nb(9,"app-input",7),g.Rb(),g.Sb(10,"section",6),g.Sb(11,"label",8),g.Ac(12,"Buying Price"),g.Rb(),g.Sb(13,"div",9),g.Sb(14,"div",10),g.Sb(15,"div",11),g.Sb(16,"button",12),g.Ac(17),g.Rb(),g.Sb(18,"button",13),g.Nb(19,"span",14),g.Sb(20,"span",15),g.Ac(21,"Change Currency"),g.Rb(),g.Rb(),g.yc(22,P,3,3,"ul",16),g.Rb(),g.Rb(),g.Nb(23,"input",17),g.Rb(),g.Rb(),g.Sb(24,"section",6),g.Sb(25,"label",18),g.Ac(26,"Selling Price"),g.Rb(),g.Sb(27,"div",9),g.Sb(28,"div",10),g.Sb(29,"div",11),g.Sb(30,"button",12),g.Ac(31),g.Rb(),g.Sb(32,"button",19),g.Nb(33,"span",14),g.Sb(34,"span",15),g.Ac(35,"Change Currency"),g.Rb(),g.Rb(),g.yc(36,C,3,3,"ul",20),g.Rb(),g.Rb(),g.Nb(37,"input",21),g.Rb(),g.Rb(),g.Sb(38,"section",6),g.Sb(39,"div",22),g.Sb(40,"div",23),g.Nb(41,"app-input",24),g.Rb(),g.Sb(42,"div",25),g.Nb(43,"app-input",26),g.Rb(),g.Rb(),g.Rb(),g.Rb(),g.Rb(),g.Sb(44,"section",27),g.Sb(45,"button",28),g.Ac(46," Save "),g.yc(47,x,1,0,"i",29),g.cc(48,"async"),g.yc(49,j,1,0,"i",30),g.cc(50,"async"),g.Rb(),g.Sb(51,"button",31),g.Zb("click",function(){return e.closeModal()}),g.Nb(52,"span",32),g.Ac(53,"Cancel"),g.Rb(),g.Rb(),g.Rb(),g.Rb(),g.Rb()),2&t&&(g.Ab(1),g.hc("formGroup",e.productForm),g.Ab(4),g.Cc("",0===e.id?"New":"Edit"," Product"),g.Ab(12),g.Bc(e.selectedBuyingPriceCurrency.value),g.Ab(14),g.Bc(e.selectedSellingPriceCurrency.value),g.Ab(14),g.hc("disabled",e.productForm.invalid||!e.productForm.dirty),g.Ab(2),g.hc("ngIf",e.productForm.valid&&!1===g.dc(48,7,e.submitInProgressAction$)),g.Ab(2),g.hc("ngIf",g.dc(50,9,e.submitInProgressAction$)))},directives:[p.x,p.n,p.h,R.a,p.m,p.g,A.a,A.d,A.b,p.b,p.q,c.n,c.m],pipes:[c.b],styles:[""],changeDetection:0}),t})();var k=n("lJxs"),M=n("GJmQ");function O(t,e){if(1&t&&(g.Sb(0,"section"),g.Sb(1,"table",15),g.Sb(2,"thead"),g.Sb(3,"tr"),g.Sb(4,"th"),g.Ac(5,"Product ID"),g.Rb(),g.Sb(6,"th"),g.Ac(7,"Product Name"),g.Rb(),g.Rb(),g.Sb(8,"tr"),g.Sb(9,"td"),g.Ac(10),g.Rb(),g.Sb(11,"td"),g.Ac(12),g.Rb(),g.Rb(),g.Rb(),g.Rb(),g.Rb()),2&t){const t=e.ngIf;g.Ab(10),g.Cc("#",t.id,""),g.Ab(2),g.Bc(t.name)}}function F(t,e){1&t&&g.Nb(0,"i",16)}function N(t,e){1&t&&g.Nb(0,"i",17)}let $=(()=>{class t{constructor(t,e,n){this.store=t,this.productService=e,this.fb=n,this.productForm=this.fb.group({id:[""]}),this.componentIsActive=!0,this.validateId=t=>e=>e.value==="#"+t?null:{idMismatch:"Id Mismatch"}}ngOnInit(){var t;this.store.dispatch(Object(u.b)()),this.product$=this.store.pipe(Object(o.t)(Object(r.b)({id:this.id})),Object(M.a)(()=>this.componentIsActive)),null===(t=this.productForm.get("id"))||void 0===t||t.setValidators([p.v.required,this.validateId(this.id)])}closeModal(){this.store.dispatch(Object(u.a)())}productFormSubmit(){this.productForm.valid&&(this.isSubmitting=!0,this.productService.deleteProduct(this.id).pipe(Object(M.a)(()=>this.componentIsActive)).subscribe({next:()=>{this.isSubmitting=!1,this.closeModal(),this.store.dispatch(Object(m.a)({data:{id:this.id}}))},error:()=>this.isSubmitting=!1}))}ngOnDestroy(){this.componentIsActive=!1}}return t.\u0275fac=function(e){return new(e||t)(g.Mb(o.h),g.Mb(S.a),g.Mb(p.d))},t.\u0275cmp=g.Gb({type:t,selectors:[["app-delete-product-confirmation"]],inputs:{id:"id"},decls:21,vars:7,consts:[[1,"bg-dark"],[3,"formGroup","submit"],[1,"card"],[1,"card-header"],[4,"ngIf"],[1,"col-lg-12","mt-3","mb-2","d-flex"],["for","idConfirmation",1,"col-lg-6"],[1,"col-lg-6"],["id","idConfirmation","type","text","formControlName","id","placeholder","e.g #1234",1,"form-control"],[1,"card-footer","d-flex","justify-content-between"],[1,"btn","btn-danger",3,"disabled"],["class","icon-trash",4,"ngIf"],["class","icon-spin3 animate-spin",4,"ngIf"],["type","button",1,"btn","btn-secondary",3,"click"],[1,"icon-cancel"],[1,"table","table-dark"],[1,"icon-trash"],[1,"icon-spin3","animate-spin"]],template:function(t,e){1&t&&(g.Sb(0,"section",0),g.Sb(1,"form",1),g.Zb("submit",function(){return e.productFormSubmit()}),g.Sb(2,"section",2),g.Sb(3,"section",3),g.Sb(4,"h2"),g.Ac(5,"Delete Product Confirmation"),g.Rb(),g.Rb(),g.yc(6,O,13,2,"section",4),g.cc(7,"async"),g.Sb(8,"section",5),g.Sb(9,"label",6),g.Ac(10,"Please Enter Product Id To Confirm Deletion"),g.Rb(),g.Sb(11,"section",7),g.Nb(12,"input",8),g.Rb(),g.Rb(),g.Sb(13,"section",9),g.Sb(14,"button",10),g.Ac(15," Delete Product "),g.yc(16,F,1,0,"i",11),g.yc(17,N,1,0,"i",12),g.Rb(),g.Sb(18,"button",13),g.Zb("click",function(){return e.closeModal()}),g.Nb(19,"span",14),g.Ac(20,"Cancel"),g.Rb(),g.Rb(),g.Rb(),g.Rb(),g.Rb()),2&t&&(g.Ab(1),g.hc("formGroup",e.productForm),g.Ab(5),g.hc("ngIf",g.dc(7,5,e.product$)),g.Ab(8),g.hc("disabled",e.productForm.invalid||!e.productForm.dirty),g.Ab(2),g.hc("ngIf",e.productForm.valid&&!e.isSubmitting),g.Ab(1),g.hc("ngIf",e.isSubmitting))},directives:[p.x,p.n,p.h,c.n,p.b,p.m,p.g],pipes:[c.b],styles:[""]}),t})();var B=n("2Vo4"),G=n("itXk"),Z=n("B/gT"),T=n("K3ix"),D=n("bxdZ"),K=n("oGmh");function L(t,e){if(1&t){const t=g.Tb();g.Sb(0,"tr"),g.Sb(1,"td"),g.Ac(2),g.Rb(),g.Sb(3,"td"),g.Ac(4),g.cc(5,"titlecase"),g.Rb(),g.Sb(6,"td"),g.Ac(7),g.Rb(),g.Sb(8,"td"),g.Ac(9),g.cc(10,"currency"),g.Rb(),g.Sb(11,"td"),g.Ac(12),g.cc(13,"currency"),g.Rb(),g.Sb(14,"td"),g.Ac(15),g.cc(16,"number"),g.Rb(),g.Sb(17,"td",12),g.Sb(18,"button",15),g.Zb("click",function(){g.tc(t);const n=e.$implicit;return g.bc(2).maintainProduct(n.id)}),g.Nb(19,"span",16),g.Rb(),g.Sb(20,"button",17),g.Zb("click",function(){g.tc(t);const n=e.$implicit;return g.bc(2).delete(n.id)}),g.Nb(21,"span",18),g.Rb(),g.Rb(),g.Rb()}if(2&t){const t=e.$implicit;g.Eb("bg-danger",!t.sellingPrice||!t.buyingPrice),g.Ab(2),g.Cc("#",t.id,""),g.Ab(2),g.Bc(g.dc(5,9,t.name)),g.Ab(3),g.Dc("",t.minAmountCheck," - ",t.maxAmountCheck,""),g.Ab(2),g.Bc(g.ec(10,11,t.buyingPrice," ")),g.Ab(3),g.Bc(g.ec(13,14,t.sellingPrice," ")),g.Ab(3),g.Cc("",g.ec(16,17,(t.sellingPrice-t.buyingPrice)/t.buyingPrice*100,"2.2-2"),"% ")}}function X(t,e){if(1&t&&(g.Qb(0),g.yc(1,L,22,20,"tr",14),g.Pb()),2&t){const t=e.ngIf;g.Ab(1),g.hc("ngForOf",t)}}const E=[{path:"",pathMatch:"full",data:{breadcrumb:null},component:(()=>{class t extends(Object(h.a)(Object(Z.a)())){constructor(t,e,n,c){super(),this.productsService=t,this.modalService=e,this.store=n,this.printService=c,this.storeInjected=this.store,this.modalServiceInjected=this.modalService,this.filterString="",this.filterSubject$=new B.a(this.filterString),this.filterAction$=this.filterSubject$.asObservable(),this.products$=Object(G.a)([this.productsService.loadProducts$,this.filterAction$]).pipe(Object(k.a)(([t,e])=>t.filter(({name:t})=>t.toLowerCase().includes(e.toLowerCase()))))}maintainProduct(t){this.openModal({id:t,component:I})}delete(t){this.openModal({id:t,component:$})}onFilterChange(){this.filterSubject$.next(this.filterString)}ngOnDestroy(){var t;super.ngOnDestroy(),null===(t=this.modalRef)||void 0===t||t.hide()}print(){this.printService.popupPrint("table")}}return t.\u0275fac=function(e){return new(e||t)(g.Mb(S.a),g.Mb(T.a),g.Mb(o.h),g.Mb(D.a))},t.\u0275cmp=g.Gb({type:t,selectors:[["app-all-products"]],features:[g.xb],decls:35,vars:4,consts:[[1,"mt-1","d-flex","flex-wrap","justify-content-between","align-items-end"],[1,"col-md-5","col-xl-3","col-lg-4","col-sm-5"],[1,"btn","btn-primary",3,"click"],[1,"icon-plus-circled"],[1,"col-md-7","col-xl-7","col-lg-6","col-sm-7"],["for","searchProducts"],[1,"icon-search"],["id","searchProducts","type","search",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-xl-2","col-md-12","text-md-right","col-lg-2","text-right","mt-3"],["selector",".printable"],[1,"printable"],[1,"mt-2","table","table-sm","table-dark"],[1,"d-print-none"],[4,"ngIf"],[3,"bg-danger",4,"ngFor","ngForOf"],["aria-label","Edit Item",1,"btn","btn-primary","btn-sm","mr-2",3,"click"],[1,"icon-edit"],["aria-label","Delete",1,"btn","btn-danger","btn-sm","mr-2",3,"click"],[1,"icon-trash"]],template:function(t,e){1&t&&(g.Sb(0,"h1"),g.Ac(1,"Products"),g.Rb(),g.Sb(2,"section",0),g.Sb(3,"section",1),g.Sb(4,"button",2),g.Zb("click",function(){return e.maintainProduct(0)}),g.Sb(5,"span",3),g.Ac(6,"Add Product"),g.Rb(),g.Rb(),g.Rb(),g.Sb(7,"section",4),g.Sb(8,"label",5),g.Ac(9,"Search "),g.Nb(10,"span",6),g.Rb(),g.Sb(11,"input",7),g.Zb("ngModelChange",function(t){return e.filterString=t})("ngModelChange",function(){return e.onFilterChange()}),g.Rb(),g.Rb(),g.Sb(12,"section",8),g.Nb(13,"app-print",9),g.Rb(),g.Rb(),g.Sb(14,"div",10),g.Sb(15,"table",11),g.Sb(16,"thead"),g.Sb(17,"tr"),g.Sb(18,"th"),g.Ac(19,"Product Id"),g.Rb(),g.Sb(20,"th"),g.Ac(21,"Product Name"),g.Rb(),g.Sb(22,"th"),g.Ac(23,"Threshold [min - max]"),g.Rb(),g.Sb(24,"th"),g.Ac(25,"Buying Price"),g.Rb(),g.Sb(26,"th"),g.Ac(27,"Selling Price"),g.Rb(),g.Sb(28,"th"),g.Ac(29,"Gross Margin"),g.Rb(),g.Sb(30,"th",12),g.Ac(31,"Actions"),g.Rb(),g.Rb(),g.Rb(),g.Sb(32,"tbody"),g.yc(33,X,2,1,"ng-container",13),g.cc(34,"async"),g.Rb(),g.Rb(),g.Rb()),2&t&&(g.Ab(11),g.hc("ngModel",e.filterString),g.Ab(22),g.hc("ngIf",g.dc(34,2,e.products$)))},directives:[p.b,p.m,p.o,K.a,c.n,c.m],pipes:[c.b,c.u,c.d,c.f],styles:[""]}),t})(),canDeactivate:[n("wNMA").a]}];let J=(()=>{class t{}return t.\u0275mod=g.Kb({type:t}),t.\u0275inj=g.Jb({factory:function(e){return new(e||t)},imports:[[i.j.forChild(E)],i.j]}),t})();var q=n("RecK"),V=n("HEfn"),Q=n("B3RB"),H=n("Yg/+");let Y=(()=>{class t{}return t.\u0275mod=g.Kb({type:t}),t.\u0275inj=g.Jb({factory:function(e){return new(e||t)},imports:[[c.c,J,T.b.forRoot(),p.j,p.s,A.c.forRoot(),q.a,V.a,Q.a,H.a]]}),t})()},bxdZ:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var c=n("fXoL");let i=(()=>{class t{constructor(){}popupPrint(t){const e=document.querySelector(t).innerHTML,n=window.open("","_blank","top=0,left=0,height=auto,width=auto");null==n||n.document.open(),null==n||n.document.write(`\n      <html>\n        <head>\n          <title>Print tab</title>\n          <style>\n            .d-flex  {\n              width: 100%;\n              display: flex;\n              justify-content: between;\n            }\n            .table {\n              text-align: left;\n              width: 100%;\n              margin-bottom: 1rem;\n            }\n            .table td, .table th {\n              padding: .75rem;\n              vertical-align: top;\n              border-top: 1px solid #dee2e6;\n            }\n            td {\n              display: table-cell;\n            }\n            @media print {\n              .d-print-none {\n                display: none;\n              }\n            }\n          </style>\n        </head>\n        <body>\n          <section class='d-print-none'>\n            <button onclick="window.print();">Print</button>\n            <button onclick="window.close();">Cancel</button>\n          </section>\n         ${e}\n        </body>\n        <script>\n          window.print();\n        <\/script>\n      </html>`)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=c.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},oGmh:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var c=n("fXoL"),i=n("bxdZ");let o=(()=>{class t{constructor(t){this.printService=t}print(){this.printService.popupPrint(this.selector)}}return t.\u0275fac=function(e){return new(e||t)(c.Mb(i.a))},t.\u0275cmp=c.Gb({type:t,selectors:[["app-print"]],inputs:{selector:"selector"},decls:3,vars:0,consts:[["type","button",1,"btn","btn-secondary","btn-sm",3,"click"],[1,"icon-print"]],template:function(t,e){1&t&&(c.Sb(0,"button",0),c.Zb("click",function(){return e.print()}),c.Ac(1,"Print "),c.Nb(2,"span",1),c.Rb())},styles:[""]}),t})()}}]);