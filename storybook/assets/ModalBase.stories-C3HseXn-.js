import{f as U,w as l,C as W,g as A,D as M,h as E,T as N,E as G,o as m,d as I,e as i,u as d,t as J,p as P,i as Q,G as X,n as Y,r as C,B as Z,H as ee}from"./iframe-ChIdGxoT.js";import{B as $}from"./ButtonBase-B0QKK6KK.js";import{j as ae}from"./IconCopy-Dw4aQTzk.js";import{B as te}from"./ButtonIcon-DD_WyxpQ.js";import{u as ne}from"./useLocale-DbmkDJ9p.js";import{_ as oe}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";const se=["aria-labelledby","aria-hidden","inert"],le={class:"ModalBase-Header"},re=["id"],ie={class:"ModalBase-Content"},b=U({__name:"ModalBase",props:{open:{type:Boolean,default:!1},title:{},animateTitle:{type:Boolean,default:!1},hasCloseButton:{type:Boolean,default:!1},shouldCloseOnOverlay:{type:Boolean,default:!1},shouldCloseOnEsc:{type:Boolean,default:!1},rootClass:{default:""}},emits:["update:open"],setup(e,{emit:t}){const n=t,s=typeof document<"u",o=C(),w=Z();function K(a){a.setAttribute("aria-hidden","true")}let c=null;const{t:V}=ne();function j(a){if(a.key!=="Tab"||!o.value)return;const O=Array.from(o.value.querySelectorAll('button:not(:disabled), a[href], input:not(:disabled), select:not(:disabled), textarea:not(:disabled), [tabindex]:not([tabindex="-1"])')).filter(z=>z.getClientRects().length>0),T=O[0],_=O.at(-1);T?a.shiftKey&&(document.activeElement===T||document.activeElement===o.value)?(a.preventDefault(),_?.focus()):!a.shiftKey&&(document.activeElement===_||document.activeElement===o.value)&&(a.preventDefault(),T.focus()):(a.preventDefault(),o.value.focus())}l(()=>e.open,async a=>{s&&(a?(c=document.activeElement instanceof HTMLElement?document.activeElement:null,await ee(),e.open&&o.value?.focus()):(c?.focus(),c=null))},{immediate:!0});function k(){e.open&&n("update:open",!1)}const H=()=>{e.shouldCloseOnOverlay&&k()};let u=!1,r=null;const S=a=>{a.key!=="Escape"||!e.shouldCloseOnEsc||k()},q=a=>{if(s){if(a&&!u){document.addEventListener("keydown",S),u=!0;return}!a&&u&&(document.removeEventListener("keydown",S),u=!1)}},L=a=>{if(s){if(a){r===null&&(r=document.body.style.overflow),document.body.style.overflow="hidden";return}r!==null?(document.body.style.overflow=r,r=null):document.body.style.removeProperty("overflow")}};return l(()=>e.open&&e.shouldCloseOnEsc,a=>{q(a)},{immediate:!0}),l(()=>e.open,a=>{L(a)},{immediate:!0}),W(()=>{q(!1),L(!1),c?.focus()}),(a,O)=>(m(),A(G,{to:"body"},[M(N,{"enter-from-class":"ModalBase_enterFrom","enter-active-class":"ModalBase_enterActive","enter-to-class":"ModalBase_enterTo","leave-from-class":"ModalBase_leaveFrom","leave-active-class":"ModalBase_leaveActive","leave-to-class":"ModalBase_leaveTo",appear:""},{default:E(()=>[e.open?(m(),I("div",{key:0,class:Y(["ModalBase",e.rootClass]),role:"dialog","aria-modal":"true","aria-labelledby":d(w),"aria-hidden":!e.open||void 0,inert:!e.open,onKeydown:j},[i("div",{class:"ModalBase-Overlay",onClick:X(H,["self"])},[i("div",{ref_key:"container",ref:o,class:"ModalBase-Container",tabindex:"-1"},[i("div",le,[i("span",{id:d(w),class:"ModalBase-Title u-typo-subtitle-l"},[M(N,{css:e.animateTitle,"enter-from-class":"ModalBase-TitleText_enterFrom","enter-active-class":"ModalBase-TitleText_enterActive","leave-active-class":"ModalBase-TitleText_leaveActive","leave-to-class":"ModalBase-TitleText_leaveTo",onBeforeLeave:K},{default:E(()=>[(m(),I("span",{key:e.animateTitle?e.title:"static",class:"ModalBase-TitleText"},J(e.title),1))]),_:1},8,["css"])],8,re),e.hasCloseButton?(m(),A(d(te),{key:0,ariaLabel:d(V)("ui.importDataModal.close"),onClick:k,variant:"card"},{default:E(()=>[M(d(ae),{size:"xl"})]),_:1},8,["ariaLabel"])):P("",!0)]),i("div",ie,[Q(a.$slots,"default",{},void 0,!0)])],512)])],42,se)):P("",!0)]),_:3})]))}}),x=oe(b,[["__scopeId","data-v-97462c7e"]]);b.__docgenInfo=Object.assign({displayName:b.name??b.__name},{exportName:"default",displayName:"ModalBase",type:1,props:[{name:"open",global:!1,description:"Управляет видимостью модального окна",tags:[],required:!1,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]},default:"false"},{name:"title",global:!1,description:"Заголовок модального окна",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"animateTitle",global:!1,description:"Анимирует смену текста заголовка.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"hasCloseButton",global:!1,description:"Определяет наличие кнопки закрытия",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"shouldCloseOnOverlay",global:!1,description:"Разрешает закрытие по клику на overlay",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"shouldCloseOnEsc",global:!1,description:"Разрешает закрытие по клавише Escape",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"rootClass",global:!1,description:"Дополнительный CSS-класс корневого элемента модального окна.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'""'},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:open",description:"",tags:[],type:"[value: boolean]",signature:'(event: "update:open", value: boolean): void',declarations:[],schema:[{kind:"enum",type:"boolean",schema:["false","true"]}]}],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"open",type:"boolean",description:"Управляет видимостью модального окна",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"rootClass",type:"string | undefined",description:"Дополнительный CSS-класс корневого элемента модального окна.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"title",type:"string",description:"Заголовок модального окна",declarations:[],schema:"string"},{name:"animateTitle",type:"boolean | undefined",description:"Анимирует смену текста заголовка.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"hasCloseButton",type:"boolean | undefined",description:"Определяет наличие кнопки закрытия",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"shouldCloseOnOverlay",type:"boolean | undefined",description:"Разрешает закрытие по клику на overlay",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"shouldCloseOnEsc",type:"boolean | undefined",description:"Разрешает закрытие по клавише Escape",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}}],sourceFiles:"/home/ekaterina/projects/turnover-ledger/src/shared/ui-v2/modal-base/ModalBase.vue"});const R="<p>Содержимое модального окна передаётся через обычный слот.</p>",D=`<p v-for="paragraph in 20" :key="paragraph">
  Абзац {{ paragraph }}. Длинное содержимое прокручивается внутри окна, а страница под ним остаётся неподвижной.
</p>`,F=e=>t=>({components:{ModalBase:x,ButtonBase:$},setup(){const n=C(t.open);return l(()=>t.open,s=>{n.value=s}),{args:t,open:n}},template:`<div>
    <ButtonBase @click="open = true">Открыть модалку</ButtonBase>
    <ModalBase v-bind="args" v-model:open="open">
      <div style="display: flex; flex-direction: column; gap: 16px">
        ${e}
        <ButtonBase @click="open = false">Готово</ButtonBase>
      </div>
    </ModalBase>
  </div>`}),ge={title:"UI-V2-Компоненты/ModalBase",component:x,tags:["autodocs"],parameters:{docs:{description:{component:"Модальное окно с заголовком и слотом содержимого. Откройте окно кнопкой: фокус остаётся внутри, после закрытия возвращается на кнопку открытия."},source:{type:"dynamic",language:"html",transform:(e,{args:t,parameters:n})=>`<ButtonBase @click="open = true">Открыть модалку</ButtonBase>
<ModalBase ${['v-model:open="open"',`title="${t.title}"`,...t.animateTitle?["animate-title"]:[],...t.hasCloseButton?["has-close-button"]:[],...t.shouldCloseOnOverlay?["should-close-on-overlay"]:[],...t.shouldCloseOnEsc?["should-close-on-esc"]:[],...t.rootClass?[`root-class="${t.rootClass}"`]:[]].join(" ")}>
  ${n.longContent?D:R}
  <ButtonBase @click="open = false">Готово</ButtonBase>
</ModalBase>`}}},args:{open:!1,title:"Заголовок модального окна",animateTitle:!1,hasCloseButton:!0,shouldCloseOnOverlay:!0,shouldCloseOnEsc:!0,rootClass:""},argTypes:{open:{control:"boolean"},title:{control:"text"},animateTitle:{control:"boolean"},hasCloseButton:{control:"boolean"},shouldCloseOnOverlay:{control:"boolean"},shouldCloseOnEsc:{control:"boolean"},rootClass:{control:"text"}},render:F(R)},f={name:"Песочница"},p={name:"Без крестика",args:{hasCloseButton:!1}},y={name:"Закрытие по Escape",args:{shouldCloseOnOverlay:!1}},g={name:"Закрытие по фону",args:{shouldCloseOnEsc:!1}},v={name:"Закрытие только кнопкой",args:{hasCloseButton:!1,shouldCloseOnOverlay:!1,shouldCloseOnEsc:!1}},B={name:"Длинное содержимое",args:{title:"Окно с прокруткой"},parameters:{longContent:!0},render:F(D)},h={name:"Анимация смены заголовка",args:{animateTitle:!0},parameters:{docs:{source:{transform:void 0,code:`<ModalBase v-model:open="open" :title="title" animate-title has-close-button>
  <ButtonBase @click="toggleTitle">Сменить заголовок</ButtonBase>
</ModalBase>`},description:{story:"Откройте окно и нажмите «Сменить заголовок». Переход включён только при animateTitle; настройка уменьшения анимаций учитывается автоматически."}}},render:e=>({components:{ModalBase:x,ButtonBase:$},setup(){const t=C(e.open),n=C(e.title);return l(()=>e.open,o=>{t.value=o}),l(()=>e.title,o=>{n.value=o}),{args:e,open:t,title:n,toggleTitle:()=>{n.value=n.value===e.title?"Language settings":e.title}}},template:`<div>
      <ButtonBase @click="open = true">Открыть модалку</ButtonBase>
      <ModalBase v-bind="args" v-model:open="open" :title="title">
        <ButtonBase @click="toggleTitle">Сменить заголовок</ButtonBase>
      </ModalBase>
    </div>`})};f.parameters={...f.parameters,docs:{...f.parameters?.docs,source:{originalSource:`{
  name: 'Песочница'
}`,...f.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Без крестика',
  args: {
    hasCloseButton: false
  }
}`,...p.parameters?.docs?.source}}};y.parameters={...y.parameters,docs:{...y.parameters?.docs,source:{originalSource:`{
  name: 'Закрытие по Escape',
  args: {
    shouldCloseOnOverlay: false
  }
}`,...y.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Закрытие по фону',
  args: {
    shouldCloseOnEsc: false
  }
}`,...g.parameters?.docs?.source}}};v.parameters={...v.parameters,docs:{...v.parameters?.docs,source:{originalSource:`{
  name: 'Закрытие только кнопкой',
  args: {
    hasCloseButton: false,
    shouldCloseOnOverlay: false,
    shouldCloseOnEsc: false
  }
}`,...v.parameters?.docs?.source}}};B.parameters={...B.parameters,docs:{...B.parameters?.docs,source:{originalSource:`{
  name: 'Длинное содержимое',
  args: {
    title: 'Окно с прокруткой'
  },
  parameters: {
    longContent: true
  },
  render: createRender(longContent)
}`,...B.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Анимация смены заголовка',
  args: {
    animateTitle: true
  },
  parameters: {
    docs: {
      source: {
        transform: undefined,
        code: \`<ModalBase v-model:open="open" :title="title" animate-title has-close-button>
  <ButtonBase @click="toggleTitle">Сменить заголовок</ButtonBase>
</ModalBase>\`
      },
      description: {
        story: 'Откройте окно и нажмите «Сменить заголовок». Переход включён только при animateTitle; настройка уменьшения анимаций учитывается автоматически.'
      }
    }
  },
  render: args => ({
    components: {
      ModalBase,
      ButtonBase
    },
    setup() {
      const open = ref(args.open);
      const title = ref(args.title);
      watch(() => args.open, value => {
        open.value = value;
      });
      watch(() => args.title, value => {
        title.value = value;
      });
      const toggleTitle = () => {
        title.value = title.value === args.title ? 'Language settings' : args.title;
      };
      return {
        args,
        open,
        title,
        toggleTitle
      };
    },
    template: \`<div>
      <ButtonBase @click="open = true">Открыть модалку</ButtonBase>
      <ModalBase v-bind="args" v-model:open="open" :title="title">
        <ButtonBase @click="toggleTitle">Сменить заголовок</ButtonBase>
      </ModalBase>
    </div>\`
  })
}`,...h.parameters?.docs?.source}}};const ve=["Playground","WithoutCloseButton","CloseOnEscape","CloseOnOverlay","ExplicitCloseOnly","LongContent","AnimatedTitle"];export{h as AnimatedTitle,y as CloseOnEscape,g as CloseOnOverlay,v as ExplicitCloseOnly,B as LongContent,f as Playground,p as WithoutCloseButton,ve as __namedExportsOrder,ge as default};
