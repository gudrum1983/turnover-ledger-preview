import{T as o}from"./TooltipBase-D8tMQvOB.js";import"./iframe-ChIdGxoT.js";import"./preload-helper-PPVm8Dsz.js";import"./number-CUgYXyyM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const d={title:"UI-V2-Компоненты/TooltipBase",component:o,tags:["autodocs"],parameters:{docs:{description:{component:"Внешний вид подсказки. Содержимое передаётся в слот; позиционирование и показ задаёт TooltipWrapper."}}},args:{default:"Текст подсказки"},argTypes:{maxWidth:{control:{type:"number",min:0}},default:{control:"text",description:"Содержимое подсказки"}},render:({default:r,...a})=>({components:{TooltipBase:o},setup:()=>({props:a,text:r}),template:'<TooltipBase v-bind="props">{{ text }}</TooltipBase>'})},e={name:"Песочница"},t={name:"Перенос длинного текста",args:{maxWidth:180,default:"Подсказка с длинным текстом переносится внутри заданной максимальной ширины."}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Песочница'
}`,...e.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Перенос длинного текста',
  args: {
    maxWidth: 180,
    default: 'Подсказка с длинным текстом переносится внутри заданной максимальной ширины.'
  }
}`,...t.parameters?.docs?.source}}};const c=["Playground","LimitedWidth"];export{t as LimitedWidth,e as Playground,c as __namedExportsOrder,d as default};
