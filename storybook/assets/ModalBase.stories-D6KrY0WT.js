import{r as l,w as p}from"./iframe-B-xi8IrK.js";import{B as c}from"./ButtonBase-oX2t5Efv.js";import{M as r}from"./ModalBase-APWreBqA.js";import"./preload-helper-PPVm8Dsz.js";import"./LoaderBase-DSn6mnDc.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";import"./PaperBase-DaVIuXSm.js";const v={title:"UI-Компоненты/ModalBase",parameters:{docs:{description:{component:"Базовая модалка с overlay, teleport в `body`, блокировкой скролла страницы и опциональным закрытием по overlay или Escape."}}},component:r,tags:["autodocs"],args:{open:!0,size:"sm",shouldCloseOnOverlay:!0,shouldCloseOnEsc:!0},argTypes:{open:{control:"boolean"},size:{control:"select",options:["xs","sm","md","lg"]},shouldCloseOnOverlay:{control:"boolean"},shouldCloseOnEsc:{control:"boolean"},default:{control:!1,description:"Основное содержимое модалки",table:{type:{summary:"VNode"}}},actions:{control:!1,description:"Слот действий в нижней части модалки",table:{type:{summary:"VNode"}}}},render:e=>({components:{ButtonBase:c,ModalBase:r},setup(){const o=l(e.open);return p(()=>e.open,t=>{o.value=t}),{args:e,model:o}},template:`
      <ButtonBase color="primary" @click="model = true; args.open = true">Открыть модалку</ButtonBase>
      <ModalBase
        v-bind="args"
        :open="model"
        @update:open="model = $event; args.open = $event"
      >
        <h2 class="Typo_Heading2">Заголовок модалки</h2>
        <p class="Typo_Body">
          Базовый контейнер не знает о конкретном сценарии и принимает содержимое через слоты.
        </p>
        <template #actions>
          <ButtonBase color="default" @click="model = false; args.open = false">Отмена</ButtonBase>
          <ButtonBase color="primary" @click="model = false; args.open = false">Сохранить</ButtonBase>
        </template>
      </ModalBase>
    `})},a={name:"Песочница"},n={name:"Маленькая",args:{size:"xs"}},s={name:"Без actions",render:e=>({components:{ButtonBase:c,ModalBase:r},setup(){const o=l(e.open);return p(()=>e.open,t=>{o.value=t}),{args:e,model:o}},template:`
      <ButtonBase color="primary" @click="model = true; args.open = true">Открыть модалку</ButtonBase>
      <ModalBase
        v-bind="args"
        :open="model"
        @update:open="model = $event; args.open = $event"
      >
        <h2 class="Typo_Heading2">Информационное окно</h2>
        <p class="Typo_Body">Модалка может использоваться без нижней панели действий.</p>
      </ModalBase>
    `})};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Песочница'
}`,...a.parameters?.docs?.source}}};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Маленькая',
  args: {
    size: 'xs'
  }
}`,...n.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  name: 'Без actions',
  render: args => ({
    components: {
      ButtonBase,
      ModalBase
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
      <ButtonBase color="primary" @click="model = true; args.open = true">Открыть модалку</ButtonBase>
      <ModalBase
        v-bind="args"
        :open="model"
        @update:open="model = $event; args.open = $event"
      >
        <h2 class="Typo_Heading2">Информационное окно</h2>
        <p class="Typo_Body">Модалка может использоваться без нижней панели действий.</p>
      </ModalBase>
    \`
  })
}`,...s.parameters?.docs?.source}}};const f=["Playground","Small","WithoutActions"];export{a as Playground,n as Small,s as WithoutActions,f as __namedExportsOrder,v as default};
