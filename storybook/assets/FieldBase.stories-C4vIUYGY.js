import{r as m,w as d}from"./iframe-B-xi8IrK.js";import{F as l}from"./FieldBase-C4hXV70e.js";import"./preload-helper-PPVm8Dsz.js";import"./vue-BoSLtb37.js";import"./useLocale-B23gEAsK.js";import"./ru-D7eykLRC.js";import"./IconCompress-Dff2Ln9Q.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./InfoHint-BINBGhWz.js";import"./number-CUgYXyyM.js";const v={title:"UI-Компоненты/FieldBase",parameters:{docs:{description:{component:"Базовое текстовое поле с label, placeholder, очисткой значения, debounce для `update:modelValue` и событием `blur`."}}},component:l,tags:["autodocs"],args:{name:"description",label:"Описание",hint:"",placeholder:"Введите текст",modelValue:"Текст",debounceMs:0,maxLength:void 0},argTypes:{name:{control:"text"},label:{control:"text"},placeholder:{control:"text"},hint:{control:"text"},modelValue:{control:"text"},debounceMs:{control:{type:"number",min:0}},maxLength:{control:{type:"number",min:0}},mask:{control:!1}},render:t=>({components:{FieldBase:l},setup(){const n=m(t.modelValue);return d(()=>t.modelValue,s=>{n.value=s}),{args:t,model:n}},template:`
      <div style="max-width: 360px;">
        <FieldBase
          v-bind="args"
          :model-value="model"
          @update:modelValue="model = $event; args.modelValue = $event"
        />
      </div>
    `})},e={name:"Песочница"},a={name:"Пустое поле",args:{modelValue:null},parameters:{docs:{description:{story:"Поле без значения показывает placeholder и не рендерит кнопку очистки."}}}},o={name:"С ограничением длины",args:{label:"Комментарий",modelValue:"Коротко",maxLength:12}},r={name:"С подсказкой",args:{label:"ИНН",hint:"Укажите ИНН без пробелов и разделителей.",modelValue:null,placeholder:"Введите ИНН"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Песочница'
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'С ограничением длины',
  args: {
    label: 'Комментарий',
    modelValue: 'Коротко',
    maxLength: 12
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'С подсказкой',
  args: {
    label: 'ИНН',
    hint: 'Укажите ИНН без пробелов и разделителей.',
    modelValue: null,
    placeholder: 'Введите ИНН'
  }
}`,...r.parameters?.docs?.source}}};const L=["Playground","Empty","WithMaxLength","WithHint"];export{a as Empty,e as Playground,r as WithHint,o as WithMaxLength,L as __namedExportsOrder,v as default};
