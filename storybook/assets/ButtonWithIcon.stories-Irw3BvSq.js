import{f as C,q as x,g as h,h as I,s as S,o as v,e as O,u as W,v as q,i as P,l as k,m as M,x as _}from"./iframe-ChIdGxoT.js";import{_ as L}from"./IconCopy-Dw4aQTzk.js";import{B as R}from"./ButtonBase-B0QKK6KK.js";import{L as $}from"./LoaderBase-BVDPyFFJ.js";import{_ as j}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const w={class:"ButtonWithIcon-Icon","aria-hidden":"true"},g=C({__name:"ButtonWithIcon",props:{variant:{},fullWidth:{type:Boolean},iconOnly:{type:Boolean},size:{default:"l"},type:{},disabled:{type:Boolean,default:!1},icon:{},loading:{type:Boolean,default:!1}},setup(n){M(b=>({v093bdd5f:B.value}));const e=x(n,["size","loading","icon","disabled"]),a={l:{dimension:22,icon:"l",loader:"m"},m:{dimension:18,icon:"m",loader:"s"}},y=k(()=>a[n.size]),B=k(()=>`${y.value.dimension}px`);return(b,N)=>(v(),h(R,S({class:"ButtonWithIcon"},e,{"icon-only":!b.$slots.default,size:n.size,"aria-busy":n.loading||void 0,disabled:n.disabled}),{default:I(()=>[O("span",w,[n.loading?(v(),h(W($),{key:0,size:y.value.loader},null,8,["size"])):(v(),h(q(n.icon),{key:1,size:y.value.icon},null,8,["size"]))]),P(b.$slots,"default",{},void 0,!0)]),_:3},16,["icon-only","size","aria-busy","disabled"]))}}),z=j(g,[["__scopeId","data-v-f303a61d"]]);g.__docgenInfo=Object.assign({displayName:g.name??g.__name},{exportName:"default",displayName:"ButtonWithIcon",type:1,props:[{name:"variant",global:!1,description:"Визуальный вариант кнопки",tags:[],required:!1,type:'"page" | "accent" | "success" | "danger" | "card" | undefined',declarations:[],schema:{kind:"enum",type:'"page" | "accent" | "success" | "danger" | "card" | undefined',schema:["undefined",'"page"','"accent"','"success"','"danger"','"card"']}},{name:"fullWidth",global:!1,description:"Растягивает кнопку на всю ширину контейнера",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"iconOnly",global:!1,description:"Убирает внутренние отступы и задаёт одинаковую ширину и высоту кнопки без текста",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"size",global:!1,description:"Размер типографики и иконки: l — крупный, m — средний",tags:[],required:!1,type:"ButtonSize | undefined",declarations:[],schema:{kind:"enum",type:"ButtonSize | undefined",schema:["undefined",'"m"','"l"']},default:'"l"'},{name:"type",global:!1,description:"HTML-тип кнопки",tags:[],required:!1,type:'"button" | "submit" | "reset" | undefined',declarations:[],schema:{kind:"enum",type:'"button" | "submit" | "reset" | undefined',schema:["undefined",'"button"','"submit"','"reset"']}},{name:"disabled",global:!1,description:`Отключает взаимодействие с кнопкой
Отключает кнопку`,tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"icon",global:!1,description:"Компонент иконки; размер задаётся кнопкой",tags:[],required:!0,type:"Component",declarations:[],schema:{kind:"enum",type:"Component",schema:[{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Attrs; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed | undefined) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"}]}},{name:"loading",global:!1,description:"Показывает индикатор загрузки вместо иконки",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"size",type:"ButtonSize | undefined",description:"Размер типографики и иконки: l — крупный, m — средний",declarations:[],schema:{kind:"enum",type:"ButtonSize | undefined",schema:["undefined",'"m"','"l"']}},{name:"fullWidth",type:"boolean | undefined",description:"Растягивает кнопку на всю ширину контейнера",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"disabled",type:"boolean | undefined",description:`Отключает взаимодействие с кнопкой
Отключает кнопку`,declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"variant",type:'"page" | "accent" | "success" | "danger" | "card" | undefined',description:"Визуальный вариант кнопки",declarations:[],schema:{kind:"enum",type:'"page" | "accent" | "success" | "danger" | "card" | undefined',schema:["undefined",'"page"','"accent"','"success"','"danger"','"card"']}},{name:"iconOnly",type:"boolean | undefined",description:"Убирает внутренние отступы и задаёт одинаковую ширину и высоту кнопки без текста",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"type",type:'"button" | "submit" | "reset" | undefined',description:"HTML-тип кнопки",declarations:[],schema:{kind:"enum",type:'"button" | "submit" | "reset" | undefined',schema:["undefined",'"button"','"submit"','"reset"']}},{name:"icon",type:"Component",description:"Компонент иконки; размер задаётся кнопкой",declarations:[],schema:{kind:"enum",type:"Component",schema:[{kind:"object",type:"ComponentOptions<any, any, any, ComputedOptions, MethodOptions, any, any, any, string, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>"},{kind:"event",type:'(props: any, ctx: Omit<{ attrs: Attrs; slots: Readonly<InternalSlots>; emit: (event: string, ...args: any[]) => void; expose: <Exposed extends Record<string, any> = Record<string, any>>(exposed?: Exposed | undefined) => void; }, "expose">): any'},{kind:"object",type:"ComponentPublicInstanceConstructor<any, any, any, any, ComputedOptions, MethodOptions>"}]}},{name:"loading",type:"boolean | undefined",description:"Показывает индикатор загрузки вместо иконки",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}}],sourceFiles:"/home/ekaterina/projects/turnover-ledger/src/shared/ui-v2/button-with-icon/ButtonWithIcon.vue"});const E=`<ButtonWithIcon v-bind="props" :icon="icon">
  {{ label }}
</ButtonWithIcon>`,K={title:"UI-V2-Компоненты/ButtonWithIcon",component:z,tags:["autodocs"],parameters:{docs:{source:{type:"dynamic",language:"html",transform:(n,{args:e})=>`<ButtonWithIcon :icon="IconUpload" ${[`variant="${e.variant}"`,`size="${e.size}"`,`type="${e.type}"`,...e.disabled?["disabled"]:[],...e.fullWidth?["full-width"]:[],...e.loading?["loading"]:[]].join(" ")}>
  ${e.default}
</ButtonWithIcon>`},description:{component:"Кнопка с иконкой и текстом. Компонент иконки передаётся пропсом icon, её размер задаётся кнопкой. При loading иконка заменяется лоадером без изменения ширины. Для блокировки используйте disabled."}}},args:{icon:_(L),variant:"page",size:"l",type:"button",disabled:!1,default:"Загрузить данные",fullWidth:!1,loading:!1},argTypes:{variant:{control:"select",options:["page","accent","success","danger","card"]},size:{control:"select",options:["l","m"]},type:{control:"select",options:["button","submit","reset"]},disabled:{control:"boolean"},default:{control:"text"},fullWidth:{control:"boolean"},loading:{control:"boolean"},icon:{control:!1}},render:({default:n,icon:e,...a})=>({components:{ButtonWithIcon:z},setup:()=>({props:a,label:n,icon:e}),template:E})},t={name:"Песочница"},s={name:"Размер M",args:{size:"m"}},o={name:"Размер L",args:{size:"l"}},r={name:"Неактивная",args:{disabled:!0}},i={args:{variant:"page"}},d={args:{variant:"accent"}},c={args:{variant:"success"}},l={args:{variant:"danger"}},u={args:{variant:"card"}},m={name:"На всю ширину",args:{fullWidth:!0}},p={name:"Загрузка",args:{loading:!0,variant:"accent"}},f={name:"Загрузка — размер M",args:{loading:!0,size:"m",variant:"accent"}};t.parameters={...t.parameters,docs:{...t.parameters?.docs,source:{originalSource:`{
  name: 'Песочница'
}`,...t.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Размер M',
  args: {
    size: 'm'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Размер L',
  args: {
    size: 'l'
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Неактивная',
  args: {
    disabled: true
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'page'
  }
}`,...i.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'accent'
  }
}`,...d.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'success'
  }
}`,...c.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'danger'
  }
}`,...l.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  args: {
    variant: 'card'
  }
}`,...u.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'На всю ширину',
  args: {
    fullWidth: true
  }
}`,...m.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Загрузка',
  args: {
    loading: true,
    variant: 'accent'
  }
}`,...p.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Загрузка — размер M',
  args: {
    loading: true,
    size: 'm',
    variant: 'accent'
  }
}`,...f.parameters?.docs?.source}}};const U=["Playground","Medium","Large","Disabled","Page","Accent","Success","Danger","Card","FullWidth","Loading","LoadingMedium"];export{d as Accent,u as Card,l as Danger,r as Disabled,m as FullWidth,o as Large,p as Loading,f as LoadingMedium,s as Medium,i as Page,t as Playground,c as Success,U as __namedExportsOrder,K as default};
