import{g as i,d as l,e as c,s as m,o as p,B as u,t as f}from"./iframe-BZl0OYes.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const g=["href"],r=i({__name:"LinkExternal",props:{href:{},size:{default:"md"}},setup(e){const o=`LinkExternal_size_${e.size}`;return(d,h)=>(p(),l("a",{href:e.href,target:"_blank",rel:"noreferrer",class:m(["LinkExternal",o])},[c(d.$slots,"default",{},()=>[u(f(e.href),1)],!0)],8,g))}}),t=y(r,[["__scopeId","data-v-508ebb8c"]]);r.__docgenInfo=Object.assign({displayName:r.name??r.__name},{exportName:"default",displayName:"LinkExternal",type:1,props:[{name:"href",global:!1,description:"Внешний URL",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"size",global:!1,description:"Размер шрифта ссылки",tags:[],required:!1,type:'"md" | "xs" | "sm" | "lg" | undefined',declarations:[],schema:{kind:"enum",type:'"md" | "xs" | "sm" | "lg" | undefined',schema:["undefined",'"md"','"xs"','"sm"','"lg"']},default:'"md"'},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"size",type:'"md" | "xs" | "sm" | "lg" | undefined',description:"Размер шрифта ссылки",declarations:[],schema:{kind:"enum",type:'"md" | "xs" | "sm" | "lg" | undefined',schema:["undefined",'"md"','"xs"','"sm"','"lg"']}},{name:"href",type:"string",description:"Внешний URL",declarations:[],schema:"string"}],sourceFiles:"/home/ekaterina/projects/turnover-ledger/src/shared/ui/link-external/LinkExternal.vue"});const _={title:"UI-Компоненты/LinkExternal",parameters:{docs:{description:{component:"Внешняя ссылка на базе обычного тега `a`, которая открывается в новом окне и использует безопасный `rel` по умолчанию. Поддерживает размеры текста и базовый стиль ссылок."}}},component:t,tags:["autodocs"],args:{href:"https://example.com",size:"md",default:"Открыть внешний сайт"},argTypes:{href:{control:"text"},size:{control:"select",options:["xs","sm","md","lg"]},default:{control:"text",description:"Текст ссылки",table:{type:{summary:"VNode"}}}},render:e=>({components:{LinkExternal:t},setup(){return{args:e}},template:'<LinkExternal :href="args.href" :size="args.size">{{ args.default }}</LinkExternal>'})},n={name:"Песочница",parameters:{docs:{description:{story:"Интерактивная история для проверки внешней ссылки и размеров текста."}}}},a={name:"По умолчанию"},s={name:"Только URL",args:{default:void 0},parameters:{docs:{description:{story:"Если слот не передан, компонент показывает сам URL."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Песочница',
  parameters: {
    docs: {
      description: {
        story: 'Интерактивная история для проверки внешней ссылки и размеров текста.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'По умолчанию'
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Только URL',
  args: {
    default: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'Если слот не передан, компонент показывает сам URL.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};const L=["Playground","Default","UrlOnly"];export{a as Default,n as Playground,s as UrlOnly,L as __namedExportsOrder,_ as default};
