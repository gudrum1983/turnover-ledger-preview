import{L as s}from"./LinkBase-NCQI_X3E.js";import"./iframe-5uU7VOe4.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const m={title:"UI-V2-Компоненты/LinkBase",component:s,tags:["autodocs"],parameters:{docs:{description:{component:"Общий компонент ссылок и их стилей: to создаёт RouterLink, href — обычный тег a. Передавайте только один из этих пропсов. Наследует типографику родителя. Для отдельного размера передайте утилитарный класс через class."}}},args:{to:"/storybook",default:"Открыть раздел"},argTypes:{to:{control:"text",description:"Маршрут Vue Router: строка или объект. Используется без href."},href:{control:"text",description:"Адрес обычной ссылки. Используется без to."},default:{control:"text",description:"Текст ссылки"}},render:({default:e,...t})=>({components:{LinkBase:s},setup:()=>({props:t,text:e}),template:'<LinkBase v-bind="props">{{ text }}</LinkBase>'})},r={name:"Песочница"},a={name:"Класс u-typo-label-s",render:({default:e,...t})=>({components:{LinkBase:s},setup:()=>({props:t,text:e}),template:'<LinkBase v-bind="props" class="u-typo-label-s">{{ text }}</LinkBase>'})},o={name:"Наследование u-typo-body-l",render:({default:e,...t})=>({components:{LinkBase:s},setup:()=>({props:t,text:e}),template:'<p class="u-typo-body-l">Ссылка внутри текста: <LinkBase v-bind="props">{{ text }}</LinkBase>.</p>'})},p={name:"Обычная ссылка через href",args:{to:void 0,href:"https://example.com",default:"Открыть сайт"},argTypes:{to:{control:!1}},render:({href:e,default:t})=>({components:{LinkBase:s},setup:()=>({href:e,text:t}),template:'<LinkBase :href="href">{{ text }}</LinkBase>'})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Песочница'
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Класс u-typo-label-s',
  render: ({
    default: text,
    ...props
  }) => ({
    components: {
      LinkBase
    },
    setup: () => ({
      props,
      text
    }),
    template: '<LinkBase v-bind="props" class="u-typo-label-s">{{ text }}</LinkBase>'
  })
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Наследование u-typo-body-l',
  render: ({
    default: text,
    ...props
  }) => ({
    components: {
      LinkBase
    },
    setup: () => ({
      props,
      text
    }),
    template: '<p class="u-typo-body-l">Ссылка внутри текста: <LinkBase v-bind="props">{{ text }}</LinkBase>.</p>'
  })
}`,...o.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Обычная ссылка через href',
  args: {
    to: undefined,
    href: 'https://example.com',
    default: 'Открыть сайт'
  },
  argTypes: {
    to: {
      control: false
    }
  },
  render: ({
    href,
    default: text
  }) => ({
    components: {
      LinkBase
    },
    setup: () => ({
      href,
      text
    }),
    template: '<LinkBase :href="href">{{ text }}</LinkBase>'
  })
}`,...p.parameters?.docs?.source}}};const i=["Playground","LabelSmall","BodyLarge","Href"];export{o as BodyLarge,p as Href,a as LabelSmall,r as Playground,i as __namedExportsOrder,m as default};
