!function(){function t(t,e){return function(t){if(Array.isArray(t))return t}(t)||function(t,n){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(t)))return;var e=[],r=!0,i=!1,c=void 0;try{for(var o,b=t[Symbol.iterator]();!(r=(o=b.next()).done)&&(e.push(o.value),!n||e.length!==n);r=!0);}catch(u){i=!0,c=u}finally{try{r||null==b.return||b.return()}finally{if(i)throw c}}return e}(t,e)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var r=Object.prototype.toString.call(t).slice(8,-1);"Object"===r&&t.constructor&&(r=t.constructor.name);if("Map"===r||"Set"===r)return Array.from(t);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return n(t,e)}(t,e)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,n){(null==n||n>t.length)&&(n=t.length);for(var e=0,r=new Array(n);e<n;e++)r[e]=t[e];return r}function e(t,n,r){return(e="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(t,n,e){var r=function(t,n){for(;!Object.prototype.hasOwnProperty.call(t,n)&&null!==(t=a(t)););return t}(t,n);if(r){var i=Object.getOwnPropertyDescriptor(r,n);return i.get?i.get.call(e):i.value}})(t,n,r||t)}function r(t,n){for(var e=0;e<n.length;e++){var r=n[e];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function i(t,n,e){return n&&r(t.prototype,n),e&&r(t,e),t}function c(t,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(n&&n.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),n&&o(t,n)}function o(t,n){return(o=Object.setPrototypeOf||function(t,n){return t.__proto__=n,t})(t,n)}function b(t){var n=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Date.prototype.toString.call(Reflect.construct(Date,[],function(){})),!0}catch(t){return!1}}();return function(){var e,r=a(t);if(n){var i=a(this).constructor;e=Reflect.construct(r,arguments,i)}else e=r.apply(this,arguments);return u(this,e)}}function u(t,n){return!n||"object"!=typeof n&&"function"!=typeof n?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):n}function a(t){return(a=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function l(t,n){if(!(t instanceof n))throw new TypeError("Cannot call a class as a function")}(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{B3RB:function(t,n,e){"use strict";e.d(n,"a",function(){return c});var r=e("ofXK"),i=e("fXoL"),c=function(){var t=function t(){l(this,t)};return t.\u0275mod=i.Kb({type:t}),t.\u0275inj=i.Jb({factory:function(n){return new(n||t)},imports:[[r.c]]}),t}()},CG4G:function(t,n,e){"use strict";e.d(n,"a",function(){return r});var r=function(){var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:function(){return function t(){l(this,t)}}();return function(t){c(e,t);var n=b(e);function e(){return l(this,e),n.apply(this,arguments)}return i(e,[{key:"getColorString",value:function(t){return["hsl(",Math.floor(120*t/100),",100%,50%)"].join("")}}]),e}(t)}},a1ig:function(n,r,o){"use strict";o.r(r),o.d(r,"ProductsModule",function(){return bt});var u=o("ofXK"),s=o("tyNb"),d=o("l7P3"),p=o("gJ3R"),f=o("pLZG"),m=o("5+tZ"),h=o("vkgz"),y=o("1G5W"),g=o("XNiG"),S=o("nPLa"),v=o("3Pt+"),R=o("CRaK"),A=o("sEf6"),P=o("+Kmi"),w=o("fXoL"),j=o("2qjx"),k=o("ChtM"),C=o("QlUG"),O=o("dZIy");function x(t,n){if(1&t){var e=w.Tb();w.Sb(0,"li",35),w.Zb("click",function(){w.tc(e);var t=n.$implicit;return w.bc(2).selectedBuyingPriceCurrency.setValue(t)}),w.Sb(1,"span",36),w.Ac(2),w.Rb(),w.Rb()}if(2&t){var r=n.$implicit;w.Ab(2),w.Bc(r)}}function I(t,n){if(1&t&&(w.Sb(0,"ul",33),w.yc(1,x,3,1,"li",34),w.cc(2,"async"),w.Rb()),2&t){var e=w.bc();w.Ab(1),w.hc("ngForOf",w.dc(2,1,e.currencies$))}}function M(t,n){if(1&t){var e=w.Tb();w.Sb(0,"li",35),w.Zb("click",function(){w.tc(e);var t=n.$implicit;return w.bc(2).selectedSellingPriceCurrency.setValue(t)}),w.Sb(1,"span",36),w.Ac(2),w.Rb(),w.Rb()}if(2&t){var r=n.$implicit;w.Ab(2),w.Bc(r)}}function F(t,n){if(1&t&&(w.Sb(0,"ul",37),w.yc(1,M,3,1,"li",34),w.cc(2,"async"),w.Rb()),2&t){var e=w.bc();w.Ab(1),w.hc("ngForOf",w.dc(2,1,e.currencies$))}}function N(t,n){1&t&&w.Nb(0,"i",38)}function $(t,n){1&t&&w.Nb(0,"i",39)}var B,G=((B=function(t){c(e,t);var n=b(e);function e(t,r,i,c){var o;return l(this,e),(o=n.call(this)).store=t,o.fb=r,o.productService=i,o.currencyService=c,o.productIdSubject$=new g.a,o.product$=o.productIdSubject$.asObservable().pipe(Object(f.a)(function(t){return t>0}),Object(m.a)(function(t){return o.store.pipe(Object(d.t)(Object(p.b)({id:t})),Object(h.a)(function(t){o.productForm.patchValue(t),o.productForm.updateValueAndValidity()}),Object(y.a)(o.destroyed$))})),o.currencies$=o.currencyService.loadCurrencies$,o.productForm=o.fb.group({id:[0],name:["",[v.v.required]],buyingPrice:[0],buyingPriceCurrency:["KES"],sellingPrice:[0],sellingPriceCurrency:["KES"],minAmountCheck:[5,[v.v.required]],maxAmountCheck:[15,[v.v.required]]}),o}return i(e,[{key:"ngOnInit",value:function(){this.product$.subscribe(),this.productIdSubject$.next(this.id),this.store.dispatch(Object(S.b)())}},{key:"closeModal",value:function(){this.itemForm=this.productForm,this.closeFormDialog()&&this.store.dispatch(Object(S.a)())}},{key:"productFormSubmit",value:function(){var t=this;this.productForm.valid&&(this.submitInProgressSubject$.next(!0),this.productService.saveProduct(this.productForm.value).subscribe({next:function(n){t.submitInProgressSubject$.next(!1),t.store.dispatch(Object(S.a)()),t.store.dispatch(Object(R.d)({data:[n]}))},error:function(){return t.submitInProgressSubject$.next(!1)}}))}},{key:"selectedBuyingPriceCurrency",get:function(){return this.productForm.get("buyingPriceCurrency")}},{key:"selectedSellingPriceCurrency",get:function(){return this.productForm.get("sellingPriceCurrency")}}]),e}(Object(P.a)(Object(A.a)()))).\u0275fac=function(t){return new(t||B)(w.Mb(d.h),w.Mb(v.d),w.Mb(j.a),w.Mb(k.a))},B.\u0275cmp=w.Gb({type:B,selectors:[["app-product-maintenance"]],inputs:{id:"id"},features:[w.xb],decls:54,vars:11,consts:[[1,"bg-dark"],[3,"formGroup","submit"],[1,"card"],[1,"card-header"],[1,"card-body"],[1,"d-flex","flex-wrap"],[1,"col-lg-6"],["label","Product Name","placeholder","e.g XYZ Bolt No. 55","id","productName","formControlName","name"],["for","productBuyingPrice",1,"control-label"],[1,"input-group","mb-3"],[1,"input-group-prepend"],["dropdown","",1,"btn-group"],["type","button",1,"btn","bg-light","text-dark"],["id","button-split","type","button","dropdownToggle","","aria-controls","dropdown-split",1,"btn","bg-light","text-dark","dropdown-toggle","dropdown-toggle-split"],[1,"caret"],[1,"sr-only"],["id","dropdown-split","class","dropdown-menu","role","menu","aria-labelledby","button-split",4,"dropdownMenu"],["id","productBuyingPrice","formControlName","buyingPrice","type","number",1,"form-control"],["for","productSellingPrice",1,"control-label"],["id","button-split-1","type","button","dropdownToggle","","aria-controls","dropdown-split",1,"btn","bg-light","text-dark","dropdown-toggle","dropdown-toggle-split"],["id","dropdown-split","class","dropdown-menu","role","menu","aria-labelledby","button-split-1",4,"dropdownMenu"],["id","productSellingPrice","formControlName","sellingPrice","type","number",1,"form-control"],[1,"d-flex"],[1,"col-6","col-lg-6","p-0","m-0"],["label","Min Threshold","type","number","id","minThreshold","formControlName","minAmountCheck"],[1,"col-6","col-lg-6","p-0","m-0","ml-1"],["label","Max Threshold","type","number","id","maxThreshold","formControlName","maxAmountCheck"],[1,"card-footer","d-flex","justify-content-between"],[1,"btn","btn-success",3,"disabled"],["class","icon-ok",4,"ngIf"],["class","icon-spin3 animate-spin",4,"ngIf"],["type","button",1,"btn","btn-secondary",3,"click"],[1,"icon-cancel"],["id","dropdown-split","role","menu","aria-labelledby","button-split",1,"dropdown-menu"],["role","menuitem",3,"click",4,"ngFor","ngForOf"],["role","menuitem",3,"click"],[1,"dropdown-item"],["id","dropdown-split","role","menu","aria-labelledby","button-split-1",1,"dropdown-menu"],[1,"icon-ok"],[1,"icon-spin3","animate-spin"]],template:function(t,n){1&t&&(w.Sb(0,"section",0),w.Sb(1,"form",1),w.Zb("submit",function(){return n.productFormSubmit()}),w.Sb(2,"section",2),w.Sb(3,"section",3),w.Sb(4,"h2"),w.Ac(5),w.Rb(),w.Rb(),w.Sb(6,"section",4),w.Sb(7,"section",5),w.Sb(8,"section",6),w.Nb(9,"app-input",7),w.Rb(),w.Sb(10,"section",6),w.Sb(11,"label",8),w.Ac(12,"Buying Price"),w.Rb(),w.Sb(13,"div",9),w.Sb(14,"div",10),w.Sb(15,"div",11),w.Sb(16,"button",12),w.Ac(17),w.Rb(),w.Sb(18,"button",13),w.Nb(19,"span",14),w.Sb(20,"span",15),w.Ac(21,"Change Currency"),w.Rb(),w.Rb(),w.yc(22,I,3,3,"ul",16),w.Rb(),w.Rb(),w.Nb(23,"input",17),w.Rb(),w.Rb(),w.Sb(24,"section",6),w.Sb(25,"label",18),w.Ac(26,"Selling Price"),w.Rb(),w.Sb(27,"div",9),w.Sb(28,"div",10),w.Sb(29,"div",11),w.Sb(30,"button",12),w.Ac(31),w.Rb(),w.Sb(32,"button",19),w.Nb(33,"span",14),w.Sb(34,"span",15),w.Ac(35,"Change Currency"),w.Rb(),w.Rb(),w.yc(36,F,3,3,"ul",20),w.Rb(),w.Rb(),w.Nb(37,"input",21),w.Rb(),w.Rb(),w.Sb(38,"section",6),w.Sb(39,"div",22),w.Sb(40,"div",23),w.Nb(41,"app-input",24),w.Rb(),w.Sb(42,"div",25),w.Nb(43,"app-input",26),w.Rb(),w.Rb(),w.Rb(),w.Rb(),w.Rb(),w.Sb(44,"section",27),w.Sb(45,"button",28),w.Ac(46," Save "),w.yc(47,N,1,0,"i",29),w.cc(48,"async"),w.yc(49,$,1,0,"i",30),w.cc(50,"async"),w.Rb(),w.Sb(51,"button",31),w.Zb("click",function(){return n.closeModal()}),w.Nb(52,"span",32),w.Ac(53,"Cancel"),w.Rb(),w.Rb(),w.Rb(),w.Rb(),w.Rb()),2&t&&(w.Ab(1),w.hc("formGroup",n.productForm),w.Ab(4),w.Cc("",0===n.id?"New":"Edit"," Product"),w.Ab(12),w.Bc(n.selectedBuyingPriceCurrency.value),w.Ab(14),w.Bc(n.selectedSellingPriceCurrency.value),w.Ab(14),w.hc("disabled",n.productForm.invalid||!n.productForm.dirty),w.Ab(2),w.hc("ngIf",n.productForm.valid&&!1===w.dc(48,7,n.submitInProgressAction$)),w.Ab(2),w.hc("ngIf",w.dc(50,9,n.submitInProgressAction$)))},directives:[v.x,v.n,v.h,C.a,v.m,v.g,O.a,O.d,O.b,v.b,v.q,u.n,u.m],pipes:[u.b],styles:[""],changeDetection:0}),B),Z=o("lJxs"),T=o("GJmQ");function D(t,n){if(1&t&&(w.Sb(0,"section"),w.Sb(1,"table",15),w.Sb(2,"thead"),w.Sb(3,"tr"),w.Sb(4,"th"),w.Ac(5,"Product ID"),w.Rb(),w.Sb(6,"th"),w.Ac(7,"Product Name"),w.Rb(),w.Rb(),w.Sb(8,"tr"),w.Sb(9,"td"),w.Ac(10),w.Rb(),w.Sb(11,"td"),w.Ac(12),w.Rb(),w.Rb(),w.Rb(),w.Rb(),w.Rb()),2&t){var e=n.ngIf;w.Ab(10),w.Cc("#",e.id,""),w.Ab(2),w.Bc(e.name)}}function E(t,n){1&t&&w.Nb(0,"i",16)}function K(t,n){1&t&&w.Nb(0,"i",17)}var L,X=((L=function(){function t(n,e,r){l(this,t),this.store=n,this.productService=e,this.fb=r,this.productForm=this.fb.group({id:[""]}),this.componentIsActive=!0,this.validateId=function(t){return function(n){return n.value==="#"+t?null:{idMismatch:"Id Mismatch"}}}}return i(t,[{key:"ngOnInit",value:function(){var t,n=this;this.store.dispatch(Object(S.b)()),this.product$=this.store.pipe(Object(d.t)(Object(p.b)({id:this.id})),Object(T.a)(function(){return n.componentIsActive})),null===(t=this.productForm.get("id"))||void 0===t||t.setValidators([v.v.required,this.validateId(this.id)])}},{key:"closeModal",value:function(){this.store.dispatch(Object(S.a)())}},{key:"productFormSubmit",value:function(){var t=this;this.productForm.valid&&(this.isSubmitting=!0,this.productService.deleteProduct(this.id).pipe(Object(T.a)(function(){return t.componentIsActive})).subscribe({next:function(){t.isSubmitting=!1,t.closeModal(),t.store.dispatch(Object(R.a)({data:{id:t.id}}))},error:function(){return t.isSubmitting=!1}}))}},{key:"ngOnDestroy",value:function(){this.componentIsActive=!1}}]),t}()).\u0275fac=function(t){return new(t||L)(w.Mb(d.h),w.Mb(j.a),w.Mb(v.d))},L.\u0275cmp=w.Gb({type:L,selectors:[["app-delete-product-confirmation"]],inputs:{id:"id"},decls:21,vars:7,consts:[[1,"bg-dark"],[3,"formGroup","submit"],[1,"card"],[1,"card-header"],[4,"ngIf"],[1,"col-lg-12","mt-3","mb-2","d-flex"],["for","idConfirmation",1,"col-lg-6"],[1,"col-lg-6"],["id","idConfirmation","type","text","formControlName","id","placeholder","e.g #1234",1,"form-control"],[1,"card-footer","d-flex","justify-content-between"],[1,"btn","btn-danger",3,"disabled"],["class","icon-trash",4,"ngIf"],["class","icon-spin3 animate-spin",4,"ngIf"],["type","button",1,"btn","btn-secondary",3,"click"],[1,"icon-cancel"],[1,"table","table-dark"],[1,"icon-trash"],[1,"icon-spin3","animate-spin"]],template:function(t,n){1&t&&(w.Sb(0,"section",0),w.Sb(1,"form",1),w.Zb("submit",function(){return n.productFormSubmit()}),w.Sb(2,"section",2),w.Sb(3,"section",3),w.Sb(4,"h2"),w.Ac(5,"Delete Product Confirmation"),w.Rb(),w.Rb(),w.yc(6,D,13,2,"section",4),w.cc(7,"async"),w.Sb(8,"section",5),w.Sb(9,"label",6),w.Ac(10,"Please Enter Product Id To Confirm Deletion"),w.Rb(),w.Sb(11,"section",7),w.Nb(12,"input",8),w.Rb(),w.Rb(),w.Sb(13,"section",9),w.Sb(14,"button",10),w.Ac(15," Delete Product "),w.yc(16,E,1,0,"i",11),w.yc(17,K,1,0,"i",12),w.Rb(),w.Sb(18,"button",13),w.Zb("click",function(){return n.closeModal()}),w.Nb(19,"span",14),w.Ac(20,"Cancel"),w.Rb(),w.Rb(),w.Rb(),w.Rb(),w.Rb()),2&t&&(w.Ab(1),w.hc("formGroup",n.productForm),w.Ab(5),w.hc("ngIf",w.dc(7,5,n.product$)),w.Ab(8),w.hc("disabled",n.productForm.invalid||!n.productForm.dirty),w.Ab(2),w.hc("ngIf",n.productForm.valid&&!n.isSubmitting),w.Ab(1),w.hc("ngIf",n.isSubmitting))},directives:[v.x,v.n,v.h,u.n,v.b,v.m,v.g],pipes:[u.b],styles:[""]}),L),_=o("2Vo4"),J=o("itXk"),q=o("B/gT"),V=o("K3ix"),Q=o("bxdZ"),H=o("oGmh");function U(t,n){if(1&t){var e=w.Tb();w.Sb(0,"tr"),w.Sb(1,"td"),w.Ac(2),w.Rb(),w.Sb(3,"td"),w.Ac(4),w.cc(5,"titlecase"),w.Rb(),w.Sb(6,"td"),w.Ac(7),w.Rb(),w.Sb(8,"td"),w.Ac(9),w.cc(10,"currency"),w.Rb(),w.Sb(11,"td"),w.Ac(12),w.cc(13,"currency"),w.Rb(),w.Sb(14,"td"),w.Ac(15),w.cc(16,"number"),w.Rb(),w.Sb(17,"td",12),w.Sb(18,"button",15),w.Zb("click",function(){w.tc(e);var t=n.$implicit;return w.bc(2).maintainProduct(t.id)}),w.Nb(19,"span",16),w.Rb(),w.Sb(20,"button",17),w.Zb("click",function(){w.tc(e);var t=n.$implicit;return w.bc(2).delete(t.id)}),w.Nb(21,"span",18),w.Rb(),w.Rb(),w.Rb()}if(2&t){var r=n.$implicit;w.Eb("bg-danger",!r.sellingPrice||!r.buyingPrice),w.Ab(2),w.Cc("#",r.id,""),w.Ab(2),w.Bc(w.dc(5,9,r.name)),w.Ab(3),w.Dc("",r.minAmountCheck," - ",r.maxAmountCheck,""),w.Ab(2),w.Bc(w.ec(10,11,r.buyingPrice," ")),w.Ab(3),w.Bc(w.ec(13,14,r.sellingPrice," ")),w.Ab(3),w.Cc("",w.ec(16,17,(r.sellingPrice-r.buyingPrice)/r.buyingPrice*100,"2.2-2"),"% ")}}function Y(t,n){if(1&t&&(w.Qb(0),w.yc(1,U,22,20,"tr",14),w.Pb()),2&t){var e=n.ngIf;w.Ab(1),w.hc("ngForOf",e)}}var z,W,tt,nt=[{path:"",pathMatch:"full",data:{breadcrumb:null},component:(z=function(n){c(o,n);var r=b(o);function o(n,e,i,c){var b;return l(this,o),(b=r.call(this)).productsService=n,b.modalService=e,b.store=i,b.printService=c,b.storeInjected=b.store,b.modalServiceInjected=b.modalService,b.filterString="",b.filterSubject$=new _.a(b.filterString),b.filterAction$=b.filterSubject$.asObservable(),b.products$=Object(J.a)([b.productsService.loadProducts$,b.filterAction$]).pipe(Object(Z.a)(function(n){var e=t(n,2),r=e[0],i=e[1];return r.filter(function(t){return t.name.toLowerCase().includes(i.toLowerCase())})})),b}return i(o,[{key:"maintainProduct",value:function(t){this.openModal({id:t,component:G})}},{key:"delete",value:function(t){this.openModal({id:t,component:X})}},{key:"onFilterChange",value:function(){this.filterSubject$.next(this.filterString)}},{key:"ngOnDestroy",value:function(){var t;e(a(o.prototype),"ngOnDestroy",this).call(this),null===(t=this.modalRef)||void 0===t||t.hide()}},{key:"print",value:function(){this.printService.popupPrint("table")}}]),o}(Object(A.a)(Object(q.a)())),z.\u0275fac=function(t){return new(t||z)(w.Mb(j.a),w.Mb(V.a),w.Mb(d.h),w.Mb(Q.a))},z.\u0275cmp=w.Gb({type:z,selectors:[["app-all-products"]],features:[w.xb],decls:35,vars:4,consts:[[1,"mt-1","d-flex","flex-wrap","justify-content-between","align-items-end"],[1,"col-md-5","col-xl-3","col-lg-4","col-sm-5"],[1,"btn","btn-primary",3,"click"],[1,"icon-plus-circled"],[1,"col-md-7","col-xl-7","col-lg-6","col-sm-7"],["for","searchProducts"],[1,"icon-search"],["id","searchProducts","type","search",1,"form-control",3,"ngModel","ngModelChange"],[1,"col-xl-2","col-md-12","text-md-right","col-lg-2","text-right","mt-3"],["selector",".printable"],[1,"printable"],[1,"mt-2","table","table-sm","table-dark"],[1,"d-print-none"],[4,"ngIf"],[3,"bg-danger",4,"ngFor","ngForOf"],["aria-label","Edit Item",1,"btn","btn-primary","btn-sm","mr-2",3,"click"],[1,"icon-edit"],["aria-label","Delete",1,"btn","btn-danger","btn-sm","mr-2",3,"click"],[1,"icon-trash"]],template:function(t,n){1&t&&(w.Sb(0,"h1"),w.Ac(1,"Products"),w.Rb(),w.Sb(2,"section",0),w.Sb(3,"section",1),w.Sb(4,"button",2),w.Zb("click",function(){return n.maintainProduct(0)}),w.Sb(5,"span",3),w.Ac(6,"Add Product"),w.Rb(),w.Rb(),w.Rb(),w.Sb(7,"section",4),w.Sb(8,"label",5),w.Ac(9,"Search "),w.Nb(10,"span",6),w.Rb(),w.Sb(11,"input",7),w.Zb("ngModelChange",function(t){return n.filterString=t})("ngModelChange",function(){return n.onFilterChange()}),w.Rb(),w.Rb(),w.Sb(12,"section",8),w.Nb(13,"app-print",9),w.Rb(),w.Rb(),w.Sb(14,"div",10),w.Sb(15,"table",11),w.Sb(16,"thead"),w.Sb(17,"tr"),w.Sb(18,"th"),w.Ac(19,"Product Id"),w.Rb(),w.Sb(20,"th"),w.Ac(21,"Product Name"),w.Rb(),w.Sb(22,"th"),w.Ac(23,"Threshold [min - max]"),w.Rb(),w.Sb(24,"th"),w.Ac(25,"Buying Price"),w.Rb(),w.Sb(26,"th"),w.Ac(27,"Selling Price"),w.Rb(),w.Sb(28,"th"),w.Ac(29,"Gross Margin"),w.Rb(),w.Sb(30,"th",12),w.Ac(31,"Actions"),w.Rb(),w.Rb(),w.Rb(),w.Sb(32,"tbody"),w.yc(33,Y,2,1,"ng-container",13),w.cc(34,"async"),w.Rb(),w.Rb(),w.Rb()),2&t&&(w.Ab(11),w.hc("ngModel",n.filterString),w.Ab(22),w.hc("ngIf",w.dc(34,2,n.products$)))},directives:[v.b,v.m,v.o,H.a,u.n,u.m],pipes:[u.b,u.u,u.d,u.f],styles:[""]}),z),canDeactivate:[o("wNMA").a]}],et=((W=function t(){l(this,t)}).\u0275mod=w.Kb({type:W}),W.\u0275inj=w.Jb({factory:function(t){return new(t||W)},imports:[[s.j.forChild(nt)],s.j]}),W),rt=o("RecK"),it=o("HEfn"),ct=o("B3RB"),ot=o("Yg/+"),bt=((tt=function t(){l(this,t)}).\u0275mod=w.Kb({type:tt}),tt.\u0275inj=w.Jb({factory:function(t){return new(t||tt)},imports:[[u.c,et,V.b.forRoot(),v.j,v.s,O.c.forRoot(),rt.a,it.a,ct.a,ot.a]]}),tt)},bxdZ:function(t,n,e){"use strict";e.d(n,"a",function(){return c});var r=e("fXoL"),c=function(){var t=function(){function t(){l(this,t)}return i(t,[{key:"popupPrint",value:function(t){var n=document.querySelector(t).innerHTML,e=window.open("","_blank","top=0,left=0,height=auto,width=auto");null==e||e.document.open(),null==e||e.document.write('\n      <html>\n        <head>\n          <title>Print tab</title>\n          <style>\n            .d-flex  {\n              width: 100%;\n              display: flex;\n              justify-content: between;\n            }\n            .table {\n              text-align: left;\n              width: 100%;\n              margin-bottom: 1rem;\n            }\n            .table td, .table th {\n              padding: .75rem;\n              vertical-align: top;\n              border-top: 1px solid #dee2e6;\n            }\n            td {\n              display: table-cell;\n            }\n            @media print {\n              .d-print-none {\n                display: none;\n              }\n            }\n          </style>\n        </head>\n        <body>\n          <section class=\'d-print-none\'>\n            <button onclick="window.print();">Print</button>\n            <button onclick="window.close();">Cancel</button>\n          </section>\n         '.concat(n,"\n        </body>\n        <script>\n          window.print();\n        <\/script>\n      </html>"))}}]),t}();return t.\u0275fac=function(n){return new(n||t)},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},oGmh:function(t,n,e){"use strict";e.d(n,"a",function(){return o});var r=e("fXoL"),c=e("bxdZ"),o=function(){var t=function(){function t(n){l(this,t),this.printService=n}return i(t,[{key:"print",value:function(){this.printService.popupPrint(this.selector)}}]),t}();return t.\u0275fac=function(n){return new(n||t)(r.Mb(c.a))},t.\u0275cmp=r.Gb({type:t,selectors:[["app-print"]],inputs:{selector:"selector"},decls:3,vars:0,consts:[["type","button",1,"btn","btn-secondary","btn-sm",3,"click"],[1,"icon-print"]],template:function(t,n){1&t&&(r.Sb(0,"button",0),r.Zb("click",function(){return n.print()}),r.Ac(1,"Print "),r.Nb(2,"span",1),r.Rb())},styles:[""]}),t}()}}])}();