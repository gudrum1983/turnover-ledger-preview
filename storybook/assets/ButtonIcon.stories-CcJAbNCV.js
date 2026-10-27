import{_ as g}from"./IconCopy-CTzrAGLk.js";import{B as u}from"./ButtonIcon-ZFVq4vjJ.js";import"./iframe-5uU7VOe4.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const S={title:"UI-V2-Компоненты/ButtonIcon",component:u,tags:["autodocs"],parameters:{docs:{description:{component:"Кнопка только с иконкой. Обязательный aria-label задаёт доступное название. Основной слот получает размер иконки."}}},args:{variant:"page",touchTarget:!1,size:"l",type:"button",disabled:!1,ariaLabel:"Загрузить данные"},argTypes:{variant:{control:"select",options:["page","accent","success","danger","card"]},touchTarget:{control:"boolean"},size:{control:"select",options:["m","l"]},type:{control:"select",options:["button","submit","reset"]},disabled:{control:"boolean"},ariaLabel:{control:"text"}},render:d=>({components:{ButtonIcon:u,IconUpload:g},setup:()=>({props:d}),template:'<ButtonIcon v-bind="props" v-slot="{ size }"><IconUpload :size="size" /></ButtonIcon>'})},e={name:"Песочница"},a={name:"Неактивная",args:{disabled:!0}},r={args:{variant:"page"}},s={args:{variant:"accent"}},o={args:{variant:"success"}},t={args:{variant:"danger"}},n={args:{variant:"card"}},c={name:"M — 40 px",args:{size:"m"}},p={name:"L — 48 px",args:{size:"l"}},m={name:"Сенсорная M — 32 px, область нажатия 40 px",args:{touchTarget:!0,size:"m"}},i={name:"Сенсорная L — 40 px, область нажатия 48 px",args:{touchTarget:!0,size:"l"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Песочница'
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Неактивная',
  args: {
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'page'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'accent'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success'
  }
}`,...o.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger'
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'card'
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'M — 40 px',
  args: {
    size: 'm'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'L — 48 px',
  args: {
    size: 'l'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Сенсорная M — 32 px, область нажатия 40 px',
  args: {
    touchTarget: true,
    size: 'm'
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Сенсорная L — 40 px, область нажатия 48 px',
  args: {
    touchTarget: true,
    size: 'l'
  }
}`,...i.parameters?.docs?.source}}};const T=["Playground","Disabled","Page","Accent","Success","Danger","Card","Medium","Large","TouchMedium","TouchLarge"];export{s as Accent,n as Card,t as Danger,a as Disabled,p as Large,c as Medium,r as Page,e as Playground,o as Success,i as TouchLarge,m as TouchMedium,T as __namedExportsOrder,S as default};
