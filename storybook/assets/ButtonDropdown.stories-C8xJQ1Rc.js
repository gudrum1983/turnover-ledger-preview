import{g as M,C as N,j as P,d as S,t as O,k as E,n as q,y as W,u as b,h as j,s as R,r as v,o as k,e as $,f as T,i as V,w as U}from"./iframe-B-xi8IrK.js";import{B as F}from"./ButtonBase-oX2t5Efv.js";import{L as K}from"./ListBox-D4r05Tdv.js";import{a as _,j as G}from"./IconCompress-Dff2Ln9Q.js";import{_ as A}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";import"./LoaderBase-DSn6mnDc.js";import"./DividerBase-DWOINPpL.js";import"./number-CUgYXyyM.js";const H={key:0,class:"Typo_Caption"},J={class:"ButtonDropdown_Label"},y=M({__name:"ButtonDropdown",props:{label:{},options:{},modelValue:{},placeholder:{default:"Выбрать"},size:{default:"md"},variant:{default:"outlined"},color:{default:"default"},disabled:{type:Boolean,default:!1},favorites:{},rootClass:{default:""}},emits:["update:modelValue","change"],setup(e,{emit:t}){const s=t,o=v(null),n=v(!1),B=V(()=>e.options.find(a=>a.value===e.modelValue)),D=V(()=>B.value?.label??e.placeholder),z=()=>{e.disabled||(n.value=!n.value)},h=()=>{n.value=!1},I=a=>{s("update:modelValue",a),s("change",a),h()},L=a=>{!n.value||!o.value||o.value.contains(a.target)||h()},C=a=>{n.value&&a.key==="Escape"&&h()};return N(()=>{document.addEventListener("click",L),document.addEventListener("keydown",C)}),P(()=>{document.removeEventListener("click",L),document.removeEventListener("keydown",C)}),(a,Q)=>(k(),S("div",{ref_key:"dropdownRef",ref:o,class:R(["ButtonDropdown",e.rootClass])},[e.label?(k(),S("p",H,O(e.label),1)):E("",!0),q(b(F),{size:e.size,"full-width":"",variant:e.variant,color:e.color,disabled:e.disabled,"aria-expanded":n.value,"aria-haspopup":"listbox",onClick:z,class:"ButtonDropdown_CustomClass"},{"end-icon":W(()=>[q(b(_),{class:R(["ButtonDropdown_Caret",{ButtonDropdown_Caret_open:n.value}]),"aria-hidden":"true"},null,8,["class"])]),default:W(()=>[$(a.$slots,"trigger",{activeOption:B.value,activeLabel:D.value,placeholder:e.placeholder,isOpen:n.value},()=>[T("span",J,O(D.value),1)],!0)]),_:3},8,["size","variant","color","disabled","aria-expanded"]),n.value?(k(),j(b(K),{key:1,class:"ButtonDropdown_Menu",options:e.options,"model-value":e.modelValue,favorites:e.favorites,onChange:I},null,8,["options","model-value","favorites"])):E("",!0)],2))}}),w=A(y,[["__scopeId","data-v-3632b8dc"]]);y.__docgenInfo=Object.assign({displayName:y.name??y.__name},{exportName:"default",displayName:"ButtonDropdown",type:1,props:[{name:"label",global:!1,description:"Текстовый лейбл над кнопкой",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"options",global:!1,description:"Список доступных вариантов",tags:[],required:!0,type:"{ value: string; label: string; }[]",declarations:[],schema:{kind:"array",type:"{ value: string; label: string; }[]"}},{name:"modelValue",global:!1,description:"Текущее выбранное значение",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"placeholder",global:!1,description:"Текст кнопки, когда значение не выбрано",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'"\\u0412\\u044B\\u0431\\u0440\\u0430\\u0442\\u044C"'},{name:"size",global:!1,description:"Размер кнопки",tags:[],required:!1,type:'"xs" | "sm" | "md" | "lg" | undefined',declarations:[],schema:{kind:"enum",type:'"xs" | "sm" | "md" | "lg" | undefined',schema:["undefined",'"xs"','"sm"','"md"','"lg"']},default:'"md"'},{name:"variant",global:!1,description:"Визуальный вариант кнопки",tags:[],required:!1,type:'"filled" | "outlined" | undefined',declarations:[],schema:{kind:"enum",type:'"filled" | "outlined" | undefined',schema:["undefined",'"filled"','"outlined"']},default:'"outlined"'},{name:"color",global:!1,description:"Цвет кнопки",tags:[],required:!1,type:'"default" | "primary" | "info" | "success" | "warning" | "danger" | undefined',declarations:[],schema:{kind:"enum",type:'"default" | "primary" | "info" | "success" | "warning" | "danger" | undefined',schema:["undefined",'"default"','"primary"','"info"','"success"','"warning"','"danger"']},default:'"default"'},{name:"disabled",global:!1,description:"Отключает взаимодействие с выпадающим списком",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"favorites",global:!1,description:"Значения, которые нужно показывать в начале списка как избранные",tags:[],required:!1,type:"string[] | undefined",declarations:[],schema:{kind:"enum",type:"string[] | undefined",schema:["undefined",{kind:"array",type:"string[]"}]}},{name:"rootClass",global:!1,description:"Класс корневого DOM-элемента",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'""'},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: string]",signature:'(event: "update:modelValue", value: string): void',declarations:[],schema:["string"]},{name:"change",description:"",tags:[],type:"[value: string]",signature:'(event: "change", value: string): void',declarations:[],schema:["string"]}],slots:[{name:"trigger",type:"{ activeOption: DropdownOption | undefined; activeLabel: string; placeholder: string; isOpen: boolean; }",description:"",declarations:[],schema:{kind:"object",type:"{ activeOption: DropdownOption | undefined; activeLabel: string; placeholder: string; isOpen: boolean; }"}}],exposed:[{name:"color",type:'"default" | "primary" | "info" | "success" | "warning" | "danger" | undefined',description:"Цвет кнопки",declarations:[],schema:{kind:"enum",type:'"default" | "primary" | "info" | "success" | "warning" | "danger" | undefined',schema:["undefined",'"default"','"primary"','"info"','"success"','"warning"','"danger"']}},{name:"label",type:"string | undefined",description:"Текстовый лейбл над кнопкой",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"size",type:'"xs" | "sm" | "md" | "lg" | undefined',description:"Размер кнопки",declarations:[],schema:{kind:"enum",type:'"xs" | "sm" | "md" | "lg" | undefined',schema:["undefined",'"xs"','"sm"','"md"','"lg"']}},{name:"variant",type:'"filled" | "outlined" | undefined',description:"Визуальный вариант кнопки",declarations:[],schema:{kind:"enum",type:'"filled" | "outlined" | undefined',schema:["undefined",'"filled"','"outlined"']}},{name:"disabled",type:"boolean | undefined",description:"Отключает взаимодействие с выпадающим списком",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"placeholder",type:"string | undefined",description:"Текст кнопки, когда значение не выбрано",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"modelValue",type:"string | undefined",description:"Текущее выбранное значение",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"rootClass",type:"string | undefined",description:"Класс корневого DOM-элемента",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"options",type:"{ value: string; label: string; }[]",description:"Список доступных вариантов",declarations:[],schema:{kind:"array",type:"{ value: string; label: string; }[]"}},{name:"favorites",type:"string[] | undefined",description:"Значения, которые нужно показывать в начале списка как избранные",declarations:[],schema:{kind:"enum",type:"string[] | undefined",schema:["undefined",{kind:"array",type:"string[]"}]}}],sourceFiles:"/home/ekaterina/projects/turnover-ledger/src/shared/ui/button-dropdown/ButtonDropdown.vue"});const x=[{value:"eur",label:"EUR"},{value:"usd",label:"USD"},{value:"rsd",label:"RSD"},{value:"rub",label:"RUB"}],re={title:"UI-Компоненты/ButtonDropdown",parameters:{docs:{description:{component:"Кнопка с выпадающим списком для выбора одного значения. Компонент поддерживает `v-model`, placeholder и приоритизацию избранных значений в списке."}}},component:w,tags:["autodocs"],args:{label:"Валюта",options:x,modelValue:"eur",placeholder:"Выбрать",size:"md",variant:"outlined",color:"default",disabled:!1,favorites:[]},argTypes:{label:{control:"text"},options:{control:"object"},modelValue:{control:"text"},placeholder:{control:"text"},size:{control:"select",options:["xs","sm","md","lg"]},variant:{control:"select",options:["filled","outlined"]},color:{control:"select",options:["default","primary","success","warning","danger","info"]},disabled:{control:"boolean"},favorites:{control:"object"}},render:e=>({components:{ButtonDropdown:w},setup(){const t=v(e.modelValue);return U(()=>e.modelValue,s=>{t.value=s}),{args:e,model:t}},template:`
      <div style="width: 220px; padding: 24px">
        <ButtonDropdown
          v-bind="args"
          :model-value="model"
          @update:modelValue="model = $event; args.modelValue = $event"
        />
      </div>
    `})},r={name:"Песочница",parameters:{docs:{description:{story:"Интерактивная история для проверки вариантов отображения, списка опций, выбранного значения и поведения выпадающего меню."}}}},l={name:"По умолчанию",parameters:{docs:{description:{story:"Базовый сценарий использования дропдауна с выбранным значением. Подходит для переключения валюты, фильтра или режима."}}}},d={name:"С избранными значениями",args:{favorites:["usd","eur"]},parameters:{docs:{description:{story:"Часть значений помечена как избранная и показывается в начале списка. Это удобно, когда у пользователя есть несколько часто используемых вариантов."}}}},i={name:"Неактивный",args:{disabled:!0},parameters:{docs:{description:{story:"Дропдаун в отключённом состоянии. Используется, когда выбор временно недоступен, например до загрузки данных или выбора зависимого поля."}}}},u={name:"С кастомным trigger",args:{label:"Язык",modelValue:"en",options:[{value:"ru",label:"Русский"},{value:"en",label:"English"},{value:"srLat",label:"Srpski"},{value:"srCyr",label:"Српски"}],size:"xs",color:"primary"},parameters:{docs:{description:{story:"Пример использования слота `trigger`: кнопка показывает кастомное содержимое для выбранного значения, а список опций остаётся обычным."}}},render:e=>({components:{ButtonDropdown:w,IconLanguage:G},setup(){const t=v(e.modelValue),s={ru:"РУС",en:"ENG",srLat:"SRP",srCyr:"СРП"},o=V(()=>s[t.value]??e.placeholder);return U(()=>e.modelValue,n=>{t.value=n}),{args:e,model:t,activeShortLabel:o}},template:`
      <div style="width: 220px; padding: 24px">
        <ButtonDropdown
          v-bind="args"
          :model-value="model"
          @update:modelValue="model = $event; args.modelValue = $event"
        >
          <template #trigger>
            <span style="display: inline-flex; align-items: center; gap: 6px;">
              <IconLanguage style="width: 16px; height: 16px;" />
              <span>{{ activeShortLabel }}</span>
            </span>
          </template>
        </ButtonDropdown>
      </div>
    `})},c={name:"❗ Без опций",args:{modelValue:"",options:[]},parameters:{controls:{disable:!0},docs:{description:{story:"Некорректный сценарий использования: дропдаун открыт для выбора, но список опций пустой. Пользователь видит placeholder, однако сделать выбор невозможно."}}}},p={name:"❗ С некорректными опциями",args:{modelValue:"eur",options:[{value:"",label:"Пустое значение"},{value:"eur",label:""},{value:"usd",label:"USD"}]},parameters:{controls:{disable:!0},docs:{description:{story:"Некорректный сценарий использования: часть опций содержит пустой `value` или пустой `label`. В таком состоянии список рендерится, но смысл выбора и отображение выбранного значения становятся неоднозначными."}}}},m={name:"❗ С дублирующимися value",args:{modelValue:"eur",options:[{value:"eur",label:"EUR"},{value:"eur",label:"Euro"},{value:"usd",label:"USD"}]},parameters:{controls:{disable:!0},docs:{description:{story:"Некорректный сценарий использования: несколько опций имеют одинаковый `value`. В таком случае отображение выбранного значения и поведение списка становятся неоднозначными, даже если `label` различается."}}}},g={name:"❗ Без modelValue",args:{modelValue:"",options:x},parameters:{controls:{disable:!0},docs:{description:{story:"Пограничный сценарий: `modelValue` не передан. Компонент показывает placeholder и ожидает, что первое корректное значение будет выбрано пользователем."}}}},f={name:"❗ modelValue вне списка",args:{modelValue:"gbp",options:x},parameters:{controls:{disable:!0},docs:{description:{story:"Некорректный сценарий использования: `modelValue` передан, но такого значения нет в `options`. Визуально компонент показывает placeholder, хотя состояние снаружи уже содержит значение."}}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Песочница',
  parameters: {
    docs: {
      description: {
        story: 'Интерактивная история для проверки вариантов отображения, списка опций, выбранного значения и поведения выпадающего меню.'
      }
    }
  }
}`,...r.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'По умолчанию',
  parameters: {
    docs: {
      description: {
        story: 'Базовый сценарий использования дропдауна с выбранным значением. Подходит для переключения валюты, фильтра или режима.'
      }
    }
  }
}`,...l.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'С избранными значениями',
  args: {
    favorites: ['usd', 'eur']
  },
  parameters: {
    docs: {
      description: {
        story: 'Часть значений помечена как избранная и показывается в начале списка. Это удобно, когда у пользователя есть несколько часто используемых вариантов.'
      }
    }
  }
}`,...d.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Неактивный',
  args: {
    disabled: true
  },
  parameters: {
    docs: {
      description: {
        story: 'Дропдаун в отключённом состоянии. Используется, когда выбор временно недоступен, например до загрузки данных или выбора зависимого поля.'
      }
    }
  }
}`,...i.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'С кастомным trigger',
  args: {
    label: 'Язык',
    modelValue: 'en',
    options: [{
      value: 'ru',
      label: 'Русский'
    }, {
      value: 'en',
      label: 'English'
    }, {
      value: 'srLat',
      label: 'Srpski'
    }, {
      value: 'srCyr',
      label: 'Српски'
    }],
    size: 'xs',
    color: 'primary'
  },
  parameters: {
    docs: {
      description: {
        story: 'Пример использования слота \`trigger\`: кнопка показывает кастомное содержимое для выбранного значения, а список опций остаётся обычным.'
      }
    }
  },
  render: args => ({
    components: {
      ButtonDropdown,
      IconLanguage
    },
    setup() {
      const model = ref(args.modelValue);
      const shortLabelByLocale = {
        ru: 'РУС',
        en: 'ENG',
        srLat: 'SRP',
        srCyr: 'СРП'
      } as const;
      const activeShortLabel = computed(() => shortLabelByLocale[model.value as keyof typeof shortLabelByLocale] ?? args.placeholder);
      watch(() => args.modelValue, value => {
        model.value = value;
      });
      return {
        args,
        model,
        activeShortLabel
      };
    },
    template: \`
      <div style="width: 220px; padding: 24px">
        <ButtonDropdown
          v-bind="args"
          :model-value="model"
          @update:modelValue="model = $event; args.modelValue = $event"
        >
          <template #trigger>
            <span style="display: inline-flex; align-items: center; gap: 6px;">
              <IconLanguage style="width: 16px; height: 16px;" />
              <span>{{ activeShortLabel }}</span>
            </span>
          </template>
        </ButtonDropdown>
      </div>
    \`
  })
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
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
        story: 'Некорректный сценарий использования: дропдаун открыт для выбора, но список опций пустой. Пользователь видит placeholder, однако сделать выбор невозможно.'
      }
    }
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: '❗ С некорректными опциями',
  args: {
    modelValue: 'eur',
    options: [{
      value: '',
      label: 'Пустое значение'
    }, {
      value: 'eur',
      label: ''
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
        story: 'Некорректный сценарий использования: часть опций содержит пустой \`value\` или пустой \`label\`. В таком состоянии список рендерится, но смысл выбора и отображение выбранного значения становятся неоднозначными.'
      }
    }
  }
}`,...p.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
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
        story: 'Некорректный сценарий использования: несколько опций имеют одинаковый \`value\`. В таком случае отображение выбранного значения и поведение списка становятся неоднозначными, даже если \`label\` различается.'
      }
    }
  }
}`,...m.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
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
        story: 'Пограничный сценарий: \`modelValue\` не передан. Компонент показывает placeholder и ожидает, что первое корректное значение будет выбрано пользователем.'
      }
    }
  }
}`,...g.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
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
        story: 'Некорректный сценарий использования: \`modelValue\` передан, но такого значения нет в \`options\`. Визуально компонент показывает placeholder, хотя состояние снаружи уже содержит значение.'
      }
    }
  }
}`,...f.parameters?.docs?.source}}};const le=["Playground","Default","WithFavorites","Disabled","WithCustomTrigger","WithoutOptions","WithInvalidOptions","WithDuplicateValues","WithoutModelValue","WithUnknownModelValue"];export{l as Default,i as Disabled,r as Playground,u as WithCustomTrigger,m as WithDuplicateValues,d as WithFavorites,p as WithInvalidOptions,f as WithUnknownModelValue,g as WithoutModelValue,c as WithoutOptions,le as __namedExportsOrder,re as default};
