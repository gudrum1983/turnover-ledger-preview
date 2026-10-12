import{g as C,d as y,F as k,q as V,s as b,o as f,t as B,r as H,w as x}from"./iframe-1VcLbHp9.js";import{_ as L}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const _=["aria-label"],E=["aria-pressed","onClick"],g=C({__name:"LabelContainer",props:{size:{default:"l"},modelValue:{default:""},options:{},ariaLabel:{},fullWidth:{type:Boolean,default:!1}},emits:["update:modelValue","change"],setup(a,{emit:n}){const s=n;function r(t){t!==a.modelValue&&(s("update:modelValue",t),s("change",t))}return(t,W)=>(f(),y("div",{class:b(["LabelContainer",{LabelContainer_fullWidth:a.fullWidth}]),role:"group","aria-label":a.ariaLabel},[(f(!0),y(k,null,V(a.options,i=>(f(),y("button",{key:i.value,type:"button",class:b(["LabelContainer-Button",[a.size==="s"?"u-typo-label-s":"u-typo-body-m",{"LabelContainer-Button_selected":a.modelValue===i.value}]]),"aria-pressed":a.modelValue===i.value,onClick:O=>r(i.value)},B(i.label),11,E))),128))],10,_))}}),v=L(g,[["__scopeId","data-v-3fbb365c"]]);g.__docgenInfo=Object.assign({displayName:g.name??g.__name},{exportName:"default",displayName:"LabelContainer",type:1,props:[{name:"size",global:!1,description:"Размер текста: l — стандартный, s — компактный.",tags:[],required:!1,type:'"s" | "l" | undefined',declarations:[],schema:{kind:"enum",type:'"s" | "l" | undefined',schema:["undefined",'"s"','"l"']},default:'"l"'},{name:"modelValue",global:!1,description:"Выбранное значение. При отсутствии совпадения все кнопки отображаются без выбора.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'""'},{name:"options",global:!1,description:"Варианты выбора с уникальными значениями. Количество вариантов не ограничено.",tags:[],required:!0,type:"readonly { value: string; label: string; }[]",declarations:[],schema:{kind:"array",type:"readonly { value: string; label: string; }[]"}},{name:"ariaLabel",global:!1,description:"Доступное название группы кнопок для скринридеров.",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"fullWidth",global:!1,description:"Растягивает группу на всю ширину контейнера; кнопки делят ширину поровну.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: string]",signature:'(event: "update:modelValue", value: string): void',declarations:[],schema:["string"]},{name:"change",description:"",tags:[],type:"[value: string]",signature:'(event: "change", value: string): void',declarations:[],schema:["string"]}],slots:[],exposed:[{name:"fullWidth",type:"boolean | undefined",description:"Растягивает группу на всю ширину контейнера; кнопки делят ширину поровну.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"size",type:'"s" | "l" | undefined',description:"Размер текста: l — стандартный, s — компактный.",declarations:[],schema:{kind:"enum",type:'"s" | "l" | undefined',schema:["undefined",'"s"','"l"']}},{name:"modelValue",type:"string | undefined",description:"Выбранное значение. При отсутствии совпадения все кнопки отображаются без выбора.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"options",type:"readonly { value: string; label: string; }[]",description:"Варианты выбора с уникальными значениями. Количество вариантов не ограничено.",declarations:[],schema:{kind:"array",type:"readonly { value: string; label: string; }[]"}},{name:"ariaLabel",type:"string",description:"Доступное название группы кнопок для скринридеров.",declarations:[],schema:"string"}],sourceFiles:"/home/ekaterina/projects/turnover-ledger/src/shared/ui-v2/label-container/LabelContainer.vue"});const{expect:e,fn:h,userEvent:l,within:T}=__STORYBOOK_MODULE_TEST__,w=[{value:"latin",label:"Латиница"},{value:"cyrillic",label:"Кириллица"}],R={title:"UI-V2-Компоненты/LabelContainer",component:v,tags:["autodocs"],parameters:{docs:{description:{component:"Группа кнопок для выбора одного значения. Количество вариантов не ограничено. Tab перемещает фокус, Enter и Space выбирают вариант. Повторное нажатие на выбранную кнопку не меняет значение и не вызывает события."}}},args:{size:"l",options:w,ariaLabel:"Письменность отчёта",modelValue:"latin",fullWidth:!1,onChange:h(),"onUpdate:modelValue":h()},argTypes:{size:{control:"select",options:["l","s"]},options:{control:"object"},ariaLabel:{control:"text"},modelValue:{control:"text"},fullWidth:{control:"boolean"}},render:a=>({components:{LabelContainer:v},setup(){const n=H(a.modelValue);return x(()=>a.modelValue,s=>{n.value=s}),{args:a,selected:n}},template:'<LabelContainer v-bind="args" v-model="selected" />'})},o={name:"Песочница",play:async({canvasElement:a,args:n})=>{const s=T(a),r=s.getByRole("button",{name:"Латиница"}),t=s.getByRole("button",{name:"Кириллица"});await e(s.getByRole("group",{name:n.ariaLabel})).toBeInTheDocument(),await e(r).toHaveAttribute("aria-pressed","true"),await l.click(t),await e(t).toHaveAttribute("aria-pressed","true"),await e(r).toHaveAttribute("aria-pressed","false"),await e(n.onChange).toHaveBeenCalledTimes(1),await e(n.onChange).toHaveBeenCalledWith("cyrillic"),await e(n["onUpdate:modelValue"]).toHaveBeenCalledTimes(1),await e(n["onUpdate:modelValue"]).toHaveBeenCalledWith("cyrillic"),await l.click(t),await e(n.onChange).toHaveBeenCalledTimes(1),await e(n["onUpdate:modelValue"]).toHaveBeenCalledTimes(1),r.focus(),await l.keyboard("{Enter}"),await e(r).toHaveAttribute("aria-pressed","true"),await l.tab(),await e(t).toHaveFocus(),await e(r).toHaveAttribute("aria-pressed","true"),await l.keyboard(" "),await e(t).toHaveAttribute("aria-pressed","true")}},d={name:"Без выбора",args:{modelValue:""}},c={name:"Компактный",args:{size:"s"}},u={name:"Один вариант",args:{options:[w[0]]}},m={name:"Три варианта",args:{options:[{value:"day",label:"День"},{value:"week",label:"Неделя"},{value:"month",label:"Месяц"}],ariaLabel:"Период отчёта",modelValue:"week"}},p={name:"На всю ширину",args:{fullWidth:!0},parameters:{layout:"padded"}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Песочница',
  play: async ({
    canvasElement,
    args
  }) => {
    const canvas = within(canvasElement);
    const latin = canvas.getByRole('button', {
      name: 'Латиница'
    });
    const cyrillic = canvas.getByRole('button', {
      name: 'Кириллица'
    });
    await expect(canvas.getByRole('group', {
      name: args.ariaLabel
    })).toBeInTheDocument();
    await expect(latin).toHaveAttribute('aria-pressed', 'true');
    await userEvent.click(cyrillic);
    await expect(cyrillic).toHaveAttribute('aria-pressed', 'true');
    await expect(latin).toHaveAttribute('aria-pressed', 'false');
    await expect(args.onChange).toHaveBeenCalledTimes(1);
    await expect(args.onChange).toHaveBeenCalledWith('cyrillic');
    await expect(args['onUpdate:modelValue']).toHaveBeenCalledTimes(1);
    await expect(args['onUpdate:modelValue']).toHaveBeenCalledWith('cyrillic');
    await userEvent.click(cyrillic);
    await expect(args.onChange).toHaveBeenCalledTimes(1);
    await expect(args['onUpdate:modelValue']).toHaveBeenCalledTimes(1);
    latin.focus();
    await userEvent.keyboard('{Enter}');
    await expect(latin).toHaveAttribute('aria-pressed', 'true');
    await userEvent.tab();
    await expect(cyrillic).toHaveFocus();
    await expect(latin).toHaveAttribute('aria-pressed', 'true');
    await userEvent.keyboard(' ');
    await expect(cyrillic).toHaveAttribute('aria-pressed', 'true');
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Без выбора',
  args: {
    modelValue: ''
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Компактный',
  args: {
    size: 's'
  }
}`,...c.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Один вариант',
  args: {
    options: [options[0]!]
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Три варианта',
  args: {
    options: [{
      value: 'day',
      label: 'День'
    }, {
      value: 'week',
      label: 'Неделя'
    }, {
      value: 'month',
      label: 'Месяц'
    }],
    ariaLabel: 'Период отчёта',
    modelValue: 'week'
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'На всю ширину',
  args: {
    fullWidth: true
  },
  parameters: {
    layout: 'padded'
  }
}`,...p.parameters?.docs?.source}}};const z=["Playground","Empty","Compact","SingleOption","ThreeOptions","FullWidth"];export{c as Compact,d as Empty,p as FullWidth,o as Playground,u as SingleOption,m as ThreeOptions,z as __namedExportsOrder,R as default};
