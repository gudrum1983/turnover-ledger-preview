import{I as u}from"./IconCompress-Bqd0yUvr.js";import{B as t}from"./ButtonBase-BxAP5dzH.js";import"./iframe-1VcLbHp9.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./LoaderBase-DJQ4Z25N.js";const I={title:"UI-Компоненты/ButtonBase",parameters:{docs:{description:{component:"Описание всего компонента ButtonBase."}}},component:t,tags:["autodocs"],args:{color:void 0,default:"Кнопочка"},argTypes:{color:{control:"select"},variant:{control:"select"},size:{control:"select"},type:{control:"select"},contentPosition:{control:"select"},fullWidth:{control:"boolean"},disabled:{control:"boolean"},isIconOnly:{control:"boolean"},isLoader:{control:"boolean"},default:{control:"text",description:"Основное текстовое содержимое кнопки",table:{defaultValue:{summary:'"Нет лейбла"'},type:{summary:"VNode",detail:"Лейбл для кнопки"}}},icon:{control:!1,description:"Иконка слева от текста",table:{type:{summary:"VNode",detail:`<template #icon>
  <IconAdd style="width: 18px; height: 18px" />
</template>`}}},"end-icon":{control:!1,description:"Иконка справа от текста",table:{type:{summary:"VNode",detail:`<template #end-icon>
  <IconAdd style="width: 18px; height: 18px" />
</template>`}}}},render:e=>({components:{ButtonBase:t},setup(){return{args:e}},template:'<ButtonBase v-bind="args">{{ args.default }}</ButtonBase>'})},r={args:{color:"primary"},name:"Песочница",parameters:{docs:{description:{story:"Интерактивная история для проверки всех основных пропсов кнопки и подбора подходящей конфигурации."}}}},o={name:"По умолчанию",parameters:{docs:{description:{story:"Базовый вариант кнопки со стандартными значениями пропсов. Подходит для основного действия без дополнительных акцентов."}}}},s={name:"Контурная",args:{variant:"outlined"},parameters:{docs:{description:{story:"Вариант кнопки без заливки. Подходит для второстепенных действий, которые должны быть заметны, но не конкурировать с основной кнопкой."}}}},a={name:"Неактивная",args:{disabled:!0},parameters:{docs:{description:{story:"Кнопка в отключенном состоянии. Используется, когда действие временно недоступно, например до заполнения обязательных полей формы."}}}},n={name:"С лоадером",args:{color:"primary",size:"xs",isLoader:!0,default:"Рассчитать"},parameters:{docs:{description:{story:"Состояние загрузки для асинхронного действия. Контент кнопки скрывается, но сохраняет исходную ширину, чтобы кнопка не дёргалась."}}}},c={name:"На всю ширину по центру",args:{fullWidth:!0},parameters:{docs:{description:{story:"Кнопка растягивается на всю ширину контейнера, а содержимое остаётся выровненным по центру. Подходит для мобильных экранов и узких колонок."}}}},d={name:"На всю ширину с лева",args:{fullWidth:!0,contentPosition:"left",default:"На всю ширину с лева"},parameters:{docs:{description:{story:"Кнопка на всю ширину контейнера с выравниванием содержимого по левому краю. Подходит для списков действий и строковых интерфейсов."}}}},i={name:"С иконкой",args:{color:"info",size:"lg"},parameters:{controls:{disable:!0},docs:{description:{story:"Кнопка с иконкой перед текстом. Используется, когда важно визуально подсветить тип действия, не теряя текстовый лейбл."},source:{code:`
<ButtonBase color="info" size="lg">
  <template #icon>
    <IconAdd style="width: 18px; height: 18px" />
  </template>
  {{args.default}}
</ButtonBase>
        `}}},render:e=>({components:{ButtonBase:t,IconAdd:u},setup(){return{args:e}},template:`
      <ButtonBase v-bind="args">
        <template #icon>
          <IconAdd style="width: 18px; height: 18px" />
        </template>
        {{args.default}}
      </ButtonBase>
    `})},l={name:"Только иконка",args:{isIconOnly:!0,size:"lg",color:"info"},parameters:{controls:{disable:!0},docs:{description:{story:"Компактный вариант кнопки только с иконкой. Используйте его там, где смысл действия понятен по контексту и задан доступный `aria-label`."},source:{code:`
<ButtonBase color="info" size="lg" isIconOnly>
  
  Add row
</ButtonBase>
        `}}},render:e=>({components:{ButtonBase:t,IconAdd:u},setup(){return{args:e}},template:`
      <ButtonBase v-bind="args">
        <template #icon>
          <IconAdd style="width: 18px; height: 18px" />
        </template>
      </ButtonBase>
    `})},p={name:"❗ Без текста",args:{color:"danger"},parameters:{controls:{disable:!0},docs:{description:{story:"Некорректный сценарий использования: кнопка рендерится без текстового содержимого."}}},render:e=>({components:{ButtonBase:t},setup(){return{args:e}},template:'<ButtonBase v-bind="args" />'})},m={name:"❗ Только иконка без иконки",args:{color:"danger",variant:"outlined",isIconOnly:!0},parameters:{controls:{disable:!0},docs:{description:{story:'Некорректный сценарий использования: включён режим "только иконка", но иконка в слот не передана.'}}},render:e=>({components:{ButtonBase:t},setup(){return{args:e}},template:'<ButtonBase v-bind="args" aria-label="Add" />'})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  args: {
    color: 'primary'
  },
  name: 'Песочница',
  parameters: {
    docs: {
      description: {
        story: 'Интерактивная история для проверки всех основных пропсов кнопки и подбора подходящей конфигурации.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'По умолчанию',
  parameters: {
    docs: {
      description: {
        story: 'Базовый вариант кнопки со стандартными значениями пропсов. Подходит для основного действия без дополнительных акцентов.'
      }
    }
  }
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Контурная',
  args: {
    variant: 'outlined'
  },
  parameters: {
    docs: {
      description: {
        story: 'Вариант кнопки без заливки. Подходит для второстепенных действий, которые должны быть заметны, но не конкурировать с основной кнопкой.'
      }
    }
  }
}`,...s.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Неактивная',
  args: {
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Кнопка в отключенном состоянии. Используется, когда действие временно недоступно, например до заполнения обязательных полей формы.'
      }
    }
  }
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'С лоадером',
  args: {
    color: 'primary',
    size: 'xs',
    isLoader: true,
    default: 'Рассчитать'
  },
  parameters: {
    docs: {
      description: {
        story: 'Состояние загрузки для асинхронного действия. Контент кнопки скрывается, но сохраняет исходную ширину, чтобы кнопка не дёргалась.'
      }
    }
  }
}`,...n.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'На всю ширину по центру',
  args: {
    fullWidth: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Кнопка растягивается на всю ширину контейнера, а содержимое остаётся выровненным по центру. Подходит для мобильных экранов и узких колонок.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'На всю ширину с лева',
  args: {
    fullWidth: true,
    contentPosition: 'left',
    default: 'На всю ширину с лева'
  },
  parameters: {
    docs: {
      description: {
        story: 'Кнопка на всю ширину контейнера с выравниванием содержимого по левому краю. Подходит для списков действий и строковых интерфейсов.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'С иконкой',
  args: {
    color: 'info',
    size: 'lg'
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Кнопка с иконкой перед текстом. Используется, когда важно визуально подсветить тип действия, не теряя текстовый лейбл.'
      },
      source: {
        code: \`
<ButtonBase color="info" size="lg">
  <template #icon>
    <IconAdd style="width: 18px; height: 18px" />
  </template>
  {{args.default}}
</ButtonBase>
        \`
      }
    }
  },
  render: args => ({
    components: {
      ButtonBase,
      IconAdd
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <ButtonBase v-bind="args">
        <template #icon>
          <IconAdd style="width: 18px; height: 18px" />
        </template>
        {{args.default}}
      </ButtonBase>
    \`
  })
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Только иконка',
  args: {
    isIconOnly: true,
    size: 'lg',
    color: 'info'
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Компактный вариант кнопки только с иконкой. Используйте его там, где смысл действия понятен по контексту и задан доступный \`aria-label\`.'
      },
      source: {
        code: \`
<ButtonBase color="info" size="lg" isIconOnly>
  
  Add row
</ButtonBase>
        \`
      }
    }
  },
  render: args => ({
    components: {
      ButtonBase,
      IconAdd
    },
    setup() {
      return {
        args
      };
    },
    template: \`
      <ButtonBase v-bind="args">
        <template #icon>
          <IconAdd style="width: 18px; height: 18px" />
        </template>
      </ButtonBase>
    \`
  })
}`,...l.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: '❗ Без текста',
  args: {
    color: 'danger'
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Некорректный сценарий использования: кнопка рендерится без текстового содержимого.'
      }
    }
  },
  render: args => ({
    components: {
      ButtonBase
    },
    setup() {
      return {
        args
      };
    },
    template: '<ButtonBase v-bind="args" />'
  })
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: '❗ Только иконка без иконки',
  args: {
    color: 'danger',
    variant: 'outlined',
    isIconOnly: true
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Некорректный сценарий использования: включён режим "только иконка", но иконка в слот не передана.'
      }
    }
  },
  render: args => ({
    components: {
      ButtonBase
    },
    setup() {
      return {
        args
      };
    },
    template: '<ButtonBase v-bind="args" aria-label="Add" />'
  })
}`,...m.parameters?.docs?.source}}};const x=["Playground","Default","Outlined","Disabled","Loading","FullWidth","FullWidthLeft","WithIcon","IconOnly","WithoutLabel","IconOnlyWithoutIcon"];export{o as Default,a as Disabled,c as FullWidth,d as FullWidthLeft,l as IconOnly,m as IconOnlyWithoutIcon,n as Loading,s as Outlined,r as Playground,i as WithIcon,p as WithoutLabel,x as __namedExportsOrder,I as default};
