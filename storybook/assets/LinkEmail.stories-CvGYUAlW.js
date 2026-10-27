import{f as o,g as l,h as m,u as d,o as p,i as c,j as u,t as y}from"./iframe-5uU7VOe4.js";import{L as f}from"./LinkBase-NCQI_X3E.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const a=o({__name:"LinkEmail",props:{email:{}},setup(e){return(n,k)=>(p(),l(d(f),{href:`mailto:${e.email}`,class:"LinkEmail"},{default:m(()=>[c(n.$slots,"default",{},()=>[u(y(e.email),1)])]),_:3},8,["href"]))}});a.__docgenInfo=Object.assign({displayName:a.name??a.__name},{exportName:"default",displayName:"LinkEmail",type:1,props:[{name:"email",global:!1,description:"Email-адрес для mailto-ссылки",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"email",type:"string",description:"Email-адрес для mailto-ссылки",declarations:[],schema:"string"}],sourceFiles:"/home/ekaterina/projects/turnover-ledger/src/shared/ui-v2/link-email/LinkEmail.vue"});const h={title:"UI-V2-Компоненты/LinkEmail",component:a,tags:["autodocs"],parameters:{docs:{description:{component:"Обёртка над LinkBase для почтовых ссылок. Принимает email без префикса mailto: и добавляет его автоматически. Без содержимого слота показывает email. Наследует типографику родителя. Для отдельного размера передайте утилитарный класс через class."}}},args:{email:"hello@example.com",default:"Написать письмо"},argTypes:{email:{control:"text"},default:{control:"text",description:"Текст ссылки"}},render:({default:e,...n})=>({components:{LinkEmail:a},setup:()=>({props:n,text:e}),template:'<LinkEmail v-bind="props">{{ text }}</LinkEmail>'})},t={name:"Песочница"},s={name:"Класс u-typo-label-s",render:({default:e,...n})=>({components:{LinkEmail:a},setup:()=>({props:n,text:e}),template:'<LinkEmail v-bind="props" class="u-typo-label-s">{{ text }}</LinkEmail>'})},r={name:"Наследование u-typo-body-l",render:({default:e,...n})=>({components:{LinkEmail:a},setup:()=>({props:n,text:e}),template:'<p class="u-typo-body-l">Ссылка внутри текста: <LinkEmail v-bind="props">{{ text }}</LinkEmail>.</p>'})},i={name:"Только адрес",render:({email:e})=>({components:{LinkEmail:a},setup:()=>({email:e}),template:'<LinkEmail :email="email" />'})};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Песочница'
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Класс u-typo-label-s',
  render: ({
    default: text,
    ...props
  }) => ({
    components: {
      LinkEmail
    },
    setup: () => ({
      props,
      text
    }),
    template: '<LinkEmail v-bind="props" class="u-typo-label-s">{{ text }}</LinkEmail>'
  })
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Наследование u-typo-body-l',
  render: ({
    default: text,
    ...props
  }) => ({
    components: {
      LinkEmail
    },
    setup: () => ({
      props,
      text
    }),
    template: '<p class="u-typo-body-l">Ссылка внутри текста: <LinkEmail v-bind="props">{{ text }}</LinkEmail>.</p>'
  })
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Только адрес',
  render: ({
    email
  }) => ({
    components: {
      LinkEmail
    },
    setup: () => ({
      email
    }),
    template: '<LinkEmail :email="email" />'
  })
}`,...i.parameters?.docs?.source}}};const x=["Playground","LabelSmall","BodyLarge","AddressOnly"];export{i as AddressOnly,r as BodyLarge,s as LabelSmall,t as Playground,x as __namedExportsOrder,h as default};
