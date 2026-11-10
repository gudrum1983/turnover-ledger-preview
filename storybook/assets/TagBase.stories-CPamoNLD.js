import{f as d,d as m,t as c,n as u,l as p,o as f}from"./iframe-D-Va_jsk.js";import{_ as g}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const i=d({__name:"TagBase",props:{label:{},size:{default:"medium"},variant:{default:"default"}},setup(e){const o=p(()=>({"TagBase_small u-typo-body-small-m":e.size==="small","u-typo-label-m":e.size==="medium",TagBase_fill:e.variant==="fill"}));return(b,h)=>(f(),m("div",{class:u(["TagBase",o.value])},c(e.label),3))}}),y=g(i,[["__scopeId","data-v-63378154"]]);i.__docgenInfo=Object.assign({displayName:i.name??i.__name},{exportName:"default",displayName:"TagBase",type:1,props:[{name:"label",global:!1,description:"Текст тега",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"size",global:!1,description:"Размер тега",tags:[],required:!1,type:'"small" | "medium" | undefined',declarations:[],schema:{kind:"enum",type:'"small" | "medium" | undefined',schema:["undefined",'"small"','"medium"']},default:'"medium"'},{name:"variant",global:!1,description:"Визуальный вариант тега",tags:[],required:!1,type:'"fill" | "default" | undefined',declarations:[],schema:{kind:"enum",type:'"fill" | "default" | undefined',schema:["undefined",'"fill"','"default"']},default:'"default"'},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"size",type:'"small" | "medium" | undefined',description:"Размер тега",declarations:[],schema:{kind:"enum",type:'"small" | "medium" | undefined',schema:["undefined",'"small"','"medium"']}},{name:"variant",type:'"fill" | "default" | undefined',description:"Визуальный вариант тега",declarations:[],schema:{kind:"enum",type:'"fill" | "default" | undefined',schema:["undefined",'"fill"','"default"']}},{name:"label",type:"string",description:"Текст тега",declarations:[],schema:"string"}],sourceFiles:"/home/ekaterina/projects/turnover-ledger/src/shared/ui-v2/tag-base/TagBase.vue"});const z={title:"UI-V2-Компоненты/TagBase",parameters:{docs:{description:{component:"Компактный бейдж для коротких служебных меток."}}},component:y,tags:["autodocs"],args:{label:"rsd",size:"medium",variant:"default"},argTypes:{label:{control:"text"},size:{control:"select",options:["small","medium"]},variant:{control:"select",options:["default","fill"]}}},a={name:"Песочница"},n={name:"По умолчанию"},s={name:"Маленький",args:{size:"small"}},r={name:"С заливкой",args:{variant:"fill"}},t={name:"Маленький с заливкой",args:{size:"small",variant:"fill"}},l={name:"Длинная метка",args:{label:"Требует проверки"},parameters:{docs:{description:{story:"Пример с более длинным текстом. Метку лучше оставлять короткой, чтобы она не конкурировала с основным контентом."}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Песочница'
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'По умолчанию'
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Маленький',
  args: {
    size: 'small'
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'С заливкой',
  args: {
    variant: 'fill'
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Маленький с заливкой',
  args: {
    size: 'small',
    variant: 'fill'
  }
}`,...t.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Длинная метка',
  args: {
    label: 'Требует проверки'
  },
  parameters: {
    docs: {
      description: {
        story: 'Пример с более длинным текстом. Метку лучше оставлять короткой, чтобы она не конкурировала с основным контентом.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};const B=["Playground","Default","Small","Fill","SmallFill","LongLabel"];export{n as Default,r as Fill,l as LongLabel,a as Playground,s as Small,t as SmallFill,B as __namedExportsOrder,z as default};
