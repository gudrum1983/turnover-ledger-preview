import{r as m,w as B}from"./iframe-C5p7tTEy.js";import{B as C}from"./ButtonBase-Cr9QNOSv.js";import{M as g}from"./ModalBase-CXv7uUCe.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./IconPen-DryP_2-h.js";import"./ButtonIcon-CKGKz_VR.js";import"./useLocale-c5d_DuJC.js";const v="<p>Содержимое модального окна передаётся через обычный слот.</p>",h=`<p v-for="paragraph in 20" :key="paragraph">
  Абзац {{ paragraph }}. Длинное содержимое прокручивается внутри окна, а страница под ним остаётся неподвижной.
</p>`,f=t=>e=>({components:{ModalBase:g,ButtonBase:C},setup(){const o=m(e.open);return B(()=>e.open,p=>{o.value=p}),{args:e,open:o}},template:`<div>
    <ButtonBase @click="open = true">Открыть модалку</ButtonBase>
    <ModalBase v-bind="args" v-model:open="open">
      <div style="display: flex; flex-direction: column; gap: 16px">
        ${t}
        <ButtonBase @click="open = false">Готово</ButtonBase>
      </div>
    </ModalBase>
  </div>`}),S={title:"UI-V2-Компоненты/ModalBase",component:g,tags:["autodocs"],parameters:{docs:{description:{component:"Модальное окно с заголовком и слотом содержимого. Откройте окно кнопкой: фокус остаётся внутри, после закрытия возвращается на кнопку открытия."},source:{type:"dynamic",language:"html",transform:(t,{args:e,parameters:o})=>`<ButtonBase @click="open = true">Открыть модалку</ButtonBase>
<ModalBase ${['v-model:open="open"',`title="${e.title}"`,...e.titleVariant&&e.titleVariant!=="default"?[`title-variant="${e.titleVariant}"`]:[],...e.animateTitle?["animate-title"]:[],...e.hasCloseButton?["has-close-button"]:[],...e.shouldCloseOnOverlay?["should-close-on-overlay"]:[],...e.shouldCloseOnEsc?["should-close-on-esc"]:[],...e.rootClass?[`root-class="${e.rootClass}"`]:[]].join(" ")}>
  ${o.longContent?h:v}
  <ButtonBase @click="open = false">Готово</ButtonBase>
</ModalBase>`}}},args:{open:!1,title:"Заголовок модального окна",titleVariant:"default",animateTitle:!1,hasCloseButton:!0,shouldCloseOnOverlay:!0,shouldCloseOnEsc:!0,rootClass:""},argTypes:{open:{control:"boolean"},title:{control:"text"},titleVariant:{control:"select",options:["default","danger"]},animateTitle:{control:"boolean"},hasCloseButton:{control:"boolean"},shouldCloseOnOverlay:{control:"boolean"},shouldCloseOnEsc:{control:"boolean"},rootClass:{control:"text"}},render:f(v)},a={name:"Песочница"},s={name:"Заголовок danger",args:{title:"Удалить запись?",titleVariant:"danger"}},n={name:"Без крестика",args:{hasCloseButton:!1}},l={name:"Закрытие по Escape",args:{shouldCloseOnOverlay:!1}},r={name:"Закрытие по фону",args:{shouldCloseOnEsc:!1}},i={name:"Закрытие только кнопкой",args:{hasCloseButton:!1,shouldCloseOnOverlay:!1,shouldCloseOnEsc:!1}},c={name:"Длинное содержимое",args:{title:"Окно с прокруткой"},parameters:{longContent:!0},render:f(h)},u={name:"Анимация смены заголовка",args:{animateTitle:!0},parameters:{docs:{source:{transform:void 0,code:`<ModalBase v-model:open="open" :title="title" animate-title has-close-button>
  <ButtonBase @click="toggleTitle">Сменить заголовок</ButtonBase>
</ModalBase>`},description:{story:"Откройте окно и нажмите «Сменить заголовок». Переход включён только при animateTitle; настройка уменьшения анимаций учитывается автоматически."}}},render:t=>({components:{ModalBase:g,ButtonBase:C},setup(){const e=m(t.open),o=m(t.title);return B(()=>t.open,d=>{e.value=d}),B(()=>t.title,d=>{o.value=d}),{args:t,open:e,title:o,toggleTitle:()=>{o.value=o.value===t.title?"Language settings":t.title}}},template:`<div>
      <ButtonBase @click="open = true">Открыть модалку</ButtonBase>
      <ModalBase v-bind="args" v-model:open="open" :title="title">
        <ButtonBase @click="toggleTitle">Сменить заголовок</ButtonBase>
      </ModalBase>
    </div>`})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Песочница'
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Заголовок danger',
  args: {
    title: 'Удалить запись?',
    titleVariant: 'danger'
  }
}`,...s.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Без крестика',
  args: {
    hasCloseButton: false
  }
}`,...n.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Закрытие по Escape',
  args: {
    shouldCloseOnOverlay: false
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Закрытие по фону',
  args: {
    shouldCloseOnEsc: false
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Закрытие только кнопкой',
  args: {
    hasCloseButton: false,
    shouldCloseOnOverlay: false,
    shouldCloseOnEsc: false
  }
}`,...i.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Длинное содержимое',
  args: {
    title: 'Окно с прокруткой'
  },
  parameters: {
    longContent: true
  },
  render: createRender(longContent)
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
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
}`,...u.parameters?.docs?.source}}};const V=["Playground","DangerTitle","WithoutCloseButton","CloseOnEscape","CloseOnOverlay","ExplicitCloseOnly","LongContent","AnimatedTitle"];export{u as AnimatedTitle,l as CloseOnEscape,r as CloseOnOverlay,s as DangerTitle,i as ExplicitCloseOnly,c as LongContent,a as Playground,n as WithoutCloseButton,V as __namedExportsOrder,S as default};
