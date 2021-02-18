(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{B3RB:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n("ofXK"),o=n("fXoL");let i=(()=>{class t{}return t.\u0275mod=o.Kb({type:t}),t.\u0275inj=o.Jb({factory:function(e){return new(e||t)},imports:[[r.c]]}),t})()},CG4G:function(t,e,n){"use strict";n.d(e,"a",function(){return r});const r=(t=class{})=>class extends t{getColorString(t){return["hsl(",Math.floor(120*t/100),",100%,50%)"].join("")}}},QlUG:function(t,e,n){"use strict";n.d(e,"a",function(){return S});var r=n("fXoL"),o=n("3Pt+"),i=n("2Vo4"),s=n("hc/g"),a=n("ofXK");let c=(()=>{class t{constructor(t){this.toggleType=new r.n,this.element=t.nativeElement}onTouchStart(){this.toggleType.emit("text")}onTouchEnd(){this.toggleType.emit("password")}onMouseDown(){this.toggleType.emit("text")}onMouseUp(){this.toggleType.emit("password")}onEnterKeyPress(t){"Enter"===t.key&&this.toggleType.emit("text")}onEnterKeyUp(t){"Enter"===t.key&&this.toggleType.emit("password")}}return t.\u0275fac=function(e){return new(e||t)(r.Mb(r.l))},t.\u0275dir=r.Hb({type:t,selectors:[["","appShowPassword",""]],hostBindings:function(t,e){1&t&&r.Zb("touchstart",function(){return e.onTouchStart()})("touchend",function(){return e.onTouchEnd()})("mousedown",function(){return e.onMouseDown()})("mouseup",function(){return e.onMouseUp()})("keypress",function(t){return e.onEnterKeyPress(t)})("keyup",function(t){return e.onEnterKeyUp(t)})},outputs:{toggleType:"toggleType"}}),t})();var l=n("CG4G");const b=function(t){return{width:t}},p=function(t){return{backgroundColor:t}};let d=(()=>{class t extends(Object(l.a)()){constructor(){super()}get passwordStrength(){const t=this.passwordString||"",e=[{regex:/[a-z]/,value:1},{regex:/[a-z](.)*[a-z]/,value:3},{regex:/[A-Z]/,value:1},{regex:/[A-Z](.)*[A-Z]/,value:2},{regex:/\W|_/,value:2},{regex:/(\W|_)(.)*(\W|_)/,value:3},{regex:/[0-9]/,value:2},{regex:/[0-9](.)*[0-9]/,value:2}].reduce((e,n)=>e+(n.regex.test(t)?n.value:0),0);return(Math.min(4,t.length/2)+e)/20*100}get colorString(){return this.getColorString(this.passwordStrength)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275cmp=r.Gb({type:t,selectors:[["app-password-meter"]],inputs:{passwordString:"passwordString"},features:[r.xb],decls:7,vars:14,consts:[[1,"progress"],["role","progressbar","aria-valuenow","15","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","progress-bar-striped","progress-bar-animated",3,"ngStyle"],["role","progressbar","aria-valuenow","15","aria-valuemin","0","aria-valuemax","100",1,"progress-bar","progress-bar-striped","bg-secondary",3,"ngStyle"]],template:function(t,e){1&t&&(r.Sb(0,"small"),r.Ac(1,"New Password Strength"),r.Rb(),r.Sb(2,"div",0),r.Sb(3,"div",1),r.Ac(4),r.cc(5,"number"),r.Rb(),r.Nb(6,"div",2),r.Rb()),2&t&&(r.Ab(3),r.wc(r.kc(8,b,e.passwordStrength+"%")),r.hc("ngStyle",r.kc(10,p,e.colorString)),r.Ab(1),r.Cc(" ",r.ec(5,5,e.passwordStrength,"2.0-0"),"% "),r.Ab(2),r.hc("ngStyle",r.kc(12,b,100-e.passwordStrength+"%")))},directives:[a.o],pipes:[a.f],styles:[""]}),t})();function u(t,e){if(1&t&&(r.Sb(0,"section",9),r.Sb(1,"span",10),r.Nb(2,"i"),r.Rb(),r.Rb()),2&t){const t=r.bc();r.Eb("is-invalid",t.fieldError),r.Ab(1),r.hc("id","inputGroupPrepend"+t.id),r.Ab(1),r.Cb(t.prependIcon)}}function g(t,e){if(1&t){const t=r.Tb();r.Sb(0,"section",11),r.Sb(1,"button",12),r.Zb("toggleType",function(e){return r.tc(t),r.bc().fieldType=e}),r.Nb(2,"i"),r.Nb(3,"i"),r.Rb(),r.Rb()}if(2&t){const t=r.bc();r.Ab(2),r.Eb("icon-eye","password"===t.fieldType),r.Ab(1),r.Eb("icon-eye-off","password"!==t.fieldType)}}function h(t,e){if(1&t&&(r.Sb(0,"section",13),r.Nb(1,"div",14),r.Ac(2),r.Rb()),2&t){const t=r.bc();r.Ab(2),r.Cc(" ",t.fieldError," ")}}function f(t,e){if(1&t&&(r.Nb(0,"app-password-meter",15),r.cc(1,"async")),2&t){const t=r.bc();r.hc("passwordString",r.dc(1,1,t.passwordStringChangeAction$))}}const m=function(t){return[t]};let S=(()=>{class t{constructor(t){this.appFormService=t,this.formControl=new o.e,this.showPasswordStrength=!1,this.fieldType="text",this.passwordStringChangeSubject$=new i.a(""),this.passwordStringChangeAction$=this.passwordStringChangeSubject$.asObservable()}ngOnInit(){["tel","phone","password","number","date","datetime-local"].includes(this.type)&&(this.fieldType=this.type)}get isRequired(){if(this.formControl.validator){const t=this.formControl.validator(this.formControl);return null!==t&&!0===t.required}return!1}setDisabledState(t){this.disabled||(t?this.disabled=!0:(this.formControl.enable(),this.formControl.updateValueAndValidity()))}ngOnChanges(t){const e=t.triggerValidation;e&&!e.firstChange&&(this.formControl.markAsTouched(),this.validateField())}validate(t){this.formControl=t,this.showPasswordStrength&&this.passwordStringChangeSubject$.next(this.formControl.value)}writeValue(t){void 0!==t&&(this.inputValue=t)}registerOnChange(t){this.onChanges=t}registerOnTouched(t){this.onTouched=t}validateField(){this.fieldError=this.appFormService.getErrorMessage(this.formControl,this.label),this.onTouched()}updateFieldValidation(){this.fieldError&&this.validateField()}}return t.\u0275fac=function(e){return new(e||t)(r.Mb(s.a))},t.\u0275cmp=r.Gb({type:t,selectors:[["app-input"]],inputs:{label:"label",placeholder:"placeholder",id:"id",prependIcon:"prependIcon",formControl:"formControl",triggerValidation:"triggerValidation",autofocus:"autofocus",autocomplete:"autocomplete",type:"type",labelClass:"labelClass",inputClass:"inputClass",step:"step",min:"min",showPasswordStrength:"showPasswordStrength"},features:[r.zb([{provide:o.l,useExisting:Object(r.U)(()=>t),multi:!0},{provide:o.k,useExisting:Object(r.U)(()=>t),multi:!0}]),r.yb],decls:11,vars:26,consts:[[1,"form-group","mb-4",2,"position","relative"],[1,"d-flex","flex-wrap","m-0","p-0","align-items-center"],[3,"for"],[1,"icon-star","required"],["class","input-group-prepend",3,"is-invalid",4,"ngIf"],[1,"form-control",3,"step","min","autocomplete","autofocus","formControl","id","type","placeholder","keyup","blur"],["class","input-group-append",4,"ngIf"],["class","invalid-feedback-message","style","position: absolute;",4,"ngIf"],[3,"passwordString",4,"ngIf"],[1,"input-group-prepend"],[1,"input-group-text",3,"id"],[1,"input-group-append"],["appShowPassword","","type","button",1,"show-password",3,"toggleType"],[1,"invalid-feedback-message",2,"position","absolute"],[1,"arrow-up"],[3,"passwordString"]],template:function(t,e){1&t&&(r.Sb(0,"section",0),r.Sb(1,"section",1),r.Sb(2,"label",2),r.Nb(3,"span",3),r.Ac(4),r.Rb(),r.Sb(5,"section"),r.yc(6,u,3,5,"section",4),r.Sb(7,"input",5),r.Zb("keyup",function(){return e.updateFieldValidation()})("blur",function(){return e.validateField()}),r.Rb(),r.yc(8,g,4,4,"section",6),r.yc(9,h,3,1,"section",7),r.Rb(),r.Rb(),r.yc(10,f,2,3,"app-password-meter",8),r.Rb()),2&t&&(r.Ab(2),r.Cb("col-md-12 col-lg-12 col-sm-12 control-label "+e.labelClass+" m-0 p-0"),r.hc("for",e.id),r.Ab(1),r.Eb("required-inVisible",!e.isRequired),r.Ab(1),r.Cc("",e.label," "),r.Ab(1),r.Cb(e.inputClass?e.inputClass+" input-group m-0 p-0":"col-md-12 col-lg-12 "+e.inputClass+" input-group m-0 p-0"),r.Ab(1),r.hc("ngIf",e.prependIcon),r.Ab(1),r.Eb("is-invalid",e.fieldError)("is-valid",e.formControl.valid&&e.formControl.touched),r.hc("step",e.step)("min",e.min)("autocomplete",e.autocomplete)("autofocus",e.autofocus)("formControl",e.formControl)("id",r.kc(24,m,e.id))("type",e.fieldType)("placeholder",e.placeholder),r.Ab(1),r.hc("ngIf","password"===e.type),r.Ab(1),r.hc("ngIf",e.fieldError),r.Ab(1),r.hc("ngIf",e.showPasswordStrength))},directives:[a.n,o.b,o.m,o.f,c,d],pipes:[a.b],styles:["@media (max-width:400px){.input-group-prepend[_ngcontent-%COMP%]{display:none}}.invalid-feedback-message[_ngcontent-%COMP%]{padding:4px;line-height:80%;font-size:65%;background:red;right:4%;margin-bottom:-21px;bottom:0;border-radius:4px;position:absolute}.arrow-up[_ngcontent-%COMP%]{width:0;height:0;border-left:6px solid transparent;border-right:6px solid transparent;border-bottom:6px solid red;position:absolute;margin-top:-10px;margin-left:20px}.required[_ngcontent-%COMP%]{font-size:.5em;position:absolute;left:-10px;color:#adff2f}.required-inVisible[_ngcontent-%COMP%]{display:none}input[_ngcontent-%COMP%] ~ section[_ngcontent-%COMP%]   .show-password[_ngcontent-%COMP%]{color:rgba(0,0,0,.2)}input[_ngcontent-%COMP%]:focus ~ section[_ngcontent-%COMP%]   .show-password[_ngcontent-%COMP%], input[_ngcontent-%COMP%] ~ section[_ngcontent-%COMP%]   .show-password[_ngcontent-%COMP%]:hover, section[_ngcontent-%COMP%]   .show-password[_ngcontent-%COMP%]:focus{color:#000!important}"]}),t})()},bxdZ:function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n("fXoL");let o=(()=>{class t{constructor(){}popupPrint(t){const e=document.querySelector(t).innerHTML,n=window.open("","_blank","top=0,left=0,height=auto,width=auto");null==n||n.document.open(),null==n||n.document.write(`\n      <html>\n        <head>\n          <title>Print tab</title>\n          <style>\n            .d-flex  {\n              width: 100%;\n              display: flex;\n              justify-content: between;\n            }\n            .table {\n              text-align: left;\n              width: 100%;\n              margin-bottom: 1rem;\n            }\n            .table td, .table th {\n              padding: .75rem;\n              vertical-align: top;\n              border-top: 1px solid #dee2e6;\n            }\n            td {\n              display: table-cell;\n            }\n            @media print {\n              .d-print-none {\n                display: none;\n              }\n            }\n          </style>\n        </head>\n        <body>\n          <section class='d-print-none'>\n            <button onclick="window.print();">Print</button>\n            <button onclick="window.close();">Cancel</button>\n          </section>\n         ${e}\n        </body>\n        <script>\n          window.print();\n        <\/script>\n      </html>`)}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},"hc/g":function(t,e,n){"use strict";n.d(e,"a",function(){return o});var r=n("fXoL");let o=(()=>{class t{constructor(){}getErrorMessage(t,e){return this.triggerValidation(t)&&t.errors&&t.errors.required?(e?e+" ":"")+"field is required":this.triggerValidation(t)&&t.errors&&t.errors.email?(e?e+" ":"")+"field should be a valid email":this.triggerValidation(t)&&t.errors&&t.errors.minlength?(e?e+" ":"")+`field too short (min ${t.errors.minlength.requiredLength})`:this.triggerValidation(t)&&t.errors&&t.errors.pattern?"Pattern "+(e?"for "+e+" ":"")+"not met":null}triggerValidation(t){return(t.dirty||t.touched)&&!t.valid}}return t.\u0275fac=function(e){return new(e||t)},t.\u0275prov=r.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t})()},oGmh:function(t,e,n){"use strict";n.d(e,"a",function(){return i});var r=n("fXoL"),o=n("bxdZ");let i=(()=>{class t{constructor(t){this.printService=t}print(){this.printService.popupPrint(this.selector)}}return t.\u0275fac=function(e){return new(e||t)(r.Mb(o.a))},t.\u0275cmp=r.Gb({type:t,selectors:[["app-print"]],inputs:{selector:"selector"},decls:3,vars:0,consts:[["type","button",1,"btn","btn-secondary","btn-sm",3,"click"],[1,"icon-print"]],template:function(t,e){1&t&&(r.Sb(0,"button",0),r.Zb("click",function(){return e.print()}),r.Ac(1,"Print "),r.Nb(2,"span",1),r.Rb())},styles:[""]}),t})()},uuoK:function(t,e,n){"use strict";n.r(e),n.d(e,"InventoryMovementReportModule",function(){return k});var r=n("ofXK"),o=n("tyNb"),i=n("3Pt+"),s=n("+Kmi"),a=n("XNiG"),c=n("itXk"),l=n("eIep"),b=n("vkgz"),p=n("lJxs"),d=n("fXoL"),u=n("2qjx"),g=n("x6Rh"),h=n("ZOsW"),f=n("QlUG"),m=n("oGmh"),S=n("/HMp");function y(t,e){if(1&t&&(d.Sb(0,"ng-option",16),d.Ac(1),d.cc(2,"titlecase"),d.Rb()),2&t){const t=e.$implicit;d.hc("value",t.id),d.Ab(1),d.Cc(" ",d.dc(2,2,t.name)," ")}}function v(t,e){1&t&&(d.Sb(0,"tr"),d.Sb(1,"td",21),d.Ac(2," No Inventory Movement found! "),d.Rb(),d.Rb())}function w(t,e){if(1&t&&(d.Sb(0,"tr"),d.Sb(1,"td",20),d.Ac(2,"Balance Brought Down"),d.Rb(),d.Sb(3,"td",23),d.Ac(4),d.Rb(),d.Sb(5,"td",20),d.Ac(6),d.Rb(),d.Rb()),2&t){const t=d.bc().$implicit,e=d.bc(2);d.Ab(4),d.Bc(e.startDateControl.value),d.Ab(2),d.Cc(" ",t.total-t.quantity,"")}}function C(t,e){if(1&t&&(d.Sb(0,"tr",18),d.Sb(1,"td",20),d.Ac(2,"Balance Carried Forward"),d.Rb(),d.Sb(3,"td",23),d.Ac(4),d.Rb(),d.Sb(5,"td",20),d.Ac(6),d.Rb(),d.Rb()),2&t){const t=d.bc().$implicit;d.Ab(4),d.Bc(t.dateTime),d.Ab(2),d.Cc(" ",t.total,"")}}function A(t,e){if(1&t&&(d.Qb(0),d.yc(1,w,7,2,"tr",15),d.Sb(2,"tr"),d.Sb(3,"td"),d.Ac(4),d.Rb(),d.Sb(5,"td"),d.Ac(6),d.Rb(),d.Sb(7,"td"),d.Nb(8,"span"),d.Ac(9),d.cc(10,"minus2parenthesis"),d.Rb(),d.Sb(11,"td"),d.Ac(12),d.Rb(),d.Rb(),d.yc(13,C,7,2,"tr",22),d.Pb()),2&t){const t=e.$implicit,n=e.first,r=e.last;d.Ab(1),d.hc("ngIf",n),d.Ab(3),d.Dc("",t.type," - ",t.id,""),d.Ab(2),d.Bc(t.dateTime),d.Ab(1),d.Eb("text-success",t.quantity>0)("text-danger",t.quantity<0),d.Ab(1),d.Eb("icon-folder-add",t.quantity>0)("icon-folder-delete",t.quantity<0),d.Ab(1),d.Bc(d.dc(10,15,t.quantity)),d.Ab(3),d.Cc(" ",t.total,""),d.Ab(1),d.hc("ngIf",r)}}function R(t,e){if(1&t&&(d.Qb(0),d.yc(1,v,3,0,"tr",15),d.yc(2,A,14,17,"ng-container",17),d.Sb(3,"tr",18),d.Sb(4,"td",19),d.Ac(5,"Balance Carried Forward"),d.Rb(),d.Sb(6,"td",20),d.Ac(7),d.Rb(),d.Rb(),d.Pb()),2&t){const t=e.ngIf;d.Ab(1),d.hc("ngIf",t.inventoryStatement.length<1),d.Ab(1),d.hc("ngForOf",t.inventoryStatement),d.Ab(5),d.Cc(" ",t.total,"")}}const x=[{path:"",pathMatch:"full",component:(()=>{class t extends(Object(s.a)()){constructor(t,e,n){super(),this.fb=t,this.productsService=e,this.inventoryService=n,this.products$=this.productsService.loadProducts$,this.itemForm=this.fb.group({productId:[null,[i.v.required]],startDate:[(new Date).toISOString().substring(0,10)]}),this.submitSubject$=new a.a,this.dateSubject$=new a.a,this.movements$=this.submitSubject$.pipe(Object(l.a)(()=>this.inventoryService.changesStatement(this.itemForm.value.productId)),Object(b.a)(()=>this.dateSubject$.next(this.startDateControl.value))),this.datedMovement$=Object(c.a)([this.movements$,this.dateSubject$.asObservable()]).pipe(Object(p.a)(([t,e])=>Object.assign(Object.assign({},t),{inventoryStatement:t.inventoryStatement.filter(({dateTime:t})=>new Date(t)>new Date(e)),total:t.inventoryStatement.reduce((t,{quantity:e})=>t+e,0)})))}get startDateControl(){return this.itemForm.get("startDate")}getStatement(){this.submitSubject$.next()}}return t.\u0275fac=function(e){return new(e||t)(d.Mb(i.d),d.Mb(u.a),d.Mb(g.a))},t.\u0275cmp=d.Gb({type:t,selectors:[["app-inventory-movement-report"]],features:[d.xb],decls:32,vars:8,consts:[[1,"wrapper","card","p-2"],[3,"formGroup","submit"],[1,"d-flex","flex-wrap","align-items-start"],[1,"col-lg-3"],["for","product",1,"control-label"],["placeholder","Choose a Product","id","product","formControlName","productId"],["role","option",3,"value",4,"ngFor","ngForOf"],["label","Start Date","id","startDate","formControlName","startDate","type","date"],[1,"col-lg-4"],["type","submit",1,"mt-4","btn","btn-primary",3,"disabled"],["selector",".printable"],[1,"printable"],[1,"mt-2","table","table-sm","table-dark"],[1,"bg-dark"],[1,"p-2"],[4,"ngIf"],["role","option",3,"value"],[4,"ngFor","ngForOf"],[2,"border-top","#cccccc double"],["colspan","3",1,"pt-4","pb-1"],[1,"pt-3","pb-3"],["colspan","6",1,"alert","alert-info","p-2","m-2"],["style","border-top: #cccccc double",4,"ngIf"],["colspan","2",1,"pt-3","pb-3"]],template:function(t,e){1&t&&(d.Sb(0,"h1"),d.Ac(1,"Inventory Movement Report"),d.Rb(),d.Sb(2,"div",0),d.Sb(3,"form",1),d.Zb("submit",function(){return e.getStatement()}),d.Sb(4,"div",2),d.Sb(5,"div",3),d.Sb(6,"label",4),d.Ac(7,"Product"),d.Rb(),d.Sb(8,"ng-select",5),d.yc(9,y,3,4,"ng-option",6),d.cc(10,"async"),d.Rb(),d.Rb(),d.Sb(11,"div",3),d.Nb(12,"app-input",7),d.Rb(),d.Sb(13,"div",8),d.Sb(14,"button",9),d.Ac(15,"Get Statement"),d.Rb(),d.Rb(),d.Rb(),d.Rb(),d.Nb(16,"app-print",10),d.Sb(17,"div",11),d.Sb(18,"table",12),d.Sb(19,"thead",13),d.Sb(20,"tr",14),d.Sb(21,"th"),d.Ac(22,"Movement ID"),d.Rb(),d.Sb(23,"th"),d.Ac(24,"Date Time"),d.Rb(),d.Sb(25,"th"),d.Ac(26,"Quantity"),d.Rb(),d.Sb(27,"th"),d.Ac(28,"Remaining"),d.Rb(),d.Rb(),d.Rb(),d.Sb(29,"tbody"),d.yc(30,R,8,3,"ng-container",15),d.cc(31,"async"),d.Rb(),d.Rb(),d.Rb(),d.Rb()),2&t&&(d.Ab(3),d.hc("formGroup",e.itemForm),d.Ab(6),d.hc("ngForOf",d.dc(10,4,e.products$)),d.Ab(5),d.hc("disabled",e.itemForm.invalid),d.Ab(16),d.hc("ngIf",d.dc(31,6,e.datedMovement$)))},directives:[i.x,i.n,i.h,h.a,i.m,i.g,r.m,f.a,m.a,r.n,h.c],pipes:[r.b,r.u,S.a],styles:[".wrapper[_ngcontent-%COMP%]{min-height:calc(100vh - 170px)}"]}),t})()}];let M=(()=>{class t{}return t.\u0275mod=d.Kb({type:t}),t.\u0275inj=d.Jb({factory:function(e){return new(e||t)},imports:[[o.j.forChild(x)],o.j]}),t})();var P=n("RecK"),O=n("gayR"),I=n("Yg/+"),T=n("B3RB");let k=(()=>{class t{}return t.\u0275mod=d.Kb({type:t}),t.\u0275inj=d.Jb({factory:function(e){return new(e||t)},imports:[[r.c,M,i.s,h.b,P.a,O.a,I.a,T.a]]}),t})()}}]);