import{a as i,b as c,c as r,d as l,e as p,f as d,g as m,h as _,i as f,j as x,k as y,l as g,m as z,n as u,o as I,p as v,q as h,r as $,s as b,t as w,u as k,v as C,w as O,x as S,y as j,_ as A,I as a}from"./IconPen-BMC76QhC.js";import"./iframe-CUmsbM2s.js";import"./preload-helper-PPVm8Dsz.js";const P=Object.freeze(Object.defineProperty({__proto__:null,IconAddCircle:i,IconArrowDown:c,IconArrowLeft:r,IconArrowRight:l,IconArrowUp:p,IconBack:d,IconCalculator:m,IconCalendar:_,IconCheckCircle:f,IconClose:x,IconCopy:y,IconDangerCircle:g,IconDownload:z,IconEye:u,IconGlobal:I,IconInfoCircle:v,IconLetter:h,IconMenu:$,IconPen:b,IconPenCircle:w,IconPrinter:k,IconQuestion:C,IconRepeat:O,IconSettings:S,IconTrash:j,IconUpload:A},Symbol.toStringTag,{value:"Module"})),t=Object.entries(P).map(([e,n])=>({name:e,component:n})),D=Object.entries(a).map(([e,n])=>({name:e,...n})),L={title:"UI-V2-Компоненты/Icons",tags:["autodocs"],parameters:{docs:{description:{component:"Иконки из `src/shared/ui-v2/icons`. Цвет наследуется от родительского контейнера через currentColor. Размеры: s — 16 px, m — 18 px, l — 22 px, xl — 24 px."}}},args:{size:"xl",color:"#172021"},argTypes:{size:{control:"select",options:Object.keys(a),description:"Размер иконок: s — 16 px, m — 18 px, l — 22 px, xl — 24 px."},color:{control:"color",description:"Цвет контейнера для демонстрации currentColor; не является пропсом иконок."}},render:e=>({setup:()=>({args:e,icons:t}),template:`
      <div :style="{ color: args.color }" style="display: grid; grid-template-columns: repeat(auto-fill, minmax(160px, 1fr)); gap: 16px;">
        <div v-for="icon in icons" :key="icon.name" style="display: grid; justify-items: center; gap: 12px; padding: 16px; border: 1px solid var(--neutral-200); border-radius: 8px;">
          <component :is="icon.component" :size="args.size" />
          <code>{{ icon.name }}</code>
        </div>
      </div>
    `})},s={name:"Обзор"},o={name:"Размеры",parameters:{controls:{exclude:["size"]}},render:e=>({setup:()=>({args:e,icons:t,sizes:D}),template:`
      <div style="overflow-x: auto;" :style="{ color: args.color }">
        <table style="border-collapse: collapse; text-align: center;">
          <thead>
            <tr>
              <th scope="col" style="padding: 12px; text-align: left;">Иконка</th>
              <th v-for="size in sizes" :key="size.name" scope="col" style="padding: 12px; min-width: 120px;">
                <div>{{ size.name }} · {{ size.dimension }} px</div>
                <small>Обводка {{ size.strokeWidth }} px</small>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="icon in icons" :key="icon.name" style="border-top: 1px solid var(--neutral-200);">
              <th scope="row" style="padding: 12px; text-align: left;"><code>{{ icon.name }}</code></th>
              <td v-for="size in sizes" :key="size.name" style="padding: 12px;">
                <component :is="icon.component" :size="size.name" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    `})};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Обзор'
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Размеры',
  parameters: {
    controls: {
      exclude: ['size']
    }
  },
  render: args => ({
    setup: () => ({
      args,
      icons,
      sizes
    }),
    template: \`
      <div style="overflow-x: auto;" :style="{ color: args.color }">
        <table style="border-collapse: collapse; text-align: center;">
          <thead>
            <tr>
              <th scope="col" style="padding: 12px; text-align: left;">Иконка</th>
              <th v-for="size in sizes" :key="size.name" scope="col" style="padding: 12px; min-width: 120px;">
                <div>{{ size.name }} · {{ size.dimension }} px</div>
                <small>Обводка {{ size.strokeWidth }} px</small>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="icon in icons" :key="icon.name" style="border-top: 1px solid var(--neutral-200);">
              <th scope="row" style="padding: 12px; text-align: left;"><code>{{ icon.name }}</code></th>
              <td v-for="size in sizes" :key="size.name" style="padding: 12px;">
                <component :is="icon.component" :size="size.name" />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    \`
  })
}`,...o.parameters?.docs?.source}}};const M=["Overview","Sizes"];export{s as Overview,o as Sizes,M as __namedExportsOrder,L as default};
