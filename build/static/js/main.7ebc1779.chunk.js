(this.webpackJsonpspbprep=this.webpackJsonpspbprep||[]).push([[0],{143:function(e,t,a){e.exports=a(317)},148:function(e,t,a){},169:function(e,t,a){},315:function(e,t,a){},316:function(e,t,a){},317:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(11),o=a.n(s),c=(a(148),a(131)),l=a(132),i=a(140),m=a(133),u=a(141),d=(a(83),a(22)),p=a(81),f=a(135),k=a(78),E=k.create({withCredentials:!0,baseURL:"localhost",headers:{}}),T=function(){return E.get("")},v=function(){return E.get("")},b=function(e){return k.get("https://geocode-maps.yandex.ru/1.x/?format=json&apikey=a2b8af4a-0675-4706-aafc-c386bc1661ee&geocode=".concat(e[1],",").concat(e[0]))};function h(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function g(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?h(a,!0).forEach((function(t){Object(f.a)(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):h(a).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}var y={coordsTemp:[],addressTemp:[],workers:[{id:0,name:"Lex"},{id:1,name:"Lev"},{id:2,name:"Nik"},{id:3,name:"Lis"}],tasks:[],testData:[{tsk:"tsk1",time:"1995-12-19T03:24:00"},{tsk:"tsk2",time:"2019-10-25T21:29:00"},{tsk:"tsk3",time:"2019-10-25T22:28:00"}],filteredTasks:[]},O=function(e,t,a,n){return{type:"map/SET_TASK",selectedEmployee:e,empTask:t,taskTime:a,taskAddress:n}},w=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"map/SET_TASK":return g({},e,{tasks:[].concat(Object(p.a)(e.tasks),[{selectedEmployee:t.selectedEmployee,empTask:t.empTask,taskTime:t.taskTime,address:t.taskAddress}]),addressTemp:[]});case"map/SET_TASKS_ARR":return g({},e,{tasks:t.tasks});case"map/DEL_COORD_POINT":return g({},e,{addressTemp:e.addressTemp.filter((function(e){return e.coords!==t.pointId}))});case"map/SET_ADDRESS":return g({},e,{addressTemp:[].concat(Object(p.a)(e.addressTemp),[{address:t.address,coords:t.coordPointAdd}])});case"map/SET_WORKERS":return g({},e,{workers:t.workers});case"map/TASK_FILTER":return g({},e,{filteredTasks:"all_tasks"===t.id?e.tasks:e.tasks.filter((function(e){return e.selectedEmployee===t.id}))});default:return e}},S=(a(169),function(e){return e.mapReducer.coordsTemp}),j=function(e){return e.mapReducer.workers},D=function(e){return e.mapReducer.tasks},R=function(e){return e.mapReducer.testData},A=function(e){return e.mapReducer.addressTemp},_=function(e){return e.mapReducer.filteredTasks},N=a(33),C=function(e){var t=e.getAddress,a=e.delCoordPoint,s=e.addressTemp,o=e.testData,c=Object(n.useRef)(null),l={properties:{hintContent:"\u041f\u0443\u043d\u043a\u0442 \u043d\u0430\u0437\u043d\u0430\u0447\u0435\u043d\u0438\u044f"},modules:["geoObject.addon.hint","geocode"]},i=function(e){var t=e.get("target").geometry._coordinates;a(t)};return r.a.createElement(N.d,{enterprise:!0,query:{apikey:"a2b8af4a-0675-4706-aafc-c386bc1661ee"}},r.a.createElement("div",{className:"htm"},r.a.createElement(N.a,{className:"content_map",onClick:function(e){var a=e.get("coords");t(a)},defaultState:{center:[59.927575,30.326017],zoom:9}},s.map((function(e){return r.a.createElement(N.b,Object.assign({onClick:i,geometry:e.coords},l))})),o.map((function(e){return r.a.createElement(N.b,Object.assign({geometry:e.coords},l))})),r.a.createElement(N.c,{onResultShow:function(){if(c.current){var e=c.current.getMap();console.log(e)}},instanceRef:c,options:{float:"left",noPlacemark:!0}}))))},P=a(53),I=a.n(P),L=function(e){var t=e.w,a=e.filteredTasks,n=e.taskFilter;return r.a.createElement("div",{className:I.a.ppp},r.a.createElement("select",{onChange:function(e){var t=e.currentTarget.value;n(t)}},r.a.createElement("option",{value:""},"Select worker for filtering ..."),r.a.createElement("option",{value:"all_tasks"},"Show All Tasks"),t.map((function(e){return r.a.createElement("option",{value:e.name,key:e.name},e.name)}))),r.a.createElement("div",{className:"tasks"},a.map((function(e){return new Date(e.taskTime)<new Date?r.a.createElement("div",{key:e.name},"\u0412\u0440\u0435\u043c\u044f \u0438\u0441\u0442\u0435\u043a\u043b\u043e"):r.a.createElement("div",{key:e.name,className:"taskItemLI"},r.a.createElement("ul",{className:"taskItemUL"}),r.a.createElement("ul",null,r.a.createElement("li",null,"Task - ",e.empTask),r.a.createElement("li",null,"Worker - ",e.selectedEmployee),r.a.createElement("li",null,"Address - ",e.address.map((function(e){return e.address}))),r.a.createElement("li",null,"Deadline - ",String(e.taskTime))))}))))},F=a(318),K=a(320),M=a(319),W=a(136),x=a.n(W),q=a(137),G=a.n(q),Y=(a(216),a(76)),z=a.n(Y);G()(z.a);var B=function(e){var t=e.input,a=t.onChange,n=t.value,s=e.showTime;return r.a.createElement(x.a,{onChange:a,format:"DD MMM YYYY",time:s,value:n?new Date(n):null})},H=function(e){return r.a.createElement("div",{className:"tasks"},r.a.createElement("ul",{onChange:function(t){return e.input.onChange(t)}},e.input.value.map((function(e){return r.a.createElement("li",null,e.address)}))))},J=Object(M.a)({form:"task",enableReinitialize:!0})((function(e){var t=e.handleSubmit,a=e.w;return r.a.createElement(F.a,{className:I.a.ppp,onSubmit:t},r.a.createElement("div",{className:"formItems"},r.a.createElement(K.a,{placeholder:"Enter task...",name:"empTask",component:"textarea"})),r.a.createElement("div",{className:"formItems"},r.a.createElement(K.a,{name:"selectedEmployee",component:"select"},r.a.createElement("option",{value:""},"Select employee..."),a.map((function(e){return r.a.createElement("option",{value:e.name,key:e.name},e.name)})))),r.a.createElement("div",{className:"formItems"},r.a.createElement(K.a,{name:"taskTime",showTime:!0,component:B})),r.a.createElement("div",{className:"formItems"},r.a.createElement("h3",null,"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043c\u0435\u0441\u0442\u043e \u043d\u0430 \u043a\u0430\u0440\u0442\u0435"),r.a.createElement(K.a,{name:"taskAddress",component:H})),r.a.createElement("button",null,"Create Task"))})),U=function(e){function t(){return Object(c.a)(this,t),Object(i.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(l.a)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.requestWorkers,a=e.requestTasks;t(),a()}},{key:"render",value:function(){var e=this;console.log("RENDERED");var t=this.props,a=t.addressTemp,n=t.workers,s=t.filteredTasks,o=t.taskFilter;return r.a.createElement("div",{className:"MapContainerWrapper"},r.a.createElement("div",{className:"taskPanel"},r.a.createElement("h3",null,"Add Task"),r.a.createElement(J,{initialValues:{taskAddress:a},w:n,onSubmit:function(t){e.props.setData(t.selectedEmployee,t.empTask,t.taskTime,t.taskAddress)}}),r.a.createElement("h3",null,"All Tasks"),r.a.createElement(L,{w:n,filteredTasks:s,taskFilter:o})),r.a.createElement(C,this.props))}}]),t}(n.Component),V=Object(d.b)((function(e){return{coordsTemp:S(e),workers:j(e),tasks:D(e),testData:R(e),addressTemp:A(e),filteredTasks:_(e)}}),{getAddress:function(e){return function(t){b(e).then((function(a){var n=a.data.response.GeoObjectCollection.featureMember[0].GeoObject.metaDataProperty.GeocoderMetaData.text;t(function(e,t){return{type:"map/SET_ADDRESS",address:e,coordPointAdd:t}}(n,e))}))}},delCoordPoint:function(e){return{type:"map/DEL_COORD_POINT",pointId:e}},setData:O,requestWorkers:function(){return function(e){v().then((function(t){console.log(t.data),e({type:"map/SET_WORKERS",workers:t.data})}))}},requestTasks:function(){return function(e){T().then((function(t){console.log(t.data),e({type:"map/SET_TASKS_ARR",tasks:t.data})}))}},taskFilter:function(e){return{type:"map/TASK_FILTER",id:e}}})(U),$=(a(315),a(316),function(e){return r.a.createElement("div",{className:"Header"},r.a.createElement("div",{className:"logo"},r.a.createElement("a",null,"GA Team")))}),Q=function(e){return r.a.createElement("div",{className:"wrapper"},r.a.createElement($,{classname:"Header"}),r.a.createElement(V,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var X=a(5),Z=a(321),ee=a(139),te=Object(X.c)({mapReducer:w,form:Z.a}),ae=Object(X.d)(te,Object(X.a)(ee.a));window.store=ae;var ne=ae;o.a.render(r.a.createElement(d.a,{store:ne},r.a.createElement(Q,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))},53:function(e,t,a){e.exports={ppp:"TaskFilterForm_ppp__1oq5e"}},83:function(e,t,a){}},[[143,1,2]]]);
//# sourceMappingURL=main.7ebc1779.chunk.js.map