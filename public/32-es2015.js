(window.webpackJsonp=window.webpackJsonp||[]).push([[32],{X019:function(e,i,s){"use strict";s.r(i),s.d(i,"RolesPermissionsModule",function(){return N});var t=s("ofXK"),n=s("tyNb"),o=s("GJmQ"),r=s("fXoL"),c=s("AM43"),l=s("ZOsW"),b=s("3Pt+"),a=s("aFxk");function m(e,i){if(1&e&&(r.Sb(0,"li",14),r.Nb(1,"span",15),r.Ac(2),r.cc(3,"titlecase"),r.Rb()),2&e){const e=i.$implicit;r.Ab(2),r.Cc(" ",r.dc(3,1,e.name)," ")}}function u(e,i){if(1&e){const e=r.Tb();r.Sb(0,"fieldset",10),r.Sb(1,"legend"),r.Ac(2),r.cc(3,"uppercase"),r.Rb(),r.Sb(4,"input",11),r.Zb("ngModelChange",function(i){return r.tc(e),r.bc(2).filter=i}),r.Rb(),r.Sb(5,"ul",12),r.yc(6,m,4,3,"li",13),r.Rb(),r.Rb()}if(2&e){const e=r.bc(2);r.Ab(2),r.Cc("Permissions for roles: ",r.dc(3,3,e.getRoleWithId(e.role).name),""),r.Ab(2),r.hc("ngModel",e.filter),r.Ab(2),r.hc("ngForOf",e.getFilteredPermissionsWithRoleId(e.role))}}function p(e,i){1&e&&(r.Sb(0,"section",16),r.Ac(1,"No Role Selected"),r.Rb())}const d=function(e){return[e,"edit"]};function f(e,i){if(1&e){const e=r.Tb();r.Qb(0),r.Sb(1,"section",2),r.Sb(2,"section",3),r.Sb(3,"label",4),r.Ac(4,"Select Role"),r.Rb(),r.Sb(5,"ng-select",5),r.Zb("ngModelChange",function(i){return r.tc(e),r.bc().role=i}),r.Rb(),r.Rb(),r.Sb(6,"section"),r.Sb(7,"button",6),r.Sb(8,"span",7),r.Ac(9,"Edit"),r.Rb(),r.Rb(),r.Rb(),r.Rb(),r.yc(10,u,7,5,"fieldset",8),r.yc(11,p,2,0,"ng-template",null,9,r.zc),r.Pb()}if(2&e){const e=r.qc(12),i=r.bc();r.Ab(5),r.hc("items",i.roles)("ngModel",i.role),r.Ab(2),r.hc("routerLink",r.kc(6,d,i.role))("disabled",!i.role),r.Ab(3),r.hc("ngIf",i.role)("ngIfElse",e)}}function h(e,i){1&e&&r.Nb(0,"app-loading-bubble")}let g=(()=>{class e{constructor(e){this.rolesPermissionsService=e,this.isLoading=!0}ngOnInit(){this.filter="",this.componentIsActive=!0,this.roles$=this.rolesPermissionsService.roles$.pipe(Object(o.a)(()=>this.componentIsActive)),this.roles$.subscribe(e=>{this.roles=e,this.isLoading=!1})}getRoleWithId(e){return this.roles.find(({id:i})=>i===e)}getFilteredPermissionsWithRoleId(e){return this.getRoleWithId(e).permissions.filter(({name:e})=>new RegExp(this.filter).test(e))}ngOnDestroy(){this.componentIsActive=!1}}return e.\u0275fac=function(i){return new(i||e)(r.Mb(c.a))},e.\u0275cmp=r.Gb({type:e,selectors:[["app-roles-permissions"]],decls:5,vars:2,consts:[[4,"ngIf","ngIfElse"],["loading",""],[1,"d-flex","justify-content-between"],[1,"col-lg-4"],["for","role"],["id","role","bindLabel","name","bindValue","id",3,"items","ngModel","ngModelChange"],[1,"btn","btn-primary","btn-sm",3,"routerLink","disabled"],[1,"icon-edit"],["class","mt-3",4,"ngIf","ngIfElse"],["permissionsSection",""],[1,"mt-3"],["aria-label","filter","placeholder","Filter Permissions","type","text","name","","id","",1,"form-control",3,"ngModel","ngModelChange"],[1,"d-flex","flex-wrap","pl-0"],["class","col-lg-4 col-md-6 col-sm-12 list-group-item bg-dark",4,"ngFor","ngForOf"],[1,"col-lg-4","col-md-6","col-sm-12","list-group-item","bg-dark"],[1,"icon-thumbs-up","text-success"],[1,"alert","alert-info","mt-3"]],template:function(e,i){if(1&e&&(r.Sb(0,"h1"),r.Ac(1,"Roles and Permissions Management"),r.Rb(),r.yc(2,f,13,8,"ng-container",0),r.yc(3,h,1,0,"ng-template",null,1,r.zc)),2&e){const e=r.qc(4);r.Ab(2),r.hc("ngIf",!i.isLoading)("ngIfElse",e)}},directives:[t.n,l.a,b.m,b.o,n.g,b.b,t.m,a.a],pipes:[t.v,t.u],styles:[""]}),e})();var S=s("lJxs"),R=s("vkgz"),P=s("5+tZ"),A=s("l3v1"),I=s("hVnv");function v(e,i){if(1&e&&(r.Sb(0,"section",9),r.Nb(1,"app-checkbox",10),r.Rb()),2&e){const e=i.$implicit,s=i.index;r.Eb("text-success",e.value.hasPermission)("text-danger",!e.value.hasPermission),r.hc("formGroupName",s),r.Ab(1),r.hc("label",e.value.name)}}function y(e,i){if(1&e){const e=r.Tb();r.Qb(0),r.Sb(1,"h1"),r.Ac(2,"Roles and Permission Edit "),r.Nb(3,"span",2),r.Ac(4),r.cc(5,"titlecase"),r.Rb(),r.Sb(6,"form",3),r.Zb("submit",function(){return r.tc(e),r.bc().submitPermission()}),r.Sb(7,"fieldset",4),r.Sb(8,"legend"),r.Ac(9,"Permissions"),r.Rb(),r.Sb(10,"section",5),r.yc(11,v,2,6,"section",6),r.Rb(),r.Rb(),r.Sb(12,"section",7),r.Nb(13,"app-validate-submit-buttons",8),r.Rb(),r.Rb(),r.Pb()}if(2&e){const e=r.bc();r.Ab(4),r.Cc(" ",r.dc(5,5,e.role.name)," "),r.Ab(2),r.hc("formGroup",e.permissionsForm),r.Ab(5),r.hc("ngForOf",e.formPermissions.controls),r.Ab(2),r.hc("isSubmitting",e.isSubmitting)("formItem",e.permissionsForm)}}function F(e,i){1&e&&(r.Sb(0,"h1"),r.Ac(1,"Roles and Permission Edit "),r.Rb(),r.Nb(2,"app-loading-bubble"))}const x=[{path:"",pathMatch:"full",data:{breadcrumb:null},component:g},{path:":id",data:{breadcrumb:null},children:[{path:"edit",data:{breadcrumb:"Edit"},component:(()=>{class e{constructor(e,i,s){this.rolesPermissionService=e,this.route=i,this.fb=s}ngOnInit(){this.componentIsActive=!0,this.isLoading=!0,this.role$=this.route.paramMap.pipe(Object(S.a)(e=>Number(e.get("id")))).pipe(Object(R.a)(e=>this.roleId=e)).pipe(Object(P.a)(e=>this.rolesPermissionService.getAllPermissionsStatusForRole(e))).pipe(Object(o.a)(()=>this.componentIsActive)),this.role$.subscribe(e=>{this.isLoading=!1,this.role=e,this.updatePermissionsForm()})}updatePermissionsForm(){this.permissionsForm=this.fb.group({permissions:this.fb.array([])}),this.role.permissionStatus.forEach(({id:e,hasPermission:i,name:s})=>{this.formPermissions.push(this.fb.group({id:[e,[b.v.required]],name:[s],hasPermission:[i]}))})}get formPermissions(){return this.permissionsForm.get("permissions")}submitPermission(){this.isSubmitting=!0,this.formPermissions.controls.filter(e=>e.dirty).map(e=>e.value).forEach(({name:e,hasPermission:i})=>{this.rolesPermissionService.updatePermissionForRoleWithId(this.roleId,{name:e,hasPermission:i}).pipe(Object(o.a)(()=>this.componentIsActive)).subscribe(()=>{this.isSubmitting=!1},()=>this.isSubmitting=!1)})}}return e.\u0275fac=function(i){return new(i||e)(r.Mb(c.a),r.Mb(n.a),r.Mb(b.d))},e.\u0275cmp=r.Gb({type:e,selectors:[["app-roles-permission-edit"]],decls:4,vars:2,consts:[[4,"ngIf","ngIfElse"],["loading",""],[1,"icon-right-dir"],[3,"formGroup","submit"],["formArrayName","permissions"],[1,"d-flex","flex-wrap"],["class","col-lg-4",3,"formGroupName","text-success","text-danger",4,"ngFor","ngForOf"],[1,"p-2"],[3,"isSubmitting","formItem"],[1,"col-lg-4",3,"formGroupName"],["formControlName","hasPermission",3,"label"]],template:function(e,i){if(1&e&&(r.yc(0,y,14,7,"ng-container",0),r.Ob(1),r.yc(2,F,3,0,"ng-template",null,1,r.zc)),2&e){const e=r.qc(3);r.hc("ngIf",!i.isLoading)("ngIfElse",e)}},directives:[t.n,b.x,b.n,b.h,b.c,t.m,A.a,b.i,I.a,b.m,b.g,a.a],pipes:[t.u],styles:[""]}),e})()}]}];let M=(()=>{class e{}return e.\u0275mod=r.Kb({type:e}),e.\u0275inj=r.Jb({factory:function(i){return new(i||e)},imports:[[n.j.forChild(x)],n.j]}),e})();var O=s("Yg/+"),j=s("jdGB"),w=s("IVO7"),E=s("GTn6");let N=(()=>{class e{}return e.\u0275mod=r.Kb({type:e}),e.\u0275inj=r.Jb({factory:function(i){return new(i||e)},imports:[[t.c,M,l.b,b.j,b.s,j.a,n.j,w.a,O.a,E.a]]}),e})()}}]);