import{g as D,h as d,y as a,u as o,o as s,f as b,t as i,d as A,e as z,k as f,l as q,B as g,r as C,w as v}from"./iframe-1VcLbHp9.js";import{B as r}from"./ButtonBase-BxAP5dzH.js";import{M as _}from"./ModalBase-CMVbfUjy.js";import{v as $}from"./autofocus-sMCUZE5s.js";import{_ as w}from"./_plugin-vue_export-helper-DlAUqK2U.js";import"./preload-helper-PPVm8Dsz.js";import"./LoaderBase-DJQ4Z25N.js";import"./PaperBase-BZraI9cH.js";const N={class:"Text_AlginCenter Typo_Heading2"},S={key:0,class:"DialogConfirm_Content Text_AlginCenter Typo_BodyAccent"},M={class:"DialogConfirm_Message Text_AlginCenter Typo_Body"},p=D({__name:"DialogConfirm",props:{open:{type:Boolean},size:{default:"xs"},type:{},message:{},title:{},labelActiveButton:{default:"Action"},labelCancelButton:{default:"Cancel"},autoFocusCancelButton:{type:Boolean,default:!0}},emits:["update:open","confirm","cancel"],setup(e,{emit:t}){const n=t;function h(){n("update:open",!1)}function k(){n("cancel"),h()}return(B,l)=>(s(),d(o(_),{open:e.open,rootClass:"DialogConfirm","onUpdate:open":h,shouldCloseOnOverlay:"",shouldCloseOnEsc:"",size:e.size},{actions:a(()=>[q((s(),d(o(r),{size:"lg",color:"default",onClick:k},{default:a(()=>[g(i(e.labelCancelButton),1)]),_:1})),[[o($),e.autoFocusCancelButton]]),e.type==="confirm"?(s(),d(o(r),{key:0,size:"lg",color:"success",onClick:l[0]||(l[0]=x=>n("confirm"))},{default:a(()=>[g(i(e.labelActiveButton),1)]),_:1})):f("",!0),e.type==="delete"?(s(),d(o(r),{key:1,size:"lg",color:"danger",onClick:l[1]||(l[1]=x=>n("confirm"))},{default:a(()=>[g(i(e.labelActiveButton),1)]),_:1})):f("",!0)]),default:a(()=>[b("h2",N,i(e.title),1),B.$slots.content?(s(),A("div",S,[z(B.$slots,"content",{},void 0,!0)])):f("",!0),b("p",M,i(e.message),1)]),_:3},8,["open","size"]))}}),y=w(p,[["__scopeId","data-v-1c882f41"]]);p.__docgenInfo=Object.assign({displayName:p.name??p.__name},{exportName:"default",displayName:"DialogConfirm",type:1,props:[{name:"open",global:!1,description:"Управляет видимостью диалога",tags:[],required:!0,type:"boolean",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"size",global:!1,description:"Размер модального окна",tags:[],required:!1,type:"ModalBaseSize | undefined",declarations:[],schema:{kind:"enum",type:"ModalBaseSize | undefined",schema:["undefined",'"md"','"xs"','"sm"','"lg"']},default:'"xs"'},{name:"type",global:!1,description:"Визуальный тип подтверждающего действия",tags:[],required:!0,type:'"confirm" | "delete"',declarations:[],schema:{kind:"enum",type:'"confirm" | "delete"',schema:['"confirm"','"delete"']}},{name:"message",global:!1,description:"Основной текст сообщения",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"title",global:!1,description:"Заголовок диалога",tags:[],required:!0,type:"string",declarations:[],schema:"string"},{name:"labelActiveButton",global:!1,description:"Текст кнопки подтверждения",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'"Action"'},{name:"labelCancelButton",global:!1,description:"Текст кнопки отмены",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]},default:'"Cancel"'},{name:"autoFocusCancelButton",global:!1,description:"Ставит автофокус на кнопку отмены при открытии",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]},default:"true"},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[{name:"update:open",description:"",tags:[],type:"[value: boolean]",signature:'(event: "update:open", value: boolean): void',declarations:[],schema:[{kind:"enum",type:"boolean",schema:["false","true"]}]},{name:"confirm",description:"",tags:[],type:"[]",signature:'(event: "confirm"): void',declarations:[],schema:[]},{name:"cancel",description:"",tags:[],type:"[]",signature:'(event: "cancel"): void',declarations:[],schema:[]}],slots:[{name:"content",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"size",type:"ModalBaseSize | undefined",description:"Размер модального окна",declarations:[],schema:{kind:"enum",type:"ModalBaseSize | undefined",schema:["undefined",'"md"','"xs"','"sm"','"lg"']}},{name:"type",type:'"confirm" | "delete"',description:"Визуальный тип подтверждающего действия",declarations:[],schema:{kind:"enum",type:'"confirm" | "delete"',schema:['"confirm"','"delete"']}},{name:"open",type:"boolean",description:"Управляет видимостью диалога",declarations:[],schema:{kind:"enum",type:"boolean",schema:["false","true"]}},{name:"message",type:"string",description:"Основной текст сообщения",declarations:[],schema:"string"},{name:"title",type:"string",description:"Заголовок диалога",declarations:[],schema:"string"},{name:"labelActiveButton",type:"string | undefined",description:"Текст кнопки подтверждения",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"labelCancelButton",type:"string | undefined",description:"Текст кнопки отмены",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"autoFocusCancelButton",type:"boolean | undefined",description:"Ставит автофокус на кнопку отмены при открытии",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}}],sourceFiles:"/home/ekaterina/projects/turnover-ledger/src/shared/ui/dialog-confirm/DialogConfirm.vue"});const j={title:"UI-Компоненты/DialogConfirm",parameters:{docs:{description:{component:"Готовый диалог подтверждения на базе `ModalBase`. Поддерживает сценарии подтверждения и удаления, кастомный контент и тексты кнопок."}}},component:y,tags:["autodocs"],args:{open:!1,size:"xs",type:"confirm",title:"Подтвердить действие",message:"Изменения будут применены к текущему отчёту.",labelActiveButton:"Подтвердить",labelCancelButton:"Отмена",autoFocusCancelButton:!0},argTypes:{open:{control:"boolean"},size:{control:"select",options:["xs","sm","md","lg"]},type:{control:"select",options:["confirm","delete"]},title:{control:"text"},message:{control:"text"},labelActiveButton:{control:"text"},labelCancelButton:{control:"text"},autoFocusCancelButton:{control:"boolean"},content:{control:!1,description:"Дополнительный контент между заголовком и сообщением",table:{type:{summary:"VNode"}}}},render:e=>({components:{ButtonBase:r,DialogConfirm:y},setup(){const t=C(e.open);return v(()=>e.open,n=>{t.value=n}),{args:e,model:t}},template:`
      <ButtonBase color="primary" @click="model = true; args.open = true">Открыть диалог</ButtonBase>
      <DialogConfirm
        v-bind="args"
        :open="model"
        @update:open="model = $event; args.open = $event"
        @confirm="model = false; args.open = false"
      />
    `})},c={name:"Песочница"},m={name:"Удаление",args:{type:"delete",title:"Удалить строку?",message:"Это действие нельзя отменить.",labelActiveButton:"Удалить"}},u={name:"С дополнительным контентом",render:e=>({components:{ButtonBase:r,DialogConfirm:y},setup(){const t=C(e.open);return v(()=>e.open,n=>{t.value=n}),{args:e,model:t}},template:`
      <ButtonBase color="primary" @click="model = true; args.open = true">Открыть диалог</ButtonBase>
      <DialogConfirm
        v-bind="args"
        :open="model"
        @update:open="model = $event; args.open = $event"
        @confirm="model = false; args.open = false"
      >
        <template #content>
          <span>Будет затронута выбранная строка отчёта.</span>
        </template>
      </DialogConfirm>
    `})};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'Песочница'
}`,...c.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'Удаление',
  args: {
    type: 'delete',
    title: 'Удалить строку?',
    message: 'Это действие нельзя отменить.',
    labelActiveButton: 'Удалить'
  }
}`,...m.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'С дополнительным контентом',
  render: args => ({
    components: {
      ButtonBase,
      DialogConfirm
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
      <DialogConfirm
        v-bind="args"
        :open="model"
        @update:open="model = $event; args.open = $event"
        @confirm="model = false; args.open = false"
      >
        <template #content>
          <span>Будет затронута выбранная строка отчёта.</span>
        </template>
      </DialogConfirm>
    \`
  })
}`,...u.parameters?.docs?.source}}};const K=["Playground","Delete","WithContent"];export{m as Delete,c as Playground,u as WithContent,K as __namedExportsOrder,j as default};
