const a=[{className:"Text_AlginLeft",label:"Text_AlginLeft",heading:"Выравнивание влево"},{className:"Text_AlginCenter",label:"Text_AlginCenter",heading:"Выравнивание по центру"},{className:"Text_AlginRight",label:"Text_AlginRight",heading:"Выравнивание вправо"}],s={title:"UI-Утилиты/Text",parameters:{docs:{description:{component:"Глобальные классы выравнивания текста из `src/app/styles/typography.css`. История помогает быстро увидеть разницу на одинаковом содержимом."}}},tags:["autodocs"],render:()=>({setup(){return{alignSamples:a}},template:`
      <div style="display: grid; gap: 20px;">
        <div
          v-for="sample in alignSamples"
          :key="sample.className"
          style="display: grid; gap: 8px;"
        >
          <code style="color: var(--color-text-caption);">{{ sample.label }}</code>
          <div
            :class="sample.className"
            class="Typo_Body"
            style="padding: 16px; border-radius: 8px; background: var(--color-background-surface); box-shadow: var(--shadow);"
          >
            <p class="Typo_BodyAccent">{{ sample.heading }}</p>
            <p>Сумма оборота за период: 128 540,00 RSD</p>
          </div>
        </div>
      </div>
    `})},e={name:"Обзор",parameters:{docs:{source:{code:`
<div class="Text_AlginCenter Typo_Body">
  <p class="Typo_BodyAccent">Выравнивание по центру</p>
  <p>Сумма оборота за период: 128 540,00 RSD</p>
</div>
        `.trim()}}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
  name: 'Обзор',
  parameters: {
    docs: {
      source: {
        code: \`
<div class="Text_AlginCenter Typo_Body">
  <p class="Typo_BodyAccent">Выравнивание по центру</p>
  <p>Сумма оборота за период: 128 540,00 RSD</p>
</div>
        \`.trim()
      }
    }
  }
}`,...e.parameters?.docs?.source}}};const t=["Overview"];export{e as Overview,t as __namedExportsOrder,s as default};
