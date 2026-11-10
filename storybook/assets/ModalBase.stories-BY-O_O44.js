import{r as d,w as m}from"./iframe-D-Va_jsk.js";import{B as v}from"./ButtonBase-B5-aeX0M.js";import{M as B}from"./ModalBase-M6o9qtgk.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconPen-B03y8X3K.js";import"./ButtonIcon-WlivQZ2k.js";import"./useLocale-Cbs3qY8U.js";const g="<p>Содержимое модального окна передаётся через обычный слот.</p>",C=`<p v-for="paragraph in 20" :key="paragraph">
  Абзац {{ paragraph }}. Длинное содержимое прокручивается внутри окна, а страница под ним остаётся неподвижной.
</p>`,h=t=>e=>({components:{ModalBase:B,ButtonBase:v},setup(){const o=d(e.open);return m(()=>e.open,u=>{o.value=u}),{args:e,open:o}},template:`<div>
    <ButtonBase @click="open = true">Открыть модалку</ButtonBase>
    <ModalBase v-bind="args" v-model:open="open">
      <div style="display: flex; flex-direction: column; gap: 16px">
        ${t}
        <ButtonBase @click="open = false">Готово</ButtonBase>
      </div>
    </ModalBase>
  </div>`}),x={title:"UI-V2-Компоненты/ModalBase",component:B,tags:["autodocs"],parameters:{docs:{description:{component:"Модальное окно с заголовком и слотом содержимого. Откройте окно кнопкой: фокус остаётся внутри, после закрытия возвращается на кнопку открытия."},source:{type:"dynamic",language:"html",transform:(t,{args:e,parameters:o})=>`<ButtonBase @click="open = true">Открыть модалку</ButtonBase>
<ModalBase ${['v-model:open="open"',`title="${e.title}"`,...e.animateTitle?["animate-title"]:[],...e.hasCloseButton?["has-close-button"]:[],...e.shouldCloseOnOverlay?["should-close-on-overlay"]:[],...e.shouldCloseOnEsc?["should-close-on-esc"]:[],...e.rootClass?[`root-class="${e.rootClass}"`]:[]].join(" ")}>
  ${o.longContent?C:g}
  <ButtonBase @click="open = false">Готово</ButtonBase>
</ModalBase>`}}},args:{open:!1,title:"Заголовок модального окна",animateTitle:!1,hasCloseButton:!0,shouldCloseOnOverlay:!0,shouldCloseOnEsc:!0,rootClass:""},argTypes:{open:{control:"boolean"},title:{control:"text"},animateTitle:{control:"boolean"},hasCloseButton:{control:"boolean"},shouldCloseOnOverlay:{control:"boolean"},shouldCloseOnEsc:{control:"boolean"},rootClass:{control:"text"}},render:h(g)},a={name:"Песочница"},s={name:"Без крестика",args:{hasCloseButton:!1}},n={name:"Закрытие по Escape",args:{shouldCloseOnOverlay:!1}},l={name:"Закрытие по фону",args:{shouldCloseOnEsc:!1}},r={name:"Закрытие только кнопкой",args:{hasCloseButton:!1,shouldCloseOnOverlay:!1,shouldCloseOnEsc:!1}},c={name:"Длинное содержимое",args:{title:"Окно с прокруткой"},parameters:{longContent:!0},render:h(C)},i={name:"Анимация смены заголовка",args:{animateTitle:!0},parameters:{docs:{source:{transform:void 0,code:`<ModalBase v-model:open="open" :title="title" animate-title has-close-button>
  <ButtonBase @click="toggleTitle">Сменить заголовок</ButtonBase>
</ModalBase>`},description:{story:"Откройте окно и нажмите «Сменить заголовок». Переход включён только при animateTitle; настройка уменьшения анимаций учитывается автоматически."}}},render:t=>({components:{ModalBase:B,ButtonBase:v},setup(){const e=d(t.open),o=d(t.title);return m(()=>t.open,p=>{e.value=p}),m(()=>t.title,p=>{o.value=p}),{args:t,open:e,title:o,toggleTitle:()=>{o.value=o.value===t.title?"Language settings":t.title}}},template:`<div>
      <ButtonBase @click="open = true">Открыть модалку</ButtonBase>
      <ModalBase v-bind="args" v-model:open="open" :title="title">
        <ButtonBase @click="toggleTitle">Сменить заголовок</ButtonBase>
      </ModalBase>
    </div>`})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Песочница'
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Без крестика',
  args: {
    hasCloseButton: false
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Закрытие по Escape',
  args: {
    shouldCloseOnOverlay: false
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Закрытие по фону',
  args: {
    shouldCloseOnEsc: false
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Закрытие только кнопкой',
  args: {
    hasCloseButton: false,
    shouldCloseOnOverlay: false,
    shouldCloseOnEsc: false
  }
}`,...r.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Длинное содержимое',
  args: {
    title: 'Окно с прокруткой'
  },
  parameters: {
    longContent: true
  },
  render: createRender(longContent)
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Анимация смены заголовка',
  args: {
    animateTitle: true
  },
  parameters: {
    docs: {
      source: {
        transform: undefined,
        code: \`<ModalBase v-model:open="open" :title="title" animate-title has-close-button>
  <ButtonBase @click="toggleTitle">Сменить заголовок</ButtonBase>
</ModalBase>\`
      },
      description: {
        story: 'Откройте окно и нажмите «Сменить заголовок». Переход включён только при animateTitle; настройка уменьшения анимаций учитывается автоматически.'
      }
    }
  },
  render: args => ({
    components: {
      ModalBase,
      ButtonBase
    },
    setup() {
      const open = ref(args.open);
      const title = ref(args.title);
      watch(() => args.open, value => {
        open.value = value;
      });
      watch(() => args.title, value => {
        title.value = value;
      });
      const toggleTitle = () => {
        title.value = title.value === args.title ? 'Language settings' : args.title;
      };
      return {
        args,
        open,
        title,
        toggleTitle
      };
    },
    template: \`<div>
      <ButtonBase @click="open = true">Открыть модалку</ButtonBase>
      <ModalBase v-bind="args" v-model:open="open" :title="title">
        <ButtonBase @click="toggleTitle">Сменить заголовок</ButtonBase>
      </ModalBase>
    </div>\`
  })
}`,...i.parameters?.docs?.source}}};const S=["Playground","WithoutCloseButton","CloseOnEscape","CloseOnOverlay","ExplicitCloseOnly","LongContent","AnimatedTitle"];export{i as AnimatedTitle,n as CloseOnEscape,l as CloseOnOverlay,r as ExplicitCloseOnly,c as LongContent,a as Playground,s as WithoutCloseButton,S as __namedExportsOrder,x as default};
