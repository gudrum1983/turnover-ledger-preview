import{o as i,d as o,e as s}from"./iframe-CUmsbM2s.js";import{_ as d}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const a={},l={class:"DividerBase",role:"separator","aria-orientation":"horizontal"};function c(p,r){return i(),o("div",l,[...r[0]||(r[0]=[s("svg",{viewBox:"0 0 592 3",preserveAspectRatio:"none","aria-hidden":"true",focusable:"false"},[s("path",{d:"M0 1.5C0 1.22329 0.462191 0.998439 1.03494 0.996504L296 0L590.965 0.996504C591.538 0.998439 592 1.22329 592 1.5C592 1.77671 591.538 2.00156 590.965 2.0035L296 3L1.03494 2.0035C0.462189 2.00156 0 1.77671 0 1.5Z",fill:"currentColor"})],-1)])])}const t=d(a,[["render",c],["__scopeId","data-v-639c8b50"]]);a.__docgenInfo=Object.assign({displayName:a.name??a.__name},{exportName:"default",displayName:"DividerBase",type:1,props:[{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[],sourceFiles:"/home/ekaterina/projects/turnover-ledger/src/shared/ui-v2/divider-base/DividerBase.vue"});const y={title:"UI-V2-Компоненты/DividerBase",component:t,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Горизонтальная линия: 3 px в центре, плавно сужается до 1 px по краям. Ширина — 100% контейнера. Цвет задаётся CSS-переменной --divider-color."}}}},e={name:"По умолчанию"},n={name:"Разная ширина",render:()=>({components:{DividerBase:t},template:`<div style="display: flex; flex-direction: column; gap: 32px">
      <DividerBase style="width: 120px" />
      <DividerBase style="width: 320px; max-width: 100%" />
      <DividerBase />
    </div>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'По умолчанию'
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Разная ширина',
  render: () => ({
    components: {
      DividerBase
    },
    template: \`<div style="display: flex; flex-direction: column; gap: 32px">
      <DividerBase style="width: 120px" />
      <DividerBase style="width: 320px; max-width: 100%" />
      <DividerBase />
    </div>\`
  })
}`,...n.parameters?.docs?.source}}};const v=["Default","Widths"];export{e as Default,n as Widths,v as __namedExportsOrder,y as default};
