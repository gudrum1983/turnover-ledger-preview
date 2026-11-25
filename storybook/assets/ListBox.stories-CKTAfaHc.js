import{r as l,w as d}from"./iframe-DpJq971z.js";import{L as i}from"./ListBoxExpand-DqEj3wBJ.js";import"./preload-helper-PPVm8Dsz.js";import"./DividerBase-Dx9AvZie.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./TooltipBase-D5OHRAiq.js";const c=["EUR","USD","RSD","GBP","CHF","JPY","CNY","RUB","CAD","AUD"],b={title:"UI-V2-Компоненты/ListBox",component:i,tags:["autodocs"],parameters:{docs:{description:{component:"Список вариантов для выпадающих компонентов (ButtonDropdown, FieldCombobox). Избранные варианты показываются вверху и отделяются разделителем; в слот footer можно положить строку после пунктов (например, «Ещё»). Обрезанный многоточием текст пункта показывается в тултипе. Высоту списка задаёт родитель; если в списке есть разделитель, к ней прибавляется --list-box-divider-space."}}},args:{options:c.map(e=>({value:e,label:e})),modelValue:void 0,favorites:[]},argTypes:{modelValue:{control:"text"},options:{control:"object"},favorites:{control:"object"}},render:e=>({components:{ListBox:i},setup(){const o=l(e.modelValue);return d(()=>e.modelValue,p=>{o.value=p}),{args:e,value:o}},template:'<div style="width: 280px"><ListBox v-bind="args" v-model="value" style="max-height: calc(226px + var(--list-box-divider-space, 0px))" /><p style="margin: 0; padding-top: 24px">Значение: {{ value ?? "undefined" }}</p></div>'})},t={name:"Обычный"},a={name:"С выбранным значением",args:{modelValue:"EUR"}},r={name:"С избранными",args:{favorites:["RSD","EUR","USD"],modelValue:"EUR"}},n={name:"С кнопкой внизу",args:{favorites:["RSD","EUR","USD"]},render:e=>({components:{ListBox:i},setup(){const o=l(e.modelValue);return{args:e,value:o}},template:`
      <div style="width: 280px">
        <ListBox v-bind="args" v-model="value" :options="args.options.filter((option) => args.favorites.includes(option.value))">
          <template #footer>
            <button type="button" class="u-typo-body-m" style="min-height: 40px; padding: 0 16px; border: none; background: none; text-align: left; color: var(--neutral-600); cursor: pointer">
              Ещё
            </button>
          </template>
        </ListBox>
      </div>`})},s={name:"С описаниями и длинным текстом",args:{favorites:["RSD","EUR"],options:[{value:"RSD",label:"RSD",description:"· Сербский динар"},{value:"EUR",label:"EUR",description:"= 117,1734 RSD · Евро"},{value:"USD",label:"USD",description:"= 100,5432 RSD · Доллар США"},{value:"XDR",label:"XDR",description:"= 150,1234 RSD · СДР (специальные права заимствования)"},{value:"DEM",label:"DEM",description:"= 59,9093 RSD · Немецкая марка"},{value:"CHF",label:"CHF",description:"= 125,4321 RSD · Швейцарский франк"},{value:"HUF",label:"HUF",description:"100 = 28,1234 RSD · Венгерский форинт"}]}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Обычный'
}`,...t.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'С выбранным значением',
  args: {
    modelValue: 'EUR'
  }
}`,...a.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'С избранными',
  args: {
    favorites: ['RSD', 'EUR', 'USD'],
    modelValue: 'EUR'
  }
}`,...r.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'С кнопкой внизу',
  args: {
    favorites: ['RSD', 'EUR', 'USD']
  },
  render: args => ({
    components: {
      ListBox
    },
    setup() {
      const value = ref(args.modelValue);
      return {
        args,
        value
      };
    },
    template: \`
      <div style="width: 280px">
        <ListBox v-bind="args" v-model="value" :options="args.options.filter((option) => args.favorites.includes(option.value))">
          <template #footer>
            <button type="button" class="u-typo-body-m" style="min-height: 40px; padding: 0 16px; border: none; background: none; text-align: left; color: var(--neutral-600); cursor: pointer">
              Ещё
            </button>
          </template>
        </ListBox>
      </div>\`
  })
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'С описаниями и длинным текстом',
  args: {
    favorites: ['RSD', 'EUR'],
    options: [{
      value: 'RSD',
      label: 'RSD',
      description: '· Сербский динар'
    }, {
      value: 'EUR',
      label: 'EUR',
      description: '= 117,1734 RSD · Евро'
    }, {
      value: 'USD',
      label: 'USD',
      description: '= 100,5432 RSD · Доллар США'
    }, {
      value: 'XDR',
      label: 'XDR',
      description: '= 150,1234 RSD · СДР (специальные права заимствования)'
    }, {
      value: 'DEM',
      label: 'DEM',
      description: '= 59,9093 RSD · Немецкая марка'
    }, {
      value: 'CHF',
      label: 'CHF',
      description: '= 125,4321 RSD · Швейцарский франк'
    }, {
      value: 'HUF',
      label: 'HUF',
      description: '100 = 28,1234 RSD · Венгерский форинт'
    }]
  }
}`,...s.parameters?.docs?.source}}};const g=["Default","Selected","WithFavorites","WithFooter","WithDescription"];export{t as Default,a as Selected,s as WithDescription,r as WithFavorites,n as WithFooter,g as __namedExportsOrder,b as default};
