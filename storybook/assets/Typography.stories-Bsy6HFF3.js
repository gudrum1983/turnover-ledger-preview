const o=[{name:"Заголовки — Oswald",classes:["u-typo-h1-l","u-typo-h1-m","u-typo-h2-l","u-typo-h2-m","u-typo-subtitle-l","u-typo-subtitle-m","u-typo-title"]},{name:"Интерфейс — Inter",classes:["u-typo-body-l","u-typo-body-m","u-typo-button-l","u-typo-button-m","u-typo-label-l","u-typo-label-m","u-typo-label-s","u-typo-body-small-l","u-typo-body-small-m","u-typo-body-small-s"]},{name:"Отчёты — Open Sans",classes:["u-typo-report-title","u-typo-report-table-accent","u-typo-report-body-accent","u-typo-report-body"]}],t={title:"UI-V2-Утилиты/Typography",tags:["autodocs"],parameters:{docs:{description:{component:"Типографика v2 из `src/app/styles/utilities/_typography.scss`. Параметры шрифтов заданы в `src/app/styles/tokens/_typography.scss`. Примеры используют настоящие CSS-классы приложения."}}},args:{text:"Оборотная ведомость · Turnover ledger · 1 234,56 ₽",color:"#172021",uppercase:!1},argTypes:{text:{control:"text",description:"Текст для сравнения всех начертаний"},color:{control:"color"},uppercase:{control:"boolean",description:"Добавляет класс u-uppercase"}},render:s=>({setup:()=>({args:s,groups:o}),template:`
      <div :style="{ color: args.color }" style="display: grid; gap: 32px;">
        <section v-for="group in groups" :key="group.name" style="display: grid; gap: 16px;">
          <h2 class="u-typo-title">{{ group.name }}</h2>
          <div v-for="className in group.classes" :key="className" style="display: grid; gap: 8px; padding: 16px; border: 1px solid var(--neutral-200); border-radius: 8px;">
            <code>{{ className }}{{ args.uppercase ? ' + u-uppercase' : '' }}</code>
            <p :class="[className, { 'u-uppercase': args.uppercase }]" style="overflow-wrap: anywhere;">{{ args.text }}</p>
          </div>
        </section>
      </div>
    `})},e={name:"Типографика"};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Типографика'
}`,...e.parameters?.docs?.source}}};const p=["Default"];export{e as Default,p as __namedExportsOrder,t as default};
