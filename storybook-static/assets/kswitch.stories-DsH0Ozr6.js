import{b as u,d as n,m as p,q as g,f as b,n as y,o as r,e as v,t as k}from"./vue.esm-bundler-DprTfj_T.js";import{_ as V}from"./_plugin-vue_export-helper-DlAUqK2U.js";const d=(e,t)=>e==t,f={name:"KSwitch",props:{value:{type:Boolean,required:!0},name:{type:String,default:null},label:{type:String,default:null},tabindex:{type:[String,Number],default:null},trueValue:{type:Boolean,default:!0},falseValue:{type:Boolean,default:!1},submittedValue:{type:String,default:"on"},checked:{type:Boolean,default:!1},color:{type:String,default:"primary"},switchPosition:{type:String,default:"left"},disabled:{type:Boolean,default:!1}},data(){return{isActive:!1,isChecked:d(this.value,this.trueValue)||this.checked}},computed:{classes(){return[`k-switch--color-${this.color}`,`k-switch--switch-position-${this.switchPosition}`,{"is-active":this.isActive},{"is-checked":this.isChecked},{"is-disabled":this.disabled},{"is-rtl":this.isRtl}]}},watch:{value(){this.isChecked=d(this.value,this.trueValue)}},created(){this.$emit("input",this.isChecked?this.trueValue:this.falseValue)},methods:{onClick(e){const t=this.isChecked,s=e.target.checked;this.$emit("input",s?this.trueValue:this.falseValue,e),t!==s&&this.$emit("change",s?this.trueValue:this.falseValue,e)},onFocus(e){this.isActive=!0,this.$emit("focus",e)},onBlur(e){this.isActive=!1,this.$emit("blur",e)}}},w={class:"k-switch-input-wrapper"},_=[".checked","disabled","name","tabindex","value"],x=n("div",{class:"k-switch-thumb"},null,-1),C=n("div",{class:"k-switch-track"},null,-1),S={key:0,class:"k-switch-label-text"};function B(e,t,s,P,o,i){return r(),u("label",{class:y(["k-switch",i.classes])},[n("div",{style:p(o.isActive?e.$coreOutline:{})},[n("div",w,[n("input",{ref:"input",class:"k-switch-input",type:"checkbox",dir:"auto",".checked":o.isChecked,disabled:s.disabled,name:s.name,tabindex:s.tabindex,value:s.submittedValue,onBlur:t[0]||(t[0]=(...a)=>i.onBlur&&i.onBlur(...a)),onClick:t[1]||(t[1]=(...a)=>i.onClick&&i.onClick(...a)),onFocus:t[2]||(t[2]=(...a)=>i.onFocus&&i.onFocus(...a))},null,40,_),x,C])],4),s.label||e.$slots.default?(r(),u("div",S,[g(e.$slots,"default",{},()=>[v(k(s.label),1)])])):b("",!0)],2)}const N=V(f,[["render",B]]);f.__docgenInfo={displayName:"KSwitch",exportName:"default",description:"",tags:{},props:[{name:"value",description:"Current value of the switch state: on or off",type:{name:"boolean"},required:!0},{name:"name",description:"does this need to be exposed?",tags:{ignore:[{description:!0,title:"ignore"}]},type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"label",description:"If provided, show a text label next to the switch",type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"tabindex",description:"does this need to be exposed?",tags:{ignore:[{description:!0,title:"ignore"}]},type:{name:"string|number"},defaultValue:{func:!1,value:"null"}},{name:"trueValue",description:"might not be used",tags:{ignore:[{description:!0,title:"ignore"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"true"}},{name:"falseValue",description:"might not be used",tags:{ignore:[{description:!0,title:"ignore"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"submittedValue",description:"might not be used",tags:{ignore:[{description:!0,title:"ignore"}]},type:{name:"string"},defaultValue:{func:!1,value:"'on'"}},{name:"checked",description:"seems redundant with 'value'",tags:{ignore:[{description:!0,title:"ignore"}]},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"color",description:"not used",tags:{ignore:[{description:!0,title:"ignore"}]},type:{name:"string"},defaultValue:{func:!1,value:"'primary'"}},{name:"switchPosition",description:"not used",tags:{ignore:[{description:!0,title:"ignore"}]},type:{name:"string"},defaultValue:{func:!1,value:"'left'"}},{name:"disabled",description:"Whether or not the switch is disabled",type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"input",type:{names:["undefined"]},description:"Emitted on each change with new `value`",properties:[{type:{names:["undefined"]},name:"<anonymous1>"}]},{name:"change",description:"does this need to be exposed?",type:{names:["undefined"]},tags:[{title:"ignore",content:!0}],properties:[{type:{names:["undefined"]},name:"<anonymous1>"}]},{name:"focus",type:{names:["undefined"]}},{name:"blur",type:{names:["undefined"]}}],slots:[{name:"default"}],sourceFiles:["/mnt/e/Dekstop/opensource/gsoc/vite-project/node_modules/kolibri-design-system/lib/KSwitch.vue"]};const K={title:"KSwitch",component:N,tags:["autodocs"]},l={};var c,m,h;l.parameters={...l.parameters,docs:{...(c=l.parameters)==null?void 0:c.docs,source:{originalSource:"{}",...(h=(m=l.parameters)==null?void 0:m.docs)==null?void 0:h.source}}};const q=["Primary"];export{l as Primary,q as __namedExportsOrder,K as default};
