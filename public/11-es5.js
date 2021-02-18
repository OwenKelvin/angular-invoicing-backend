!function(){function t(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function e(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function n(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function r(t,e,r){return e&&n(t.prototype,e),r&&n(t,r),t}(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{"+P1L":function(n,i,a){"use strict";a.r(i),a.d(i,"UsersModule",function(){return Q});var c,o=a("ofXK"),u=a("tyNb"),s=a("LRne"),f=a("fXoL"),b=a("Mo0h"),p=((c=function(){function t(){e(this,t),this.links$=Object(s.a)([{name:"Admissions",icon:"icon-user-circle-o",link:"users/users-management"},{name:"Roles & Permissions",icon:"icon-sliders",link:"users/roles-and-permissions"}])}return r(t,[{key:"ngOnInit",value:function(){}}]),t}()).\u0275fac=function(t){return new(t||c)},c.\u0275cmp=f.Gb({type:c,selectors:[["app-users"]],decls:3,vars:1,consts:[[3,"links$"]],template:function(t,e){1&t&&(f.Sb(0,"h1"),f.Ac(1,"Users"),f.Rb(),f.Nb(2,"app-links",0)),2&t&&(f.Ab(2),f.hc("links$",e.links$))},directives:[b.a],styles:[""]}),c),d=a("lJxs"),l=a("5+tZ"),h=a("lalG"),j=a("oZoq"),O=a("aFxk"),m=function(){return["/users"]},v=function(){return["info"]};function S(t,e){if(1&t){var n=f.Tb();f.Qb(0),f.Sb(1,"app-user-profile",2),f.Zb("valueChanged",function(t){return f.tc(n),f.bc().changeProfile(t)}),f.Rb(),f.Pb()}if(2&t){var r=e.ngIf;f.Ab(1),f.hc("profile",r)("linkBase",f.jc(3,m))("links",f.jc(4,v))}}function g(t,e){1&t&&(f.Sb(0,"h1"),f.Ac(1,"Staff Profile"),f.Rb(),f.Nb(2,"app-loading-bubble"))}var y,I=((y=function(){function t(n,r){var i=this;e(this,t),this.route=n,this.supportStaffService=r,this.supportStaffProfile$=this.route.paramMap.pipe(Object(d.a)(function(t){return Number(t.get("id"))}),Object(l.a)(function(t){return i.supportStaffService.loadStaffWithId$(t)}))}return r(t,[{key:"changeProfile",value:function(t){console.log(t)}}]),t}()).\u0275fac=function(t){return new(t||y)(f.Mb(u.a),f.Mb(h.a))},y.\u0275cmp=f.Gb({type:y,selectors:[["app-view-user"]],decls:4,vars:4,consts:[[4,"ngIf","ngIfElse"],["loading",""],["title","Support Staff",3,"profile","linkBase","links","valueChanged"]],template:function(t,e){if(1&t&&(f.yc(0,S,2,5,"ng-container",0),f.cc(1,"async"),f.yc(2,g,3,0,"ng-template",null,1,f.zc)),2&t){var n=f.qc(3);f.hc("ngIf",f.dc(1,2,e.supportStaffProfile$))("ngIfElse",n)}},directives:[o.n,j.a,O.a],pipes:[o.b],styles:[""]}),y),P=a("vkgz"),k=a("IzEk"),w=a("l7P3"),L=a("Lp8z"),$=a("4OVp"),R=a("wZYl");function A(t,e){if(1&t){var n=f.Tb();f.Sb(0,"section",2),f.Sb(1,"section",3),f.Sb(2,"app-name-item",4),f.Zb("valueChanged",function(t){return f.tc(n),f.bc().changeProfile("email",t)}),f.Rb(),f.Rb(),f.Sb(3,"section",3),f.Sb(4,"app-name-item",5),f.Zb("valueChanged",function(t){return f.tc(n),f.bc().changeProfile("Phone",t)}),f.Rb(),f.Rb(),f.Sb(5,"section",3),f.Sb(6,"app-name-item",6),f.Zb("valueChanged",function(t){return f.tc(n),f.bc().changeProfile("dateOfBirth",t)}),f.Rb(),f.Rb(),f.Rb()}if(2&t){var r=e.ngIf;f.Ab(2),f.hc("userId",r.id)("name",r.email),f.Ab(2),f.hc("userId",r.id)("name",r.phone),f.Ab(2),f.hc("userId",r.id)("name",r.dateOfBirth)}}function M(t,e){1&t&&f.Nb(0,"app-loading-bubble")}var T,_,N,B,C=[{path:"",pathMatch:"full",data:{breadcrumb:null},component:p},{path:"users-management",loadChildren:function(){return Promise.all([a.e(0),a.e(16)]).then(a.bind(null,"92zr")).then(function(t){return t.UsersManagementModule})},data:{breadcrumb:"Users Management"}},{path:"roles-and-permissions",loadChildren:function(){return a.e(31).then(a.bind(null,"6ef5")).then(function(t){return t.RolesAndPermissionsModule})},data:{breadcrumb:"Users Management"}},{path:":id",data:{breadcrumb:null},component:I,children:[{path:"info",component:(T=function(){function n(t,r){var i,a,c=this;e(this,n),this.store=t,this.route=r,this.routeId=null===(i=this.route.parent)||void 0===i?void 0:i.paramMap.pipe(Object(d.a)(function(t){return Number(t.get("id"))})),this.userProfile$=null===(a=this.routeId)||void 0===a?void 0:a.pipe(Object(l.a)(function(t){return c.store.pipe(Object(w.t)(Object($.a)(t)))}))}return r(n,[{key:"changeProfile",value:function(e,n){var r,i=this;null===(r=this.routeId)||void 0===r||r.pipe(Object(P.a)(function(r){return i.store.dispatch(Object(L.c)({data:t({id:r},e,n)}))}),Object(k.a)(1)).subscribe()}},{key:"updateSelectValue",value:function(e,n){var r,i=this;null===(r=this.routeId)||void 0===r||r.pipe(Object(P.a)(function(r){var a;return i.store.dispatch(Object(L.c)({data:(a={id:r},t(a,e+"_id",n.id),t(a,e+"_name",n.name),a)}))}),Object(k.a)(1)).subscribe()}}]),n}(),T.\u0275fac=function(t){return new(t||T)(f.Mb(w.h),f.Mb(u.a))},T.\u0275cmp=f.Gb({type:T,selectors:[["app-view-user-info"]],decls:4,vars:4,consts:[["class","d-flex flex-wrap name-field  mt-4",4,"ngIf","ngIfElse"],["content_loading",""],[1,"d-flex","flex-wrap","name-field","mt-4"],[1,"col-md-7","col-lg-5","col-sm-12","mb-3"],["type","email","label","Email",3,"userId","name","valueChanged"],["type","tel","label","Phone",3,"userId","name","valueChanged"],["type","date","label","Date of Birth",3,"userId","name","valueChanged"]],template:function(t,e){if(1&t&&(f.yc(0,A,7,6,"section",0),f.cc(1,"async"),f.yc(2,M,1,0,"ng-template",null,1,f.zc)),2&t){var n=f.qc(3);f.hc("ngIf",f.dc(1,2,e.userProfile$))("ngIfElse",n)}},directives:[o.n,R.a,O.a],pipes:[o.b],styles:[""]}),T)},{path:"password-management",loadChildren:function(){return a.e(0).then(a.bind(null,"cUMb")).then(function(t){return t.PasswordManagementModule})}}]}],W=((_=function t(){e(this,t)}).\u0275mod=f.Kb({type:_}),_.\u0275inj=f.Jb({factory:function(t){return new(t||_)},imports:[[u.j.forChild(C)],u.j]}),_),z=a("MPUB"),x=a("9jGm"),Z=a("bOdf"),F=a("JIr8"),J=a("EY2u"),G=Object(w.n)("[Admissions] Load Admissionss"),U=Object(w.n)("[Admissions] Load Admissionss Success",Object(w.s)()),X=Object(w.n)("[Admissions] Load Admissionss Failure",Object(w.s)()),E=a("XP7w"),q=a("AM43"),K=((N=function t(n,r){var i=this;e(this,t),this.actions$=n,this.rolesPermissionService=r,this.loadAdmissionss$=Object(x.c)(function(){return i.actions$.pipe(Object(x.d)(G),Object(Z.a)(function(){return J.a.pipe(Object(d.a)(function(t){return U({data:t})}),Object(F.a)(function(t){return Object(s.a)(X({error:t}))}))}))}),this.loadStaffTypes$=Object(x.c)(function(){return i.actions$.pipe(Object(x.d)(E.a),Object(Z.a)(function(){return i.rolesPermissionService.staffTypes().pipe(Object(d.a)(function(t){return E.c({data:t})}),Object(F.a)(function(t){return Object(s.a)(E.b({error:t}))}))}))})}).\u0275fac=function(t){return new(t||N)(f.Wb(x.a),f.Wb(q.a))},N.\u0275prov=f.Ib({token:N,factory:N.\u0275fac}),N),Y=a("49x8"),V=a("HEfn"),H=a("hwR6"),D=a("K3ix"),Q=((B=function t(){e(this,t)}).\u0275mod=f.Kb({type:B}),B.\u0275inj=f.Jb({factory:function(t){return new(t||B)},imports:[[o.c,W,z.a,w.j.forFeature(Y.a,Y.b),x.b.forFeature([K]),V.a,H.a,D.b.forRoot()]]}),B)},"0+LY":function(t,e,n){"use strict";n.d(e,"b",function(){return u}),n.d(e,"a",function(){return s});var r=n("l7P3"),i=n("49x8"),a=Object(r.o)(i.a),c=n("Zyve"),o=Object(r.q)(a,function(t){return t?t[c.c]:{}}),u=Object(r.q)(o,function(t){return Object.values(t).filter(function(t){return t.id>0})}),s=function(t){return Object(r.q)(o,function(e){return e?e[t]:null})}},"49x8":function(e,n,r){"use strict";r.d(n,"a",function(){return a}),r.d(n,"b",function(){return c});var i=r("Zyve"),a="admissions",c=t({},i.c,i.b)},"4OVp":function(t,e,n){"use strict";n.d(e,"a",function(){return u});var r=n("l7P3"),i=n("5IRs"),a=n("n3+1"),c=Object(r.o)(a.b),o=Object(r.q)(c,function(t){return null==t?void 0:t[i.b]}),u=function(t){return Object(r.q)(o,function(e){return e&&e.staffs?e.staffs[t]:null})}},"5IRs":function(e,n,r){"use strict";r.d(n,"b",function(){return c}),r.d(n,"a",function(){return u});var i=r("l7P3"),a=r("Lp8z"),c="supportStaffs",o=Object(i.p)({},Object(i.r)(a.d,function(t){return t}),Object(i.r)(a.f,function(t){return t}),Object(i.r)(a.e,function(t){return t}),Object(i.r)(a.a,function(t){return t}),Object(i.r)(a.c,function(e,n){var r,i=Object.assign(Object.assign({},e.staffs),t({},n.data.id,Object.assign(Object.assign({},null===(r=e.staffs)||void 0===r?void 0:r[n.data.id]),n.data)));return Object.assign(Object.assign({},e),{staffs:i})}),Object(i.r)(a.b,function(t){return t}),Object(i.r)(a.g,function(t){return t}),Object(i.r)(a.h,function(t){return t}));function u(t,e){return o(t,e)}},AM43:function(t,n,i){"use strict";i.d(n,"a",function(){return p});var a=i("l7P3"),c=i("pLZG"),o=i("vkgz"),u=i("0+LY"),s=i("XP7w"),f=i("fXoL"),b=i("tk/3"),p=function(){var t=function(){function t(n,r){var i=this;e(this,t),this.http=n,this.store=r,this.loadAllStaffTypes$=this.store.pipe(Object(a.t)(u.b),Object(c.a)(function(t){return Number(null==t?void 0:t.length)<2}),Object(o.a)(function(){return i.store.dispatch(Object(s.a)())}))}return r(t,[{key:"staffTypes",value:function(){return this.http.get("api/permissions-and-roles/roles/?staff=true")}},{key:"updatePermissionForRoleWithId",value:function(t,e){return this.http.post("api/permissions-and-roles/roles/".concat(t),Object.assign(Object.assign({},e),{_method:"PATCH"}))}},{key:"getAllPermissionsStatusForRole",value:function(t){return this.http.get("api/permissions-and-roles/roles/".concat(t,"?allPermissions=true"))}},{key:"getRoleWithId",value:function(t){return this.http.get("api/permissions-and-roles/roles/".concat(t))}},{key:"roles$",get:function(){return this.http.get("api/permissions-and-roles/roles")}}]),t}();return t.\u0275fac=function(e){return new(e||t)(f.Wb(b.b),f.Wb(a.h))},t.\u0275prov=f.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},Lp8z:function(t,e,n){"use strict";n.d(e,"d",function(){return i}),n.d(e,"f",function(){return a}),n.d(e,"e",function(){return c}),n.d(e,"a",function(){return o}),n.d(e,"c",function(){return u}),n.d(e,"b",function(){return s}),n.d(e,"g",function(){return f}),n.d(e,"h",function(){return b});var r=n("l7P3"),i=Object(r.n)("[SupportStaff] Load SupportStaffs"),a=Object(r.n)("[SupportStaff] Load SupportStaffs Success",Object(r.s)()),c=Object(r.n)("[SupportStaff] Load SupportStaffs Failure",Object(r.s)()),o=Object(r.n)("[SupportStaff] Load SupportStaff By Id",Object(r.s)()),u=Object(r.n)("[SupportStaff] Load SupportStaff By Id Success",Object(r.s)()),s=Object(r.n)("[SupportStaff] Load SupportStaff By Id Failure",Object(r.s)()),f=Object(r.n)("[SupportStaff] Load SupportStaff Update",Object(r.s)()),b=Object(r.n)("[SupportStaff] Load SupportStaff Update Success",Object(r.s)())},XP7w:function(t,e,n){"use strict";n.d(e,"a",function(){return i}),n.d(e,"c",function(){return a}),n.d(e,"b",function(){return c});var r=n("l7P3"),i=Object(r.n)("[StaffType] Load StaffTypes"),a=Object(r.n)("[StaffType] Load StaffTypes Success",Object(r.s)()),c=Object(r.n)("[StaffType] Load StaffTypes Failure",Object(r.s)())},Zyve:function(e,n,r){"use strict";r.d(n,"c",function(){return c}),r.d(n,"a",function(){return o}),r.d(n,"b",function(){return s});var i=r("l7P3"),a=r("XP7w"),c="staffTypes",o={},u=Object(i.p)(o,Object(i.r)(a.a,function(t){return t}),Object(i.r)(a.c,function(e,n){return Object.assign(Object.assign({},e),n.data.reduce(function(e,n){return Object.assign(Object.assign({},e),t({},n.id,n))}))}),Object(i.r)(a.b,function(t){return t}));function s(t,e){return u(t,e)}},hwR6:function(t,n,r){"use strict";r.d(n,"a",function(){return O});var i,a,c=r("l7P3"),o=r("n3+1"),u=r("9jGm"),s=r("bOdf"),f=r("lJxs"),b=r("JIr8"),p=r("LRne"),d=r("Lp8z"),l=r("fXoL"),h=r("lalG"),j=((a=function t(n,r){var i=this;e(this,t),this.actions$=n,this.staffService=r,this.loadSupportStaffType$=Object(u.c)(function(){return i.actions$.pipe(Object(u.d)(d.d),Object(s.a)(function(){return i.staffService.staffTypes().pipe(Object(f.a)(function(t){return d.f({data:t})}),Object(b.a)(function(t){return Object(p.a)(d.e({error:t}))}))}))}),this.loadSupportStaffWithIdUpdate$=Object(u.c)(function(){return i.actions$.pipe(Object(u.d)(d.g),Object(s.a)(function(t){return i.staffService.update({id:t.id,data:t.data}).pipe(Object(f.a)(function(t){return d.h({data:t})}),Object(b.a)(function(t){return Object(p.a)(d.e({error:t}))}))}))}),this.loadStaffById$=Object(u.c)(function(){return i.actions$.pipe(Object(u.d)(d.a),Object(s.a)(function(t){return i.staffService.getSupportStaffById(t.data.id).pipe(Object(f.a)(function(t){return d.c({data:t})}),Object(b.a)(function(t){return Object(p.a)(d.b({error:t}))}))}))})}).\u0275fac=function(t){return new(t||a)(l.Wb(u.a),l.Wb(h.a))},a.\u0275prov=l.Ib({token:a,factory:a.\u0275fac}),a),O=((i=function t(){e(this,t)}).\u0275mod=l.Kb({type:i}),i.\u0275inj=l.Jb({factory:function(t){return new(t||i)},imports:[[c.j.forFeature(o.b,o.a),u.b.forFeature([j])]]}),i)},lalG:function(t,n,i){"use strict";i.d(n,"a",function(){return O});var a=i("z6cu"),c=i("l7P3"),o=i("0+LY"),u=i("pLZG"),s=i("vkgz"),f=i("lJxs"),b=i("JIr8"),p=i("XP7w"),d=i("4OVp"),l=i("Lp8z"),h=i("fXoL"),j=i("tk/3"),O=function(){var t=function(){function t(n,r){var i=this;e(this,t),this.store=n,this.http=r,this.loadAllStaffTypes$=this.store.pipe(Object(c.t)(o.b),Object(u.a)(function(t){return Number(null==t?void 0:t.length)<2}),Object(s.a)(function(){return i.store.dispatch(Object(p.a)())})),this.loadStaffTypeWithId$=function(t){return i.store.pipe(Object(c.t)(Object(o.a)(t)),Object(s.a)(function(t){t||i.store.dispatch(Object(p.a)())}))},this.loadStaffWithId$=function(t){return i.store.pipe(Object(c.t)(Object(d.a)(t)),Object(s.a)(function(e){return e||i.store.dispatch(Object(l.a)({data:{id:t}}))}))},this.update=function(t){var e=t.id,n=t.data;return i.http.post("api/users/".concat(e),Object.assign({},n))}}return r(t,[{key:"staffTypes",value:function(){return this.http.get("api/permissions-and-roles/roles/?staff=true")}},{key:"getSupportStaffById",value:function(t){return this.http.get("api/users/".concat(t)).pipe(Object(f.a)(function(t){return Object.assign(Object.assign({},t),{firstName:t.first_name,middleName:t.middle_name,lastName:t.last_name,otherNames:t.other_names,dateOfBirth:t.date_of_birth,teacherId:t.teacher_id})}),Object(b.a)(function(t){return Object(a.a)(t)}))}},{key:"save",value:function(t){return this.http.post("api/users",Object.assign(Object.assign({},t),{date_of_birth:t.dateOfBirth,first_name:t.firstName,last_name:t.lastName,middle_name:t.middleName,other_names:t.otherNames}))}}]),t}();return t.\u0275fac=function(e){return new(e||t)(h.Wb(c.h),h.Wb(j.b))},t.\u0275prov=h.Ib({token:t,factory:t.\u0275fac,providedIn:"root"}),t}()},"n3+1":function(e,n,r){"use strict";r.d(n,"b",function(){return a}),r.d(n,"a",function(){return c});var i=r("5IRs"),a="users",c=t({},i.b,i.a)}}])}();