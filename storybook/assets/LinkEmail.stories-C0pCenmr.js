import{g as d,d as m,e as l,s as c,o as p,B as u,t as f}from"./iframe-BZl0OYes.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const g=["href"],t=d({__name:"LinkEmail",props:{email:{},size:{default:"md"}},setup(e){const i=`LinkEmail_size_${e.size}`;return(o,k)=>(p(),m("a",{href:`mailto:${e.email}`,class:c(["LinkEmail",i])},[l(o.$slots,"default",{},()=>[u(f(e.email),1)],!0)],8,g))}}),r=y(t,[["__scopeId","data-v-acfee3d1"]]);t.__docgenInfo=Object.assign({displayName:t.name??t.__name},{exportName:"default",displayName:"LinkEmail",type:1,props:[{name:"email",global:!1,description:"Email-адрес для mailto-ссылки",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"size",global:!1,description:"Размер шрифта ссылки",tags:[],required:!1,type:'"md" | "xs" | "sm" | "lg" | undefined',declarations:[],schema:{kind:"enum",type:'"md" | "xs" | "sm" | "lg" | undefined',schema:["undefined",'"md"','"xs"','"sm"','"lg"']},default:'"md"'},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"size",type:'"md" | "xs" | "sm" | "lg" | undefined',description:"Размер шрифта ссылки",declarations:[],schema:{kind:"enum",type:'"md" | "xs" | "sm" | "lg" | undefined',schema:["undefined",'"md"','"xs"','"sm"','"lg"']}},{name:"email",type:"string",description:"Email-адрес для mailto-ссылки",declarations:[],schema:"string"}],sourceFiles:"/home/ekaterina/projects/turnover-ledger/src/shared/ui/link-email/LinkEmail.vue"});const x={title:"UI-Компоненты/LinkEmail",parameters:{docs:{description:{component:"Почтовая ссылка на базе обычного тега `a` с `mailto:`. Поддерживает размеры текста и наследует базовый стиль ссылок."}}},component:r,tags:["autodocs"],args:{email:"hello@example.com",size:"md",default:"Написать письмо"},argTypes:{email:{control:"text"},size:{control:"select",options:["xs","sm","md","lg"]},default:{control:"text",description:"Текст ссылки",table:{type:{summary:"VNode"}}}},render:e=>({components:{LinkEmail:r},setup(){return{args:e}},template:'<LinkEmail :email="args.email" :size="args.size">{{ args.default }}</LinkEmail>'})},a={name:"Песочница",parameters:{docs:{description:{story:"Интерактивная история для проверки `mailto:`-ссылки и размеров текста."}}}},n={name:"По умолчанию"},s={name:"Только адрес",args:{default:void 0},parameters:{docs:{description:{story:"Если слот не передан, компонент показывает сам email-адрес."}}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Песочница',
  parameters: {
    docs: {
      description: {
        story: 'Интерактивная история для проверки \`mailto:\`-ссылки и размеров текста.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'По умолчанию'
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Только адрес',
  args: {
    default: undefined
  },
  parameters: {
    docs: {
      description: {
        story: 'Если слот не передан, компонент показывает сам email-адрес.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};const E=["Playground","Default","AddressOnly"];export{s as AddressOnly,n as Default,a as Playground,E as __namedExportsOrder,x as default};
