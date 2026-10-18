import{g as v,h,y as d,u as c,o as u,f as B,t as m,s as C,d as D,e as A,k as _,l as x,B as S,r as b,w as k}from"./iframe-B-xi8IrK.js";import{B as g}from"./ButtonBase-oX2t5Efv.js";import{M as z}from"./ModalBase-APWreBqA.js";import{v as q}from"./autofocus-sMCUZE5s.js";import{_ as T}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";import"./LoaderBase-DSn6mnDc.js";import"./PaperBase-DaVIuXSm.js";const w={key:0,class:"DialogAlert_Content Text_AlginCenter Typo_BodyAccent"},N={class:"DialogAlert_Message Text_AlginCenter Typo_Body"},l=v({__name:"DialogAlert",props:{open:{type:Boolean},size:{default:"xs"},type:{default:"info"},title:{},message:{},labelCloseButton:{default:"Close"},autoFocusCloseButton:{type:Boolean,default:!0}},emits:["update:open"],setup(e,{emit:n}){const t=n;function f(){t("update:open",!1)}return(y,$)=>(u(),h(c(z),{open:e.open,rootClass:"DialogAlert","onUpdate:open":f,shouldCloseOnOverlay:"",shouldCloseOnEsc:"",size:e.size},{actions:d(()=>[x((u(),h(c(g),{size:"lg",color:e.type,onClick:f},{default:d(()=>[S(m(e.labelCloseButton),1)]),_:1},8,["color"])),[[c(q),e.autoFocusCloseButton]])]),default:d(()=>[B("h2",{class:C(["DialogAlert_Title Text_AlginCenter Typo_Heading2",`DialogAlert_Title_type_${e.type}`])},m(e.title),3),y.$slots.content?(u(),D("div",w,[A(y.$slots,"content",{},void 0,!0)])):_("",!0),B("p",N,m(e.message),1)]),_:3},8,["open","size"]))}}),p=T(l,[["__scopeId","data-v-fa98c44f"]]);l.__docgenInfo=Object.assign({displayName:l.name??l.__name},{exportName:"default",displayName:"DialogAlert",type:1,props:[{name:"open",global:!1,description:"Управляет видимостью диалога",tags:[],required:!0,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"size",global:!1,description:"Размер модального окна",tags:[],required:!1,type:"ModalBaseSize | undefined",declarations:[],schema:{kind:"enum",type:"ModalBaseSize | undefined",schema:["undefined",'"xs"','"sm"','"md"','"lg"']},default:'"xs"'},{name:"type",global:!1,description:"Визуальный тип уведомления",tags:[],required:!1,type:'"info" | "success" | "danger" | undefined',declarations:[],schema:{kind:"enum",type:'"info" | "success" | "danger" | undefined',schema:["undefined",'"info"','"success"','"danger"']},default:'"info"'},{name:"title",global:!1,description:"Заголовок диалога",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"message",global:!1,description:"Основной текст сообщения",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"labelCloseButton",global:!1,description:"Текст кнопки закрытия",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'"Close"'},{name:"autoFocusCloseButton",global:!1,description:"Ставит автофокус на кнопку закрытия при открытии",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"true"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:open",description:"",tags:[],type:"[value: boolean]",signature:'(event: "update:open", value: boolean): void',declarations:[],schema:[{kind:"enum",type:"boolean",schema:["false","true"]}]}],slots:[{name:"content",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"open",type:"boolean",description:"Управляет видимостью диалога",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"size",type:"ModalBaseSize | undefined",description:"Размер модального окна",declarations:[],schema:{kind:"enum",type:"ModalBaseSize | undefined",schema:["undefined",'"xs"','"sm"','"md"','"lg"']}},{name:"type",type:'"info" | "success" | "danger" | undefined',description:"Визуальный тип уведомления",declarations:[],schema:{kind:"enum",type:'"info" | "success" | "danger" | undefined',schema:["undefined",'"info"','"success"','"danger"']}},{name:"message",type:"string",description:"Основной текст сообщения",declarations:[],schema:"string"},{name:"title",type:"string",description:"Заголовок диалога",declarations:[],schema:"string"},{name:"labelCloseButton",type:"string | undefined",description:"Текст кнопки закрытия",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"autoFocusCloseButton",type:"boolean | undefined",description:"Ставит автофокус на кнопку закрытия при открытии",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}}],sourceFiles:"/home/ekaterina/projects/turnover-ledger/src/shared/ui/dialog-alert/DialogAlert.vue"});const R={title:"UI-Компоненты/DialogAlert",parameters:{docs:{description:{component:"Готовый уведомительный диалог на базе `ModalBase`. Поддерживает типы `info`, `danger`, `success`, одну кнопку закрытия и дополнительный контент."}}},component:p,tags:["autodocs"],args:{open:!1,size:"xs",type:"info",title:"Информационное сообщение",message:"Операция завершена, проверьте детали перед следующим действием.",labelCloseButton:"Закрыть",autoFocusCloseButton:!0},argTypes:{open:{control:"boolean"},size:{control:"select",options:["xs","sm","md","lg"]},type:{control:"select",options:["info","danger","success"]},title:{control:"text"},message:{control:"text"},labelCloseButton:{control:"text"},autoFocusCloseButton:{control:"boolean"},content:{control:!1,description:"Дополнительный контент между заголовком и сообщением",table:{type:{summary:"VNode"}}}},render:e=>({components:{ButtonBase:g,DialogAlert:p},setup(){const n=b(e.open);return k(()=>e.open,t=>{n.value=t}),{args:e,model:n}},template:`
      <ButtonBase color="primary" @click="model = true; args.open = true">Открыть диалог</ButtonBase>
      <DialogAlert
        v-bind="args"
        :open="model"
        @update:open="model = $event; args.open = $event"
      />
    `})},a={name:"Песочница"},s={name:"Info",args:{type:"info",title:"Импорт завершён",message:"Данные были успешно прочитаны и готовы к дальнейшей проверке."}},o={name:"Danger",args:{type:"danger",title:"Ошибка импорта",message:"Не удалось обработать файл. Проверьте формат и попробуйте снова."}},r={name:"Success",args:{type:"success",title:"Данные сохранены",message:"Все изменения успешно применены к текущему отчёту."}},i={name:"С дополнительным контентом",render:e=>({components:{ButtonBase:g,DialogAlert:p},setup(){const n=b(e.open);return k(()=>e.open,t=>{n.value=t}),{args:e,model:n}},template:`
      <ButtonBase color="primary" @click="model = true; args.open = true">Открыть диалог</ButtonBase>
      <DialogAlert
        v-bind="args"
        :open="model"
        @update:open="model = $event; args.open = $event"
      >
        <template #content>
          <span>Файл: turnover-ledger-2026-04-18.json</span>
        </template>
      </DialogAlert>
    `})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Песочница'
}`,...a.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Info',
  args: {
    type: 'info',
    title: 'Импорт завершён',
    message: 'Данные были успешно прочитаны и готовы к дальнейшей проверке.'
  }
}`,...s.parameters?.docs?.source}}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Danger',
  args: {
    type: 'danger',
    title: 'Ошибка импорта',
    message: 'Не удалось обработать файл. Проверьте формат и попробуйте снова.'
  }
}`,...o.parameters?.docs?.source}}};r.parameters={...r.parameters,docs:{...r.parameters?.docs,source:{originalSource:`{
  name: 'Success',
  args: {
    type: 'success',
    title: 'Данные сохранены',
    message: 'Все изменения успешно применены к текущему отчёту.'
  }
}`,...r.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
  name: 'С дополнительным контентом',
  render: args => ({
    components: {
      ButtonBase,
      DialogAlert
    },
    setup() {
      const model = ref(args.open);
      watch(() => args.open, value => {
        model.value = value;
      });
      return {
        args,
        model
      };
    },
    template: \`
      <ButtonBase color="primary" @click="model = true; args.open = true">Открыть диалог</ButtonBase>
      <DialogAlert
        v-bind="args"
        :open="model"
        @update:open="model = $event; args.open = $event"
      >
        <template #content>
          <span>Файл: turnover-ledger-2026-04-18.json</span>
        </template>
      </DialogAlert>
    \`
  })
}`,...i.parameters?.docs?.source}}};const K=["Playground","Info","Danger","Success","WithContent"];export{o as Danger,s as Info,a as Playground,r as Success,i as WithContent,K as __namedExportsOrder,R as default};
