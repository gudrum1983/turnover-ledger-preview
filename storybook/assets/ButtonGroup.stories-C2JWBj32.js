import{g as N,d as x,F as P,q as A,s as G,o as B,t as F,i as W,r as L,w as K}from"./iframe-BZl0OYes.js";import{_ as M}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const U=["aria-label"],$=["aria-checked","tabindex","disabled","data-value","onClick"],h=N({__name:"ButtonGroup",props:{modelValue:{default:""},options:{},disabled:{type:Boolean,default:!1},ariaLabel:{},fullWidth:{type:Boolean,default:!1},size:{default:"md"}},emits:["update:modelValue","change"],setup(t,{emit:o}){const n=t,w=o,I=L(null),r=W(()=>n.options.filter(e=>!e.disabled)),O=W(()=>n.options.findIndex(e=>e.value===n.modelValue)),E=W(()=>{if(r.value.length<1)return-1;const e=r.value[0]?.value;return n.options.findIndex(a=>a.value===e)}),q=e=>n.modelValue===e,z=(e,a)=>{if(n.disabled||a)return-1;const s=O.value>=0?O.value:E.value;return e===s?0:-1},l=(e,a=!1)=>{n.disabled||a||e===n.modelValue||(w("update:modelValue",e),w("change",e))},V=e=>{I.value?.querySelector(`button[data-value="${e}"]`)?.focus()},D=e=>{if(n.disabled||r.value.length<1)return;const a=r.value.findIndex(R=>R.value===n.modelValue),k=((a>=0?a:0)+e+r.value.length)%r.value.length,d=r.value[k];d&&(l(d.value,!1),V(d.value))},C=e=>{switch(e.key){case"ArrowRight":case"ArrowDown":e.preventDefault(),D(1);break;case"ArrowLeft":case"ArrowUp":e.preventDefault(),D(-1);break;case"Home":{e.preventDefault();const a=r.value[0];if(!a)return;l(a.value,!1),V(a.value);break}case"End":{e.preventDefault();const a=r.value[r.value.length-1];if(!a)return;l(a.value,!1),V(a.value);break}}};return(e,a)=>(B(),x("div",{ref_key:"groupRef",ref:I,class:G(["ButtonGroup",{ButtonGroup_fullWidth:t.fullWidth}]),role:"radiogroup","aria-label":t.ariaLabel||void 0,onKeydown:C},[(B(!0),x(P,null,A(t.options,(s,k)=>(B(),x("button",{key:s.value,class:G(["ButtonGroup_Button",[{ButtonGroup_Button_selected:q(s.value)},`ButtonGroup_Button_size_${t.size}`]]),type:"button",role:"radio","aria-checked":q(s.value),tabindex:z(k,s.disabled),disabled:t.disabled||s.disabled,"data-value":s.value,onClick:d=>l(s.value,!!s.disabled)},F(s.label),11,$))),128))],42,U))}}),S=M(h,[["__scopeId","data-v-a9d5c7c5"]]);h.__docgenInfo=Object.assign({displayName:h.name??h.__name},{exportName:"default",displayName:"ButtonGroup",type:1,props:[{name:"modelValue",global:!1,description:"Выбранное значение кнопки",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'""'},{name:"options",global:!1,description:"Варианты значений группы кнопок",tags:[],required:!0,type:"{ value: string; label: string; disabled?: boolean | undefined; }[]",declarations:[],schema:{kind:"array",type:"{ value: string; label: string; disabled?: boolean | undefined; }[]"}},{name:"disabled",global:!1,description:"Отключение кнопки",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"ariaLabel",global:!1,description:"Лейбл для доступности",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"fullWidth",global:!1,description:"Растягивает группу кнопок на всю ширину контейнера",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"size",global:!1,description:"Размеры кнопок",tags:[],required:!1,type:'"md" | "xs" | "sm" | "lg" | undefined',declarations:[],schema:{kind:"enum",type:'"md" | "xs" | "sm" | "lg" | undefined',schema:["undefined",'"md"','"xs"','"sm"','"lg"']},default:'"md"'},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: string]",signature:'(event: "update:modelValue", value: string): void',declarations:[],schema:["string"]},{name:"change",description:"",tags:[],type:"[value: string]",signature:'(event: "change", value: string): void',declarations:[],schema:["string"]}],slots:[],exposed:[{name:"modelValue",type:"string",description:"Выбранное значение кнопки",declarations:[],schema:"string"},{name:"disabled",type:"boolean",description:"Отключение кнопки",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"fullWidth",type:"boolean",description:"Растягивает группу кнопок на всю ширину контейнера",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"size",type:'"md" | "xs" | "sm" | "lg"',description:"Размеры кнопок",declarations:[],schema:{kind:"enum",type:'"md" | "xs" | "sm" | "lg"',schema:['"md"','"xs"','"sm"','"lg"']}},{name:"options",type:"{ value: string; label: string; disabled?: boolean | undefined; }[]",description:"Варианты значений группы кнопок",declarations:[],schema:{kind:"array",type:"{ value: string; label: string; disabled?: boolean | undefined; }[]"}},{name:"ariaLabel",type:"string | undefined",description:"Лейбл для доступности",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}}],sourceFiles:"/home/ekaterina/projects/turnover-ledger/src/shared/ui/button-group/ButtonGroup.vue"});const _=[{value:"latin",label:"Latinica"},{value:"cyrillic",label:"Ћирилица"},{value:"english",label:"English"}],J={title:"UI-Компоненты/ButtonGroup",parameters:{docs:{description:{component:"Группа кнопок с одиночным выбором. Компонент поддерживает `v-model`, клавиатурную навигацию и состояние отдельных отключённых опций."}}},component:S,tags:["autodocs"],args:{modelValue:"latin",options:_,ariaLabel:"Выбор языка отчёта",disabled:!1,fullWidth:!1,size:"md"},argTypes:{modelValue:{control:"text"},options:{control:"object"},ariaLabel:{control:"text"},disabled:{control:"boolean"},fullWidth:{control:"boolean"},size:{control:"select",options:["xs","sm","md","lg"]}},render:t=>({components:{ButtonGroup:S},setup(){const o=L(t.modelValue);return K(()=>t.modelValue,n=>{o.value=n}),{args:t,model:o}},template:`
      <ButtonGroup
        v-bind="args"
        v-model="model"
        @update:modelValue="args.modelValue = $event"
      />
    `})},i={name:"Песочница",parameters:{docs:{description:{story:"Интерактивная история для проверки размеров, набора опций, состояния выбора и поведения `ButtonGroup` в разных конфигурациях."}}}},u={name:"По умолчанию",parameters:{docs:{description:{story:"Базовый сценарий использования группы кнопок с одиночным выбором. Подходит для переключения режима, языка или фильтра."}}}},c={name:"На всю ширину",args:{fullWidth:!0},parameters:{docs:{description:{story:"Группа растягивается на всю ширину контейнера, а кнопки равномерно делят доступное пространство. Подходит для мобильных экранов и компактных панелей управления."}}}},m={name:"С отключённой опцией",args:{modelValue:"cyrillic",options:[{value:"latin",label:"Latinica"},{value:"cyrillic",label:"Ћирилица"},{value:"english",label:"English",disabled:!0}]},parameters:{docs:{description:{story:"Пример группы, где часть опций недоступна для выбора. Компонент корректно исключает такие кнопки из клавиатурной навигации."}}}},p={name:"Неактивная",args:{disabled:!0},parameters:{docs:{description:{story:"Полностью отключённая группа кнопок. Используется, когда переключение временно недоступно, например до загрузки данных или выбора зависимого параметра."}}}},b={name:"❗ Без опций",args:{modelValue:"",options:[]},parameters:{controls:{disable:!0},docs:{description:{story:"Некорректный сценарий использования: компонент отрисован без опций. В таком состоянии группа не даёт пользователю ни одного доступного выбора."}}}},f={name:"❗ С некорректными опциями",args:{modelValue:"active",options:[{value:"",label:"Пустое значение"},{value:"active",label:""},{value:"disabled-empty",label:"Недоступная опция",disabled:!0}]},parameters:{controls:{disable:!0},docs:{description:{story:"Некорректный сценарий использования: часть опций содержит пустой `value` или пустой `label`. Такие данные делают поведение выбора и отображение группы неоднозначными."}}}},g={name:"❗ С дублирующимися value",args:{modelValue:"report",options:[{value:"report",label:"Отчёт"},{value:"report",label:"Сводка"},{value:"archive",label:"Архив"}]},parameters:{controls:{disable:!0},docs:{description:{story:"Некорректный сценарий использования: несколько опций имеют одинаковый `value`. В таком состоянии выбор, `key` в списке и клавиатурная навигация становятся неоднозначными, даже если `label` у кнопок различается."}}}},y={name:"❗ Без modelValue",args:{modelValue:"",options:_},parameters:{controls:{disable:!0},docs:{description:{story:"Пограничный сценарий: значение `modelValue` не передано или не соответствует ни одной опции. Компонент остаётся управляемым с клавиатуры, но явный выбранный элемент отсутствует до первого действия пользователя."}}}},v={name:"❗ modelValue вне списка",args:{modelValue:"missing",options:_},parameters:{controls:{disable:!0},docs:{description:{story:"Некорректный сценарий использования: `modelValue` передан, но такого значения нет в списке опций. Визуально ни одна кнопка не выбрана, пока пользователь не сделает новый выбор."}}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Песочница',
  parameters: {
    docs: {
      description: {
        story: 'Интерактивная история для проверки размеров, набора опций, состояния выбора и поведения \`ButtonGroup\` в разных конфигурациях.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'По умолчанию',
  parameters: {
    docs: {
      description: {
        story: 'Базовый сценарий использования группы кнопок с одиночным выбором. Подходит для переключения режима, языка или фильтра.'
      }
    }
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'На всю ширину',
  args: {
    fullWidth: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Группа растягивается на всю ширину контейнера, а кнопки равномерно делят доступное пространство. Подходит для мобильных экранов и компактных панелей управления.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'С отключённой опцией',
  args: {
    modelValue: 'cyrillic',
    options: [{
      value: 'latin',
      label: 'Latinica'
    }, {
      value: 'cyrillic',
      label: 'Ћирилица'
    }, {
      value: 'english',
      label: 'English',
      disabled: true
    }]
  },
  parameters: {
    docs: {
      description: {
        story: 'Пример группы, где часть опций недоступна для выбора. Компонент корректно исключает такие кнопки из клавиатурной навигации.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Неактивная',
  args: {
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Полностью отключённая группа кнопок. Используется, когда переключение временно недоступно, например до загрузки данных или выбора зависимого параметра.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
        story: 'Некорректный сценарий использования: компонент отрисован без опций. В таком состоянии группа не даёт пользователю ни одного доступного выбора.'
      }
    }
  }
}`,...b.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: '❗ С некорректными опциями',
  args: {
    modelValue: 'active',
    options: [{
      value: '',
      label: 'Пустое значение'
    }, {
      value: 'active',
      label: ''
    }, {
      value: 'disabled-empty',
      label: 'Недоступная опция',
      disabled: true
    }]
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Некорректный сценарий использования: часть опций содержит пустой \`value\` или пустой \`label\`. Такие данные делают поведение выбора и отображение группы неоднозначными.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: '❗ С дублирующимися value',
  args: {
    modelValue: 'report',
    options: [{
      value: 'report',
      label: 'Отчёт'
    }, {
      value: 'report',
      label: 'Сводка'
    }, {
      value: 'archive',
      label: 'Архив'
    }]
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Некорректный сценарий использования: несколько опций имеют одинаковый \`value\`. В таком состоянии выбор, \`key\` в списке и клавиатурная навигация становятся неоднозначными, даже если \`label\` у кнопок различается.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: '❗ Без modelValue',
  args: {
    modelValue: '',
    options: baseOptions
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Пограничный сценарий: значение \`modelValue\` не передано или не соответствует ни одной опции. Компонент остаётся управляемым с клавиатуры, но явный выбранный элемент отсутствует до первого действия пользователя.'
      }
    }
  }
}`,...y.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: '❗ modelValue вне списка',
  args: {
    modelValue: 'missing',
    options: baseOptions
  },
  parameters: {
    controls: {
      disable: true
    },
    docs: {
      description: {
        story: 'Некорректный сценарий использования: \`modelValue\` передан, но такого значения нет в списке опций. Визуально ни одна кнопка не выбрана, пока пользователь не сделает новый выбор.'
      }
    }
  }
}`,...v.parameters?.docs?.source}}};const Q=["Playground","Default","FullWidth","WithDisabledOption","Disabled","WithoutOptions","WithInvalidOptions","WithDuplicateValues","WithoutModelValue","WithUnknownModelValue"];export{u as Default,p as Disabled,c as FullWidth,i as Playground,m as WithDisabledOption,g as WithDuplicateValues,f as WithInvalidOptions,v as WithUnknownModelValue,y as WithoutModelValue,b as WithoutOptions,Q as __namedExportsOrder,J as default};
