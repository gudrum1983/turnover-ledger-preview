import{g as o,d as l,f as r,t as d,o as c}from"./iframe-1VcLbHp9.js";import{_ as u}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const p={class:"DisplayField"},m={class:"ReportRowEditForm_Label"},f={class:"ReportRowEditForm_Card"},y={class:"ReportRowEditForm_Value"},t=o({__name:"DisplayField",props:{value:{default:"—"},label:{}},setup(e){return(g,_)=>(c(),l("div",p,[r("div",m,d(e.label),1),r("div",f,[r("div",y,d(e.value),1)])]))}}),i=u(t,[["__scopeId","data-v-b147d45c"]]);t.__docgenInfo=Object.assign({displayName:t.name??t.__name},{exportName:"default",displayName:"DisplayField",type:1,props:[{name:"value",global:!1,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'"\\u2014"'},{name:"label",global:!1,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"label",type:"string | undefined",description:"",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"value",type:"string | undefined",description:"",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}}],sourceFiles:"/home/ekaterina/projects/turnover-ledger/src/shared/ui/display-field/DisplayField.vue"});const k={title:"UI-Компоненты/DisplayField",parameters:{docs:{description:{component:"Статичное поле для отображения значения с подписью. Подходит как read-only дополнение к инпутам в формах и карточках."}}},component:i,tags:["autodocs"],args:{label:"Валюта",value:"Российский рубль"},argTypes:{label:{control:"text"},value:{control:"text"}},render:e=>({components:{DisplayField:i},setup(){return{args:e}},template:`
      <div style="max-width: 320px;">
        <DisplayField v-bind="args" />
      </div>
    `})},n={name:"Песочница"},a={name:"По умолчанию"},s={name:"Пустое значение",args:{label:"Комментарий",value:void 0},parameters:{docs:{description:{story:"Если значение не передано, компонент показывает дефолтный символ `-`."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Песочница'
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'По умолчанию'
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Пустое значение',
  args: {
    label: 'Комментарий',
    value: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'Если значение не передано, компонент показывает дефолтный символ \`-\`.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};const F=["Playground","Default","EmptyValue"];export{a as Default,s as EmptyValue,n as Playground,F as __namedExportsOrder,k as default};
