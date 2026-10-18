import{g as t,d as i,f as d,o as c}from"./iframe-B-xi8IrK.js";import{_ as l}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const p={class:"PointBase",width:"6",height:"6",viewBox:"0 0 6 6",fill:"none",xmlns:"http://www.w3.org/2000/svg"},u=["stroke"],r=t({__name:"PointBase",props:{color:{default:"var(--blue-600)"}},setup(s){return(m,f)=>(c(),i("svg",p,[d("circle",{cx:"2.75",cy:"2.75",r:"2",stroke:s.color,"stroke-width":"1.5"},null,8,u)]))}}),o=l(r,[["__scopeId","data-v-a26d53cb"]]);r.__docgenInfo=Object.assign({displayName:r.name??r.__name},{exportName:"default",displayName:"PointBase",type:1,props:[{name:"color",global:!1,description:"Цвет маркера. Передайте currentColor для наследования цвета текста.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'"var(--blue-600)"'},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"color",type:"string | undefined",description:"Цвет маркера. Передайте currentColor для наследования цвета текста.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}}],sourceFiles:"/home/ekaterina/projects/turnover-ledger/src/shared/ui-v2/point-base/PointBase.vue"});const b={title:"UI-V2-Компоненты/PointBase",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"Круглый маркер размером 6 × 6 px. Может использоваться как разделитель между пунктами. По умолчанию цвет — var(--blue-600); currentColor наследует цвет текста."}}},args:{color:"var(--blue-600)"},argTypes:{color:{control:"text"}}},e={name:"По умолчанию"},n={name:"Произвольный цвет",args:{color:"#c4542c"}},a={name:"Цвет текста",args:{color:"currentColor"},render:s=>({components:{PointBase:o},setup:()=>({args:s}),template:`<div class="u-typo-body-m" style="display: flex; align-items: center; gap: 12px; color: var(--neutral-600)">
      <span>О приложении</span>
      <PointBase v-bind="args" />
      <span>Контакты</span>
    </div>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'По умолчанию'
}`,...e.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Произвольный цвет',
  args: {
    color: '#c4542c'
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Цвет текста',
  args: {
    color: 'currentColor'
  },
  render: args => ({
    components: {
      PointBase
    },
    setup: () => ({
      args
    }),
    template: \`<div class="u-typo-body-m" style="display: flex; align-items: center; gap: 12px; color: var(--neutral-600)">
      <span>О приложении</span>
      <PointBase v-bind="args" />
      <span>Контакты</span>
    </div>\`
  })
}`,...a.parameters?.docs?.source}}};const v=["Default","CustomColor","CurrentColor"];export{a as CurrentColor,n as CustomColor,e as Default,v as __namedExportsOrder,b as default};
