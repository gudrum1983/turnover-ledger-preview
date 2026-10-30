import{_ as l}from"./IconPen-BMC76QhC.js";import{B as u}from"./ButtonIcon-B9sHYQd3.js";import"./iframe-CUmsbM2s.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const T={title:"UI-V2-Компоненты/ButtonIcon",component:u,tags:["autodocs"],parameters:{docs:{description:{component:"Кнопка только с иконкой. Обязательный aria-label задаёт доступное название. Основной слот получает размер иконки."}}},args:{variant:"page",touchTarget:!1,size:"l",type:"button",disabled:!1,ariaLabel:"Загрузить данные"},argTypes:{variant:{control:"select",options:["page","accent","success","danger","card","danger-card"]},touchTarget:{control:"boolean"},size:{control:"select",options:["m","l"]},type:{control:"select",options:["button","submit","reset"]},disabled:{control:"boolean"},ariaLabel:{control:"text"}},render:g=>({components:{ButtonIcon:u,IconUpload:l},setup:()=>({props:g}),template:'<ButtonIcon v-bind="props" v-slot="{ size }"><IconUpload :size="size" /></ButtonIcon>'})},r={name:"Песочница"},a={name:"Неактивная",args:{disabled:!0}},e={args:{variant:"page"}},s={args:{variant:"accent"}},o={args:{variant:"success"}},n={args:{variant:"danger"}},t={args:{variant:"card"}},c={args:{variant:"danger-card"}},p={name:"M — 40 px",args:{size:"m"}},m={name:"L — 48 px",args:{size:"l"}},d={name:"Сенсорная M — 32 px, область нажатия 40 px",args:{touchTarget:!0,size:"m"}},i={name:"Сенсорная L — 40 px, область нажатия 48 px",args:{touchTarget:!0,size:"l"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Песочница'
}`,...r.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Неактивная',
  args: {
    disabled: true
  }
}`,...a.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'page'
  }
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'accent'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger'
  }
}`,...n.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'card'
  }
}`,...t.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger-card'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'M — 40 px',
  args: {
    size: 'm'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'L — 48 px',
  args: {
    size: 'l'
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Сенсорная M — 32 px, область нажатия 40 px',
  args: {
    touchTarget: true,
    size: 'm'
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Сенсорная L — 40 px, область нажатия 48 px',
  args: {
    touchTarget: true,
    size: 'l'
  }
}`,...i.parameters?.docs?.source}}};const h=["Playground","Disabled","Page","Accent","Success","Danger","Card","DangerCard","Medium","Large","TouchMedium","TouchLarge"];export{s as Accent,t as Card,n as Danger,c as DangerCard,a as Disabled,m as Large,p as Medium,e as Page,r as Playground,o as Success,i as TouchLarge,d as TouchMedium,h as __namedExportsOrder,T as default};
