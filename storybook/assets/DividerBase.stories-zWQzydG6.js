import{D as t}from"./DividerBase-Cs-rXHUH.js";import"./iframe-BZl0OYes.js";import"./preload-helper-PPVm8Dsz.js";import"./number-CUgYXyyM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const d={title:"UI-Компоненты/DividerBase",parameters:{docs:{description:{component:"Разделитель для горизонтальных и вертикальных раскладок. Поддерживает стиль линии, цветовой токен, толщину, подпись и отступы от краёв."}}},component:t,tags:["autodocs"],args:{thickness:1,lineStyle:"solid",color:"default",isVertical:!1,label:"Раздел",labelPosition:"center",labelOffset:0,edgeOffset:0},argTypes:{thickness:{control:{type:"number",min:1,max:20}},lineStyle:{control:"select",options:["solid","dashed","dotted","double","groove","ridge"]},color:{control:"select",options:["base","table","default","primary","info","success","warning","danger","ring","disabled","table-cell"]},isVertical:{control:"boolean"},label:{control:"text"},labelPosition:{control:"select",options:["left","center","right"]},labelOffset:{control:{type:"number",min:0}},edgeOffset:{control:{type:"number",min:0}}},render:o=>({components:{DividerBase:t},setup(){return{args:o}},template:`
      <div :style="{ height: args.isVertical ? '160px' : 'auto', display: 'flex', alignItems: 'stretch' }">
        <DividerBase v-bind="args" />
      </div>
    `})},e={name:"Песочница",parameters:{docs:{description:{story:"Интерактивная история для проверки линии, подписи, цвета и ориентации разделителя."}}}},r={name:"Без подписи",args:{label:""}},s={name:"Пунктирный primary",args:{label:"Итоги",lineStyle:"dashed",color:"primary",thickness:2}},a={name:"Вертикальный",args:{isVertical:!0,label:"Не отображается",color:"primary",thickness:2},parameters:{docs:{description:{story:"Вертикальный разделитель не показывает подпись, потому что подпись поддержана только для горизонтальной ориентации."}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Песочница',
  parameters: {
    docs: {
      description: {
        story: 'Интерактивная история для проверки линии, подписи, цвета и ориентации разделителя.'
      }
    }
  }
}`,...e.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Без подписи',
  args: {
    label: ''
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Пунктирный primary',
  args: {
    label: 'Итоги',
    lineStyle: 'dashed',
    color: 'primary',
    thickness: 2
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Вертикальный',
  args: {
    isVertical: true,
    label: 'Не отображается',
    color: 'primary',
    thickness: 2
  },
  parameters: {
    docs: {
      description: {
        story: 'Вертикальный разделитель не показывает подпись, потому что подпись поддержана только для горизонтальной ориентации.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};const p=["Playground","WithoutLabel","DashedPrimary","Vertical"];export{s as DashedPrimary,e as Playground,a as Vertical,r as WithoutLabel,p as __namedExportsOrder,d as default};
