import{I as n,a as e,b as c,c as a,d as r,e as t,f as s,g as m,h as p,i,j as d,k as I,l,m as u,n as g}from"./IconCompress-Dff2Ln9Q.js";import"./iframe-B-xi8IrK.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const v=[{name:"IconAdd",component:n},{name:"IconChevron",component:e},{name:"IconClose",component:c},{name:"IconCompress",component:a},{name:"IconCopy",component:r},{name:"IconEdit",component:t},{name:"IconExport",component:s},{name:"IconExpand",component:m},{name:"IconImport",component:p},{name:"IconInfo",component:i},{name:"IconLanguage",component:d},{name:"IconPDF",component:I},{name:"IconPrint",component:l},{name:"IconPreview",component:u},{name:"IconTrash",component:g}],C={title:"UI-Компоненты/Icons",parameters:{docs:{description:{component:"Набор SVG-иконок из `src/shared/ui/icons`. Иконки рендерятся как Vue-компоненты и обычно наследуют цвет через `currentColor`."}}},tags:["autodocs"],render:()=>({setup(){return{icons:v}},template:`
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(140px, 1fr)); gap: 12px;">
        <div
          v-for="icon in icons"
          :key="icon.name"
          style="display: grid; gap: 8px; justify-items: center; padding: 16px; border-radius: 8px; background: var(--color-background-surface); box-shadow: var(--shadow); color: var(--color-text-default);"
        >
          <component :is="icon.component" style="width: 32px; height: 32px;" />
          <code>{{ icon.name }}</code>
        </div>
      </div>
    `})},o={name:"Обзор"};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Обзор'
}`,...o.parameters?.docs?.source}}};const w=["Overview"];export{o as Overview,w as __namedExportsOrder,C as default};
