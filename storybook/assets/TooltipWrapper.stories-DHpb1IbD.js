import{T as a}from"./TooltipWrapper-DgyvVIV2.js";import{B as s}from"./ButtonBase-Clm-vs0a.js";import"./iframe-BZl0OYes.js";import"./preload-helper-PPVm8Dsz.js";import"./TooltipBase-5vKGYe88.js";import"./number-CUgYXyyM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const l={title:"UI-V2-Компоненты/TooltipWrapper",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Показывает подсказку при наведении и фокусе внутри обёртки. Наведите указатель на кнопку или перейдите к ней клавишей Tab. Подсказка смещается у границ экрана."}}},args:{text:"Дополнительная информация",maxWidth:240},argTypes:{text:{control:"text"},maxWidth:{control:{type:"number",min:0}},size:{control:!1}},render:o=>({components:{TooltipWrapper:a,ButtonBase:s},setup:()=>({args:o}),template:'<TooltipWrapper v-bind="args"><ButtonBase>Подробнее</ButtonBase></TooltipWrapper>'})},e={name:"Наведение и фокус"},r={name:"Длинная подсказка",args:{text:"Длинная подсказка переносится на несколько строк при ограниченной ширине.",maxWidth:180}},t={name:"У края экрана",parameters:{layout:"padded"}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Наведение и фокус'
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Длинная подсказка',
  args: {
    text: 'Длинная подсказка переносится на несколько строк при ограниченной ширине.',
    maxWidth: 180
  }
}`,...r.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'У края экрана',
  parameters: {
    layout: 'padded'
  }
}`,...t.parameters?.docs?.source}}};const g=["Playground","LongText","NearViewportEdge"];export{r as LongText,t as NearViewportEdge,e as Playground,g as __namedExportsOrder,l as default};
