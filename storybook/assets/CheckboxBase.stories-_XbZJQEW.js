import{f as g,d as s,e as n,z as y,j as k,t as x,n as v,o as t,r as V,w as B}from"./iframe-BFOD41o9.js";import{_ as C}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const w=["checked","indeterminate","disabled","aria-invalid"],q={class:"CheckboxBase-Box","aria-hidden":"true"},S={key:0,class:"CheckboxBase-Icon",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none"},I={key:1,class:"CheckboxBase-Icon",width:"12",height:"12",viewBox:"0 0 12 12",fill:"none"},D={class:"CheckboxBase-Label"},E={key:0,class:"CheckboxBase-Description"},u=g({__name:"CheckboxBase",props:{modelValue:{type:Boolean},indeterminate:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},error:{type:Boolean,default:!1},description:{}},emits:["update:modelValue"],setup(e,{emit:a}){const p=a;function h(f){p("update:modelValue",f.target.checked)}return(f,o)=>(t(),s("label",{class:v(["CheckboxBase u-typo-body-m",{CheckboxBase_checked:e.modelValue||e.indeterminate,CheckboxBase_disabled:e.disabled,CheckboxBase_error:e.error&&!e.disabled}])},[n("input",{class:"CheckboxBase-Input",type:"checkbox",checked:e.modelValue,indeterminate:e.indeterminate,disabled:e.disabled,"aria-invalid":e.error?"true":void 0,onChange:h},null,40,w),n("span",q,[e.indeterminate?(t(),s("svg",S,[...o[0]||(o[0]=[n("path",{d:"M2.5 6H9.5",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])])):e.modelValue?(t(),s("svg",I,[...o[1]||(o[1]=[n("path",{d:"M10 3L4.5 8.5L2 6",stroke:"currentColor","stroke-linecap":"round","stroke-linejoin":"round"},null,-1)])])):y("",!0)]),n("span",D,[k(f.$slots,"default",{},void 0,!0),e.description?(t(),s("span",E,x(" "+e.description),1)):y("",!0)])],2))}}),b=C(u,[["__scopeId","data-v-5ba20293"]]);u.__docgenInfo=Object.assign({displayName:u.name??u.__name},{exportName:"default",displayName:"CheckboxBase",type:1,props:[{name:"modelValue",global:!1,description:"Отмечен ли чекбокс",tags:[],required:!0,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"indeterminate",global:!1,description:"Частичный выбор (например, «Все годы», когда отмечена часть годов). Важнее modelValue для отображения",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"disabled",global:!1,description:"Отключает чекбокс",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"error",global:!1,description:"Состояние ошибки",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"description",global:!1,description:"Приглушённый текст после подписи, например «(12 записей)»",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: boolean]",signature:'(event: "update:modelValue", value: boolean): void',declarations:[],schema:[{kind:"enum",type:"boolean",schema:["false","true"]}]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"disabled",type:"boolean | undefined",description:"Отключает чекбокс",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"modelValue",type:"boolean",description:"Отмечен ли чекбокс",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"indeterminate",type:"boolean | undefined",description:"Частичный выбор (например, «Все годы», когда отмечена часть годов). Важнее modelValue для отображения",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"error",type:"boolean | undefined",description:"Состояние ошибки",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"description",type:"string | undefined",description:"Приглушённый текст после подписи, например «(12 записей)»",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}}],sourceFiles:"/home/ekaterina/projects/turnover-ledger/src/shared/ui-v2/checkbox-base/CheckboxBase.vue"});const _={title:"UI-V2-Компоненты/CheckboxBase",component:b,tags:["autodocs"],parameters:{docs:{description:{component:"Чекбокс с подписью (слот по умолчанию) и приглушённым описанием. Поддерживает v-model, частичный выбор (indeterminate), ошибку и отключённое состояние. Состояния — по макету Figma «Checkboxes». Нативный input скрыт визуально, но доступен с клавиатуры и для скринридеров."}}},args:{modelValue:!0,indeterminate:!1,disabled:!1,error:!1,description:"(12 записей)"},argTypes:{modelValue:{control:"boolean"},indeterminate:{control:"boolean"},disabled:{control:"boolean"},error:{control:"boolean"},description:{control:"text"}},render:e=>({components:{CheckboxBase:b},setup(){const a=V(e.modelValue);return B(()=>e.modelValue,p=>{a.value=p}),{args:e,model:a}},template:'<CheckboxBase v-bind="args" v-model="model">2025</CheckboxBase>'})},r={name:"Песочница"},d={name:"Не отмечен",args:{modelValue:!1}},l={name:"Частичный выбор",args:{modelValue:!1,indeterminate:!0}},i={name:"Неактивный",args:{modelValue:!1,disabled:!0}},m={name:"Ошибка",args:{modelValue:!0,error:!0}},c={name:"Все состояния",render:()=>({components:{CheckboxBase:b},setup(){return{columns:[{name:"Выключен",modelValue:!1,indeterminate:!1},{name:"Включён",modelValue:!0,indeterminate:!1},{name:"Смешанный",modelValue:!1,indeterminate:!0}],rows:[{name:"Default",props:{}},{name:"Disabled",props:{disabled:!0}},{name:"Error",props:{error:!0}}]}},template:`
      <div style="display: grid; grid-template-columns: repeat(4, max-content); gap: 8px 32px; align-items: center">
        <span />
        <span v-for="column in columns" :key="column.name" class="u-typo-body-m">{{ column.name }}</span>
        <template v-for="row in rows" :key="row.name">
          <span class="u-typo-body-m">{{ row.name }}</span>
          <CheckboxBase
            v-for="column in columns"
            :key="column.name"
            :model-value="column.modelValue"
            :indeterminate="column.indeterminate"
            v-bind="row.props"
          >2025</CheckboxBase>
        </template>
      </div>
    `})};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Песочница'
}`,...r.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Не отмечен',
  args: {
    modelValue: false
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Частичный выбор',
  args: {
    modelValue: false,
    indeterminate: true
  }
}`,...l.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Неактивный',
  args: {
    modelValue: false,
    disabled: true
  }
}`,...i.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Ошибка',
  args: {
    modelValue: true,
    error: true
  }
}`,...m.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Все состояния',
  render: () => ({
    components: {
      CheckboxBase
    },
    setup() {
      const columns = [{
        name: 'Выключен',
        modelValue: false,
        indeterminate: false
      }, {
        name: 'Включён',
        modelValue: true,
        indeterminate: false
      }, {
        name: 'Смешанный',
        modelValue: false,
        indeterminate: true
      }];
      const rows = [{
        name: 'Default',
        props: {}
      }, {
        name: 'Disabled',
        props: {
          disabled: true
        }
      }, {
        name: 'Error',
        props: {
          error: true
        }
      }];
      return {
        columns,
        rows
      };
    },
    template: \`
      <div style="display: grid; grid-template-columns: repeat(4, max-content); gap: 8px 32px; align-items: center">
        <span />
        <span v-for="column in columns" :key="column.name" class="u-typo-body-m">{{ column.name }}</span>
        <template v-for="row in rows" :key="row.name">
          <span class="u-typo-body-m">{{ row.name }}</span>
          <CheckboxBase
            v-for="column in columns"
            :key="column.name"
            :model-value="column.modelValue"
            :indeterminate="column.indeterminate"
            v-bind="row.props"
          >2025</CheckboxBase>
        </template>
      </div>
    \`
  })
}`,...c.parameters?.docs?.source}}};const O=["Playground","Unchecked","Indeterminate","Disabled","WithError","AllStates"];export{c as AllStates,i as Disabled,l as Indeterminate,r as Playground,d as Unchecked,m as WithError,O as __namedExportsOrder,_ as default};
