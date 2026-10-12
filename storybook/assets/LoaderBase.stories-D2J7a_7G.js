import{L as r}from"./LoaderBase-bWr6m4cK.js";import"./iframe-1VcLbHp9.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const d={title:"UI-V2-Компоненты/LoaderBase",parameters:{docs:{description:{component:"Кольцевой лоадер с вращением шагами по 15°. Использует SVG дизайнера: `s` — 18 px, `m` — 22 px. Цвет и толщина заданы в самих SVG."}}},component:r,tags:["autodocs"],args:{size:"m"},argTypes:{size:{control:"select",options:["s","m"]}},render:t=>({components:{LoaderBase:r},setup(){return{args:t}},template:`
      <div style="display: inline-flex; align-items: center; justify-content: center; min-width: 64px; min-height: 64px;">
        <LoaderBase v-bind="args" />
      </div>
    `})},e={name:"Песочница"},s={name:"По умолчанию"},a={name:"Размеры",parameters:{controls:{disable:!0},docs:{description:{story:"Сравнение размеров лоадера для разных сценариев, включая компактные кнопки."}}},render:()=>({components:{LoaderBase:r},template:`
      <div
        style="
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(96px, 1fr));
          gap: 16px;
          align-items: start;
        "
      >
        <div style="display: grid; gap: 8px; justify-items: center;">
          <LoaderBase size="s" />
          <span>s</span>
        </div>
        <div style="display: grid; gap: 8px; justify-items: center;">
          <LoaderBase size="m" />
          <span>m</span>
        </div>
      </div>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Песочница'
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'По умолчанию'
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Размеры',
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Сравнение размеров лоадера для разных сценариев, включая компактные кнопки.'
      }
    }
  },
  render: () => ({
    components: {
      LoaderBase
    },
    template: \`
      <div
        style="
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(96px, 1fr));
          gap: 16px;
          align-items: start;
        "
      >
        <div style="display: grid; gap: 8px; justify-items: center;">
          <LoaderBase size="s" />
          <span>s</span>
        </div>
        <div style="display: grid; gap: 8px; justify-items: center;">
          <LoaderBase size="m" />
          <span>m</span>
        </div>
      </div>
    \`
  })
}`,...a.parameters?.docs?.source}}};const m=["Playground","Default","Sizes"];export{s as Default,e as Playground,a as Sizes,m as __namedExportsOrder,d as default};
