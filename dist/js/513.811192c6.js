"use strict";(self["webpackChunkcoursestore"]=self["webpackChunkcoursestore"]||[]).push([[513],{2513:function(s,a,t){t.r(a),t.d(a,{default:function(){return m}});var c=function(){var s=this,a=s._self._c;return a("div",{staticClass:"claims"},[0===s.claims.length?a("h2",{staticStyle:{color:"black"}},[s._v(" Нет заявок ")]):s._l(s.claims,(function(t){return a("div",{key:t.id,staticClass:"claim"},[a("div",{staticClass:"claim__row"},[a("span",[s._v("Фамилия")]),a("p",[s._v(s._s(t.surname))])]),a("div",{staticClass:"claim__row"},[a("span",[s._v("Имя")]),a("p",[s._v(s._s(t.name))])]),a("div",{staticClass:"claim__row"},[a("span",[s._v("Отчество")]),a("p",[s._v(s._s(t.patronymic))])]),a("div",{staticClass:"claim__row"},[a("span",[s._v("Телефон")]),a("p",[s._v(s._s(t.phone))])])])}))],2)},i=[],l=t(6265),e=t.n(l),n={name:"Claims",data(){return{claims:[]}},mounted(){e()({url:"https://8bit.comrades.dev/api/claims",method:"GET"}).then((s=>{this.claims=s.data,console.log(this.claims)})).catch((s=>{console.log(s)}))}},o=n,r=t(1001),_=(0,r.Z)(o,c,i,!1,null,"10c2ce11",null),m=_.exports}}]);
//# sourceMappingURL=513.811192c6.js.map