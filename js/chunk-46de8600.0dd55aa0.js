(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46de8600"],{2648:function(t,e,n){},"498a":function(t,e,n){"use strict";var a=n("23e7"),r=n("58a8").trim,i=n("c8d2");a({target:"String",proto:!0,forced:i("trim")},{trim:function(){return r(this)}})},"54e2":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"signin"},[a("h1",[t._v("Vue.js App Sign In")]),a("form",{staticClass:"signin-form",on:{submit:function(e){return e.preventDefault(),e.stopPropagation(),t.handleSubmit.apply(null,arguments)}}},[a("div",{staticClass:"signin-form-unit"},[a("label",{attrs:{for:"email"}},[t._v("Email")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],attrs:{type:"email",id:"email",name:"email",placeholder:"Email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}})]),a("div",{staticClass:"signin-form-unit"},[a("label",{attrs:{for:"password"}},[t._v("Password")]),a("input",{directives:[{name:"model",rawName:"v-model",value:t.password,expression:"password"}],attrs:{type:"password",id:"password",name:"password",placeholder:"Password",required:""},domProps:{value:t.password},on:{input:function(e){e.target.composing||(t.password=e.target.value)}}})]),t._m(0)]),a("button",{staticClass:"thirdParty-btn",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.loginByFacebook.apply(null,arguments)}}},[a("img",{attrs:{src:n("e944"),alt:""}}),a("span",[t._v("Sign In with Facebook")])]),a("div",[a("button",{staticClass:"thirdParty-btn",on:{click:function(e){return e.stopPropagation(),e.preventDefault(),t.loginByGoogle.apply(null,arguments)}}},[a("img",{attrs:{src:n("d57a"),alt:""}}),a("span",[t._v("Sign In with Google")])])])])},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"signin-form-button"},[n("button",{staticClass:"normal-btn",attrs:{type:"submit"}},[t._v("Sign In")])])}],i=n("1da1"),o=(n("96cf"),n("498a"),n("d9e2"),n("cd9d")),s=n("eae4"),u={name:"SignIn",data:function(){return{email:"",password:"",isLoading:"false"}},methods:{handleSubmit:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var n,a;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(t.email.trim()&&t.password.trim()){e.next=2;break}return e.abrupt("return");case 2:return e.prev=2,e.next=5,o["a"].signin({email:t.email,password:t.password});case 5:if(n=e.sent,a=n.data,"success"===a.status){e.next=9;break}throw new Error(a.message);case 9:localStorage.setItem("signInToken",a.token),t.$store.dispatch("setCurrentUser"),s["a"].fire({icon:"success",title:a.message}),t.$router.push("/about"),e.next=19;break;case 15:e.prev=15,e.t0=e["catch"](2),console.log(e.t0.message),s["a"].fire({icon:"error",title:e.t0.message});case 19:case"end":return e.stop()}}),e,null,[[2,15]])})))()},loginByFacebook:function(){window.location.href="https://login-guan-api.herokuapp.com/api/auth/facebook"},loginByGoogle:function(){window.location.href="https://login-guan-api.herokuapp.com/api/auth/google"}}},c=u,l=(n("bcbc"),n("2877")),p=Object(l["a"])(c,a,r,!1,null,"70506363",null);e["default"]=p.exports},5899:function(t,e){t.exports="\t\n\v\f\r                　\u2028\u2029\ufeff"},"58a8":function(t,e,n){var a=n("e330"),r=n("1d80"),i=n("577e"),o=n("5899"),s=a("".replace),u="["+o+"]",c=RegExp("^"+u+u+"*"),l=RegExp(u+u+"*$"),p=function(t){return function(e){var n=i(r(e));return 1&t&&(n=s(n,c,"")),2&t&&(n=s(n,l,"")),n}};t.exports={start:p(1),end:p(2),trim:p(3)}},bcbc:function(t,e,n){"use strict";n("2648")},c8d2:function(t,e,n){var a=n("5e77").PROPER,r=n("d039"),i=n("5899"),o="​᠎";t.exports=function(t){return r((function(){return!!i[t]()||o[t]()!==o||a&&i[t].name!==t}))}},d57a:function(t,e,n){t.exports=n.p+"img/google-signin.3a8ae245.svg"},e944:function(t,e,n){t.exports=n.p+"img/facebook-signin.c341186f.svg"}}]);
//# sourceMappingURL=chunk-46de8600.0dd55aa0.js.map