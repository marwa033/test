(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{"2VK8":function(t,n,e){"use strict";e.r(n),e.d(n,"DivisionModule",function(){return V});var c=e("ofXK"),o=e("Fdg8"),a=e("H8qh"),i=e("tyNb"),b=e("fXoL"),r=e("1kSV"),l=e("kmnG"),d=e("qFsG"),s=e("d3UM"),m=e("FKr1"),u=e("+0xr"),f=e("NFeN");function p(t,n){1&t&&b.Tb(0,"th",39)}function O(t,n){if(1&t){var e=b.Zb();b.Yb(0,"td",40),b.Yb(1,"mat-icon",41),b.jc("click",function(){b.Fc(e);var t=b.nc(),n=b.Cc(72);return t.open(n)}),b.Oc(2,"edit"),b.Xb(),b.Xb()}}function h(t,n){1&t&&(b.Yb(0,"th",39),b.Oc(1," Name "),b.Xb())}function v(t,n){if(1&t&&(b.Yb(0,"td",40),b.Oc(1),b.Xb()),2&t){var e=n.$implicit;b.Fb(1),b.Qc(" ",e.name," ")}}function g(t,n){1&t&&(b.Yb(0,"th",39),b.Oc(1," Area "),b.Xb())}function X(t,n){if(1&t&&(b.Yb(0,"td",40),b.Oc(1),b.Xb()),2&t){var e=n.$implicit;b.Fb(1),b.Qc(" ",e.area," ")}}function Y(t,n){1&t&&(b.Yb(0,"th",39),b.Oc(1," Branch "),b.Xb())}function C(t,n){if(1&t&&(b.Yb(0,"td",40),b.Oc(1),b.Xb()),2&t){var e=n.$implicit;b.Fb(1),b.Qc(" ",e.branch," ")}}function M(t,n){1&t&&(b.Yb(0,"th",39),b.Oc(1," Established On "),b.Xb())}function w(t,n){if(1&t&&(b.Yb(0,"td",40),b.Oc(1),b.Xb()),2&t){var e=n.$implicit;b.Fb(1),b.Qc(" ",e.establishedOn," ")}}function y(t,n){1&t&&(b.Yb(0,"th",39),b.Oc(1," Status "),b.Xb())}function P(t,n){if(1&t&&(b.Yb(0,"td",42),b.Oc(1),b.Xb()),2&t){var e=n.$implicit;b.Fb(1),b.Qc(" ",e.status," ")}}function _(t,n){1&t&&(b.Yb(0,"th",39),b.Oc(1," Created By "),b.Xb())}function k(t,n){if(1&t&&(b.Yb(0,"td",40),b.Oc(1),b.Xb()),2&t){var e=n.$implicit;b.Fb(1),b.Qc(" ",e.createdBy," ")}}function F(t,n){1&t&&(b.Yb(0,"th",39),b.Oc(1," Created on "),b.Xb())}function D(t,n){if(1&t&&(b.Yb(0,"td",40),b.Oc(1),b.Xb()),2&t){var e=n.$implicit;b.Fb(1),b.Qc(" ",e.createdOn," ")}}function x(t,n){1&t&&b.Tb(0,"tr",43)}function S(t,n){1&t&&b.Tb(0,"tr",44)}function j(t,n){if(1&t){var e=b.Zb();b.Yb(0,"div"),b.Yb(1,"h4",45),b.Oc(2,"Add / Edit Area"),b.Xb(),b.Yb(3,"div",46),b.jc("click",function(){return n.$implicit.dismiss("Cross click")}),b.Yb(4,"span",47),b.Oc(5,"X"),b.Xb(),b.Xb(),b.Xb(),b.Yb(6,"div",10),b.Yb(7,"mat-form-field",15),b.Yb(8,"mat-label"),b.Oc(9,"Name"),b.Xb(),b.Tb(10,"input",48),b.Xb(),b.Tb(11,"br"),b.Yb(12,"mat-form-field",15),b.Yb(13,"mat-label"),b.Oc(14,"Status"),b.Xb(),b.Yb(15,"mat-select",49),b.jc("valueChange",function(t){return b.Fc(e),b.nc().selectedstatus=t}),b.Yb(16,"mat-option"),b.Oc(17,"None"),b.Xb(),b.Yb(18,"mat-option",17),b.Oc(19,"Option 1"),b.Xb(),b.Yb(20,"mat-option",18),b.Oc(21,"Option 2"),b.Xb(),b.Yb(22,"mat-option",19),b.Oc(23,"Option 3"),b.Xb(),b.Xb(),b.Xb(),b.Yb(24,"button",6),b.jc("click",function(){return n.$implicit.dismiss("Ok click")}),b.Oc(25,"Save"),b.Xb(),b.Xb()}if(2&t){var c=b.nc();b.Fb(15),b.sc("value",c.selectedstatus)}}var N=[{name:"Northen Area",status:"Active",createdBy:"John Doe",createdOn:"10/25/2020 4:48pm"},{name:"Northen Area",status:"Active",createdBy:"John Doe",createdOn:"10/25/2020 4:48pm"}],A=[{path:"",component:function(){function t(t){this.modalService=t,this.selectedstatus="",this.displayedColumns=["action","name","status","createdby","createdon"],this.dataSource=N,this.closeResult=""}return t.prototype.ngOnInit=function(){},t.prototype.open=function(t){this.modalService.open(t,{size:"sm"})},t.prototype.addFilter=function(){console.log("00"),document.querySelector(".filter-container").classList.toggle("active")},t.\u0275fac=function(n){return new(n||t)(b.Sb(r.a))},t.\u0275cmp=b.Mb({type:t,selectors:[["ms-division"]],decls:73,vars:4,consts:[[1,"container"],[1,"mt-0","mb-2"],[1,"sub-title","mb-2"],[1,"header"],[1,"row"],[1,"col-md-3","d-grid","mt-2"],["type","button",1,"btn","new-btn","btn-sm",3,"click"],[1,"col-md-6","d-grid"],["type","button",1,"filter","btn","new-btn","btn-sm",3,"click"],[1,"filter-container"],[1,"row","mt-2"],[1,"col-md-3","mt-2"],[1,"full-wid","mrgn-b-md"],["matInput","","name","searchname"],[1,"col-lg-3","col-md-6","col-sm-6"],[1,"full-wid"],["name","searchstatus",3,"value","valueChange"],["value","option1"],["value","option2"],["value","option3"],[1,"col-md-3","mt-3"],["type","button",1,"button"],[1,"col-md-9"],[1,"table-responsive"],["mat-table","",1,"mt-2",3,"dataSource"],["matColumnDef","action"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","area"],["matColumnDef","branch"],["matColumnDef","establishedOn"],["matColumnDef","status"],["mat-cell","","style","color:rgb(10, 231, 10)",4,"matCellDef"],["matColumnDef","createdby"],["matColumnDef","createdon"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["content",""],["mat-header-cell",""],["mat-cell",""],[1,"editIcon",3,"click"],["mat-cell","",2,"color","rgb(10, 231, 10)"],["mat-header-row",""],["mat-row",""],["id","modal-basic-title",1,"modal-title"],["type","button","aria-label","Close",1,"close",3,"click"],["aria-hidden","true",2,"color","red"],["matInput","","name","name"],["name","status",3,"value","valueChange"]],template:function(t,n){if(1&t){var e=b.Zb();b.Yb(0,"div",0),b.Yb(1,"h1",1),b.Oc(2,"Configuration"),b.Xb(),b.Yb(3,"h2",2),b.Oc(4,"Company"),b.Xb(),b.Yb(5,"div",3),b.Yb(6,"h3"),b.Oc(7,"Division"),b.Xb(),b.Tb(8,"span"),b.Xb(),b.Yb(9,"div",4),b.Yb(10,"div",5),b.Yb(11,"button",6),b.jc("click",function(){b.Fc(e);var t=b.Cc(72);return n.open(t)}),b.Oc(12,"Add New Division"),b.Xb(),b.Xb(),b.Tb(13,"div",7),b.Yb(14,"div",5),b.Yb(15,"button",8),b.jc("click",function(){return n.addFilter()}),b.Oc(16,"+ Add Filter"),b.Xb(),b.Xb(),b.Xb(),b.Yb(17,"form",9),b.Yb(18,"div",10),b.Yb(19,"div",11),b.Yb(20,"mat-form-field",12),b.Yb(21,"mat-label"),b.Oc(22,"Name"),b.Xb(),b.Tb(23,"input",13),b.Xb(),b.Xb(),b.Yb(24,"div",14),b.Yb(25,"mat-form-field",15),b.Yb(26,"mat-label"),b.Oc(27,"Status"),b.Xb(),b.Yb(28,"mat-select",16),b.jc("valueChange",function(t){return n.selectedstatus=t}),b.Yb(29,"mat-option"),b.Oc(30,"None"),b.Xb(),b.Yb(31,"mat-option",17),b.Oc(32,"Option 1"),b.Xb(),b.Yb(33,"mat-option",18),b.Oc(34,"Option 2"),b.Xb(),b.Yb(35,"mat-option",19),b.Oc(36,"Option 3"),b.Xb(),b.Xb(),b.Xb(),b.Xb(),b.Tb(37,"div",14),b.Yb(38,"div",20),b.Yb(39,"button",21),b.Oc(40,"Apply Filter"),b.Xb(),b.Xb(),b.Xb(),b.Yb(41,"div",4),b.Tb(42,"div",22),b.Xb(),b.Xb(),b.Yb(43,"div",23),b.Yb(44,"table",24),b.Wb(45,25),b.Mc(46,p,1,0,"th",26),b.Mc(47,O,3,0,"td",27),b.Vb(),b.Wb(48,28),b.Mc(49,h,2,0,"th",26),b.Mc(50,v,2,1,"td",27),b.Vb(),b.Wb(51,29),b.Mc(52,g,2,0,"th",26),b.Mc(53,X,2,1,"td",27),b.Vb(),b.Wb(54,30),b.Mc(55,Y,2,0,"th",26),b.Mc(56,C,2,1,"td",27),b.Vb(),b.Wb(57,31),b.Mc(58,M,2,0,"th",26),b.Mc(59,w,2,1,"td",27),b.Vb(),b.Wb(60,32),b.Mc(61,y,2,0,"th",26),b.Mc(62,P,2,1,"td",33),b.Vb(),b.Wb(63,34),b.Mc(64,_,2,0,"th",26),b.Mc(65,k,2,1,"td",27),b.Vb(),b.Wb(66,35),b.Mc(67,F,2,0,"th",26),b.Mc(68,D,2,1,"td",27),b.Vb(),b.Mc(69,x,1,0,"tr",36),b.Mc(70,S,1,0,"tr",37),b.Xb(),b.Xb(),b.Xb(),b.Mc(71,j,26,1,"ng-template",null,38,b.Nc)}2&t&&(b.Fb(28),b.sc("value",n.selectedstatus),b.Fb(16),b.sc("dataSource",n.dataSource),b.Fb(25),b.sc("matHeaderRowDef",n.displayedColumns),b.Fb(1),b.sc("matRowDefColumns",n.displayedColumns))},directives:[l.b,l.e,d.b,s.a,m.m,u.j,u.c,u.e,u.b,u.g,u.i,u.d,u.a,f.a,u.f,u.h],styles:[".sub-title[_ngcontent-%COMP%], h1[_ngcontent-%COMP%], h3[_ngcontent-%COMP%]{color:#2980b9;font-weight:700;margin:0}.sub-title[_ngcontent-%COMP%]{color:#000}.header[_ngcontent-%COMP%]{display:flex}span[_ngcontent-%COMP%]{border-top:1px solid #c0bebe;width:100%;margin-top:15px;margin-left:1%}.btn[_ngcontent-%COMP%]{border-radius:10px}.new-btn[_ngcontent-%COMP%]{background-color:#27ae60;color:#fff}  .cdk-overlay-container{z-index:1200!important}table[_ngcontent-%COMP%]{background-color:#f2f4f6}th[_ngcontent-%COMP%]{font-weight:bolder}.mat-cell[_ngcontent-%COMP%], th[_ngcontent-%COMP%]{font-size:13px}.editIcon[_ngcontent-%COMP%]{background-color:#27ae60;color:#fff;border-radius:25px;padding:2px;font-size:20px;text-align:center;cursor:pointer}.table-responsive[_ngcontent-%COMP%]{display:block;width:100%;overflow-x:auto}.table-responsive[_ngcontent-%COMP%]   .mat-table[_ngcontent-%COMP%]{width:100%;max-width:100%;display:table;border-collapse:collapse;margin:0}.table-responsive[_ngcontent-%COMP%]   .mat-header-row[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%]   .mat-row[_ngcontent-%COMP%]{display:table-row}.table-responsive[_ngcontent-%COMP%]   .mat-cell[_ngcontent-%COMP%], .table-responsive[_ngcontent-%COMP%]   .mat-header-cell[_ngcontent-%COMP%]{word-wrap:normal;display:table-cell;padding:0 5px;line-break:unset;width:auto;white-space:nowrap;overflow:hidden;vertical-align:middle}.button[_ngcontent-%COMP%]{background-color:#0d6efd;border:#0d6efd;color:#fff;width:100%;border-radius:8px;padding:3.5px 7px}.button[_ngcontent-%COMP%]:focus{box-shadow:0 0 0 .25rem rgba(13,110,253,.25)}.filter-container[_ngcontent-%COMP%]{display:none}.filter-container.active[_ngcontent-%COMP%]{display:block}"]}),t}(),children:[]}],T=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=b.Qb({type:t}),t.\u0275inj=b.Pb({imports:[[i.j.forChild(A)],i.j]}),t}(),V=function(){function t(){}return t.\u0275fac=function(n){return new(n||t)},t.\u0275mod=b.Qb({type:t}),t.\u0275inj=b.Pb({imports:[[c.c,T,o.a,a.a]]}),t}()}}]);