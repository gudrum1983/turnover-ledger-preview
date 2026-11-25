import{f as we,C as xe,p as ke,d as ie,q as D,i as S,u as f,T as Be,n as Y,r as v,h as d,o as se,j as re,e as G,k as le,t as de,D as De,E as Le,z as Oe,A as Ee,B as ue,w as Ce}from"./iframe-DpJq971z.js";import{u as Se}from"./useLocale-G9BEut4r.js";import{B as He}from"./ButtonBase-DGxwXFac.js";import{L as Re,a as Ve}from"./ListBoxExpand-DqEj3wBJ.js";import{a as Ae}from"./animateListHeight-BamB8vCP.js";import{D as Te}from"./DisclosureChevron-DR7ChqZi.js";import{_ as Me}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";import"./DividerBase-Dx9AvZie.js";import"./TooltipBase-D5OHRAiq.js";import"./IconRefresh-CR_PDn6H.js";const qe={class:"ButtonDropdown_Trigger"},Pe={class:"ButtonDropdown_MenuContent"},N=we({__name:"ButtonDropdown",props:{options:{},modelValue:{},favorites:{},collapsible:{type:Boolean,default:!1},expandText:{},disabled:{type:Boolean,default:!1},rootClass:{default:""},typography:{default:"body-m"},placement:{default:"right"}},emits:["update:modelValue","change"],setup(a,{emit:n}){const o=n,{t:pe}=Se(),$=v(null),L=v(null),i=v(!1),h=v(!1),w=Ee(),O=d(()=>{if(!a.favorites?.length)return a.options;const e=new Set(a.favorites);return[...a.options.filter(t=>e.has(t.value)),...a.options.filter(t=>!e.has(t.value))]}),j=v(!1),F=d(()=>{if(!a.collapsible||j.value||!a.favorites?.length)return null;const e=new Set(a.favorites),t=O.value.filter(s=>e.has(s.value)||s.value===a.modelValue);return t.length>0&&t.length<O.value.length?t:null}),u=d(()=>F.value??O.value),me=d(()=>O.value.length-u.value.length),fe=d(()=>`${a.expandText??pe("ui.common.showMore")} (${me.value})`),g=Symbol("expand"),Q=`${w}-expand`,l=v(),ve=d(()=>h.value&&l.value===g),x=d(()=>l.value===g?u.value.length:u.value.findIndex(e=>e.value===l.value)),ge=d(()=>{if(!(x.value<0))return l.value===g?Q:`${w}-option-${x.value}`}),ye=d(()=>h.value&&typeof l.value=="string"?l.value:void 0),Z=d(()=>F.value?u.value.length:u.value.length-1);function E(){a.disabled||(l.value=C.value?.value??u.value[0]?.value,i.value=!0)}async function k(e){const t=u.value,s=Math.max(0,Math.min(e,Z.value));l.value=s===t.length?g:t[s]?.value,await ue(),L.value?.scrollToSelected()}function _(){const e=L.value?.$el,t=e?.offsetHeight,s=new Set(u.value.map(m=>m.value));j.value=!0;const X=u.value.findIndex(m=>!s.has(m.value));k(X),ue(()=>Ae(e,t))}function U(){l.value===g?_():l.value!==void 0&&l.value!==a.modelValue?ae(l.value):p()}let y="",ee=0;const C=d(()=>a.options.find(e=>e.value===a.modelValue)),z=d(()=>C.value?.label),be=()=>{a.disabled||(i.value?p():E())},p=()=>{i.value=!1,j.value=!1},ae=e=>{o("update:modelValue",e),o("change",e),p()},te=e=>{!i.value||!$.value||e.composedPath().includes($.value)||p()},he=e=>{if(!a.disabled){if(e.key==="Tab"){i.value&&l.value!==g?U():p();return}if(e.key==="Escape"){i.value&&(e.preventDefault(),e.stopPropagation(),p());return}if(["Enter"," ","ArrowDown","ArrowUp","Home","End","PageDown","PageUp"].includes(e.key)){if(h.value=!0,e.preventDefault(),e.key==="Enter"||e.key===" "){i.value?U():E();return}const t=i.value;if(t||E(),e.altKey&&e.key==="ArrowUp"){U();return}if(e.key==="Home")k(0);else if(e.key==="End")k(Z.value);else if(t&&!e.altKey){const s=e.key==="PageDown"?10:e.key==="PageUp"?-10:e.key==="ArrowDown"?1:-1;k(x.value+s)}return}if(e.key.length===1&&!e.ctrlKey&&!e.metaKey&&!e.altKey){h.value=!0,e.preventDefault(),i.value||E();const t=Date.now();y=t-ee>700?e.key:y+e.key,ee=t;const s=[...y].every(B=>B===y[0])?y[0]:y,X=s.length===1?x.value+1:x.value,m=u.value;for(let B=0;B<m.length;B++){const ne=(Math.max(0,X)+B)%m.length,oe=m[ne];if(oe.label.toLocaleLowerCase().startsWith(s.toLocaleLowerCase())||oe.value.toLocaleLowerCase().startsWith(s.toLocaleLowerCase())){k(ne);break}}}}};return xe(()=>{document.addEventListener("click",te)}),ke(()=>{document.removeEventListener("click",te)}),(e,t)=>(se(),ie("div",{ref_key:"dropdownRef",ref:$,class:Y(["ButtonDropdown",a.rootClass]),onPointerdown:t[2]||(t[2]=s=>h.value=!1)},[D(f(He),{variant:"page",role:"combobox",disabled:a.disabled,"aria-controls":i.value?f(w):void 0,"aria-activedescendant":i.value?ge.value:void 0,onKeydown:he,onBlur:p,"aria-expanded":i.value,"aria-haspopup":"listbox",onClick:be,class:"ButtonDropdown"},{default:S(()=>[re(e.$slots,"trigger",{activeOption:C.value,activeLabel:z.value,isOpen:i.value},()=>[G("div",qe,[G("span",{class:Y(["ButtonDropdown_Label",`u-typo-${a.typography}`])},[re(e.$slots,"label",{activeOption:C.value,activeLabel:z.value},()=>[le(de(z.value),1)],!0)],2),D(f(Te),{open:i.value},null,8,["open"])])],!0)]),_:3},8,["disabled","aria-controls","aria-activedescendant","aria-expanded"]),D(Be,{name:"button-dropdown-menu",onEnter:t[1]||(t[1]=s=>L.value?.scrollToSelected())},{default:S(()=>[i.value?(se(),ie("div",{key:0,class:Y(["ButtonDropdown_Menu",`ButtonDropdown_Menu_${a.placement}`])},[G("div",Pe,[D(f(Re),{ref_key:"listBoxRef",ref:L,class:"ButtonDropdown_ListBox",id:f(w),"option-id-prefix":f(w),"active-value":ye.value,options:u.value,favorites:a.favorites,onMousedown:t[0]||(t[0]=De(()=>{},["prevent"])),"model-value":a.modelValue,onChange:ae},Le({_:2},[F.value?{name:"footer",fn:S(()=>[D(f(Ve),{id:Q,focused:ve.value,onClick:_},{default:S(()=>[le(de(fe.value),1)]),_:1},8,["focused"])]),key:"0"}:void 0]),1032,["id","option-id-prefix","active-value","options","favorites","model-value"])])],2)):Oe("",!0)]),_:1})],34))}}),W=Me(N,[["__scopeId","data-v-1cf31d6e"]]);N.__docgenInfo=Object.assign({displayName:N.name??N.__name},{exportName:"default",displayName:"ButtonDropdown",type:1,props:[{name:"options",global:!1,description:"Список доступных вариантов",tags:[],required:!0,type:"ListBoxOption[]",declarations:[],schema:{kind:"array",type:"ListBoxOption[]"}},{name:"modelValue",global:!1,description:"Текущее выбранное значение",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"favorites",global:!1,description:"Избранные значения вверху списка (строки из options.value)",tags:[],required:!1,type:"string[] | undefined",declarations:[],schema:{kind:"enum",type:"string[] | undefined",schema:["undefined",{kind:"array",type:"string[]"}]}},{name:"collapsible",global:!1,description:"Сворачивать список до избранных и выбранного значения; остальные — за строкой «Ещё»",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"expandText",global:!1,description:"Текст строки раскрытия списка (без счётчика). По умолчанию — «Ещё»",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"disabled",global:!1,description:"Отключает взаимодействие с выпадающим списком",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"rootClass",global:!1,description:"Класс корневого DOM-элемента",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'""'},{name:"typography",global:!1,description:"Типографика подписи кнопки",tags:[],required:!1,type:"DropdownTypography | undefined",declarations:[],schema:{kind:"enum",type:"DropdownTypography | undefined",schema:["undefined",'"body-m"','"button-l"','"button-m"']},default:'"body-m"'},{name:"placement",global:!1,description:"Выравнивание меню относительно кнопки",tags:[],required:!1,type:"DropdownPlacement | undefined",declarations:[],schema:{kind:"enum",type:"DropdownPlacement | undefined",schema:["undefined",'"left"','"center"','"right"']},default:'"right"'},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: string]",signature:'(event: "update:modelValue", value: string): void',declarations:[],schema:["string"]},{name:"change",description:"",tags:[],type:"[value: string]",signature:'(event: "change", value: string): void',declarations:[],schema:["string"]}],slots:[{name:"trigger",type:"{ activeOption: ListBoxOption | undefined; activeLabel: string | undefined; isOpen: boolean; }",description:"",declarations:[],schema:{kind:"object",type:"{ activeOption: ListBoxOption | undefined; activeLabel: string | undefined; isOpen: boolean; }"}},{name:"label",type:"{ activeOption: ListBoxOption | undefined; activeLabel: string | undefined; }",description:"",declarations:[],schema:{kind:"object",type:"{ activeOption: ListBoxOption | undefined; activeLabel: string | undefined; }"}}],exposed:[{name:"$slots",type:"Readonly<InternalSlots> & { trigger?: ((props: { activeOption: ListBoxOption | undefined; activeLabel: string | undefined; isOpen: boolean; }) => any) | undefined; } & { ...; }",description:"",declarations:[],schema:{kind:"object",type:"Readonly<InternalSlots> & { trigger?: ((props: { activeOption: ListBoxOption | undefined; activeLabel: string | undefined; isOpen: boolean; }) => any) | undefined; } & { ...; }"}},{name:"disabled",type:"boolean | undefined",description:"Отключает взаимодействие с выпадающим списком",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"modelValue",type:"string | undefined",description:"Текущее выбранное значение",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"options",type:"ListBoxOption[]",description:"Список доступных вариантов",declarations:[],schema:{kind:"array",type:"ListBoxOption[]"}},{name:"favorites",type:"string[] | undefined",description:"Избранные значения вверху списка (строки из options.value)",declarations:[],schema:{kind:"enum",type:"string[] | undefined",schema:["undefined",{kind:"array",type:"string[]"}]}},{name:"collapsible",type:"boolean | undefined",description:"Сворачивать список до избранных и выбранного значения; остальные — за строкой «Ещё»",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"expandText",type:"string | undefined",description:"Текст строки раскрытия списка (без счётчика). По умолчанию — «Ещё»",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"rootClass",type:"string | undefined",description:"Класс корневого DOM-элемента",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"typography",type:"DropdownTypography | undefined",description:"Типографика подписи кнопки",declarations:[],schema:{kind:"enum",type:"DropdownTypography | undefined",schema:["undefined",'"body-m"','"button-l"','"button-m"']}},{name:"placement",type:"DropdownPlacement | undefined",description:"Выравнивание меню относительно кнопки",declarations:[],schema:{kind:"enum",type:"DropdownPlacement | undefined",schema:["undefined",'"left"','"center"','"right"']}}],sourceFiles:"/home/ekaterina/projects/turnover-ledger/src/shared/ui-v2/button-dropdown/ButtonDropdown.vue"});const{expect:r,userEvent:c,within:ce}=__STORYBOOK_MODULE_TEST__,K=[{value:"2026",label:"2026",description:"(12 записей)"},{value:"2025",label:"2025",description:"(8 записей)"},{value:"2024",label:"2024",description:"(записей нет)"},{value:"2023",label:"2023",description:"(24 записи)"},{value:"2022",label:"2022",description:"(3 записи)"},{value:"2021",label:"2021",description:"(записей нет)"},{value:"2020",label:"2020",description:"(15 записей)"},{value:"2019",label:"2019",description:"(1 запись)"},{value:"2018",label:"2018",description:"(6 записей)"},{value:"2017",label:"2017",description:"(записей нет)"}];function J(a){const n=v(a.modelValue);return Ce(()=>a.modelValue,o=>{n.value=o}),n}const Ge={title:"UI-V2-Компоненты/ButtonDropdown",component:W,tags:["autodocs"],parameters:{layout:"padded",docs:{description:{component:"Кнопка с выпадающим списком для выбора одного значения. Поддерживает v-model, слоты label и trigger. Ширина меню равна ширине кнопки, но не меньше 220 px. Меню выравнивается по правому краю кнопки. Меню закрывается после выбора, по Escape и при нажатии вне компонента. Без выбранного варианта стандартный лейбл пустой; подсказку можно задать через слот label."}}},args:{options:K,modelValue:"2026",disabled:!1,rootClass:""},argTypes:{options:{control:"object"},modelValue:{control:"text"},disabled:{control:"boolean"},rootClass:{control:"text"}},render:a=>({components:{ButtonDropdown:W},setup(){return{args:a,model:J(a)}},template:'<div style="min-height: 300px; display: flex; align-items: flex-start; justify-content: center;"><ButtonDropdown v-bind="args" v-model="model" /></div>'})},H={name:"Песочница"},R={name:"Одна опция",args:{options:K.slice(0,1)}},V={name:"Без скролла",args:{options:K.slice(0,3)}},A={name:"Свёрнутый список с избранными",args:{favorites:["2026","2025","2023","2022","2020","2019","2018"],collapsible:!0},play:async({canvasElement:a})=>{const n=ce(a);await c.click(n.getByRole("combobox")),await r(n.queryByRole("option",{name:"2024 (записей нет)"})).toBeNull(),await c.click(n.getByRole("option",{name:"Ещё (3)"})),await r(n.getByRole("combobox")).toHaveAttribute("aria-expanded","true"),await c.click(n.getByRole("option",{name:"2024 (записей нет)"})),await r(n.getByRole("combobox")).toHaveTextContent("2024")}},T={name:"Управление с клавиатуры",render:a=>({components:{ButtonDropdown:W},setup(){return{args:a,model:J(a)}},template:`
      <div style="min-height: 300px; display: flex; align-items: flex-start; justify-content: space-between; gap: 24px;">
        <button>До селекта</button>
        <ButtonDropdown v-bind="args" v-model="model" />
        <button>После селекта</button>
      </div>
    `}),play:async({canvasElement:a})=>{const n=ce(a),o=n.getByRole("combobox");n.getByRole("button",{name:"До селекта"}).focus(),await c.tab(),await r(o).toHaveFocus(),await c.keyboard("{ArrowDown}{ArrowDown}"),await r(o).toHaveFocus(),await r(o).toHaveAttribute("aria-expanded","true"),await r(o).toHaveAttribute("aria-activedescendant",n.getByRole("option",{name:"2025 (8 записей)"}).id),await c.keyboard("{Escape}"),await r(o).toHaveTextContent("2026"),await r(o).toHaveAttribute("aria-expanded","false"),await c.keyboard("{ArrowDown}{ArrowDown}{Enter}"),await r(o).toHaveTextContent("2025"),await r(o).toHaveFocus(),await c.keyboard("{ArrowDown}"),await c.tab(),await r(n.getByRole("button",{name:"После селекта"})).toHaveFocus(),await r(o).toHaveAttribute("aria-expanded","false"),await c.tab({shift:!0}),await r(o).toHaveFocus()}},M={name:"Неактивный",args:{disabled:!0}},b={name:"С кастомным лейблом",render:a=>({components:{ButtonDropdown:W},setup(){return{args:a,model:J(a)}},template:`
      <div style="min-height: 300px; display: flex; align-items: flex-start; justify-content: center;">
        <ButtonDropdown v-bind="args" v-model="model">
          <template #label="{ activeLabel }">{{ activeLabel ? 'Отчёт за ' + activeLabel + ' год' : 'Выбрать год' }}</template>
        </ButtonDropdown>
      </div>
    `})},q={name:"Без выбранного значения",args:{modelValue:void 0},render:b.render},P={name:"Пустой список",args:{modelValue:void 0,options:[]},render:b.render},I={name:"Только лейблы, без описаний",parameters:{docs:{description:{story:"Тот же список годов без поля description: в опциях отображается только год, без количества записей."}}},args:{options:K.map(({value:a,label:n})=>({value:a,label:n}))}};H.parameters={...H.parameters,docs:{...H.parameters?.docs,source:{originalSource:`{
  name: 'Песочница'
}`,...H.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Одна опция',
  args: {
    options: baseOptions.slice(0, 1)
  }
}`,...R.parameters?.docs?.source}}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Без скролла',
  args: {
    options: baseOptions.slice(0, 3)
  }
}`,...V.parameters?.docs?.source}}};A.parameters={...A.parameters,docs:{...A.parameters?.docs,source:{originalSource:`{
  name: 'Свёрнутый список с избранными',
  args: {
    favorites: ['2026', '2025', '2023', '2022', '2020', '2019', '2018'],
    collapsible: true
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    await userEvent.click(canvas.getByRole('combobox'));
    await expect(canvas.queryByRole('option', {
      name: '2024 (записей нет)'
    })).toBeNull();
    await userEvent.click(canvas.getByRole('option', {
      name: 'Ещё (3)'
    }));
    await expect(canvas.getByRole('combobox')).toHaveAttribute('aria-expanded', 'true');
    await userEvent.click(canvas.getByRole('option', {
      name: '2024 (записей нет)'
    }));
    await expect(canvas.getByRole('combobox')).toHaveTextContent('2024');
  }
}`,...A.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
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
}`,...T.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Неактивный',
  args: {
    disabled: true
  }
}`,...M.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
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
}`,...b.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Без выбранного значения',
  args: {
    modelValue: undefined
  },
  render: WithCustomLabel.render
}`,...q.parameters?.docs?.source}}};P.parameters={...P.parameters,docs:{...P.parameters?.docs,source:{originalSource:`{
  name: 'Пустой список',
  args: {
    modelValue: undefined,
    options: []
  },
  render: WithCustomLabel.render
}`,...P.parameters?.docs?.source}}};I.parameters={...I.parameters,docs:{...I.parameters?.docs,source:{originalSource:`{
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
}`,...I.parameters?.docs?.source}}};const Je=["Playground","SingleOption","WithoutScroll","Collapsible","KeyboardNavigation","Disabled","WithCustomLabel","WithoutModelValue","WithoutOptions","WithoutDescriptions"];export{A as Collapsible,M as Disabled,T as KeyboardNavigation,H as Playground,R as SingleOption,b as WithCustomLabel,I as WithoutDescriptions,q as WithoutModelValue,P as WithoutOptions,V as WithoutScroll,Je as __namedExportsOrder,Ge as default};
