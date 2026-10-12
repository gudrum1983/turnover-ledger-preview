import{P as r}from"./PaperBase-BZraI9cH.js";import"./iframe-1VcLbHp9.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const m={title:"UI-Компоненты/PaperBase",parameters:{docs:{description:{component:"Базовая поверхность для карточек и модальных контейнеров. Компонент задаёт фон, внутренние отступы, скругление и тень."}}},component:r,tags:["autodocs"],argTypes:{default:{control:"text",description:"Содержимое поверхности",table:{type:{summary:"VNode"}}}},args:{default:"Контент внутри PaperBase"},render:t=>({components:{PaperBase:r},setup(){return{args:t}},template:`
      <PaperBase style="max-width: 420px;">
        <p class="Typo_Body">{{ args.default }}</p>
      </PaperBase>
    `})},e={name:"Песочница"},a={name:"С контентом",args:{default:"Поверхность отделяет смысловой блок от фона страницы."}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Песочница'
}`,...e.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'С контентом',
  args: {
    default: 'Поверхность отделяет смысловой блок от фона страницы.'
  }
}`,...a.parameters?.docs?.source}}};const c=["Playground","WithContent"];export{e as Playground,a as WithContent,c as __namedExportsOrder,m as default};
