import{r as m,w as p}from"./iframe-B-xi8IrK.js";import{L as d}from"./ListBox-D4r05Tdv.js";import"./preload-helper-PPVm8Dsz.js";import"./DividerBase-DWOINPpL.js";import"./number-CUgYXyyM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const c=[{value:"eur",label:"EUR"},{value:"usd",label:"USD"},{value:"rsd",label:"RSD"},{value:"rub",label:"RUB"}],h={title:"UI-Компоненты/ListBox",parameters:{docs:{description:{component:"Список опций с одиночным выбором. Компонент поддерживает `v-model`, событие `change` и приоритизацию избранных значений в начале списка."}}},component:d,tags:["autodocs"],args:{options:c,modelValue:"eur",favorites:[]},argTypes:{options:{control:"object"},modelValue:{control:"text"},favorites:{control:"object"}},render:e=>({components:{ListBox:d},setup(){const a=m(e.modelValue);return p(()=>e.modelValue,u=>{a.value=u}),{args:e,model:a}},template:`
      <ListBox
        v-bind="args"
        style="width: 160px"
        :model-value="model"
        @update:modelValue="model = $event; args.modelValue = $event"
      />
    `})},o={name:"Песочница",parameters:{docs:{description:{story:"Интерактивная история для проверки состава списка, текущего выбора и порядка отображения избранных значений."}}}},l={name:"По умолчанию",parameters:{docs:{description:{story:"Базовый сценарий использования списка с одиночным выбором. Подходит для компактных меню выбора валюты, режима или фильтра."}}}},r={name:"С избранными значениями",args:{options:[{value:"eur",label:"EUR"},{value:"usd",label:"USD"},{value:"rsd",label:"RSD"},{value:"rub",label:"RUB"},{value:"gbp",label:"GBP"},{value:"chf",label:"CHF"},{value:"jpy",label:"JPY"},{value:"cny",label:"CNY"},{value:"sek",label:"SEK"},{value:"nok",label:"NOK"},{value:"dkk",label:"DKK"},{value:"pln",label:"PLN"}],favorites:["usd","eur"]},render:e=>({components:{ListBox:d},setup(){const a=m(e.modelValue);return p(()=>e.modelValue,u=>{a.value=u}),{args:e,model:a}},template:`
          <ListBox
            style="width: 160px; max-height: 260px; overflow-y: auto;"
            v-bind="args"
            :model-value="model"
            @update:modelValue="model = $event; args.modelValue = $event"
          />
    `}),parameters:{docs:{description:{story:"Часть значений помечена как избранная и отображается в верхней части списка, отделённой разделителем от остальных опций. Высота компонента ограничена, чтобы показать внутренний скролл списка."}}}},s={name:"❗ Без опций",args:{modelValue:"",options:[]},parameters:{controls:{disable:!0},docs:{description:{story:"Некорректный сценарий использования: компонент отрисован без опций. Пользователь видит пустой контейнер и не может сделать выбор."}}}},t={name:"❗ modelValue вне списка",args:{modelValue:"gbp",options:c},parameters:{controls:{disable:!0},docs:{description:{story:"Пограничный сценарий: `modelValue` передан, но такого значения нет в `options`. Визуально выбранный элемент отсутствует до следующего действия пользователя."}}}},n={name:"❗ С дублирующимися value",args:{modelValue:"eur",options:[{value:"eur",label:"EUR"},{value:"eur",label:"Euro"},{value:"usd",label:"USD"}]},parameters:{controls:{disable:!0},docs:{description:{story:"Некорректный сценарий использования: несколько элементов имеют одинаковый `value`. В таком состоянии подсветка выбора и реакция на клик становятся неоднозначными."}}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Песочница',
  parameters: {
    docs: {
      description: {
        story: 'Интерактивная история для проверки состава списка, текущего выбора и порядка отображения избранных значений.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'По умолчанию',
  parameters: {
    docs: {
      description: {
        story: 'Базовый сценарий использования списка с одиночным выбором. Подходит для компактных меню выбора валюты, режима или фильтра.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'С избранными значениями',
  args: {
    options: [{
      value: 'eur',
      label: 'EUR'
    }, {
      value: 'usd',
      label: 'USD'
    }, {
      value: 'rsd',
      label: 'RSD'
    }, {
      value: 'rub',
      label: 'RUB'
    }, {
      value: 'gbp',
      label: 'GBP'
    }, {
      value: 'chf',
      label: 'CHF'
    }, {
      value: 'jpy',
      label: 'JPY'
    }, {
      value: 'cny',
      label: 'CNY'
    }, {
      value: 'sek',
      label: 'SEK'
    }, {
      value: 'nok',
      label: 'NOK'
    }, {
      value: 'dkk',
      label: 'DKK'
    }, {
      value: 'pln',
      label: 'PLN'
    }],
    favorites: ['usd', 'eur']
  },
  render: args => ({
    components: {
      ListBox
    },
    setup() {
      const model = ref(args.modelValue);
      watch(() => args.modelValue, value => {
        model.value = value;
      });
      return {
        args,
        model
      };
    },
    template: \`
          <ListBox
            style="width: 160px; max-height: 260px; overflow-y: auto;"
            v-bind="args"
            :model-value="model"
            @update:modelValue="model = $event; args.modelValue = $event"
          />
    \`
  }),
  parameters: {
    docs: {
      description: {
        story: 'Часть значений помечена как избранная и отображается в верхней части списка, отделённой разделителем от остальных опций. Высота компонента ограничена, чтобы показать внутренний скролл списка.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: '❗ Без опций',
  args: {
    modelValue: '',
    options: []
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Некорректный сценарий использования: компонент отрисован без опций. Пользователь видит пустой контейнер и не может сделать выбор.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: '❗ modelValue вне списка',
  args: {
    modelValue: 'gbp',
    options: baseOptions
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Пограничный сценарий: \`modelValue\` передан, но такого значения нет в \`options\`. Визуально выбранный элемент отсутствует до следующего действия пользователя.'
      }
    }
  }
}`,...t.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: '❗ С дублирующимися value',
  args: {
    modelValue: 'eur',
    options: [{
      value: 'eur',
      label: 'EUR'
    }, {
      value: 'eur',
      label: 'Euro'
    }, {
      value: 'usd',
      label: 'USD'
    }]
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Некорректный сценарий использования: несколько элементов имеют одинаковый \`value\`. В таком состоянии подсветка выбора и реакция на клик становятся неоднозначными.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};const x=["Playground","Default","WithFavorites","WithoutOptions","WithUnknownModelValue","WithDuplicateValues"];export{l as Default,o as Playground,n as WithDuplicateValues,r as WithFavorites,t as WithUnknownModelValue,s as WithoutOptions,x as __namedExportsOrder,h as default};
