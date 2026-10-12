import{g as Y,w as $,D as oe,j as J,d as k,s as A,n as v,u as c,y as H,r as m,E as le,o as g,t as N,k as P,i as h,x as de,f as b,A as W,l as ue,M as ce,p as me,h as U,m as pe,C as fe}from"./iframe-BZl0OYes.js";import{k as ge}from"./vue-BoSLtb37.js";import{u as he}from"./useLocale-1O6UiGNF.js";import{l as ye,u as be,j as ve}from"./IconCopy-CQKvG4qp.js";import{T as ke}from"./TooltipBase-5vKGYe88.js";import{_ as Q}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as xe}from"./FieldBase-CtTm16yv.js";import"./preload-helper-PPVm8Dsz.js";import"./ru-D7eykLRC.js";import"./number-CUgYXyyM.js";import"./TooltipWrapper-DgyvVIV2.js";import"./FadeTransition-TVjCqRZJ.js";const Be=["aria-hidden"],we={key:0,class:"FieldTooltip-Error"},G=18,S=Y({__name:"FieldTooltip",props:{open:{type:Boolean},errorMessage:{},hint:{},anchor:{}},setup(e){de(s=>({v7a7bc19c:p.value,v4eb6a520:x.value}));const r=m(null),n=m(!0),a=h(()=>e.errorMessage?3:1),p=h(()=>`${a.value}px`),x=h(()=>n.value?"2px 0 0 0":"0 0 2px 0");let o;async function i(){if(await le(),!e.open||!e.anchor||!r.value)return;const s=e.anchor.getBoundingClientRect(),y=window.innerHeight-G-s.bottom-a.value,l=s.top-G-a.value;n.value=y>=r.value.offsetHeight||y>=l}return $(()=>[e.open,e.errorMessage,e.hint],i),$(()=>e.anchor,s=>{o?.disconnect(),s&&o?.observe(s)}),oe(()=>{o=new ResizeObserver(()=>{i()}),e.anchor&&o.observe(e.anchor),window.addEventListener("resize",i),window.addEventListener("scroll",i,!0),i()}),J(()=>{o?.disconnect(),window.removeEventListener("resize",i),window.removeEventListener("scroll",i,!0)}),(s,y)=>(g(),k("span",{ref_key:"tooltipRef",ref:r,class:A(["FieldTooltip",{FieldTooltip_open:e.open,FieldTooltip_below:n.value,FieldTooltip_error:!!e.errorMessage}]),role:"tooltip","aria-hidden":!e.open},[v(c(ke),{class:"FieldTooltip-Body"},{default:H(()=>[e.errorMessage?(g(),k("span",we,N(e.errorMessage),1)):P("",!0),e.hint?(g(),k("span",{key:1,class:A({"FieldTooltip-Hint":!!e.errorMessage})},N(e.hint),3)):P("",!0)]),_:1})],10,Be))}}),Ve=Q(S,[["__scopeId","data-v-7b36473c"]]);S.__docgenInfo=Object.assign({displayName:S.name??S.__name},{exportName:"default",displayName:"FieldTooltip",type:1,props:[{name:"open",global:!1,description:"",tags:[],required:!0,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"errorMessage",global:!1,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"hint",global:!1,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"anchor",global:!1,description:"",tags:[],required:!0,type:"HTMLElement | null",declarations:[],schema:{kind:"enum",type:"HTMLElement | null",schema:["null",{kind:"object",type:"HTMLElement"}]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"hint",type:"string | undefined",description:"",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"open",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"errorMessage",type:"string | undefined",description:"",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"anchor",type:"HTMLElement | null",description:"",declarations:[],schema:{kind:"enum",type:"HTMLElement | null",schema:["null",{kind:"object",type:"HTMLElement"}]}}],sourceFiles:"/home/ekaterina/projects/turnover-ledger/src/shared/ui-v2/field-base-experimental/FieldTooltip.vue"});const Ee=["for"],Me={class:"FieldBase-Label u-typo-body-small-m"},Fe={class:"FieldBase-LabelText"},Re=["aria-label","aria-describedby"],Ce={class:"FieldBase-HintIconSlot"},Te=["id","value","name","aria-invalid","aria-describedby","placeholder","maxlength","disabled","readonly"],Le=["disabled","aria-label"],qe=["id"],I=Y({__name:"FieldBaseExperimental",props:{variant:{default:"default"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:Boolean,default:!1},errorMessage:{},reserveErrorSpace:{type:Boolean},name:{},label:{},hint:{},placeholder:{},modelValue:{},debounceMs:{default:400},mask:{},maxLength:{},rootClass:{}},emits:["update:modelValue","blur"],setup(e,{emit:r}){const n=r,{t:a}=he(),p=fe(),x=m(null),o=m(!1),i=m(!1),s=m(!1),y=m(!1),l=h(()=>e.error&&!!e.errorMessage),X=h(()=>!y.value&&(i.value||s.value||l.value&&o.value));function w(){y.value=!1}function Z(){s.value=!0,w()}function _(){i.value=!0,w()}function ee(){o.value=!0,w()}function ne(d){o.value=!1,ie(d)}const z=h(()=>!!e.modelValue),ae=h(()=>a("ui.common.clearField")),te=h(()=>[`FieldBase_variant_${e.variant}`,{FieldBase_error:e.error},{FieldBase_filled:!!e.modelValue},{FieldBase_disabled:e.disabled},{FieldBase_readonly:e.readonly}]);let B=null;function V(){B!==null&&(window.clearTimeout(B),B=null)}function re(d){const t=d.target,u=D(t);V(),B=window.setTimeout(()=>{n("update:modelValue",u),B=null},e.debounceMs)}function D(d){const t=d.value;if(typeof e.maxLength=="number"&&e.maxLength>=0&&t.length>e.maxLength){const u=t.slice(0,e.maxLength);return d.value=u,u}return t}function ie(d){const t=d.target,u=D(t);V(),n("update:modelValue",u),n("blur",u)}function se(){V(),n("update:modelValue",null),n("blur",null)}return J(V),(d,t)=>(g(),k("label",me(d.$attrs,{for:c(p),class:["FieldBase",te.value]}),[b("div",Me,[b("span",Fe,N(e.label),1)]),b("span",{ref_key:"controlRef",ref:x,class:"FieldBase_Control",onKeydown:t[3]||(t[3]=ce(u=>y.value=!0,["esc"]))},[v(W,{name:"field-icon"},{default:H(()=>[(l.value||e.hint)&&!e.disabled?(g(),k("button",{key:0,class:"FieldBase-Hint",onMouseenter:Z,onMouseleave:t[0]||(t[0]=u=>s.value=!1),type:"button","aria-label":l.value?e.errorMessage:e.hint,"aria-describedby":l.value?`${c(p)}-error`:void 0,onFocus:_,onBlur:t[1]||(t[1]=u=>i.value=!1),onClick:w},[b("span",Ce,[v(W,{name:"field-icon"},{default:H(()=>[l.value?(g(),U(c(ye),{key:"error",class:"FieldBase-HintIcon"})):(g(),U(c(be),{key:"hint",class:"FieldBase-HintIcon"}))]),_:1})])],40,Re)):P("",!0)]),_:1}),ue(b("input",{id:c(p),onInput:re,onFocus:ee,onBlur:ne,value:e.modelValue,class:"FieldBase_Input u-typo-body-m",name:e.name,"aria-invalid":e.error?"true":void 0,"aria-describedby":e.error&&e.errorMessage?`${c(p)}-error`:void 0,placeholder:e.placeholder,maxlength:e.maxLength,autocomplete:"off",disabled:e.disabled,readonly:e.readonly},null,40,Te),[[c(ge),e.mask]]),v(W,{name:"field-icon"},{default:H(()=>[z.value&&!e.disabled&&!e.readonly?(g(),k("button",{key:0,class:"FieldBase_Clear",type:"button",disabled:e.disabled||e.readonly||!z.value,"aria-label":ae.value,onMousedown:t[2]||(t[2]=pe(()=>{},["prevent"])),onClick:se},[v(c(ve))],40,Le)):P("",!0)]),_:1}),v(Ve,{open:X.value&&!e.disabled&&!!(l.value||e.hint),"error-message":l.value?e.errorMessage:void 0,hint:e.hint,anchor:x.value},null,8,["open","error-message","hint","anchor"])],544),b("span",{id:`${c(p)}-error`,class:"FieldBase-AccessibleError","aria-live":"polite"},N(l.value?e.errorMessage:""),9,qe)],16,Ee))}}),K=Q(I,[["__scopeId","data-v-91511512"]]);I.__docgenInfo=Object.assign({displayName:I.name??I.__name},{exportName:"default",displayName:"FieldBaseExperimental",type:1,props:[{name:"variant",global:!1,description:"Визуальный вариант поля: обычный или для карточки.",tags:[],required:!1,type:'"default" | "card" | undefined',declarations:[],schema:{kind:"enum",type:'"default" | "card" | undefined',schema:["undefined",'"default"','"card"']},default:'"default"'},{name:"disabled",global:!1,description:"Отключает ввод и взаимодействие с полем.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"readonly",global:!1,description:"Разрешает чтение и выделение значения без изменения.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"error",global:!1,description:"Состояние ошибки валидации",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"errorMessage",global:!1,description:"Сообщение об ошибке в тултипе.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"reserveErrorSpace",global:!1,description:"Устаревший пропс: ошибки отображаются в тултипе без резервирования места.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"name",global:!1,description:"Имя поля для формы",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"label",global:!1,description:"Текстовая подпись поля",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"hint",global:!1,description:"Текст информационной подсказки рядом с label",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"placeholder",global:!1,description:"Плейсхолдер для input",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"modelValue",global:!1,description:"Текущее значение поля",tags:[],required:!0,type:"string | null",declarations:[],schema:{kind:"enum",type:"string | null",schema:["null","string"]}},{name:"debounceMs",global:!1,description:"Задержка перед emit обновления значения",tags:[],required:!1,type:"number | undefined",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]},default:"400"},{name:"mask",global:!1,description:"Маска ввода для `maska`",tags:[],required:!1,type:"MaskOptions | undefined",declarations:[],schema:{kind:"enum",type:"MaskOptions | undefined",schema:["undefined",{kind:"object",type:"MaskOptions"}]}},{name:"maxLength",global:!1,description:"Максимальная длина вводимого значения",tags:[],required:!1,type:"number | undefined",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]}},{name:"rootClass",global:!1,description:"Устаревший пропс, не применяется. Для класса корня используйте class.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: string | null]",signature:'(event: "update:modelValue", value: string | null): void',declarations:[],schema:[{kind:"enum",type:"string | null",schema:["null","string"]}]},{name:"blur",description:"",tags:[],type:"[value: string | null]",signature:'(event: "blur", value: string | null): void',declarations:[],schema:[{kind:"enum",type:"string | null",schema:["null","string"]}]}],slots:[],exposed:[{name:"modelValue",type:"string | null",description:"Текущее значение поля",declarations:[],schema:{kind:"enum",type:"string | null",schema:["null","string"]}},{name:"disabled",type:"boolean | undefined",description:"Отключает ввод и взаимодействие с полем.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"label",type:"string | undefined",description:"Текстовая подпись поля",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"name",type:"string",description:"Имя поля для формы",declarations:[],schema:"string"},{name:"hint",type:"string | undefined",description:"Текст информационной подсказки рядом с label",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"placeholder",type:"string | undefined",description:"Плейсхолдер для input",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"rootClass",type:"string | undefined",description:"Устаревший пропс, не применяется. Для класса корня используйте class.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"error",type:"boolean | undefined",description:"Состояние ошибки валидации",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"errorMessage",type:"string | undefined",description:"Сообщение об ошибке в тултипе.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"reserveErrorSpace",type:"boolean | undefined",description:"Устаревший пропс: ошибки отображаются в тултипе без резервирования места.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"maxLength",type:"number | undefined",description:"Максимальная длина вводимого значения",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]}},{name:"variant",type:'"default" | "card" | undefined',description:"Визуальный вариант поля: обычный или для карточки.",declarations:[],schema:{kind:"enum",type:'"default" | "card" | undefined',schema:["undefined",'"default"','"card"']}},{name:"readonly",type:"boolean | undefined",description:"Разрешает чтение и выделение значения без изменения.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"debounceMs",type:"number | undefined",description:"Задержка перед emit обновления значения",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]}},{name:"mask",type:"MaskOptions | undefined",description:"Маска ввода для `maska`",declarations:[],schema:{kind:"enum",type:"MaskOptions | undefined",schema:["undefined",{kind:"object",type:"MaskOptions"}]}}],sourceFiles:"/home/ekaterina/projects/turnover-ledger/src/shared/ui-v2/field-base-experimental/FieldBaseExperimental.vue"});const{expect:f,userEvent:j,within:Oe}=__STORYBOOK_MODULE_TEST__,Ue={title:"UI-V2-Эксперименты/FieldBaseExperimental",parameters:{docs:{description:{component:"Экспериментальная копия поля: ошибка и кончик тултипа расположены по центру поля, обычная подсказка привязана к иконке. Горизонтальное положение задаётся CSS."}}},component:K,tags:["autodocs"],args:{variant:"default",error:!1,errorMessage:"Укажите ровно 4 цифры.",name:"description",label:"Описание",hint:"",placeholder:"Введите текст",modelValue:"Текст",debounceMs:0,maxLength:void 0},argTypes:{variant:{control:"select",options:["default","card"]},error:{control:"boolean"},errorMessage:{control:"text"},name:{control:"text"},label:{control:"text"},placeholder:{control:"text"},hint:{control:"text"},modelValue:{control:"text"},debounceMs:{control:{type:"number",min:0}},maxLength:{control:{type:"number",min:0}},mask:{control:!1}},render:e=>({components:{FieldBaseExperimental:K},setup(){const r=m(e.modelValue);return $(()=>e.modelValue,n=>{r.value=n}),{args:e,model:r}},template:`
      <div style="max-width: 360px;">
        <FieldBaseExperimental
          v-bind="args"
          :model-value="model"
          @update:modelValue="model = $event; args.modelValue = $event"
        />
      </div>
    `})},E={name:"Песочница"},M={name:"Пустое поле",args:{modelValue:null},parameters:{docs:{description:{story:"Поле без значения показывает placeholder и не рендерит кнопку очистки."}}}},F={name:"С ошибкой",args:{error:!0}},R={name:"Card с ошибкой",args:{variant:"card",error:!0}},C={name:"Ошибка с подсказкой",args:{error:!0,errorMessage:"Значение должно содержать ровно четыре цифры. Проверьте введённые данные и попробуйте снова.",hint:"Введите код из документа без пробелов и разделителей."},play:async({canvasElement:e})=>{const r=Oe(e),n=r.getByRole("textbox"),a=r.getByRole("tooltip",{hidden:!0}),p=e.getBoundingClientRect().height;await f(a).not.toBeVisible(),n.focus(),await f(a).toBeVisible(),await f(a).toHaveTextContent("Введите код из документа"),await f(e.getBoundingClientRect().height).toBe(p);const o=n.parentElement.getBoundingClientRect();await f(a.getBoundingClientRect().width).toBeLessThanOrEqual(o.width);const i=a.getBoundingClientRect();await f(Math.abs((i.left+i.right)/2-(o.left+o.right)/2)).toBeLessThan(1),await j.keyboard("{Escape}"),await f(a).not.toBeVisible();const s=r.getByRole("button",{name:/Значение должно/});await j.click(s),await f(a).toBeVisible(),await j.unhover(s),n.focus(),n.blur(),await f(a).not.toBeVisible()}},T={name:"С ограничением длины",args:{label:"Комментарий",modelValue:"Коротко",maxLength:12}},L={name:"С подсказкой",args:{label:"ИНН",hint:"Укажите ИНН без пробелов и разделителей.",modelValue:null,placeholder:"Введите ИНН"}},q={name:"Сравнение с текущим полем",args:{error:!0,errorMessage:"Укажите ровно 4 цифры.",hint:"Введите код из документа без пробелов и разделителей."},render:e=>({components:{FieldBase:xe,FieldBaseExperimental:K},setup(){const r=m(e.modelValue),n=m(e.modelValue);return $(()=>e.modelValue,a=>{r.value=a,n.value=a}),{args:e,currentValue:r,experimentalValue:n}},template:`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 48px; max-width: 800px; padding: 24px 0 180px;">
        <section>
          <p>Текущее поле — кончик у иконки</p>
          <FieldBase v-bind="args" name="current" v-model="currentValue" />
        </section>
        <section>
          <p>Эксперимент — ошибка по центру поля</p>
          <FieldBaseExperimental v-bind="args" name="experimental" v-model="experimentalValue" />
        </section>
      </div>
    `})},O={name:"Короткая ошибка по центру поля",args:{error:!0,errorMessage:"Обязательное поле",hint:"",modelValue:null}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
  name: 'Песочница'
}`,...E.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'Пустое поле',
  args: {
    modelValue: null
  },
  parameters: {
    docs: {
      description: {
        story: 'Поле без значения показывает placeholder и не рендерит кнопку очистки.'
      }
    }
  }
}`,...M.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'С ошибкой',
  args: {
    error: true
  }
}`,...F.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
  name: 'Card с ошибкой',
  args: {
    variant: 'card',
    error: true
  }
}`,...R.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'Ошибка с подсказкой',
  args: {
    error: true,
    errorMessage: 'Значение должно содержать ровно четыре цифры. Проверьте введённые данные и попробуйте снова.',
    hint: 'Введите код из документа без пробелов и разделителей.'
  },
  play: async ({
    canvasElement
  }) => {
    const canvas = within(canvasElement);
    const input = canvas.getByRole('textbox');
    const tooltip = canvas.getByRole('tooltip', {
      hidden: true
    });
    const height = canvasElement.getBoundingClientRect().height;
    await expect(tooltip).not.toBeVisible();
    input.focus();
    await expect(tooltip).toBeVisible();
    await expect(tooltip).toHaveTextContent('Введите код из документа');
    await expect(canvasElement.getBoundingClientRect().height).toBe(height);
    const control = input.parentElement!;
    const controlRect = control.getBoundingClientRect();
    await expect(tooltip.getBoundingClientRect().width).toBeLessThanOrEqual(controlRect.width);
    const tooltipRect = tooltip.getBoundingClientRect();
    await expect(Math.abs((tooltipRect.left + tooltipRect.right) / 2 - (controlRect.left + controlRect.right) / 2)).toBeLessThan(1);
    await userEvent.keyboard('{Escape}');
    await expect(tooltip).not.toBeVisible();
    const icon = canvas.getByRole('button', {
      name: /Значение должно/
    });
    await userEvent.click(icon);
    await expect(tooltip).toBeVisible();
    await userEvent.unhover(icon);
    input.focus();
    input.blur();
    await expect(tooltip).not.toBeVisible();
  }
}`,...C.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'С ограничением длины',
  args: {
    label: 'Комментарий',
    modelValue: 'Коротко',
    maxLength: 12
  }
}`,...T.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
  name: 'С подсказкой',
  args: {
    label: 'ИНН',
    hint: 'Укажите ИНН без пробелов и разделителей.',
    modelValue: null,
    placeholder: 'Введите ИНН'
  }
}`,...L.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Сравнение с текущим полем',
  args: {
    error: true,
    errorMessage: 'Укажите ровно 4 цифры.',
    hint: 'Введите код из документа без пробелов и разделителей.'
  },
  render: args => ({
    components: {
      FieldBase,
      FieldBaseExperimental
    },
    setup() {
      const currentValue = ref(args.modelValue);
      const experimentalValue = ref(args.modelValue);
      watch(() => args.modelValue, value => {
        currentValue.value = value;
        experimentalValue.value = value;
      });
      return {
        args,
        currentValue,
        experimentalValue
      };
    },
    template: \`
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 48px; max-width: 800px; padding: 24px 0 180px;">
        <section>
          <p>Текущее поле — кончик у иконки</p>
          <FieldBase v-bind="args" name="current" v-model="currentValue" />
        </section>
        <section>
          <p>Эксперимент — ошибка по центру поля</p>
          <FieldBaseExperimental v-bind="args" name="experimental" v-model="experimentalValue" />
        </section>
      </div>
    \`
  })
}`,...q.parameters?.docs?.source}}};O.parameters={...O.parameters,docs:{...O.parameters?.docs,source:{originalSource:`{
  name: 'Короткая ошибка по центру поля',
  args: {
    error: true,
    errorMessage: 'Обязательное поле',
    hint: '',
    modelValue: null
  }
}`,...O.parameters?.docs?.source}}};const Ge=["Playground","Empty","WithError","CardWithError","ErrorWithHint","WithMaxLength","WithHint","Comparison","ShortError"];export{R as CardWithError,q as Comparison,M as Empty,C as ErrorWithHint,E as Playground,O as ShortError,F as WithError,L as WithHint,T as WithMaxLength,Ge as __namedExportsOrder,Ue as default};
