import{g as m,h as l,y as u,s as p,G as f,o as y,e as g}from"./iframe-BZl0OYes.js";import{_ as k}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const o=m({__name:"LinkBase",props:{size:{default:"md"},to:{}},setup(e){const i=`LinkBase_size_${e.size}`;return(d,h)=>{const c=f("RouterLink");return y(),l(c,{to:e.to,class:p(["LinkBase",i])},{default:u(()=>[g(d.$slots,"default",{},void 0,!0)]),_:3},8,["to"])}}}),r=k(o,[["__scopeId","data-v-d40d55f2"]]);o.__docgenInfo=Object.assign({displayName:o.name??o.__name},{exportName:"default",displayName:"LinkBase",type:1,props:[{name:"size",global:!1,description:"Размер шрифта ссылки",tags:[],required:!1,type:'"md" | "xs" | "sm" | "lg" | undefined',declarations:[],schema:{kind:"enum",type:'"md" | "xs" | "sm" | "lg" | undefined',schema:["undefined",'"md"','"xs"','"sm"','"lg"']},default:'"md"'},{name:"to",global:!1,description:"Маршрут или путь для перехода",tags:[],required:!0,type:"string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric",declarations:[],schema:{kind:"enum",type:"string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric",schema:["string",{kind:"object",type:"RouteLocationAsRelativeGeneric"},{kind:"object",type:"RouteLocationAsPathGeneric"}]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"size",type:'"md" | "xs" | "sm" | "lg" | undefined',description:"Размер шрифта ссылки",declarations:[],schema:{kind:"enum",type:'"md" | "xs" | "sm" | "lg" | undefined',schema:["undefined",'"md"','"xs"','"sm"','"lg"']}},{name:"to",type:"string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric",description:"Маршрут или путь для перехода",declarations:[],schema:{kind:"enum",type:"string | RouteLocationAsRelativeGeneric | RouteLocationAsPathGeneric",schema:["string",{kind:"object",type:"RouteLocationAsRelativeGeneric"},{kind:"object",type:"RouteLocationAsPathGeneric"}]}}],sourceFiles:"/home/ekaterina/projects/turnover-ledger/src/shared/ui/link-base/LinkBase.vue"});const _={title:"UI-Компоненты/LinkBase",parameters:{docs:{description:{component:"Базовая внутренняя ссылка на `RouterLink`. Компонент принимает маршрут через `to`, поддерживает размеры текста и наследует состояние hover из дизайн-токенов. Используется только для навигации внутри приложения; для внешних URL и `mailto:` предназначены `LinkExternal` и `LinkEmail`."}}},component:r,tags:["autodocs"],args:{to:"/storybook",size:"md",default:"Открыть раздел"},argTypes:{to:{control:"text"},size:{control:"select",options:["xs","sm","md","lg"]},default:{control:"text",description:"Текст ссылки",table:{type:{summary:"VNode"}}}},render:e=>({components:{LinkBase:r},setup(){return{args:e}},template:'<LinkBase v-bind="args">{{ args.default }}</LinkBase>'})},n={name:"Песочница",parameters:{docs:{description:{story:"Интерактивная история для проверки размера и текста внутренней ссылки внутри приложения."}}}},t={name:"По умолчанию"},s={name:"Крупная",args:{size:"lg",default:"Крупная ссылка"},parameters:{docs:{description:{story:"Ссылка с увеличенным размером текста для заметных навигационных действий."}}}},a={name:"❗ Без текста",args:{default:""},parameters:{controls:{disable:!0},docs:{description:{story:"Некорректный сценарий использования: ссылка без текстового содержимого не даёт понятной точки навигации."}}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Песочница',
  parameters: {
    docs: {
      description: {
        story: 'Интерактивная история для проверки размера и текста внутренней ссылки внутри приложения.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'По умолчанию'
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Крупная',
  args: {
    size: 'lg',
    default: 'Крупная ссылка'
  },
  parameters: {
    docs: {
      description: {
        story: 'Ссылка с увеличенным размером текста для заметных навигационных действий.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: '❗ Без текста',
  args: {
    default: ''
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Некорректный сценарий использования: ссылка без текстового содержимого не даёт понятной точки навигации.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};const x=["Playground","Default","Large","WithoutText"];export{t as Default,s as Large,n as Playground,a as WithoutText,x as __namedExportsOrder,_ as default};
