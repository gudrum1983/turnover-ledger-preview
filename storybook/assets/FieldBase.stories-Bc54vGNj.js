import{r as b,w as V}from"./iframe-ChIdGxoT.js";import{F as g}from"./FieldBase-OuxBupqg.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-DbmkDJ9p.js";import"./IconCopy-Dw4aQTzk.js";import"./TooltipBase-D8tMQvOB.js";import"./number-CUgYXyyM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const w={title:"UI-V2-Компоненты/FieldBase",parameters:{docs:{description:{component:"Базовое текстовое поле с очисткой и debounce. Ошибка отображается в тултипе по центру поля без сдвига формы, обычная подсказка привязана к иконке."}}},component:g,tags:["autodocs"],args:{variant:"default",disabled:!1,readonly:!1,error:!1,errorMessage:"Укажите ровно 4 цифры.",name:"description",label:"Описание",hint:"Подсказка к полю: введите описание.",placeholder:"Введите текст",modelValue:"Текст",debounceMs:0,maxLength:void 0},argTypes:{variant:{control:"select",options:["default","success","error","warning"]},disabled:{control:"boolean"},readonly:{control:"boolean"},error:{control:"boolean"},errorMessage:{control:"text"},name:{control:"text"},label:{control:"text"},placeholder:{control:"text"},hint:{control:"text"},modelValue:{control:"text"},debounceMs:{control:{type:"number",min:0}},maxLength:{control:{type:"number",min:0}},mask:{control:!1}},render:u=>({components:{FieldBase:g},setup(){const p=b(u.modelValue);return V(()=>u.modelValue,h=>{p.value=h}),{args:u,model:p}},template:`
      <div style="max-width: 360px;">
        <FieldBase
          v-bind="args"
          :model-value="model"
          @update:modelValue="model = $event; args.modelValue = $event"
        />
      </div>
    `})},e={name:"Песочница"},r={name:"Пустое поле",args:{modelValue:null},parameters:{docs:{description:{story:"Поле без значения показывает placeholder и не рендерит кнопку очистки."}}}},a={name:"С ошибкой",args:{error:!0}},o={name:"Ошибка с подсказкой",args:{error:!0,errorMessage:"Значение должно содержать ровно четыре цифры. Проверьте введённые данные и попробуйте снова.",hint:"Введите код из документа без пробелов и разделителей."}},n={name:"С ограничением длины",args:{label:"Комментарий",modelValue:"Коротко",maxLength:12}},s={name:"С подсказкой",args:{label:"ИНН",hint:"Укажите ИНН без пробелов и разделителей.",modelValue:null,placeholder:"Введите ИНН"}},t={name:"Короткая ошибка по центру поля",args:{error:!0,errorMessage:"Обязательное поле",hint:"",modelValue:null}},c={name:"Вариант success",args:{variant:"success"}},l={name:"Вариант warning",args:{variant:"warning"}},m={name:"Вариант error без ошибки валидации",args:{variant:"error",error:!1}},d={name:"Отключённое поле",args:{disabled:!0}},i={name:"Только чтение",args:{readonly:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
  name: 'Ошибка с подсказкой',
  args: {
    error: true,
    errorMessage: 'Значение должно содержать ровно четыре цифры. Проверьте введённые данные и попробуйте снова.',
    hint: 'Введите код из документа без пробелов и разделителей.'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Короткая ошибка по центру поля',
  args: {
    error: true,
    errorMessage: 'Обязательное поле',
    hint: '',
    modelValue: null
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Вариант success',
  args: {
    variant: 'success'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Вариант warning',
  args: {
    variant: 'warning'
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Вариант error без ошибки валидации',
  args: {
    variant: 'error',
    error: false
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Отключённое поле',
  args: {
    disabled: true
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Только чтение',
  args: {
    readonly: true
  }
}`,...i.parameters?.docs?.source}}};const L=["Playground","Empty","WithError","ErrorWithHint","WithMaxLength","WithHint","ShortError","Success","Warning","ErrorVariant","Disabled","Readonly"];export{d as Disabled,r as Empty,m as ErrorVariant,o as ErrorWithHint,e as Playground,i as Readonly,t as ShortError,c as Success,l as Warning,a as WithError,s as WithHint,n as WithMaxLength,L as __namedExportsOrder,w as default};
