!function(){function n(n,e){if(!(n instanceof e))throw new TypeError("Cannot call a class as a function")}function e(n,e){for(var s=0;s<e.length;s++){var o=e[s];o.enumerable=o.enumerable||!1,o.configurable=!0,"value"in o&&(o.writable=!0),Object.defineProperty(n,o.key,o)}}(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"6ef5":function(s,o,i){"use strict";i.r(o),i.d(o,"RolesAndPermissionsModule",function(){return h});var r,t,l,a=i("ofXK"),c=i("tyNb"),u=i("LRne"),f=i("fXoL"),d=i("Mo0h"),b=[{path:"",component:(r=function(){function s(){n(this,s)}var o,i,r;return o=s,(i=[{key:"ngOnInit",value:function(){this.links$=Object(u.a)([{name:"User Roles/ Permissions",icon:"icon-user-circle-o",link:"users/roles-and-permissions/user"},{name:"Roles & Permissions",icon:"icon-sliders",link:"users/roles-and-permissions/roles"}])}}])&&e(o.prototype,i),r&&e(o,r),s}(),r.\u0275fac=function(n){return new(n||r)},r.\u0275cmp=f.Gb({type:r,selectors:[["app-roles-and-permissions"]],decls:3,vars:1,consts:[[3,"links$"]],template:function(n,e){1&n&&(f.Sb(0,"h1"),f.Ac(1,"Roles & Permissions Dashboard"),f.Rb(),f.Nb(2,"app-links",0)),2&n&&(f.Ab(2),f.hc("links$",e.links$))},directives:[d.a],styles:[""]}),r),data:{breadcrumb:null}},{path:"user",loadChildren:function(){return i.e(33).then(i.bind(null,"GIcA")).then(function(n){return n.UserRolesPermissionsModule})},data:{breadcrumb:"User Roles & Permissions"}},{path:"roles",loadChildren:function(){return Promise.all([i.e(0),i.e(32)]).then(i.bind(null,"X019")).then(function(n){return n.RolesPermissionsModule})},data:{breadcrumb:"Roles & Permissions"}}],p=((t=function e(){n(this,e)}).\u0275mod=f.Kb({type:t}),t.\u0275inj=f.Jb({factory:function(n){return new(n||t)},imports:[[c.j.forChild(b)],c.j]}),t),m=i("MPUB"),h=((l=function e(){n(this,e)}).\u0275mod=f.Kb({type:l}),l.\u0275inj=f.Jb({factory:function(n){return new(n||l)},imports:[[a.c,p,m.a]]}),l)}}])}();