import{f as d,g as o,h as l,T as u,o as p,i as c,r as t}from"./iframe-CUmsbM2s.js";import{B as s}from"./ButtonBase-C6Uv60Oc.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const e=d({__name:"FadeTransition",props:{mode:{}},setup(i){return(r,m)=>(p(),o(u,{name:"ui-fade",mode:i.mode},{default:l(()=>[c(r.$slots,"default")]),_:3},8,["mode"]))}});e.__docgenInfo=Object.assign({displayName:e.name??e.__name},{exportName:"default",displayName:"FadeTransition",type:1,props:[{name:"mode",global:!1,description:"Порядок смены содержимого, как у Vue Transition.",tags:[],required:!1,type:'"out-in" | "in-out" | undefined',declarations:[],schema:{kind:"enum",type:'"out-in" | "in-out" | undefined',schema:["undefined",'"out-in"','"in-out"']}},{name:"key",global:!0,description:"",tags:[],required:!1,type:"PropertyKey | undefined",declarations:[],schema:{kind:"enum",type:"PropertyKey | undefined",schema:["undefined","string","number","symbol"]}},{name:"ref",global:!0,description:"",tags:[],required:!1,type:"VNodeRef | undefined",declarations:[],schema:{kind:"enum",type:"VNodeRef | undefined",schema:["undefined","string","Ref<any, any>",{kind:"event",type:"(ref: Element | ComponentPublicInstance<{}, {}, {}, {}, {}, {}, {}, {}, false, ComponentOptionsBase<any, any, any, any, any, any, any, any, any, {}, {}, string, {}, {}, {}, string, ComponentProvideOptions>, ... 4 more ..., any> | null, refs: Record<...>): void"}]}},{name:"ref_for",global:!0,description:"",tags:[],required:!1,type:"boolean | undefined",declarations:[],schema:{kind:"enum",type:"boolean | undefined",schema:["undefined","false","true"]}},{name:"ref_key",global:!0,description:"",tags:[],required:!1,type:"string | undefined",declarations:[],schema:{kind:"enum",type:"string | undefined",schema:["undefined","string"]}},{name:"class",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"},{name:"style",global:!0,description:"",tags:[],required:!1,type:"unknown",declarations:[],schema:"unknown"}],events:[],slots:[{name:"default",type:"{}",description:"",declarations:[],schema:{kind:"object",type:"{}"}}],exposed:[{name:"mode",type:'"out-in" | "in-out" | undefined',description:"Порядок смены содержимого, как у Vue Transition.",declarations:[],schema:{kind:"enum",type:'"out-in" | "in-out" | undefined',schema:["undefined",'"out-in"','"in-out"']}}],sourceFiles:"/home/ekaterina/projects/turnover-ledger/src/shared/ui-v2/fade-transition/FadeTransition.vue"});const b={title:"UI-V2-Компоненты/FadeTransition",component:e,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Плавное появление и исчезновение содержимого через прозрачность за 200 мс. При prefers-reduced-motion анимация отключается. Обёртка не резервирует место под содержимое."}}},argTypes:{mode:{control:"select",options:[void 0,"out-in","in-out"]}}},n={name:"Показать / скрыть",render:i=>({components:{FadeTransition:e,ButtonBase:s},setup:()=>({args:i,visible:t(!1)}),template:`
      <div style="width: 320px; display: grid; gap: 16px;">
        <ButtonBase :aria-expanded="visible" aria-controls="fade-show-hide" @click="visible = !visible">
          {{ visible ? 'Скрыть' : 'Показать' }}
        </ButtonBase>
        <div id="fade-show-hide" style="min-height: 80px;" aria-live="polite">
          <FadeTransition v-bind="args">
            <div v-if="visible" class="u-typo-body-m" style="padding: 16px; border-radius: 16px; background: var(--neutral-100);">
              Плавно появляющийся блок
            </div>
          </FadeTransition>
        </div>
      </div>
    `})},a={name:"Смена содержимого: out-in",args:{mode:"out-in"},render:i=>({components:{FadeTransition:e,ButtonBase:s},setup:()=>({args:i,first:t(!0)}),template:`
      <div style="width: 320px; display: grid; gap: 16px;">
        <ButtonBase @click="first = !first">Сменить содержимое</ButtonBase>
        <div style="min-height: 80px;" aria-live="polite">
          <FadeTransition v-bind="args">
            <div :key="first ? 'first' : 'second'" class="u-typo-body-m" :style="{ background: first ? 'var(--neutral-100)' : 'var(--yellow-400)' }" style="padding: 16px; border-radius: 16px;">
              {{ first ? 'Первый блок' : 'Второй блок' }}
            </div>
          </FadeTransition>
        </div>
      </div>
    `})};n.parameters={...n.parameters,docs:{...n.parameters?.docs,source:{originalSource:`{
  name: 'Показать / скрыть',
  render: args => ({
    components: {
      FadeTransition,
      ButtonBase
    },
    setup: () => ({
      args,
      visible: ref(false)
    }),
    template: \`
      <div style="width: 320px; display: grid; gap: 16px;">
        <ButtonBase :aria-expanded="visible" aria-controls="fade-show-hide" @click="visible = !visible">
          {{ visible ? 'Скрыть' : 'Показать' }}
        </ButtonBase>
        <div id="fade-show-hide" style="min-height: 80px;" aria-live="polite">
          <FadeTransition v-bind="args">
            <div v-if="visible" class="u-typo-body-m" style="padding: 16px; border-radius: 16px; background: var(--neutral-100);">
              Плавно появляющийся блок
            </div>
          </FadeTransition>
        </div>
      </div>
    \`
  })
}`,...n.parameters?.docs?.source}}};a.parameters={...a.parameters,docs:{...a.parameters?.docs,source:{originalSource:`{
  name: 'Смена содержимого: out-in',
  args: {
    mode: 'out-in'
  },
  render: args => ({
    components: {
      FadeTransition,
      ButtonBase
    },
    setup: () => ({
      args,
      first: ref(true)
    }),
    template: \`
      <div style="width: 320px; display: grid; gap: 16px;">
        <ButtonBase @click="first = !first">Сменить содержимое</ButtonBase>
        <div style="min-height: 80px;" aria-live="polite">
          <FadeTransition v-bind="args">
            <div :key="first ? 'first' : 'second'" class="u-typo-body-m" :style="{ background: first ? 'var(--neutral-100)' : 'var(--yellow-400)' }" style="padding: 16px; border-radius: 16px;">
              {{ first ? 'Первый блок' : 'Второй блок' }}
            </div>
          </FadeTransition>
        </div>
      </div>
    \`
  })
}`,...a.parameters?.docs?.source}}};const h=["ShowHide","OutIn"];export{a as OutIn,n as ShowHide,h as __namedExportsOrder,b as default};
