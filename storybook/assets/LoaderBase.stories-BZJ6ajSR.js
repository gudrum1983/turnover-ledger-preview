import{L as r}from"./LoaderBase-DJQ4Z25N.js";import"./iframe-1VcLbHp9.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const n={title:"UI-Компоненты/LoaderBase",parameters:{docs:{description:{component:"Базовый точечный лоадер. Размер управляется пропсом `size`, а цвет наследуется через `currentColor` от родительского контейнера."}}},component:r,tags:["autodocs"],args:{size:"md"},argTypes:{size:{control:"select",options:["xs","sm","md","lg"]}},render:t=>({components:{LoaderBase:r},setup(){return{args:t}},template:`
      <div style="display: inline-flex; align-items: center; justify-content: center; min-width: 64px; min-height: 64px; color: var(--color-text-primary);">
        <LoaderBase v-bind="args" />
      </div>
    `})},e={name:"Песочница"},s={name:"По умолчанию"},a={name:"Размеры",parameters:{controls:{disable:!0},docs:{description:{story:"Сравнение размеров лоадера для разных сценариев, включая компактные кнопки."}}},render:()=>({components:{LoaderBase:r},template:`
      <div
        style="
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(96px, 1fr));
          gap: 16px;
          align-items: start;
          color: var(--color-text-primary);
        "
      >
        <div style="display: grid; gap: 8px; justify-items: center;">
          <LoaderBase size="xs" />
          <span>xs</span>
        </div>
        <div style="display: grid; gap: 8px; justify-items: center;">
          <LoaderBase size="sm" />
          <span>sm</span>
        </div>
        <div style="display: grid; gap: 8px; justify-items: center;">
          <LoaderBase size="md" />
          <span>md</span>
        </div>
        <div style="display: grid; gap: 8px; justify-items: center;">
          <LoaderBase size="lg" />
          <span>lg</span>
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
          color: var(--color-text-primary);
        "
      >
        <div style="display: grid; gap: 8px; justify-items: center;">
          <LoaderBase size="xs" />
          <span>xs</span>
        </div>
        <div style="display: grid; gap: 8px; justify-items: center;">
          <LoaderBase size="sm" />
          <span>sm</span>
        </div>
        <div style="display: grid; gap: 8px; justify-items: center;">
          <LoaderBase size="md" />
          <span>md</span>
        </div>
        <div style="display: grid; gap: 8px; justify-items: center;">
          <LoaderBase size="lg" />
          <span>lg</span>
        </div>
      </div>
    \`
  })
}`,...a.parameters?.docs?.source}}};const m=["Playground","Default","Sizes"];export{s as Default,e as Playground,a as Sizes,m as __namedExportsOrder,n as default};
