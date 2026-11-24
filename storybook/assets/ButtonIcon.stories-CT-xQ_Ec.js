import{_ as l}from"./IconPen-BdD3M31d.js";import{B as u}from"./ButtonIcon-BNynnWLm.js";import"./iframe-BFOD41o9.js";import"./preload-helper-PPVm8Dsz.js";import"./index-ppLQxLoo.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const h={title:"UI-V2-Компоненты/ButtonIcon",component:u,tags:["autodocs"],parameters:{docs:{description:{component:"Кнопка только с иконкой. Обязательный aria-label задаёт доступное название. Основной слот получает размер иконки."}}},args:{variant:"page",touchTarget:"auto",size:"l",type:"button",disabled:!1,ariaLabel:"Загрузить данные"},argTypes:{variant:{control:"select",options:["page","accent","success","danger","card","danger-card"]},touchTarget:{control:"select",options:["auto",!0,!1],description:"auto — сенсорный вид включается сам, когда основное устройство ввода — палец (pointer: coarse)"},size:{control:"select",options:["m","l"]},type:{control:"select",options:["button","submit","reset"]},disabled:{control:"boolean"},ariaLabel:{control:"text"}},render:g=>({components:{ButtonIcon:u,IconUpload:l},setup:()=>({props:g}),template:'<ButtonIcon v-bind="props" v-slot="{ size }"><IconUpload :size="size" /></ButtonIcon>'})},r={name:"Песочница"},e={name:"Неактивная",args:{disabled:!0}},a={args:{variant:"page"}},s={args:{variant:"accent"}},o={args:{variant:"success"}},t={args:{variant:"danger"}},n={args:{variant:"card"}},c={args:{variant:"danger-card"}},p={name:"M — 40 px, иконка 16 px",args:{size:"m"}},m={name:"L — 48 px, иконка 24 px",args:{size:"l"}},i={name:"Сенсорная M — 32 px, область нажатия 40 px, иконка 16 px",args:{touchTarget:!0,size:"m"}},d={name:"Сенсорная L — 40 px, область нажатия 48 px, иконка 18 px",args:{touchTarget:!0,size:"l"}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Песочница'
}`,...r.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Неактивная',
  args: {
    disabled: true
  }
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'page'
  }
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
  args: {
    variant: 'danger-card'
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'M — 40 px, иконка 16 px',
  args: {
    size: 'm'
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'L — 48 px, иконка 24 px',
  args: {
    size: 'l'
  }
}`,...m.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Сенсорная M — 32 px, область нажатия 40 px, иконка 16 px',
  args: {
    touchTarget: true,
    size: 'm'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Сенсорная L — 40 px, область нажатия 48 px, иконка 18 px',
  args: {
    touchTarget: true,
    size: 'l'
  }
}`,...d.parameters?.docs?.source}}};const L=["Playground","Disabled","Page","Accent","Success","Danger","Card","DangerCard","Medium","Large","TouchMedium","TouchLarge"];export{s as Accent,n as Card,t as Danger,c as DangerCard,e as Disabled,m as Large,p as Medium,a as Page,r as Playground,o as Success,d as TouchLarge,i as TouchMedium,L as __namedExportsOrder,h as default};
