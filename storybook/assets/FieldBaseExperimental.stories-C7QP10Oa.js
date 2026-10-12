import{g as J,w as I,D as le,j as Q,d as v,s as D,n as b,u,y as O,r as c,E as de,o as g,t as $,k as P,f as y,A as W,l as ue,M as ce,p as me,i as B,h as U,m as pe,C as fe}from"./iframe-1VcLbHp9.js";import{k as ge}from"./vue-BoSLtb37.js";import{u as he}from"./useLocale-BJ1oIUV7.js";import{l as ye,u as be,j as ve}from"./IconCopy-ES7atpi4.js";import{T as ke}from"./TooltipBase-DSRNm4vu.js";import{_ as X}from"./_plugin-vue_export-helper-DlAUqK2U.js";import{F as Be}from"./FieldBase-CVa5hOMT.js";import"./preload-helper-PPVm8Dsz.js";import"./ru-D7eykLRC.js";import"./number-CUgYXyyM.js";import"./TooltipWrapper-Bq8eMJCf.js";import"./FadeTransition-BNeWIeJy.js";const xe=["aria-hidden"],we={key:0,class:"FieldTooltip-Error"},G=6,Y=18,H=J({__name:"FieldTooltip",props:{open:{type:Boolean},errorMessage:{},hint:{},anchor:{}},setup(e){const i=c(null),a=c(!0);let n;async function r(){if(await de(),!e.open||!e.anchor||!i.value)return;const o=e.anchor.getBoundingClientRect(),s=window.innerHeight-Y-o.bottom-G,p=o.top-Y-G;a.value=s>=i.value.offsetHeight||s>=p}return I(()=>[e.open,e.errorMessage,e.hint],r),I(()=>e.anchor,o=>{n?.disconnect(),o&&n?.observe(o)}),le(()=>{n=new ResizeObserver(()=>{r()}),e.anchor&&n.observe(e.anchor),window.addEventListener("resize",r),window.addEventListener("scroll",r,!0),r()}),Q(()=>{n?.disconnect(),window.removeEventListener("resize",r),window.removeEventListener("scroll",r,!0)}),(o,s)=>(g(),v("span",{ref_key:"tooltipRef",ref:i,class:D(["FieldTooltip",{FieldTooltip_open:e.open,FieldTooltip_below:a.value,FieldTooltip_error:!!e.errorMessage}]),role:"tooltip","aria-hidden":!e.open},[b(u(ke),{class:"FieldTooltip-Body"},{default:O(()=>[e.errorMessage?(g(),v("span",we,$(e.errorMessage),1)):P("",!0),e.hint?(g(),v("span",{key:1,class:D({"FieldTooltip-Hint":!!e.errorMessage})},$(e.hint),3)):P("",!0)]),_:1})],10,xe))}}),Ve=X(H,[["__scopeId","data-v-ed5fec97"]]);H.__docgenInfo=Object.assign({displayName:H.name??H.__name},{exportName:"default",displayName:"FieldTooltip",type:1,props:[{name:"open",global:!1,description:"",tags:[],required:!0,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"errorMessage",global:!1,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"hint",global:!1,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"anchor",global:!1,description:"",tags:[],required:!0,type:"HTMLElement | null",declarations:[],schema:{kind:"enum",type:"HTMLElement | null",schema:["null",{kind:"object",type:"HTMLElement"}]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[],exposed:[{name:"hint",type:"string | undefined",description:"",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"open",type:"boolean",description:"",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"errorMessage",type:"string | undefined",description:"",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"anchor",type:"HTMLElement | null",description:"",declarations:[],schema:{kind:"enum",type:"HTMLElement | null",schema:["null",{kind:"object",type:"HTMLElement"}]}}],sourceFiles:"/home/ekaterina/projects/turnover-ledger/src/shared/ui-v2/field-base-experimental/FieldTooltip.vue"});const Ee=["for"],Me={class:"FieldBase-Label u-typo-body-small-m"},Fe={class:"FieldBase-LabelText"},Re=["aria-label","aria-describedby"],Ce={class:"FieldBase-HintIconSlot"},Te=["id","value","name","aria-invalid","aria-describedby","placeholder","maxlength","disabled","readonly"],Le=["disabled","aria-label"],qe=["id"],S=J({__name:"FieldBaseExperimental",props:{variant:{default:"default"},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:Boolean,default:!1},errorMessage:{},reserveErrorSpace:{type:Boolean},name:{},label:{},hint:{},placeholder:{},modelValue:{},debounceMs:{default:400},mask:{},maxLength:{},rootClass:{}},emits:["update:modelValue","blur"],setup(e,{emit:i}){const a=i,{t:n}=he(),r=fe(),o=c(null),s=c(!1),p=c(!1),h=c(!1),N=c(!1),f=B(()=>e.error&&!!e.errorMessage),Z=B(()=>!N.value&&(p.value||h.value||f.value&&s.value));function x(){N.value=!1}function _(){h.value=!0,x()}function ee(){p.value=!0,x()}function ne(){s.value=!0,x()}function ae(l){s.value=!1,se(l)}const z=B(()=>!!e.modelValue),te=B(()=>n("ui.common.clearField")),ie=B(()=>[`FieldBase_variant_${e.variant}`,{FieldBase_error:e.error},{FieldBase_filled:!!e.modelValue},{FieldBase_disabled:e.disabled},{FieldBase_readonly:e.readonly}]);let k=null;function w(){k!==null&&(window.clearTimeout(k),k=null)}function re(l){const t=l.target,d=A(t);w(),k=window.setTimeout(()=>{a("update:modelValue",d),k=null},e.debounceMs)}function A(l){const t=l.value;if(typeof e.maxLength=="number"&&e.maxLength>=0&&t.length>e.maxLength){const d=t.slice(0,e.maxLength);return l.value=d,d}return t}function se(l){const t=l.target,d=A(t);w(),a("update:modelValue",d),a("blur",d)}function oe(){w(),a("update:modelValue",null),a("blur",null)}return Q(w),(l,t)=>(g(),v("label",me(l.$attrs,{for:u(r),class:["FieldBase",ie.value]}),[y("div",Me,[y("span",Fe,$(e.label),1)]),y("span",{ref_key:"controlRef",ref:o,class:"FieldBase_Control",onKeydown:t[3]||(t[3]=ce(d=>N.value=!0,["esc"]))},[b(W,{name:"field-icon"},{default:O(()=>[(f.value||e.hint)&&!e.disabled?(g(),v("button",{key:0,class:"FieldBase-Hint",onMouseenter:_,onMouseleave:t[0]||(t[0]=d=>h.value=!1),type:"button","aria-label":f.value?e.errorMessage:e.hint,"aria-describedby":f.value?`${u(r)}-error`:void 0,onFocus:ee,onBlur:t[1]||(t[1]=d=>p.value=!1),onClick:x},[y("span",Ce,[b(W,{name:"field-icon"},{default:O(()=>[f.value?(g(),U(u(ye),{key:"error",class:"FieldBase-HintIcon"})):(g(),U(u(be),{key:"hint",class:"FieldBase-HintIcon"}))]),_:1})])],40,Re)):P("",!0)]),_:1}),ue(y("input",{id:u(r),onInput:re,onFocus:ne,onBlur:ae,value:e.modelValue,class:"FieldBase_Input u-typo-body-m",name:e.name,"aria-invalid":e.error?"true":void 0,"aria-describedby":e.error&&e.errorMessage?`${u(r)}-error`:void 0,placeholder:e.placeholder,maxlength:e.maxLength,autocomplete:"off",disabled:e.disabled,readonly:e.readonly},null,40,Te),[[u(ge),e.mask]]),b(W,{name:"field-icon"},{default:O(()=>[z.value&&!e.disabled&&!e.readonly?(g(),v("button",{key:0,class:"FieldBase_Clear",type:"button",disabled:e.disabled||e.readonly||!z.value,"aria-label":te.value,onMousedown:t[2]||(t[2]=pe(()=>{},["prevent"])),onClick:oe},[b(u(ve))],40,Le)):P("",!0)]),_:1}),b(Ve,{open:Z.value&&!e.disabled&&!!(f.value||e.hint),"error-message":f.value?e.errorMessage:void 0,hint:e.hint,anchor:o.value},null,8,["open","error-message","hint","anchor"])],544),y("span",{id:`${u(r)}-error`,class:"FieldBase-AccessibleError","aria-live":"polite"},$(f.value?e.errorMessage:""),9,qe)],16,Ee))}}),K=X(S,[["__scopeId","data-v-7432cbca"]]);S.__docgenInfo=Object.assign({displayName:S.name??S.__name},{exportName:"default",displayName:"FieldBaseExperimental",type:1,props:[{name:"variant",global:!1,description:"Визуальный вариант поля: обычный или для карточки.",tags:[],required:!1,type:'"default" | "card" | undefined',declarations:[],schema:{kind:"enum",type:'"default" | "card" | undefined',schema:["undefined",'"default"','"card"']},default:'"default"'},{name:"disabled",global:!1,description:"Отключает ввод и взаимодействие с полем.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"readonly",global:!1,description:"Разрешает чтение и выделение значения без изменения.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"error",global:!1,description:"Состояние ошибки валидации",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"false"},{name:"errorMessage",global:!1,description:"Сообщение об ошибке в тултипе.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"reserveErrorSpace",global:!1,description:"Устаревший пропс: ошибки отображаются в тултипе без резервирования места.",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"name",global:!1,description:"Имя поля для формы",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"label",global:!1,description:"Текстовая подпись поля",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"hint",global:!1,description:"Текст информационной подсказки рядом с label",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"placeholder",global:!1,description:"Плейсхолдер для input",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"modelValue",global:!1,description:"Текущее значение поля",tags:[],required:!0,type:"string | null",declarations:[],schema:{kind:"enum",type:"string | null",schema:["null","string"]}},{name:"debounceMs",global:!1,description:"Задержка перед emit обновления значения",tags:[],required:!1,type:"number | undefined",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]},default:"400"},{name:"mask",global:!1,description:"Маска ввода для `maska`",tags:[],required:!1,type:"MaskOptions | undefined",declarations:[],schema:{kind:"enum",type:"MaskOptions | undefined",schema:["undefined",{kind:"object",type:"MaskOptions"}]}},{name:"maxLength",global:!1,description:"Максимальная длина вводимого значения",tags:[],required:!1,type:"number | undefined",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]}},{name:"rootClass",global:!1,description:"Устаревший пропс, не применяется. Для класса корня используйте class.",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:modelValue",description:"",tags:[],type:"[value: string | null]",signature:'(event: "update:modelValue", value: string | null): void',declarations:[],schema:[{kind:"enum",type:"string | null",schema:["null","string"]}]},{name:"blur",description:"",tags:[],type:"[value: string | null]",signature:'(event: "blur", value: string | null): void',declarations:[],schema:[{kind:"enum",type:"string | null",schema:["null","string"]}]}],slots:[],exposed:[{name:"label",type:"string | undefined",description:"Текстовая подпись поля",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"variant",type:'"default" | "card" | undefined',description:"Визуальный вариант поля: обычный или для карточки.",declarations:[],schema:{kind:"enum",type:'"default" | "card" | undefined',schema:["undefined",'"default"','"card"']}},{name:"disabled",type:"boolean | undefined",description:"Отключает ввод и взаимодействие с полем.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"name",type:"string",description:"Имя поля для формы",declarations:[],schema:"string"},{name:"hint",type:"string | undefined",description:"Текст информационной подсказки рядом с label",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"modelValue",type:"string | null",description:"Текущее значение поля",declarations:[],schema:{kind:"enum",type:"string | null",schema:["null","string"]}},{name:"rootClass",type:"string | undefined",description:"Устаревший пропс, не применяется. Для класса корня используйте class.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"placeholder",type:"string | undefined",description:"Плейсхолдер для input",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"debounceMs",type:"number | undefined",description:"Задержка перед emit обновления значения",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]}},{name:"mask",type:"MaskOptions | undefined",description:"Маска ввода для `maska`",declarations:[],schema:{kind:"enum",type:"MaskOptions | undefined",schema:["undefined",{kind:"object",type:"MaskOptions"}]}},{name:"maxLength",type:"number | undefined",description:"Максимальная длина вводимого значения",declarations:[],schema:{kind:"enum",type:"number | undefined",schema:["undefined","number"]}},{name:"error",type:"boolean | undefined",description:"Состояние ошибки валидации",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"errorMessage",type:"string | undefined",description:"Сообщение об ошибке в тултипе.",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"reserveErrorSpace",type:"boolean | undefined",description:"Устаревший пропс: ошибки отображаются в тултипе без резервирования места.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"readonly",type:"boolean | undefined",description:"Разрешает чтение и выделение значения без изменения.",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}}],sourceFiles:"/home/ekaterina/projects/turnover-ledger/src/shared/ui-v2/field-base-experimental/FieldBaseExperimental.vue"});const{expect:m,userEvent:j,within:Oe}=__STORYBOOK_MODULE_TEST__,Ue={title:"UI-V2-Эксперименты/FieldBaseExperimental",parameters:{docs:{description:{component:"Экспериментальная копия поля: ошибка и кончик тултипа расположены по центру поля, обычная подсказка привязана к иконке. Горизонтальное положение задаётся CSS."}}},component:K,tags:["autodocs"],args:{variant:"default",error:!1,errorMessage:"Укажите ровно 4 цифры.",name:"description",label:"Описание",hint:"",placeholder:"Введите текст",modelValue:"Текст",debounceMs:0,maxLength:void 0},argTypes:{variant:{control:"select",options:["default","card"]},error:{control:"boolean"},errorMessage:{control:"text"},name:{control:"text"},label:{control:"text"},placeholder:{control:"text"},hint:{control:"text"},modelValue:{control:"text"},debounceMs:{control:{type:"number",min:0}},maxLength:{control:{type:"number",min:0}},mask:{control:!1}},render:e=>({components:{FieldBaseExperimental:K},setup(){const i=c(e.modelValue);return I(()=>e.modelValue,a=>{i.value=a}),{args:e,model:i}},template:`
      <div style="max-width: 360px;">
        <FieldBaseExperimental
          v-bind="args"
          :model-value="model"
          @update:modelValue="model = $event; args.modelValue = $event"
        />
      </div>
    `})},V={name:"Песочница"},E={name:"Пустое поле",args:{modelValue:null},parameters:{docs:{description:{story:"Поле без значения показывает placeholder и не рендерит кнопку очистки."}}}},M={name:"С ошибкой",args:{error:!0}},F={name:"Card с ошибкой",args:{variant:"card",error:!0}},R={name:"Ошибка с подсказкой",args:{error:!0,errorMessage:"Значение должно содержать ровно четыре цифры. Проверьте введённые данные и попробуйте снова.",hint:"Введите код из документа без пробелов и разделителей."},play:async({canvasElement:e})=>{const i=Oe(e),a=i.getByRole("textbox"),n=i.getByRole("tooltip",{hidden:!0}),r=e.getBoundingClientRect().height;await m(n).not.toBeVisible(),a.focus(),await m(n).toBeVisible(),await m(n).toHaveTextContent("Введите код из документа"),await m(e.getBoundingClientRect().height).toBe(r);const s=a.parentElement.getBoundingClientRect();await m(n.getBoundingClientRect().width).toBeLessThanOrEqual(s.width);const p=n.getBoundingClientRect();await m(Math.abs((p.left+p.right)/2-(s.left+s.right)/2)).toBeLessThan(1),await j.keyboard("{Escape}"),await m(n).not.toBeVisible();const h=i.getByRole("button",{name:/Значение должно/});await j.click(h),await m(n).toBeVisible(),await j.unhover(h),a.focus(),a.blur(),await m(n).not.toBeVisible()}},C={name:"С ограничением длины",args:{label:"Комментарий",modelValue:"Коротко",maxLength:12}},T={name:"С подсказкой",args:{label:"ИНН",hint:"Укажите ИНН без пробелов и разделителей.",modelValue:null,placeholder:"Введите ИНН"}},L={name:"Сравнение с текущим полем",args:{error:!0,errorMessage:"Укажите ровно 4 цифры.",hint:"Введите код из документа без пробелов и разделителей."},render:e=>({components:{FieldBase:Be,FieldBaseExperimental:K},setup(){const i=c(e.modelValue),a=c(e.modelValue);return I(()=>e.modelValue,n=>{i.value=n,a.value=n}),{args:e,currentValue:i,experimentalValue:a}},template:`
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
    `})},q={name:"Короткая ошибка по центру поля",args:{error:!0,errorMessage:"Обязательное поле",hint:"",modelValue:null}};V.parameters={...V.parameters,docs:{...V.parameters?.docs,source:{originalSource:`{
  name: 'Песочница'
}`,...V.parameters?.docs?.source}}};E.parameters={...E.parameters,docs:{...E.parameters?.docs,source:{originalSource:`{
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
}`,...E.parameters?.docs?.source}}};M.parameters={...M.parameters,docs:{...M.parameters?.docs,source:{originalSource:`{
  name: 'С ошибкой',
  args: {
    error: true
  }
}`,...M.parameters?.docs?.source}}};F.parameters={...F.parameters,docs:{...F.parameters?.docs,source:{originalSource:`{
  name: 'Card с ошибкой',
  args: {
    variant: 'card',
    error: true
  }
}`,...F.parameters?.docs?.source}}};R.parameters={...R.parameters,docs:{...R.parameters?.docs,source:{originalSource:`{
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
}`,...R.parameters?.docs?.source}}};C.parameters={...C.parameters,docs:{...C.parameters?.docs,source:{originalSource:`{
  name: 'С ограничением длины',
  args: {
    label: 'Комментарий',
    modelValue: 'Коротко',
    maxLength: 12
  }
}`,...C.parameters?.docs?.source}}};T.parameters={...T.parameters,docs:{...T.parameters?.docs,source:{originalSource:`{
  name: 'С подсказкой',
  args: {
    label: 'ИНН',
    hint: 'Укажите ИНН без пробелов и разделителей.',
    modelValue: null,
    placeholder: 'Введите ИНН'
  }
}`,...T.parameters?.docs?.source}}};L.parameters={...L.parameters,docs:{...L.parameters?.docs,source:{originalSource:`{
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
}`,...L.parameters?.docs?.source}}};q.parameters={...q.parameters,docs:{...q.parameters?.docs,source:{originalSource:`{
  name: 'Короткая ошибка по центру поля',
  args: {
    error: true,
    errorMessage: 'Обязательное поле',
    hint: '',
    modelValue: null
  }
}`,...q.parameters?.docs?.source}}};const Ge=["Playground","Empty","WithError","CardWithError","ErrorWithHint","WithMaxLength","WithHint","Comparison","ShortError"];export{F as CardWithError,L as Comparison,E as Empty,R as ErrorWithHint,V as Playground,q as ShortError,M as WithError,T as WithHint,C as WithMaxLength,Ge as __namedExportsOrder,Ue as default};
