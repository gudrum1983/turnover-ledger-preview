import{r as y,w as x}from"./iframe-DpJq971z.js";import{F as h}from"./FieldBase-D-QlPJWX.js";import"./preload-helper-PPVm8Dsz.js";import"./useLocale-G9BEut4r.js";import"./IconRefresh-CR_PDn6H.js";import"./TooltipBase-D5OHRAiq.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const E={title:"UI-V2-Компоненты/FieldBase",parameters:{docs:{description:{component:"Базовое текстовое поле с очисткой и debounce. Ошибка отображается в тултипе по центру поля без сдвига формы, обычная подсказка привязана к иконке."}}},component:h,tags:["autodocs"],args:{variant:"default",disabled:!1,readonly:!1,error:!1,errorMessage:"Укажите ровно 4 цифры.",warning:!1,warningMessage:"Обычно здесь 4 цифры. Проверьте, нет ли опечатки.",name:"description",label:"Описание",hint:"Подсказка к полю: введите описание.",placeholder:"Введите текст",modelValue:"Текст",debounceMs:0,maxLength:void 0},argTypes:{variant:{control:"select",options:["default","success","error","warning"]},disabled:{control:"boolean"},readonly:{control:"boolean"},error:{control:"boolean"},errorMessage:{control:"text"},warning:{control:"boolean"},warningMessage:{control:"text"},name:{control:"text"},label:{control:"text"},placeholder:{control:"text"},hint:{control:"text"},modelValue:{control:"text"},debounceMs:{control:{type:"number",min:0}},maxLength:{control:{type:"number",min:0}},mask:{control:!1}},render:p=>({components:{FieldBase:h},setup(){const g=y(p.modelValue);return x(()=>p.modelValue,b=>{g.value=b}),{args:p,model:g}},template:`
      <div style="max-width: 360px;">
        <FieldBase
          v-bind="args"
          :model-value="model"
          @update:modelValue="model = $event; args.modelValue = $event"
        />
      </div>
    `})},e={name:"Песочница"},r={name:"Пустое поле",args:{modelValue:null},parameters:{docs:{description:{story:"Поле без значения показывает placeholder и не рендерит кнопку очистки."}}}},a={name:"С ошибкой",args:{error:!0}},n={name:"Ошибка с подсказкой",args:{error:!0,errorMessage:"Значение должно содержать ровно четыре цифры. Проверьте введённые данные и попробуйте снова.",hint:"Введите код из документа без пробелов и разделителей."}},s={name:"С предупреждением",args:{warning:!0,warningMessage:"Обычно здесь 9 или 13 цифр. Проверьте, нет ли опечатки.",hint:"ПИБ указан в решении о регистрации."},parameters:{docs:{description:{story:"Мягкая проверка: значение похоже на опечатку, но не блокирует дальнейшие действия. Если одновременно передана ошибка, показывается ошибка."}}}},o={name:"С ограничением длины",args:{label:"Комментарий",modelValue:"Коротко",maxLength:12}},t={name:"С подсказкой",args:{label:"ИНН",hint:"Укажите ИНН без пробелов и разделителей.",modelValue:null,placeholder:"Введите ИНН"}},c={name:"Короткая ошибка по центру поля",args:{error:!0,errorMessage:"Обязательное поле",hint:"",modelValue:null}},l={name:"Вариант success",args:{variant:"success"}},m={name:"Вариант warning",args:{variant:"warning"}},i={name:"Вариант error без ошибки валидации",args:{variant:"error",error:!1}},d={name:"Отключённое поле",args:{disabled:!0}},u={name:"Только чтение",args:{readonly:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Ошибка с подсказкой',
  args: {
    error: true,
    errorMessage: 'Значение должно содержать ровно четыре цифры. Проверьте введённые данные и попробуйте снова.',
    hint: 'Введите код из документа без пробелов и разделителей.'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'С предупреждением',
  args: {
    warning: true,
    warningMessage: 'Обычно здесь 9 или 13 цифр. Проверьте, нет ли опечатки.',
    hint: 'ПИБ указан в решении о регистрации.'
  },
  parameters: {
    docs: {
      description: {
        story: 'Мягкая проверка: значение похоже на опечатку, но не блокирует дальнейшие действия. Если одновременно передана ошибка, показывается ошибка.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'С ограничением длины',
  args: {
    label: 'Комментарий',
    modelValue: 'Коротко',
    maxLength: 12
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'С подсказкой',
  args: {
    label: 'ИНН',
    hint: 'Укажите ИНН без пробелов и разделителей.',
    modelValue: null,
    placeholder: 'Введите ИНН'
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Короткая ошибка по центру поля',
  args: {
    error: true,
    errorMessage: 'Обязательное поле',
    hint: '',
    modelValue: null
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Вариант success',
  args: {
    variant: 'success'
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Вариант warning',
  args: {
    variant: 'warning'
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Вариант error без ошибки валидации',
  args: {
    variant: 'error',
    error: false
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Отключённое поле',
  args: {
    disabled: true
  }
}`,...d.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Только чтение',
  args: {
    readonly: true
  }
}`,...u.parameters?.docs?.source}}};const L=["Playground","Empty","WithError","ErrorWithHint","WithWarning","WithMaxLength","WithHint","ShortError","Success","Warning","ErrorVariant","Disabled","Readonly"];export{d as Disabled,r as Empty,i as ErrorVariant,n as ErrorWithHint,e as Playground,u as Readonly,c as ShortError,l as Success,m as Warning,a as WithError,t as WithHint,o as WithMaxLength,s as WithWarning,L as __namedExportsOrder,E as default};
