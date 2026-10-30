import{I as n}from"./IconPen-BMC76QhC.js";import{D as o}from"./DisclosureChevron-BUaZJDwM.js";import"./iframe-CUmsbM2s.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const d={title:"UI-V2-Компоненты/DisclosureChevron",component:o,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Индикатор раскрытия: направлен вниз в закрытом состоянии и вверх в открытом. При изменении open направление меняется с анимацией. Сам компонент не обрабатывает нажатия."}}},args:{open:!1,size:"xl"},argTypes:{open:{control:"boolean"},size:{control:"select",options:Object.keys(n)}}},e={name:"Песочница"},s={name:"Открытый",args:{open:!0}},r={name:"Размеры",render:a=>({components:{DisclosureChevron:o},setup(){return{args:a,sizes:Object.keys(n)}},template:`
      <div style="display: flex; align-items: center; gap: 24px;">
        <div v-for="size in sizes" :key="size" style="display: grid; justify-items: center; gap: 8px;">
          <DisclosureChevron v-bind="args" :size="size" />
          <span>{{ size }}</span>
        </div>
      </div>
    `})};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Песочница'
}`,...e.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Открытый',
  args: {
    open: true
  }
}`,...s.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Размеры',
  render: args => ({
    components: {
      DisclosureChevron
    },
    setup() {
      return {
        args,
        sizes: Object.keys(ICON_SIZES)
      };
    },
    template: \`
      <div style="display: flex; align-items: center; gap: 24px;">
        <div v-for="size in sizes" :key="size" style="display: grid; justify-items: center; gap: 8px;">
          <DisclosureChevron v-bind="args" :size="size" />
          <span>{{ size }}</span>
        </div>
      </div>
    \`
  })
}`,...r.parameters?.docs?.source}}};const l=["Playground","Open","Sizes"];export{s as Open,e as Playground,r as Sizes,l as __namedExportsOrder,d as default};
