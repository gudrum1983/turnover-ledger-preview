import{B as p}from"./ButtonBase-BiWuhZN8.js";import"./iframe-B-xi8IrK.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const S={title:"UI-V2-Компоненты/ButtonBase",component:p,tags:["autodocs"],parameters:{docs:{description:{component:"Текстовая кнопка."}}},args:{variant:"page",size:"l",type:"button",disabled:!1,default:"Загрузить данные",fullWidth:!1},argTypes:{variant:{control:"select",options:["page","accent","success","danger","card"]},size:{control:"select",options:["l","m"]},type:{control:"select",options:["button","submit","reset"]},disabled:{control:"boolean"},default:{control:"text"},fullWidth:{control:"boolean"}},render:({default:i,...u})=>({components:{ButtonBase:p},setup:()=>({props:u,label:i}),template:'<ButtonBase v-bind="props">{{ label }}</ButtonBase>'})},e={name:"Песочница"},a={name:"Размер M",args:{size:"m"}},r={name:"Размер L",args:{size:"l"}},s={name:"Неактивная",args:{disabled:!0}},t={args:{variant:"page"}},o={args:{variant:"accent"}},n={args:{variant:"success"}},c={args:{variant:"danger"}},d={args:{variant:"card"}},m={name:"На всю ширину",args:{fullWidth:!0}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Песочница'
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Размер M',
  args: {
    size: 'm'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Размер L',
  args: {
    size: 'l'
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Неактивная',
  args: {
    disabled: true
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'page'
  }
}`,...t.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'accent'
  }
}`,...o.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success'
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger'
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'card'
  }
}`,...d.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'На всю ширину',
  args: {
    fullWidth: true
  }
}`,...m.parameters?.docs?.source}}};const f=["Playground","Medium","Large","Disabled","Page","Accent","Success","Danger","Card","FullWidth"];export{o as Accent,d as Card,c as Danger,s as Disabled,m as FullWidth,r as Large,a as Medium,t as Page,e as Playground,n as Success,f as __namedExportsOrder,S as default};
