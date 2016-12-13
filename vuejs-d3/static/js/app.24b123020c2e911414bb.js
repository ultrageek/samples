webpackJsonp([2,0],{0:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}var i=n(74),r=a(i),s=n(68),o=a(s);new r.default({el:"#app",template:"<App/>",components:{App:o.default}})},28:function(t,e){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var n=function(t,e){return Math.floor(Math.random()*(e-t+1)+t)};e.default=function(t,e,a){for(var i=[],r=0;r<t;r++){var s=n(e,a);i.push(s)}return i}},29:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(70),r=a(i);e.default={name:"app",components:{Demo:r.default}}},30:function(t,e,n){"use strict";function a(t){if(t&&t.__esModule)return t;var e={};if(null!=t)for(var n in t)Object.prototype.hasOwnProperty.call(t,n)&&(e[n]=t[n]);return e.default=t,e}function i(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var r=n(33),s=i(r),o=n(15),u=i(o),c=n(62),l=a(c),d=n(67),f=i(d),h={data:{type:Array,default:function(){return[]}},width:{type:Number,default:0},height:{type:Number,default:0},margin:{type:Object,default:function(){return{left:0,right:0,top:10,bottom:10}}},max:{type:Number,default:100}};e.default={name:"area-chart",props:h,data:function(){return{paths:{area:"",line:"",selector:""},lastHoverPoint:{},scaled:{x:null,y:null},animatedData:[],points:[]}},computed:{actualDims:function(){var t=this.width-this.margin.left-this.margin.right,e=this.height-this.margin.top-this.margin.bottom;return{width:t,height:e}}},watch:{data:function(t,e){function n(t){requestAnimationFrame(n),f.default.update(t)}var a=this;new f.default.Tween(e).easing(f.default.Easing.Quadratic.Out).to(t,500).onUpdate(function(){a.animatedData=this,a.render()}).start(),n()},width:function(){this.initialize(),this.render()}},methods:{createArea:l.area().x(function(t){return t.x}).y0(function(t){return t.max}).y1(function(t){return t.y}),createLine:l.line().x(function(t){return t.x}).y(function(t){return t.y}),createValueSelector:l.area().x(function(t){return t.x}).y0(function(t){return t.max}).y1(0),initialize:function(){this.scaled.x=l.scaleLinear().range([0,this.actualDims.width]),this.scaled.y=l.scaleLinear().range([this.actualDims.height,0]),l.axisLeft().scale(this.scaled.x),l.axisBottom().scale(this.scaled.y)},render:function(){this.scaled.x.domain(l.extent(this.data,function(t,e){return e})),this.scaled.y.domain([0,this.max]),this.points=[];var t=!0,e=!1,n=void 0;try{for(var a,i=(0,u.default)(this.animatedData.entries());!(t=(a=i.next()).done);t=!0){var r=(0,s.default)(a.value,2),o=r[0],c=r[1];this.points.push({x:this.scaled.x(o),y:this.scaled.y(c),max:this.height})}}catch(t){e=!0,n=t}finally{try{!t&&i.return&&i.return()}finally{if(e)throw n}}this.paths.area=this.createArea(this.points),this.paths.line=this.createLine(this.points)},mouseover:function(t){var e=t.offsetX;if(this.points.length>0){var n=e-this.margin.left,a=this.getClosestPoint(n);if(this.lastHoverPoint.index!==a.index){var i=this.points[a.index];this.paths.selector=this.createValueSelector([i]),this.$emit("select",this.data[a.index]),this.lastHoverPoint=a}}},getClosestPoint:function(t){return this.points.map(function(e,n){return{x:e.x,diff:Math.abs(e.x-t),index:n}}).reduce(function(t,e){return t.diff<e.diff?t:e})}}}},31:function(t,e,n){"use strict";function a(t){return t&&t.__esModule?t:{default:t}}Object.defineProperty(e,"__esModule",{value:!0});var i=n(69),r=a(i),s=n(28),o=a(s);e.default={name:"demo",data:function(){return{data:[],chartWidth:0,currentValue:null,itemCount:25,min:10,max:100}},mounted:function(){var t=this;window.addEventListener("resize",this.onResize),this.onResize(),setInterval(function(){t.data=(0,o.default)(t.itemCount,parseInt(t.min,10),parseInt(t.max,10))},2e3)},beforeDestroy:function(){window.removeEventListener("resize",this.onResize)},methods:{onResize:function(){var t=this.$el.querySelector(".area-chart");this.chartWidth=t.offsetWidth},onSelect:function(t){this.currentValue=t}},components:{AreaChart:r.default}}},63:function(t,e){},64:function(t,e){},65:function(t,e){},68:function(t,e,n){var a,i;n(65),a=n(29);var r=n(73);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=a},69:function(t,e,n){var a,i;n(64),a=n(30);var r=n(72);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=a},70:function(t,e,n){var a,i;n(63),a=n(31);var r=n(71);i=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(i=a=a.default),"function"==typeof i&&(i=i.options),i.render=r.render,i.staticRenderFns=r.staticRenderFns,t.exports=a},71:function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",[e("div",{staticClass:"area-chart"},[e("h1",[t._v("Example Area Chart")]),t._v(" "),e("area-chart",{attrs:{data:t.data,width:t.chartWidth,height:300,max:t.max},on:{select:t.onSelect}}),t._v(" "),e("div",{staticClass:"content"},[e("h3",[t._v("Selected Value: "+t._s(t.currentValue))]),t._v(" "),e("div",[e("label",[t._v("Record Count: ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model:value",value:t.itemCount,expression:"itemCount",arg:"value"}],domProps:{value:t._s(t.itemCount)},on:{input:function(e){e.target.composing||(t.itemCount=e.target.value)}}})]),t._v(" "),e("div",[e("label",[t._v("Min Value: ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model:value",value:t.min,expression:"min",arg:"value"}],domProps:{value:t._s(t.min)},on:{input:function(e){e.target.composing||(t.min=e.target.value)}}})]),t._v(" "),e("div",[e("label",[t._v("Max Value: ")]),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model:value",value:t.max,expression:"max",arg:"value"}],domProps:{value:t._s(t.max)},on:{input:function(e){e.target.composing||(t.max=e.target.value)}}})])])])])},staticRenderFns:[]}},72:function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("svg",{attrs:{width:t.width,height:t.height},on:{mousemove:t.mouseover}},[e("g",{style:{transform:"translate("+t.margin.left+"px, "+t.margin.top+"px)"}},[e("path",{staticClass:"area",attrs:{d:t.paths.area}}),t._v(" "),e("path",{staticClass:"line",attrs:{d:t.paths.line}}),t._v(" "),e("path",{staticClass:"selector",attrs:{d:t.paths.selector}})])])},staticRenderFns:[]}},73:function(t,e){t.exports={render:function(){var t=this,e=(t.$createElement,t._c);return e("div",{attrs:{id:"app"}},[e("demo")])},staticRenderFns:[]}}});
//# sourceMappingURL=app.24b123020c2e911414bb.js.map