(window.webpackJsonp=window.webpackJsonp||[]).push([[2],{384:function(t,e,o){var content=o(386);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(12).default)("093ad512",content,!0,{sourceMap:!1})},385:function(t,e,o){"use strict";var n=o(384);o.n(n).a},386:function(t,e,o){(t.exports=o(11)(!1)).push([t.i,"#posts[data-v-5bd65183]{padding-top:2rem;display:-webkit-box;display:flex;-webkit-box-pack:center;justify-content:center;-webkit-box-align:center;align-items:center;-webkit-box-orient:vertical;-webkit-box-direction:normal;flex-direction:column}@media (min-width:35rem){#posts[data-v-5bd65183]{-webkit-box-orient:horizontal;-webkit-box-direction:normal;flex-direction:row}}",""])},387:function(t,e,o){"use strict";o.r(e);var n={data:function(){return{about_title:"Viridi Solutions (Private) Limited"}},asyncData:function(t){return t.app.$storyapi.get("cdn/stories/home",{version:"published"}).then((function(t){return{blok:t.data.story.content,about_title:t.data.story.content.about_title}})).catch((function(e){t.error({statusCode:e.response.status,message:e.response.data})}))},mounted:function(){}},r=(o(385),o(9)),component=Object(r.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return e("section",{directives:[{name:"editable",rawName:"v-editable",value:this.blok,expression:"blok"}]},[e("home-intro"),this._v(" "),e("about",{attrs:{about_title:this.about_title}})],1)}),[],!1,null,"5bd65183",null);e.default=component.exports}}]);