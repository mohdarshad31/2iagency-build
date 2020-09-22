(this.webpackJsonp2iagency=this.webpackJsonp2iagency||[]).push([[1],{14:function(e,t,a){"use strict";var n=a(24),o=a(25),r=a(32),i=a.n(r),s="https://incursus.herokuapp.com/v0.0/",l=a(188),c=function(){function e(){Object(n.a)(this,e)}return Object(o.a)(e,[{key:"getIsSubscribe",value:function(){var e=this.getLocalStorageValue("isSubscribed");return""===e||null===e?"":"true"===this.getLocalStorageValue("isSubscribed")}},{key:"setIsSubscribe",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"false";e=e.toString(),this.setLocalStorageValue("isSubscribed")}},{key:"getAPI",value:function(e){return i.a.get(s+e)}},{key:"getAPIWithAccessToken",value:function(e){var t={Authorization:"JWT "+this.getLocalStorageValue("accessToken")};return i.a.get(s+e,{headers:t})}},{key:"postAPI",value:function(e,t){return i.a.post(s+e,t,{headers:{"Content-Type":"application/json"}})}},{key:"postAPIWithAccessToken",value:function(e,t){var a={"Content-Type":"application/json",Authorization:"JWT "+this.getLocalStorageValue("accessToken")};return i.a.post(s+e,t,{headers:a})}},{key:"postMultipartDataAPIWithAccessToken",value:function(e,t){var a={"Content-Type":"multipart/form-data",Authorization:"JWT "+this.getLocalStorageValue("accessToken")};return i.a.post(s+e,t,{headers:a})}},{key:"putAPIWithAccessToken",value:function(e,t){var a={"Content-Type":"application/json",Authorization:"JWT "+this.getLocalStorageValue("accessToken")};return i.a.put(s+e,t,{headers:a})}},{key:"deleteAPIWithAccessToken",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{},a=this.getLocalStorageValue("accessToken"),n={"Content-Type":"application/json",Authorization:"JWT "+a};return i.a.delete(s+e,{headers:n,data:t})}},{key:"getAuth",value:function(){var e=this.getLocalStorageValue("accessToken");return""!==e&&null!==e}},{key:"getAPIUrl",value:function(){return"https://incursus.herokuapp.com/"}},{key:"getLocalStorageValue",value:function(e){var t=localStorage.getItem(e);if(""===t||null===t)return"";var a=l.AES.decrypt(localStorage.getItem(e),"2iAgencyENCRYPTION@12345").toString(l.enc.Utf8);return a?JSON.parse(a):a}},{key:"setLocalStorageValue",value:function(e,t){var a=JSON.stringify(t);localStorage.setItem(e,l.AES.encrypt(a,"2iAgencyENCRYPTION@12345").toString())}},{key:"getStatus",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t="Active";return 0===e?t="Inactive":2===e?t="Pending":3===e&&(t="Under Negotiation"),t}},{key:"getStatusVal",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"Active",t=1;return"Inactive"===e?t=0:"Pending"===e?t=2:"Under Negotiation"!==e&&"Block"!==e||(t=3),t}},{key:"getUserStatus",value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t="Active";return 0===e?t="Inactive":2===e?t="Pending":3===e&&(t="Block"),t}},{key:"getDateTime",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"YYYY-MM-DD H:i:s",a="";if(void 0!==e&&""!==e){var n=new Date(e),o=n.getDate();o=o<10?"0"+o:o;var r=n.getFullYear(),i=n.getMonth();i=(i+=1)<10?"0"+i:i;var s=n.getHours();s=s<10?"0"+s:s;var l=n.getMinutes();l=l<10?"0"+l:l;var c=n.getSeconds();c=c<10?"0"+c:c,"YYYY-MM-DD H:i:s"===t?a=r+"-"+i+"-"+o+" "+s+":"+l+":"+c:"DD-MM-YYYY H:i:s"===t?a=o+"-"+i+"-"+r+" "+s+":"+l+":"+c:"DD-MM-YYYY H:i"===t?a=o+"-"+i+"-"+r+" "+s+":"+l:"YYYY/MM/DD H:i:s"===t?a=r+"/"+i+"/"+o+" "+s+":"+l+":"+c:"MM/DD/YYYY H:i:s"===t?a=i+"/"+o+"/"+r+" "+s+":"+l+":"+c:"DD/MM/YYYY H:i:s"===t&&(a=o+"/"+i+"/"+r+" "+s+":"+l+":"+c)}return a}},{key:"getDate",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"MM/DD/YYYY",a="";if(void 0!==e&&""!==e){var n=new Date(e),o=n.getDate();o=o<10?"0"+o:o;var r=n.getFullYear(),i=n.getMonth();i=(i+=1)<10?"0"+i:i,"YYYY-MM-DD"===t?a=r+"-"+i+"-"+o:"DD-MM-YYYY"===t?a=o+"-"+i+"-"+r:"YYYY/MM/DD"===t?a=r+"/"+i+"/"+o:"MM/DD/YYYY"===t?a=i+"/"+o+"/"+r:"DD/MM/YYYY"===t&&(a=o+"/"+i+"/"+r)}return a}}]),e}();t.a=new c},161:function(e,t,a){},167:function(e,t,a){e.exports=a(329)},194:function(e,t){},196:function(e,t){},206:function(e,t){},208:function(e,t){},235:function(e,t){},237:function(e,t){},238:function(e,t){},243:function(e,t){},245:function(e,t){},252:function(e,t){},254:function(e,t){},272:function(e,t){},274:function(e,t){},286:function(e,t){},289:function(e,t){},315:function(e,t,a){},316:function(e,t,a){},317:function(e,t,a){},329:function(e,t,a){"use strict";a.r(t);var n=a(1),o=a.n(n),r=a(19),i=a.n(r),s=a(87),l=a(24),c=a(25),u=a(29),d=a(28),m=a(61),g=a(10),h=a(14),f=(a(315),a(52)),v=a(335),p=a(336),w=a(337),b=(a(317),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement(o.a.Fragment,null,o.a.createElement("section",{className:"main-content"},o.a.createElement(v.a,null,o.a.createElement(p.a,null,o.a.createElement(w.a,{md:"12",lg:"12"},o.a.createElement("h2",null,"Page Not Found"))))))}}]),a}(o.a.Component)),E=a(59),y=a(339),S=a(341),k=a(342),Y=a(343),P=a(333),A=a(20),D=(a(92),a(346)),I=a(338),N=a(340),j=a(344),L=a(345),M=(a(161),function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).changeHandler=function(e){n.setState(Object(E.a)({},e.target.name,e.target.value))},n.forgotPasswordHandler=function(e){if(e.preventDefault(),e.target.className+=" was-validated",!n.validateForm())return!1;n.setState({loading:!0},(function(){h.a.postAPI("auth/forgot-password",{email:n.state.email}).then((function(e){if(n.setState({loading:!1}),void 0===e.data||!e.data.status)return A.b.error(e.data.message),void n.setState({loading:!1});A.b.success(e.data.message)})).catch((function(e){void 0!==e.response&&401===e.response.status?(localStorage.clear(),n.props.propHistory.push("/login")):(n.setState({loading:!1,loggedIn:!0}),A.b.error(e.message))}))}))},n.toggle=function(){n.props.hideForgotPasswordForm()},n.unsubscribe=null,n.state={email:"",password:"",userName:"",name:"",forgotPasswordEmail:"",modal:!1,loggedIn:!1,loading:!1,isLoggedIn:!1,errors:{},settingsData:{}},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"validateForm",value:function(){var e={},t=!0;(this.state.email||(t=!1,e.email="*Please enter your email."),void 0!==this.state.email&&""!==this.state.email.trim())&&(new RegExp(/^(("[\w-\s]+")|([\w-]+(?:\.[\w-]+)*)|("[\w-\s]+")([\w-]+(?:\.[\w-]+)*))(@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$)|(@\[?((25[0-5]\.|2[0-4][0-9]\.|1[0-9]{2}\.|[0-9]{1,2}\.))((25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\.){2}(25[0-5]|2[0-4][0-9]|1[0-9]{2}|[0-9]{1,2})\]?$)/i).test(this.state.email.trim())||(t=!1,e.email="Invalid email address"));return this.setState({loading:!1,errors:e}),t}},{key:"render",value:function(){var e=this.state.email;return o.a.createElement(D.a,{isOpen:!0,toggle:this.toggle,className:"store-modal"},o.a.createElement(I.a,{toggle:this.toggle},"Forgot Password "),o.a.createElement(y.a,{onSubmit:this.forgotPasswordHandler,noValidate:!0,className:"form-info"},o.a.createElement(N.a,null,o.a.createElement(p.a,null,o.a.createElement(w.a,{md:"12"},o.a.createElement(S.a,null,o.a.createElement(k.a,{htmlFor:"email"},"Email Address"),o.a.createElement(Y.a,{type:"email",placeholder:"email *",id:"email",name:"email",value:this.state.email,onChange:this.changeHandler,required:!0}),o.a.createElement(j.a,null,this.state.errors[e]))))),o.a.createElement(L.a,null,o.a.createElement(P.a,{className:"submit-btn",disabled:this.state.loading,type:"submit"},"Forgot"),o.a.createElement(P.a,{className:"btnCancel",onClick:this.toggle},"Cancel"))))}}]),a}(n.Component)),O="".concat("","/logo.png"),T=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).submitHandler=function(e){if(e.preventDefault(),e.target.className+=" was-validated",!n.validateForm())return!1;n.setState({loading:!0},(function(){h.a.postAPI("auth/sign-in",{email:n.state.email,password:n.state.password}).then((function(e){if(void 0===e.data||!e.data.status)return n.setState({loading:!1}),A.b.error(e.data.message),void(e.data.status||void 0===e.data.isAccountVerified||e.data.isAccountVerified||n.setState({loading:!0,isLoggedIn:!0},(function(){h.a.postAPI("auth/resend-otp",{email:n.state.email}).then((function(e){if(console.log(e),void 0===e.data||!e.data.status)return n.setState({loading:!1}),void A.b.error(e.data.message);n.setState({loading:!1}),A.b.success(e.data.message)})).catch((function(e){n.setState({loading:!1}),A.b.error(e.message)}))})));var t=e.data;"admin"===t.data.role.toLowerCase()||"organization"===t.data.role.toLowerCase()?(h.a.setLocalStorageValue("accessToken",t.data.accessToken),h.a.setLocalStorageValue("refreshToken",t.data.refreshToken),h.a.setLocalStorageValue("role",t.data.role),h.a.setLocalStorageValue("authId",t.data.authId),h.a.setLocalStorageValue("profilePic",t.data.profilePic),h.a.setLocalStorageValue("userName",t.data.firstName),"organization"===t.data.role.toLowerCase()?n.props.history.push("/user/dashboard"):n.props.history.push("/admin/dashboard")):A.b.error("You have not permission to access dashboard")})).catch((function(e){void 0!==e.response&&401===e.response.status?(localStorage.clear(),n.props.propHistory.push("/login")):(n.setState({loading:!1,loggedIn:!0}),A.b.error(e.message))}))}))},n.changeHandler=function(e){n.setState(Object(E.a)({},e.target.name,e.target.value))},n.unsubscribe=null,n.state={email:"",password:"",userName:"",forgotPasswordEmail:"",modal:!1,loggedIn:!1,loading:!1,isLoggedIn:!1,errors:{},showforgotPassword:!1,settingsData:{}},n}return Object(c.a)(a,[{key:"componentDidMount",value:function(){}},{key:"validateForm",value:function(){var e={},t=!0;return this.state.password||(t=!1,e.password="*Please enter password."),this.state.email||(t=!1,e.email="*Please enter your email."),this.setState({loading:!1,errors:e}),t}},{key:"showForgotPasswordForm",value:function(){this.setState({showforgotPassword:!0})}},{key:"hideForgotPasswordForm",value:function(){this.setState({showforgotPassword:!1})}},{key:"render",value:function(){var e=this.state,t=e.email,a=e.password,n=e.loggedIn,r=e.loading,i=e.errors;return n?"admin"===h.a.getLocalStorageValue("role")?o.a.createElement(g.c,{to:"/admin",noThrow:!0}):o.a.createElement(g.c,{to:"/dashboard",noThrow:!0}):o.a.createElement("div",{className:"auth-section",style:{}},o.a.createElement(v.a,null,r?o.a.createElement(f.a,null):o.a.createElement(o.a.Fragment,null),o.a.createElement(A.a,null),o.a.createElement(p.a,{className:"justify-content-md-center align-items-center"},o.a.createElement(w.a,{md:12},o.a.createElement("div",{className:"Login"},o.a.createElement("h2",null,"Sign In"),o.a.createElement(y.a,{className:"form form-content needs-validation",onSubmit:this.submitHandler,noValidate:!0},o.a.createElement("div",{className:"logo-section"},o.a.createElement("img",{src:O,alt:"Logo"})),o.a.createElement(S.a,null,o.a.createElement(k.a,null,"Email"),o.a.createElement(Y.a,{type:"email",name:"email",invalid:void 0!==i.email&&""!==i.email,value:t,onChange:this.changeHandler,id:"email",placeholder:"myemail@email.com"}),o.a.createElement("div",{className:"invalid-feedback"},"Please enter your registered email-id.")),o.a.createElement(S.a,null,o.a.createElement(k.a,{for:"examplePassword"},"Password"),o.a.createElement(Y.a,{type:"password",name:"password",invalid:void 0!==i.password&&""!==i.password,value:a,onChange:this.changeHandler,id:"password",placeholder:"********"}),o.a.createElement("div",{className:"invalid-feedback"},"Please enter your registered password.")),o.a.createElement(S.a,null,o.a.createElement(p.a,null,o.a.createElement(w.a,{md:6},o.a.createElement(P.a,{type:"submit",className:"submit-btn"},"Submit")),o.a.createElement(w.a,{md:6},o.a.createElement("p",{className:"forgot-text",onClick:this.showForgotPasswordForm.bind(this)},"Forgot Password?"))))),this.state.showforgotPassword?o.a.createElement(M,{hideForgotPasswordForm:this.hideForgotPasswordForm.bind(this)}):"")))))}}]),a}(n.Component),F=o.a.lazy((function(){return Promise.all([a.e(0),a.e(4)]).then(a.bind(null,687))})),V=o.a.lazy((function(){return Promise.all([a.e(0),a.e(6),a.e(5)]).then(a.bind(null,688))})),C=function(e){Object(u.a)(a,e);var t=Object(d.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return o.a.createElement(m.BrowserRouter,null,o.a.createElement(o.a.Suspense,{fallback:o.a.createElement(f.a,null)},o.a.createElement(g.g,null,o.a.createElement(H,{path:"/admin",name:"Admin",component:V}),o.a.createElement(W,{path:"/user",name:"User",component:F}),o.a.createElement(g.d,{path:"/login",name:"Login",component:T}),o.a.createElement(g.d,{path:"/",name:"Login",component:T}),o.a.createElement(g.d,{name:"Page not found",component:b}))))}}]),a}(n.Component),H=function(e){var t=e.component,a=Object(s.a)(e,["component"]);return o.a.createElement(g.d,Object.assign({},a,{render:function(e){return h.a.getAuth()&&"admin"===h.a.getLocalStorageValue("role")?z(t,e,a):o.a.createElement(g.c,{to:{pathname:"/login",state:{from:e.location}}})}}))},W=function(e){var t=e.component,a=Object(s.a)(e,["component"]);return o.a.createElement(g.d,Object.assign({},a,{render:function(e){return h.a.getAuth()&&""!==h.a.getLocalStorageValue("role")?z(t,e,a):o.a.createElement(g.c,{to:{pathname:"/login",state:{from:e.location}}})}}))},z=function(e){for(var t=arguments.length,a=new Array(t>1?t-1:0),n=1;n<t;n++)a[n-1]=arguments[n];var r=Object.assign.apply(Object,[{}].concat(a));return o.a.createElement(e,r)},J=C,U=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function R(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var a=e.installing;null!=a&&(a.onstatechange=function(){"installed"===a.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}a(328);i.a.render(o.a.createElement(J,null),document.getElementById("root")),function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");U?(!function(e,t){fetch(e,{headers:{"Service-Worker":"script"}}).then((function(a){var n=a.headers.get("content-type");404===a.status||null!=n&&-1===n.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):R(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):R(t,e)}))}}()},52:function(e,t,a){"use strict";var n=a(1),o=a.n(n);a(316);t.a=function(){return o.a.createElement("div",{className:"loaderSection"},o.a.createElement("div",{className:"spinner-border text-primary",role:"status"},o.a.createElement("span",{className:"sr-only"},"Loading...")))}}},[[167,2,3]]]);
//# sourceMappingURL=main.93bbdd60.chunk.js.map