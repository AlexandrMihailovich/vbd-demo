(function(t){function e(e){for(var r,i,a=e[0],s=e[1],d=e[2],u=0,p=[];u<a.length;u++)i=a[u],n[i]&&p.push(n[i][0]),n[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);c&&c(e);while(p.length)p.shift()();return l.push.apply(l,d||[]),o()}function o(){for(var t,e=0;e<l.length;e++){for(var o=l[e],r=!0,a=1;a<o.length;a++){var s=o[a];0!==n[s]&&(r=!1)}r&&(l.splice(e--,1),t=i(i.s=o[0]))}return t}var r={},n={app:0},l=[];function i(e){if(r[e])return r[e].exports;var o=r[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,i),o.l=!0,o.exports}i.m=t,i.c=r,i.d=function(t,e,o){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(i.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(o,r,function(e){return t[e]}.bind(null,r));return o},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],s=a.push.bind(a);a.push=e,a=a.slice();for(var d=0;d<a.length;d++)e(a[d]);var c=s;l.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"034f":function(t,e,o){"use strict";var r=o("64a9"),n=o.n(r);n.a},"56d7":function(t,e,o){"use strict";o.r(e);o("cadf"),o("551c"),o("097d");var r=o("2b0e"),n=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-app",{attrs:{light:""}},[o("v-toolbar",{attrs:{app:""}},[o("v-toolbar-items",{staticClass:"hidden-sm-and-down"},[o("v-btn",{attrs:{flat:""},on:{click:function(e){t.dialogs.create=!0}}},[t._v("Create Node")]),o("v-btn",{attrs:{disabled:"node"!==t.model.currentItem.it,flat:""},on:{click:function(e){t.dialogs.edit=!0}}},[t._v("Edit Node")]),o("v-btn",{attrs:{disabled:"node"!==t.model.currentItem.it,flat:""},on:{click:function(e){t.dialogs.port=!0}}},[t._v("Create Port")]),o("v-btn",{attrs:{flat:""},on:{click:function(e){t.dialogs.export=!0}}},[t._v("Export/Import")])],1)],1),o("v-content",[o("v-container",{ref:"container"},[o("diagram",{attrs:{model:t.model,width:t.width}})],1)],1),o("v-footer",{attrs:{app:""}},[o("span",[t._v("selected id:")]),o("span",[t._v(t._s(t.model.currentItem.id))]),o("span",[t._v("selected type:")]),o("span",[t._v(t._s(t.model.currentItem.it))])]),o("create-node",{attrs:{model:t.model,open:t.dialogs}}),o("edit-node",{attrs:{model:t.model,open:t.dialogs}}),o("create-port",{attrs:{node:t.model.currentItem,open:t.dialogs}}),o("export",{attrs:{model:t.model,open:t.dialogs}})],1)},l=[],i=o("e814"),a=o.n(i),s=(o("bf40"),o("3d3b"),o("b50d")),d=o.n(s),c=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-layout",{attrs:{row:"","justify-center":""}},[o("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.open.create,callback:function(e){t.$set(t.open,"create",e)},expression:"open.create"}},[o("v-card",[o("v-card-title",[o("span",{staticClass:"headline"},[t._v("Create Node")])]),o("v-card-text",[o("v-container",{attrs:{"grid-list-md":""}},[o("v-layout",{attrs:{wrap:""}},[o("v-flex",{attrs:{xs12:""}},[o("v-text-field",{attrs:{label:"Title",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),o("v-flex",{attrs:{xs12:""}},[o("v-textarea",{attrs:{label:"Content"},model:{value:t.content,callback:function(e){t.content=e},expression:"content"}})],1),o("v-flex",{attrs:{xs12:""}},[o("v-radio-group",{attrs:{row:""},model:{value:t.color,callback:function(e){t.color=e},expression:"color"}},[o("v-radio",{attrs:{label:"Blue",value:"#1867c0",color:"#1867c0"}}),o("v-radio",{attrs:{label:"Red",value:"#f44336",color:"#f44336"}}),o("v-radio",{attrs:{label:"Orange",value:"#ff9800",color:"#ff9800"}})],1)],1)],1)],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(e){t.open.create=!1}}},[t._v("Close")]),o("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.save}},[t._v("Create")])],1)],1)],1)],1)},u=[],p={name:"CreateNode",props:{model:{required:!0},open:{required:!0}},data:function(){return{title:"",content:"",color:"#1867c0"}},methods:{save:function(){var t=this.model.addNode(this.title,300,200,72,100);t.content=this.content,t.color=this.color,this.open.create=!1,this.title="",this.content=""}}},v=p,f=o("2877"),m=Object(f["a"])(v,c,u,!1,null,null,null);m.options.__file="CreateNode.vue";var h=m.exports,b=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-layout",{attrs:{row:"","justify-center":""}},[o("v-dialog",{attrs:{persistent:"","max-width":"600px",disabled:"node"!==t.node.it},model:{value:t.open.port,callback:function(e){t.$set(t.open,"port",e)},expression:"open.port"}},[o("v-card",[o("v-card-title",[o("span",{staticClass:"headline"},[t._v("Create Port for "+t._s(t.node.title)+"#"+t._s(t.node.id))])]),o("v-card-text",[o("v-container",{attrs:{"grid-list-md":""}},[o("v-layout",{attrs:{wrap:""}},[o("v-flex",{attrs:{xs12:""}},[o("v-text-field",{attrs:{label:"Title",required:""},model:{value:t.title,callback:function(e){t.title=e},expression:"title"}})],1),o("v-flex",{attrs:{xs6:""}},[o("v-radio-group",{attrs:{mandatory:!1},model:{value:t.type,callback:function(e){t.type=e},expression:"type"}},[o("div",{attrs:{slot:"label"},slot:"label"},[t._v("Select port type")]),o("v-radio",{attrs:{label:"In",value:"in"}}),o("v-radio",{attrs:{label:"Out",value:"out"}})],1)],1),o("v-flex",{attrs:{xs6:""}},[o("v-switch",{attrs:{color:"primary",label:"Show title"},model:{value:t.showTitle,callback:function(e){t.showTitle=e},expression:"showTitle"}})],1)],1)],1),o("v-container",{attrs:{fluid:""}})],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(e){t.open.port=!1}}},[t._v("Close")]),o("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.save}},[t._v("Create")])],1)],1)],1)],1)},x=[],y={name:"CreatePort",props:{node:{required:!0},open:{required:!0}},data:function(){return{title:"",type:"in",showTitle:!1}},methods:{save:function(){if("node"!==this.node.it)return!1;"in"===this.type?this.node.addInPort(this.title).showName=this.showTitle:this.node.addOutPort(this.title).showName=this.showTitle,this.open.port=!1,this.title=""}}},_=y,w=Object(f["a"])(_,b,x,!1,null,null,null);w.options.__file="CreatePort.vue";var g=w.exports,k=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-layout",{attrs:{row:"","justify-center":""}},[o("v-dialog",{attrs:{persistent:"","max-width":"600px",disabled:"node"!==t.model.currentItem.it},model:{value:t.open.edit,callback:function(e){t.$set(t.open,"edit",e)},expression:"open.edit"}},[o("v-card",[o("v-card-title",[o("span",{staticClass:"headline"},[t._v("Edit Node "+t._s(t.model.currentItem.title)+"#"+t._s(t.model.currentItem.id))])]),o("v-card-text",[o("v-tabs",{attrs:{color:"cyan",dark:"","slider-color":"yellow"}},[o("v-tab",{key:"1",attrs:{ripple:""}},[t._v("Node")]),o("v-tab",{key:"2",attrs:{ripple:""}},[t._v("Ports")]),o("v-tab-item",{key:"1"},[o("v-card",{attrs:{flat:""}},[o("v-card-text",[o("v-container",{attrs:{"grid-list-md":""}},[o("v-layout",{attrs:{wrap:""}},[o("v-flex",{attrs:{xs12:""}},[o("v-text-field",{attrs:{label:"Title",required:""},model:{value:t.model.currentItem.title,callback:function(e){t.$set(t.model.currentItem,"title",e)},expression:"model.currentItem.title"}})],1),o("v-flex",{attrs:{xs12:""}},[o("v-textarea",{attrs:{label:"Content"},model:{value:t.model.currentItem.content,callback:function(e){t.$set(t.model.currentItem,"content",e)},expression:"model.currentItem.content"}})],1),o("v-flex",{attrs:{xs12:""}},[o("v-radio-group",{attrs:{row:""},model:{value:t.model.currentItem.color,callback:function(e){t.$set(t.model.currentItem,"color",e)},expression:"model.currentItem.color"}},[o("v-radio",{attrs:{label:"Blue",value:"#1867c0",color:"#1867c0"}}),o("v-radio",{attrs:{label:"Red",value:"#f44336",color:"#f44336"}}),o("v-radio",{attrs:{label:"Orange",value:"#ff9800",color:"#ff9800"}})],1)],1)],1)],1)],1)],1)],1),o("v-tab-item",{key:"2"},[o("v-card",{attrs:{flat:""}},[o("v-card-text",[o("v-list",t._l(t.model.currentItem.ports,function(e){return o("v-list-tile",{key:e.id},[o("v-list-tile-action",[t._v(t._s(e.type))]),o("v-list-tile-content",[o("v-text-field",{attrs:{label:"Title","single-line":"",solo:""},model:{value:e.title,callback:function(o){t.$set(e,"title",o)},expression:"port.title"}})],1),o("v-switch",{attrs:{color:"primary",label:"Show title"},model:{value:e.showName,callback:function(o){t.$set(e,"showName",o)},expression:"port.showName"}}),o("v-btn",{attrs:{icon:"",ripple:""},on:{click:function(o){t.model.deletePort(e)}}},[o("v-icon",{attrs:{color:"red lighten-1"}},[t._v("close")])],1)],1)}),1)],1)],1)],1)],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(e){t.open.edit=!1}}},[t._v("End Edit")])],1)],1)],1)],1)},C=[],I={name:"EditNode",props:{model:{required:!0},open:{required:!0}}},N=I,j=Object(f["a"])(N,k,C,!1,null,"4c68f6bf",null);j.options.__file="EditNode.vue";var O=j.exports,P=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("v-layout",{attrs:{row:"","justify-center":""}},[o("v-dialog",{attrs:{persistent:"","max-width":"600px"},model:{value:t.open.export,callback:function(e){t.$set(t.open,"export",e)},expression:"open.export"}},[o("v-card",[o("v-card-title",[o("span",{staticClass:"headline"},[t._v("Create Node")])]),o("v-card-text",[o("v-container",{attrs:{"grid-list-md":""}},[o("v-textarea",{attrs:{label:"JSON"},model:{value:t.jsonData,callback:function(e){t.jsonData=e},expression:"jsonData"}})],1)],1),o("v-card-actions",[o("v-spacer"),o("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:function(e){t.open.export=!1}}},[t._v("Close")]),o("v-btn",{attrs:{color:"blue darken-1",flat:""},on:{click:t.save}},[t._v("Import")])],1)],1)],1)],1)},E=[],T={name:"Export",props:{model:{required:!0},open:{required:!0}},data:function(){return{jsonData:""}},methods:{save:function(){this.model._model.links=[],this.model._model.nodes=[],this.model.deserialize(this.jsonData),this.open.export=!1}},watch:{"open.export":function(){this.jsonData=this.model.serialize()}}},$=T,q=Object(f["a"])($,P,E,!1,null,"391d9128",null);q.options.__file="Export.vue";var S=q.exports,D={name:"App",data:function(){var t=new d.a.Model;return t.deserialize('{"nodes":[{"id":391,"color":"#f44336","it":"node","title":"Red node","x":393,"y":40,"_width":117,"minWidth":100,"_height":104,"ports":[{"id":222,"color":"#000000","it":"port","title":"In port","type":"in","node":391,"y":0,"showName":true}],"deletable":true,"content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. ","inCount":1,"outCount":0},{"id":873,"color":"#1867c0","it":"node","title":"Super node","x":94,"y":144,"_width":139,"minWidth":100,"_height":154,"ports":[{"id":39,"color":"#000000","it":"port","title":"one","type":"out","node":873,"y":0,"showName":true},{"id":684,"color":"#000000","it":"port","title":"two","type":"out","node":873,"y":20,"showName":true}],"deletable":true,"content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s","inCount":0,"outCount":2},{"id":72,"color":"#1867c0","it":"node","title":"Content free","x":355,"y":315,"_width":160,"minWidth":100,"_height":87,"ports":[{"id":372,"color":"#000000","it":"port","title":"out","type":"out","node":72,"y":0,"showName":true},{"id":553,"color":"#000000","it":"port","title":"in","type":"in","node":72,"y":0,"showName":true}],"deletable":true,"content":"","inCount":1,"outCount":1},{"id":519,"color":"#ff9800","it":"node","title":"Node","x":629,"y":196,"_width":153,"minWidth":100,"_height":162,"ports":[{"id":430,"color":"#000000","it":"port","title":"in","type":"in","node":519,"y":0,"showName":false}],"deletable":true,"content":"Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s","inCount":1,"outCount":0}],"links":[{"id":446,"color":"#000000","it":"link","title":"Untitled","from":{"node":72,"port":372},"to":{"node":519,"port":430},"positionFrom":{"x":525,"y":379},"positionTo":{"x":639,"y":260},"points":[]},{"id":498,"color":"#000000","it":"link","title":"Untitled","from":{"node":873,"port":39},"to":{"node":391,"port":222},"positionFrom":{"x":243,"y":208},"positionTo":{"x":403,"y":104},"points":[]},{"id":917,"color":"#000000","it":"link","title":"Untitled","from":{"node":873,"port":684},"to":{"node":72,"port":553},"positionFrom":{"x":243,"y":228},"positionTo":{"x":365,"y":379},"points":[]}]}'),{model:t,newNode:"",newInput:"",newOutput:"",selectedLink:{},currentNode:{},width:1137,dialogs:{create:!1,port:!1,edit:!1,export:!1}}},updated:function(){var t=this.$refs.container,e=window.getComputedStyle(t);this.width=t.offsetWidth-a()(e.getPropertyValue("padding-right"))-a()(e.getPropertyValue("padding-left"))},components:{Export:S,EditNode:O,CreatePort:g,CreateNode:h,Diagram:d.a}},L=D,M=(o("034f"),Object(f["a"])(L,n,l,!1,null,null,null));M.options.__file="App.vue";var W=M.exports,z=o("ce5b"),F=o.n(z);r["default"].use(F.a),r["default"].config.productionTip=!1,new r["default"]({render:function(t){return t(W)}}).$mount("#app")},"64a9":function(t,e,o){}});
//# sourceMappingURL=app.aa58b5ec.js.map