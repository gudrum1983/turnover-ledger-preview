import{r as p,w as u}from"./iframe-1VcLbHp9.js";import{F as c}from"./FieldBase-CVa5hOMT.js";import"./preload-helper-PPVm8Dsz.js";import"./vue-BoSLtb37.js";import"./useLocale-BJ1oIUV7.js";import"./ru-D7eykLRC.js";import"./IconCopy-ES7atpi4.js";import"./TooltipWrapper-Bq8eMJCf.js";import"./TooltipBase-DSRNm4vu.js";import"./number-CUgYXyyM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./FadeTransition-BNeWIeJy.js";const L={title:"UI-V2-Компоненты/FieldBase",parameters:{docs:{description:{component:"Базовое текстовое поле с label, placeholder, очисткой значения, debounce для `update:modelValue` и событием `blur`."}}},component:c,tags:["autodocs"],args:{variant:"default",error:!1,errorMessage:"Укажите ровно 4 цифры.",reserveErrorSpace:!1,name:"description",label:"Описание",hint:"",placeholder:"Введите текст",modelValue:"Текст",debounceMs:0,maxLength:void 0},argTypes:{variant:{control:"select",options:["default","card"]},error:{control:"boolean"},errorMessage:{control:"text"},reserveErrorSpace:{control:"boolean"},name:{control:"text"},label:{control:"text"},placeholder:{control:"text"},hint:{control:"text"},modelValue:{control:"text"},debounceMs:{control:{type:"number",min:0}},maxLength:{control:{type:"number",min:0}},mask:{control:!1}},render:l=>({components:{FieldBase:c},setup(){const m=p(l.modelValue);return u(()=>l.modelValue,d=>{m.value=d}),{args:l,model:m}},template:`
      <div style="max-width: 360px;">
        <FieldBase
          v-bind="args"
          :model-value="model"
          @update:modelValue="model = $event; args.modelValue = $event"
        />
      </div>
    `})},e={name:"Песочница"},r={name:"Пустое поле",args:{modelValue:null},parameters:{docs:{description:{story:"Поле без значения показывает placeholder и не рендерит кнопку очистки."}}}},a={name:"С ошибкой",args:{error:!0}},o={name:"Card с ошибкой",args:{variant:"card",error:!0}},t={name:"С резервом под ошибку",args:{reserveErrorSpace:!0,modelValue:null}},n={name:"С ограничением длины",args:{label:"Комментарий",modelValue:"Коротко",maxLength:12}},s={name:"С подсказкой",args:{label:"ИНН",hint:"Укажите ИНН без пробелов и разделителей.",modelValue:null,placeholder:"Введите ИНН"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Песочница'
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Пустое поле',
  args: {
    modelValue: null
  },
  parameters: {
    docs: {
      description: {
        story: 'Поле без значения показывает placeholder и не рендерит кнопку очистки.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'С ошибкой',
  args: {
    error: true
  }
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Card с ошибкой',
  args: {
    variant: 'card',
    error: true
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'С резервом под ошибку',
  args: {
    reserveErrorSpace: true,
    modelValue: null
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'С ограничением длины',
  args: {
    label: 'Комментарий',
    modelValue: 'Коротко',
    maxLength: 12
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'С подсказкой',
  args: {
    label: 'ИНН',
    hint: 'Укажите ИНН без пробелов и разделителей.',
    modelValue: null,
    placeholder: 'Введите ИНН'
  }
}`,...s.parameters?.docs?.source}}};const M=["Playground","Empty","WithError","CardWithError","ReservedErrorSpace","WithMaxLength","WithHint"];export{o as CardWithError,r as Empty,e as Playground,t as ReservedErrorSpace,a as WithError,s as WithHint,n as WithMaxLength,M as __namedExportsOrder,L as default};
