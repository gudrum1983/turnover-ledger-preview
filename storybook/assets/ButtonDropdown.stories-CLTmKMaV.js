import{f as te,D as ae,A as ne,d as Y,s as k,i as G,u as p,T as oe,n as K,r as m,h as D,o as J,j as Q,e as j,k as ie,t as se,E as re,q as de,C as le,y as ue,w as ce}from"./iframe-DXYS3GUr.js";import{B as pe}from"./ButtonBase-Bc_pISXy.js";import{L as me}from"./ListBox-B0vZeUJG.js";import{D as fe}from"./DisclosureChevron-CCXjSMPQ.js";import{_ as ve}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";import"./DividerBase-CGkOIXXx.js";import"./TooltipBase-BujMwMed.js";import"./IconPen-Dtkikn0_.js";const ge={class:"ButtonDropdown_Trigger"},ye={class:"ButtonDropdown_MenuContent"},A=te({__name:"ButtonDropdown",props:{options:{},modelValue:{},disabled:{type:Boolean,default:!1},rootClass:{default:""},typography:{default:"body-m"},placement:{default:"right"}},emits:["update:modelValue","change"],setup(t,{emit:i}){const a=i,R=m(null),P=m(null),n=m(!1),y=m(!1),b=le(),r=m(),v=D(()=>t.options.findIndex(e=>e.value===r.value)),X=D(()=>v.value<0?void 0:`${b}-option-${v.value}`);function w(){t.disabled||(r.value=x.value?.value??t.options[0]?.value,n.value=!0)}async function h(e){r.value=t.options[Math.max(0,Math.min(e,t.options.length-1))]?.value,await ue(),P.value?.scrollToSelected()}function q(){r.value!==void 0&&r.value!==t.modelValue?I(r.value):c()}let u="",F=0;const x=D(()=>t.options.find(e=>e.value===t.modelValue)),W=D(()=>x.value?.label),Z=()=>{t.disabled||(n.value?c():w())},c=()=>{n.value=!1},I=e=>{a("update:modelValue",e),a("change",e),c()},$=e=>{!n.value||!R.value||R.value.contains(e.target)||c()},_=e=>{if(!t.disabled){if(e.key==="Tab"){n.value&&q();return}if(e.key==="Escape"){n.value&&(e.preventDefault(),e.stopPropagation(),c());return}if(["Enter"," ","ArrowDown","ArrowUp","Home","End","PageDown","PageUp"].includes(e.key)){if(y.value=!0,e.preventDefault(),e.key==="Enter"||e.key===" "){n.value?q():w();return}const o=n.value;if(o||w(),e.altKey&&e.key==="ArrowUp"){q();return}if(e.key==="Home")h(0);else if(e.key==="End")h(t.options.length-1);else if(o&&!e.altKey){const d=e.key==="PageDown"?10:e.key==="PageUp"?-10:e.key==="ArrowDown"?1:-1;h(v.value+d)}return}if(e.key.length===1&&!e.ctrlKey&&!e.metaKey&&!e.altKey){y.value=!0,e.preventDefault(),n.value||w();const o=Date.now();u=o-F>700?e.key:u+e.key,F=o;const d=[...u].every(g=>g===u[0])?u[0]:u,ee=d.length===1?v.value+1:v.value;for(let g=0;g<t.options.length;g++){const U=(Math.max(0,ee)+g)%t.options.length,z=t.options[U];if(z.label.toLocaleLowerCase().startsWith(d.toLocaleLowerCase())||z.value.toLocaleLowerCase().startsWith(d.toLocaleLowerCase())){h(U);break}}}}};return ae(()=>{document.addEventListener("click",$)}),ne(()=>{document.removeEventListener("click",$)}),(e,o)=>(J(),Y("div",{ref_key:"dropdownRef",ref:R,class:K(["ButtonDropdown",t.rootClass]),onPointerdown:o[2]||(o[2]=d=>y.value=!1)},[k(p(pe),{variant:"page",role:"combobox",disabled:t.disabled,"aria-controls":n.value?p(b):void 0,"aria-activedescendant":n.value?X.value:void 0,onKeydown:_,onBlur:c,"aria-expanded":n.value,"aria-haspopup":"listbox",onClick:Z,class:"ButtonDropdown"},{default:G(()=>[Q(e.$slots,"trigger",{activeOption:x.value,activeLabel:W.value,isOpen:n.value},()=>[j("div",ge,[j("span",{class:K(["ButtonDropdown_Label",`u-typo-${t.typography}`])},[Q(e.$slots,"label",{activeOption:x.value,activeLabel:W.value},()=>[ie(se(W.value),1)],!0)],2),k(p(fe),{open:n.value},null,8,["open"])])],!0)]),_:3},8,["disabled","aria-controls","aria-activedescendant","aria-expanded"]),k(oe,{name:"button-dropdown-menu",onEnter:o[1]||(o[1]=d=>P.value?.scrollToSelected())},{default:G(()=>[n.value?(J(),Y("div",{key:0,class:K(["ButtonDropdown_Menu",`ButtonDropdown_Menu_${t.placement}`])},[j("div",ye,[k(p(me),{ref_key:"listBoxRef",ref:P,class:"ButtonDropdown_ListBox",id:p(b),"option-id-prefix":p(b),"active-value":y.value?r.value:void 0,options:t.options,onMousedown:o[0]||(o[0]=re(()=>{},["prevent"])),"model-value":t.modelValue,onChange:I},null,8,["id","option-id-prefix","active-value","options","model-value"])])],2)):de("",!0)]),_:1})],34))}}),T=ve(A,[["__scopeId","data-v-14f1796f"]]);A.__docgenInfo=Object.assign({displayName:A.name??A.__name},{exportName:"default",displayName:"ButtonDropdown",type:1,props:[{name:"options",global:!1,description:"Список доступных вариантов",tags:[],required:!0,type:"ListBoxOption[]",declarations:[],schema:{kind:"array",type:"ListBoxOption[]"}},{name:"modelValue",global:!1,description:"Текущее выбранное значение",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"disabled",global:!1,description:"Отключает взаимодействие с выпадающим списком",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"rootClass",global:!1,description:"Класс корневого DOM-элемента",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'""'},{name:"typography",global:!1,description:"Типографика подписи кнопки",tags:[],required:!1,type:"DropdownTypography | undefined",declarations:[],schema:{kind:"enum",type:"DropdownTypography | undefined",schema:["undefined",'"body-m"','"button-l"','"button-m"']},default:'"body-m"'},{name:"placement",global:!1,description:"Выравнивание меню относительно кнопки",tags:[],required:!1,type:"DropdownPlacement | undefined",declarations:[],schema:{kind:"enum",type:"DropdownPlacement | undefined",schema:["undefined",'"left"','"center"','"right"']},default:'"right"'},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: string]",signature:'(event: "update:modelValue", value: string): void',declarations:[],schema:["string"]},{name:"change",description:"",tags:[],type:"[value: string]",signature:'(event: "change", value: string): void',declarations:[],schema:["string"]}],slots:[{name:"trigger",type:"{ activeOption: ListBoxOption | undefined; activeLabel: string | undefined; isOpen: boolean; }",description:"",declarations:[],schema:{kind:"object",type:"{ activeOption: ListBoxOption | undefined; activeLabel: string | undefined; isOpen: boolean; }"}},{name:"label",type:"{ activeOption: ListBoxOption | undefined; activeLabel: string | undefined; }",description:"",declarations:[],schema:{kind:"object",type:"{ activeOption: ListBoxOption | undefined; activeLabel: string | undefined; }"}}],exposed:[{name:"$slots",type:"Readonly<InternalSlots> & { trigger?: ((props: { activeOption: ListBoxOption | undefined; activeLabel: string | undefined; isOpen: boolean; }) => any) | undefined; } & { ...; }",description:"",declarations:[],schema:{kind:"object",type:"Readonly<InternalSlots> & { trigger?: ((props: { activeOption: ListBoxOption | undefined; activeLabel: string | undefined; isOpen: boolean; }) => any) | undefined; } & { ...; }"}},{name:"modelValue",type:"string | undefined",description:"Текущее выбранное значение",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"options",type:"ListBoxOption[]",description:"Список доступных вариантов",declarations:[],schema:{kind:"array",type:"ListBoxOption[]"}},{name:"disabled",type:"boolean | undefined",description:"Отключает взаимодействие с выпадающим списком",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"placement",type:"DropdownPlacement | undefined",description:"Выравнивание меню относительно кнопки",declarations:[],schema:{kind:"enum",type:"DropdownPlacement | undefined",schema:["undefined",'"left"','"center"','"right"']}},{name:"rootClass",type:"string | undefined",description:"Класс корневого DOM-элемента",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"typography",type:"DropdownTypography | undefined",description:"Типографика подписи кнопки",declarations:[],schema:{kind:"enum",type:"DropdownTypography | undefined",schema:["undefined",'"body-m"','"button-l"','"button-m"']}}],sourceFiles:"/home/ekaterina/projects/turnover-ledger/src/shared/ui-v2/button-dropdown/ButtonDropdown.vue"});const{expect:s,userEvent:l,within:be}=__STORYBOOK_MODULE_TEST__,M=[{value:"2026",label:"2026",description:"(12 записей)"},{value:"2025",label:"2025",description:"(8 записей)"},{value:"2024",label:"2024",description:"(записей нет)"},{value:"2023",label:"2023",description:"(24 записи)"},{value:"2022",label:"2022",description:"(3 записи)"},{value:"2021",label:"2021",description:"(записей нет)"},{value:"2020",label:"2020",description:"(15 записей)"},{value:"2019",label:"2019",description:"(1 запись)"},{value:"2018",label:"2018",description:"(6 записей)"},{value:"2017",label:"2017",description:"(записей нет)"}];function N(t){const i=m(t.modelValue);return ce(()=>t.modelValue,a=>{i.value=a}),i}const Ee={title:"UI-V2-Компоненты/ButtonDropdown",component:T,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Кнопка с выпадающим списком для выбора одного значения. Поддерживает v-model, слоты label и trigger. Ширина меню равна ширине кнопки, но не меньше 220 px. Меню выравнивается по правому краю кнопки. Меню закрывается после выбора, по Escape и при нажатии вне компонента. Без выбранного варианта стандартный лейбл пустой; подсказку можно задать через слот label."}}},args:{options:M,modelValue:"2026",disabled:!1,rootClass:""},argTypes:{options:{control:"object"},modelValue:{control:"text"},disabled:{control:"boolean"},rootClass:{control:"text"}},render:t=>({components:{ButtonDropdown:T},setup(){return{args:t,model:N(t)}},template:'<div style="min-height: 300px; display: flex; align-items: flex-start; justify-content: center;"><ButtonDropdown v-bind="args" v-model="model" /></div>'})},B={name:"Песочница"},O={name:"Одна опция",args:{options:M.slice(0,1)}},L={name:"Без скролла",args:{options:M.slice(0,3)}},C={name:"Управление с клавиатуры",render:t=>({components:{ButtonDropdown:T},setup(){return{args:t,model:N(t)}},template:`
      <div style="min-height: 300px; display: flex; align-items: flex-start; justify-content: space-between; gap: 24px;">
        <button>До селекта</button>
        <ButtonDropdown v-bind="args" v-model="model" />
        <button>После селекта</button>
      </div>
    `}),play:async({canvasElement:t})=>{const i=be(t),a=i.getByRole("combobox");i.getByRole("button",{name:"До селекта"}).focus(),await l.tab(),await s(a).toHaveFocus(),await l.keyboard("{ArrowDown}{ArrowDown}"),await s(a).toHaveFocus(),await s(a).toHaveAttribute("aria-expanded","true"),await s(a).toHaveAttribute("aria-activedescendant",i.getByRole("option",{name:"2025 (8 записей)"}).id),await l.keyboard("{Escape}"),await s(a).toHaveTextContent("2026"),await s(a).toHaveAttribute("aria-expanded","false"),await l.keyboard("{ArrowDown}{ArrowDown}{Enter}"),await s(a).toHaveTextContent("2025"),await s(a).toHaveFocus(),await l.keyboard("{ArrowDown}"),await l.tab(),await s(i.getByRole("button",{name:"После селекта"})).toHaveFocus(),await s(a).toHaveAttribute("aria-expanded","false"),await l.tab({shift:!0}),await s(a).toHaveFocus()}},E={name:"Неактивный",args:{disabled:!0}},f={name:"С кастомным лейблом",render:t=>({components:{ButtonDropdown:T},setup(){return{args:t,model:N(t)}},template:`
      <div style="min-height: 300px; display: flex; align-items: flex-start; justify-content: center;">
        <ButtonDropdown v-bind="args" v-model="model">
          <template #label="{ activeLabel }">{{ activeLabel ? 'Отчёт за ' + activeLabel + ' год' : 'Выбрать год' }}</template>
        </ButtonDropdown>
      </div>
    `})},V={name:"Без выбранного значения",args:{modelValue:void 0},render:f.render},S={name:"Пустой список",args:{modelValue:void 0,options:[]},render:f.render},H={name:"Только лейблы, без описаний",parameters:{docs:{description:{story:"Тот же список годов без поля description: в опциях отображается только год, без количества записей."}}},args:{options:M.map(({value:t,label:i})=>({value:t,label:i}))}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Песочница'
}`,...B.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Одна опция',
  args: {
    options: baseOptions.slice(0, 1)
  }
}`,...O.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'Без скролла',
  args: {
    options: baseOptions.slice(0, 3)
  }
}`,...L.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Управление с клавиатуры',
  render: args => ({
    components: {
      ButtonDropdown
    },
    setup() {
      return {
        args,
        model: useStoryModel(args)
      };
    },
    template: \`
      <div style="min-height: 300px; display: flex; align-items: flex-start; justify-content: space-between; gap: 24px;">
        <button>До селекта</button>
        <ButtonDropdown v-bind="args" v-model="model" />
        <button>После селекта</button>
      </div>
    \`
  }),
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const select = canvas.getByRole('combobox');
    canvas.getByRole('button', {
      name: 'До селекта'
    }).focus();
    await userEvent.tab();
    await expect(select).toHaveFocus();
    await userEvent.keyboard('{ArrowDown}{ArrowDown}');
    await expect(select).toHaveFocus();
    await expect(select).toHaveAttribute('aria-expanded', 'true');
    await expect(select).toHaveAttribute('aria-activedescendant', canvas.getByRole('option', {
      name: '2025 (8 записей)'
    }).id);
    await userEvent.keyboard('{Escape}');
    await expect(select).toHaveTextContent('2026');
    await expect(select).toHaveAttribute('aria-expanded', 'false');
    await userEvent.keyboard('{ArrowDown}{ArrowDown}{Enter}');
    await expect(select).toHaveTextContent('2025');
    await expect(select).toHaveFocus();
    await userEvent.keyboard('{ArrowDown}');
    await userEvent.tab();
    await expect(canvas.getByRole('button', {
      name: 'После селекта'
    })).toHaveFocus();
    await expect(select).toHaveAttribute('aria-expanded', 'false');
    await userEvent.tab({
      shift: true
    });
    await expect(select).toHaveFocus();
  }
}`,...C.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Неактивный',
  args: {
    disabled: true
  }
}`,...E.parameters?.docs?.source}}};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'С кастомным лейблом',
  render: args => ({
    components: {
      ButtonDropdown
    },
    setup() {
      return {
        args,
        model: useStoryModel(args)
      };
    },
    template: \`
      <div style="min-height: 300px; display: flex; align-items: flex-start; justify-content: center;">
        <ButtonDropdown v-bind="args" v-model="model">
          <template #label="{ activeLabel }">{{ activeLabel ? 'Отчёт за ' + activeLabel + ' год' : 'Выбрать год' }}</template>
        </ButtonDropdown>
      </div>
    \`
  })
}`,...f.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Без выбранного значения',
  args: {
    modelValue: undefined
  },
  render: WithCustomLabel.render
}`,...V.parameters?.docs?.source}}};S.parameters={...S.parameters,docs:{...S.parameters?.docs,source:{originalSource:`{
  name: 'Пустой список',
  args: {
    modelValue: undefined,
    options: []
  },
  render: WithCustomLabel.render
}`,...S.parameters?.docs?.source}}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Только лейблы, без описаний',
  parameters: {
    docs: {
      description: {
        story: 'Тот же список годов без поля description: в опциях отображается только год, без количества записей.'
      }
    }
  },
  args: {
    options: baseOptions.map(({
      value,
      label
    }) => ({
      value,
      label
    }))
  }
}`,...H.parameters?.docs?.source}}};const Ve=["Playground","SingleOption","WithoutScroll","KeyboardNavigation","Disabled","WithCustomLabel","WithoutModelValue","WithoutOptions","WithoutDescriptions"];export{E as Disabled,C as KeyboardNavigation,B as Playground,O as SingleOption,f as WithCustomLabel,H as WithoutDescriptions,V as WithoutModelValue,S as WithoutOptions,L as WithoutScroll,Ve as __namedExportsOrder,Ee as default};
