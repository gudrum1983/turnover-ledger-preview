import{g as w,I as T,d as y,f as d,t as b,u as h,F as x,q as k,k as B,s as _,J as H,o as l,K as E,h as L,r as V,w as A}from"./iframe-B-xi8IrK.js";import{L as S}from"./LangToggleButton-wf8HaDFs.js";import{_ as O}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const q=["aria-describedby"],D={class:"LangToggle-Legend u-typo-subtitle-m"},F={class:"LangToggle-Content"},W=["id"],I={class:"LangToggle-Options"},N={key:0,class:"LangToggle-HelpText u-typo-label-s"},f=w({__name:"LangToggle",props:H({options:{},label:{},description:{},helperText:{},fullWidth:{type:Boolean,default:!1}},{modelValue:{},modelModifiers:{}}),emits:["update:modelValue"],setup(a){const n=E(),t=T(a,"modelValue");return(s,r)=>(l(),y("fieldset",{class:_(["LangToggle",{LangToggle_fullWidth:a.fullWidth}]),"aria-describedby":h(n)},[d("legend",D,b(a.label),1),d("div",F,[d("p",{id:h(n),class:"LangToggle-Description u-typo-label-s"},b(a.description),9,W),d("div",I,[(l(!0),y(x,null,k(a.options,i=>(l(),L(S,{key:i.value,tag:i.tag,label:i.label,selected:t.value===i.value,onSelect:P=>t.value=i.value},null,8,["tag","label","selected","onSelect"]))),128))]),a.helperText?(l(),y("span",N,b(a.helperText),1)):B("",!0)])],10,q))}}),v=O(f,[["__scopeId","data-v-c02e00ed"]]);f.__docgenInfo=Object.assign({displayName:f.name??f.__name},{exportName:"default",displayName:"LangToggle",type:1,props:[{name:"options",global:!1,description:"Варианты выбора с уникальными значениями.",tags:[],required:!0,type:"readonly LangToggleOption[]",declarations:[],schema:{kind:"array",type:"readonly LangToggleOption[]"}},{name:"label",global:!1,description:"Заголовок группы вариантов.",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"description",global:!1,description:"Описание назначения переключателя.",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"helperText",global:!1,description:"Дополнительная подсказка под вариантами; скрыта при отсутствии текста.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"fullWidth",global:!1,description:"Растягивает на всю ширину контейнера",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"modelValue",global:!1,description:"Выбранное значение варианта. Без совпадения все кнопки доступны для выбора.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: string | undefined]",signature:'(event: "update:modelValue", value: string | undefined): void',declarations:[],schema:[{kind:"enum",type:"string | undefined",schema:["undefined","string"]}]}],slots:[],exposed:[{name:"label",type:"string",description:"Заголовок группы вариантов.",declarations:[],schema:"string"},{name:"fullWidth",type:"boolean | undefined",description:"Растягивает на всю ширину контейнера",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"modelValue",type:"string | undefined",description:"Выбранное значение варианта. Без совпадения все кнопки доступны для выбора.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"options",type:"readonly LangToggleOption[]",description:"Варианты выбора с уникальными значениями.",declarations:[],schema:{kind:"array",type:"readonly LangToggleOption[]"}},{name:"description",type:"string",description:"Описание назначения переключателя.",declarations:[],schema:"string"},{name:"helperText",type:"string | undefined",description:"Дополнительная подсказка под вариантами; скрыта при отсутствии текста.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}}],sourceFiles:"/home/ekaterina/projects/turnover-ledger/src/shared/ui-v2/lang-toggle/LangToggle.vue"});const{expect:e,userEvent:o,within:R}=__STORYBOOK_MODULE_TEST__,C=[{value:"ru",tag:"РУС",label:"Русский"},{value:"en",tag:"ENG",label:"English"},{value:"sr",tag:"SRP",label:"Srpski"}],z={title:"UI-V2-Компоненты/LangToggle",component:v,tags:["autodocs"],parameters:{docs:{description:{component:"Tab и Shift+Tab перемещают фокус без изменения значения, пропуская выбранную кнопку. Space или Enter подтверждают выбор. Клик выбирает вариант сразу."}}},args:{label:"Язык интерфейса",description:"Выберите язык кнопок, полей и сообщений приложения.",options:C,modelValue:"ru",fullWidth:!1},argTypes:{modelValue:{control:"select",options:["ru","en","sr"],description:"Выбранное значение варианта; используется с v-model."},fullWidth:{control:"boolean"}},render:a=>({components:{LangToggle:v},setup(){const n=V(a.modelValue);return A(()=>a.modelValue,t=>{n.value=t}),{args:a,selected:n}},template:`<div>
      <LangToggle v-bind="args" v-model="selected" />
      <p>Выбрано: {{ selected ?? 'ничего' }}</p>
    </div>`})},u={name:"Песочница",play:async({canvasElement:a})=>{const n=R(a),[t,s,r]=n.getAllByRole("button");await e(t).toBeDisabled(),s.focus(),await e(s).toHaveFocus(),await e(t).toHaveAttribute("aria-pressed","true"),await e(s).toHaveAttribute("aria-pressed","false"),await o.keyboard(" "),await e(s).toHaveAttribute("aria-pressed","true"),await e(s).toBeDisabled(),await e(t).toBeEnabled(),await e(n.getByText("Выбрано: en")).toBeInTheDocument(),t.focus(),await o.tab(),await e(r).toHaveFocus(),await e(s).toHaveAttribute("aria-pressed","true"),await o.keyboard("{Enter}"),await e(r).toHaveAttribute("aria-pressed","true"),await e(n.getByText("Выбрано: sr")).toBeInTheDocument(),await e(r).toBeDisabled(),s.focus(),await e(s).toHaveFocus(),await o.tab({shift:!0}),await e(t).toHaveFocus(),await e(r).toHaveAttribute("aria-pressed","true"),await o.keyboard("{Enter}"),await e(t).toHaveAttribute("aria-pressed","true")}},c={name:"Без выбора",args:{modelValue:void 0}},p={name:"Выбранный вариант недоступен для повторного выбора",args:{modelValue:"sr"}},g={name:"На всю ширину",args:{fullWidth:!0},parameters:{layout:"padded"}},m={name:"С дополнительной подсказкой",args:{helperText:"Язык интерфейса не меняет язык отчёта."}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Песочница',
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const [russian, english, serbian] = canvas.getAllByRole('button');
    await expect(russian).toBeDisabled();
    english!.focus();
    await expect(english).toHaveFocus();
    await expect(russian).toHaveAttribute('aria-pressed', 'true');
    await expect(english).toHaveAttribute('aria-pressed', 'false');
    await userEvent.keyboard(' ');
    await expect(english).toHaveAttribute('aria-pressed', 'true');
    await expect(english).toBeDisabled();
    await expect(russian).toBeEnabled();
    await expect(canvas.getByText('Выбрано: en')).toBeInTheDocument();
    russian!.focus();
    await userEvent.tab();
    await expect(serbian).toHaveFocus();
    await expect(english).toHaveAttribute('aria-pressed', 'true');
    await userEvent.keyboard('{Enter}');
    await expect(serbian).toHaveAttribute('aria-pressed', 'true');
    await expect(canvas.getByText('Выбрано: sr')).toBeInTheDocument();
    await expect(serbian).toBeDisabled();
    english!.focus();
    await expect(english).toHaveFocus();
    await userEvent.tab({
      shift: true
    });
    await expect(russian).toHaveFocus();
    await expect(serbian).toHaveAttribute('aria-pressed', 'true');
    await userEvent.keyboard('{Enter}');
    await expect(russian).toHaveAttribute('aria-pressed', 'true');
  }
}`,...u.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Без выбора',
  args: {
    modelValue: undefined
  }
}`,...c.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Выбранный вариант недоступен для повторного выбора',
  args: {
    modelValue: 'sr'
  }
}`,...p.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'На всю ширину',
  args: {
    fullWidth: true
  },
  parameters: {
    layout: 'padded'
  }
}`,...g.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'С дополнительной подсказкой',
  args: {
    helperText: 'Язык интерфейса не меняет язык отчёта.'
  }
}`,...m.parameters?.docs?.source}}};const G=["Playground","Empty","SelectedOption","FullWidth","WithHelperText"];export{c as Empty,g as FullWidth,u as Playground,p as SelectedOption,m as WithHelperText,G as __namedExportsOrder,z as default};
