import{r as s}from"./iframe-BZl0OYes.js";import{B as r}from"./ButtonBase-Clm-vs0a.js";import{_ as a}from"./FadeTransition-TVjCqRZJ.js";import"./preload-helper-PPVm8Dsz.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const v={title:"UI-V2-Компоненты/FadeTransition",component:a,tags:["autodocs"],parameters:{layout:"centered",docs:{description:{component:"Плавное появление и исчезновение содержимого через прозрачность за 200 мс. При prefers-reduced-motion анимация отключается. Обёртка не резервирует место под содержимое."}}},argTypes:{mode:{control:"select",options:[void 0,"out-in","in-out"]}}},i={name:"Показать / скрыть",render:t=>({components:{FadeTransition:a,ButtonBase:r},setup:()=>({args:t,visible:s(!1)}),template:`
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
    `})},e={name:"Смена содержимого: out-in",args:{mode:"out-in"},render:t=>({components:{FadeTransition:a,ButtonBase:r},setup:()=>({args:t,first:s(!0)}),template:`
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
    `})};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};e.parameters={...e.parameters,docs:{...e.parameters?.docs,source:{originalSource:`{
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
}`,...e.parameters?.docs?.source}}};const u=["ShowHide","OutIn"];export{e as OutIn,i as ShowHide,u as __namedExportsOrder,v as default};
