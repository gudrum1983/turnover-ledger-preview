import{D as t}from"./DividerBase-DxdkbEuG.js";import"./iframe-BW9EOg_C.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const o={title:"UI-V2-Компоненты/DividerBase",component:t,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Горизонтальная линия: 3 px в центре, плавно сужается до 1 px по краям. Ширина — 100% контейнера. Цвет задаётся CSS-переменной --divider-color."}}}},e={name:"По умолчанию"},r={name:"Разная ширина",render:()=>({components:{DividerBase:t},template:`<div style="display: flex; flex-direction: column; gap: 32px">
      <DividerBase style="width: 120px" />
      <DividerBase style="width: 320px; max-width: 100%" />
      <DividerBase />
    </div>`})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'По умолчанию'
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Разная ширина',
  render: () => ({
    components: {
      DividerBase
    },
    template: \`<div style="display: flex; flex-direction: column; gap: 32px">
      <DividerBase style="width: 120px" />
      <DividerBase style="width: 320px; max-width: 100%" />
      <DividerBase />
    </div>\`
  })
}`,...r.parameters?.docs?.source}}};const n=["Default","Widths"];export{e as Default,r as Widths,n as __namedExportsOrder,o as default};
