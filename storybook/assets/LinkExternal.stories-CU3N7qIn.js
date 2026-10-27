import{f as d,g as p,h as c,u as m,o as u,i as f,j as g,t as y}from"./iframe-ChIdGxoT.js";import{L as k}from"./LinkBase-De9pqQBD.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const a=d({__name:"LinkExternal",props:{href:{},target:{default:"_blank"}},setup(e){return(n,b)=>(u(),p(m(k),{href:e.href,target:e.target,rel:e.target==="_blank"?"noopener noreferrer":void 0,class:"LinkExternal"},{default:c(()=>[f(n.$slots,"default",{},()=>[g(y(e.href),1)])]),_:3},8,["href","target","rel"]))}});a.__docgenInfo=Object.assign({displayName:a.name??a.__name},{exportName:"default",displayName:"LinkExternal",type:1,props:[{name:"href",global:!1,description:"Внешний URL.",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"target",global:!1,description:"Где открыть ссылку: _self — в текущей вкладке, _blank — в новой.",tags:[],required:!1,type:'"_self" | "_blank" | undefined',declarations:[],schema:{kind:"enum",type:'"_self" | "_blank" | undefined',schema:["undefined",'"_self"','"_blank"']},default:'"_blank"'},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"href",type:"string",description:"Внешний URL.",declarations:[],schema:"string"},{name:"target",type:'"_self" | "_blank" | undefined',description:"Где открыть ссылку: _self — в текущей вкладке, _blank — в новой.",declarations:[],schema:{kind:"enum",type:'"_self" | "_blank" | undefined',schema:["undefined",'"_self"','"_blank"']}}],sourceFiles:"/home/ekaterina/projects/turnover-ledger/src/shared/ui-v2/link-external/LinkExternal.vue"});const E={title:"UI-V2-Компоненты/LinkExternal",component:a,tags:["autodocs"],parameters:{docs:{description:{component:'Обёртка над LinkBase для внешних ссылок. По умолчанию открывается в новой вкладке (_blank) с rel="noopener noreferrer". Без содержимого слота показывает URL. Наследует типографику родителя. Для отдельного размера передайте утилитарный класс через class.'}}},args:{href:"https://example.com",target:"_blank",default:"Открыть сайт"},argTypes:{href:{control:"text"},target:{control:"select",options:["_self","_blank"]},default:{control:"text",description:"Текст ссылки"}},render:({default:e,...n})=>({components:{LinkExternal:a},setup:()=>({props:n,text:e}),template:'<LinkExternal v-bind="props">{{ text }}</LinkExternal>'})},t={name:"Песочница"},r={name:"Класс u-typo-label-s",render:({default:e,...n})=>({components:{LinkExternal:a},setup:()=>({props:n,text:e}),template:'<LinkExternal v-bind="props" class="u-typo-label-s">{{ text }}</LinkExternal>'})},s={name:"Наследование u-typo-body-l",render:({default:e,...n})=>({components:{LinkExternal:a},setup:()=>({props:n,text:e}),template:'<p class="u-typo-body-l">Ссылка внутри текста: <LinkExternal v-bind="props">{{ text }}</LinkExternal>.</p>'})},o={name:"В текущей вкладке",args:{target:"_self"}},l={name:"В новой вкладке",args:{target:"_blank"}},i={name:"Только адрес",render:({href:e,target:n})=>({components:{LinkExternal:a},setup:()=>({props:{href:e,target:n}}),template:'<LinkExternal v-bind="props" />'})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Песочница'
}`,...t.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Класс u-typo-label-s',
  render: ({
    default: text,
    ...props
  }) => ({
    components: {
      LinkExternal
    },
    setup: () => ({
      props,
      text
    }),
    template: '<LinkExternal v-bind="props" class="u-typo-label-s">{{ text }}</LinkExternal>'
  })
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Наследование u-typo-body-l',
  render: ({
    default: text,
    ...props
  }) => ({
    components: {
      LinkExternal
    },
    setup: () => ({
      props,
      text
    }),
    template: '<p class="u-typo-body-l">Ссылка внутри текста: <LinkExternal v-bind="props">{{ text }}</LinkExternal>.</p>'
  })
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'В текущей вкладке',
  args: {
    target: '_self'
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'В новой вкладке',
  args: {
    target: '_blank'
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Только адрес',
  render: ({
    href,
    target
  }) => ({
    components: {
      LinkExternal
    },
    setup: () => ({
      props: {
        href,
        target
      }
    }),
    template: '<LinkExternal v-bind="props" />'
  })
}`,...i.parameters?.docs?.source}}};const v=["Playground","LabelSmall","BodyLarge","CurrentTab","NewTab","UrlOnly"];export{s as BodyLarge,o as CurrentTab,r as LabelSmall,l as NewTab,t as Playground,i as UrlOnly,v as __namedExportsOrder,E as default};
