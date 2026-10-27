import{f as g,d as s,e as n,g as f,u as b,p as t,t as p,o as a}from"./iframe-ChIdGxoT.js";import{o as h}from"./IconCopy-Dw4aQTzk.js";import{_ as y}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const L=["disabled"],k={class:"ButtonWithDivider-Content"},_={class:"ButtonWithDivider-Label"},v={class:"u-typo-label-l u-uppercase"},z={key:1,class:"ButtonWithDivider-Divider"},D={key:2,class:"ButtonWithDivider-Label"},S={key:0,class:"u-typo-label-m"},B={class:"u-typo-label-l u-uppercase"},u=g({__name:"ButtonWithDivider",props:{disabled:{type:Boolean,default:!1},size:{default:"l"},rightLabel:{},leftLabel:{},rightValue:{}},setup(e){return(V,M)=>(a(),s("button",{class:"ButtonWithDivider",type:"button",disabled:e.disabled},[n("span",k,[e.size==="s"?(a(),f(b(h),{key:0,size:"m"})):t("",!0),n("span",_,[n("span",v,p(e.leftLabel),1)]),e.size!=="s"?(a(),s("span",z)):t("",!0),e.size!=="s"?(a(),s("span",D,[e.size==="l"?(a(),s("span",S,p(e.rightLabel)+" : ",1)):t("",!0),n("span",B,p(e.rightValue),1)])):t("",!0)])],8,L))}}),q=y(u,[["__scopeId","data-v-774a0c69"]]);u.__docgenInfo=Object.assign({displayName:u.name??u.__name},{exportName:"default",displayName:"ButtonWithDivider",type:1,props:[{name:"disabled",global:!1,description:"Отключает взаимодействие с кнопкой",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"size",global:!1,description:"l — все подписи; m — без rightLabel; s — иконка и leftLabel.",tags:[],required:!1,type:'"s" | "m" | "l" | undefined',declarations:[],schema:{kind:"enum",type:'"s" | "m" | "l" | undefined',schema:["undefined",'"s"','"m"','"l"']},default:'"l"'},{name:"rightLabel",global:!1,description:"Подпись правой пары, видимая только в размере l.",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"leftLabel",global:!1,description:"Левая подпись, видимая во всех размерах.",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"rightValue",global:!1,description:"Значение правой пары, видимое в размерах l и m.",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"size",type:'"s" | "m" | "l" | undefined',description:"l — все подписи; m — без rightLabel; s — иконка и leftLabel.",declarations:[],schema:{kind:"enum",type:'"s" | "m" | "l" | undefined',schema:["undefined",'"s"','"m"','"l"']}},{name:"disabled",type:"boolean | undefined",description:"Отключает взаимодействие с кнопкой",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"rightLabel",type:"string",description:"Подпись правой пары, видимая только в размере l.",declarations:[],schema:"string"},{name:"leftLabel",type:"string",description:"Левая подпись, видимая во всех размерах.",declarations:[],schema:"string"},{name:"rightValue",type:"string",description:"Значение правой пары, видимое в размерах l и m.",declarations:[],schema:"string"}],sourceFiles:"/home/ekaterina/projects/turnover-ledger/src/shared/ui-v2/button-with-divider/ButtonWithDivider.vue"});const C={title:"UI-V2-Компоненты/ButtonWithDivider",component:q,tags:["autodocs"],parameters:{docs:{description:{component:"Три размера: L — все подписи и разделитель; M — левая подпись, разделитель и правое значение без rightLabel; S — только иконка и левая подпись. Все текстовые пропсы обязательны."}}},args:{size:"l",disabled:!1,leftLabel:"Рус",rightLabel:"отчет",rightValue:"SRP"},argTypes:{size:{control:"select",options:["l","m","s"]},disabled:{control:"boolean"},leftLabel:{control:"text",description:"Левая подпись, видимая во всех размерах"},rightLabel:{control:"text",description:"Подпись правой пары, видимая только в размере L"},rightValue:{control:"text",description:"Значение правой пары, видимое в размерах L и M"}}},r={name:"Песочница"},i={name:"Размер L",args:{size:"l"}},o={name:"Размер M",args:{size:"m"}},d={name:"Размер S",args:{size:"s"}},l={name:"Неактивная",args:{disabled:!0}},c={name:"Неактивная — размер M",args:{size:"m",disabled:!0}},m={name:"Неактивная — размер S",args:{size:"s",disabled:!0}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Песочница'
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'Размер L',
  args: {
    size: 'l'
  }
}`,...i.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Размер M',
  args: {
    size: 'm'
  }
}`,...o.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Размер S',
  args: {
    size: 's'
  }
}`,...d.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'Неактивная',
  args: {
    disabled: true
  }
}`,...l.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Неактивная — размер M',
  args: {
    size: 'm',
    disabled: true
  }
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Неактивная — размер S',
  args: {
    size: 's',
    disabled: true
  }
}`,...m.parameters?.docs?.source}}};const w=["Playground","Large","Medium","Small","Disabled","DisabledMedium","DisabledSmall"];export{l as Disabled,c as DisabledMedium,m as DisabledSmall,i as Large,o as Medium,r as Playground,d as Small,w as __namedExportsOrder,C as default};
