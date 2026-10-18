import{r as V,w as E}from"./iframe-B-xi8IrK.js";import{F as y}from"./FieldBase-CLxJtxGb.js";import"./preload-helper-PPVm8Dsz.js";import"./vue-BoSLtb37.js";import"./useLocale-B23gEAsK.js";import"./ru-D7eykLRC.js";import"./IconCopy-DpntHO2S.js";import"./TooltipBase-Db9X_6ih.js";import"./number-CUgYXyyM.js";import"./_plugin-vue_export-helper-DlAUqK2U.js";const{expect:e,userEvent:B,within:f}=__STORYBOOK_MODULE_TEST__,D={title:"UI-V2-Компоненты/FieldBase",parameters:{docs:{description:{component:"Базовое текстовое поле с очисткой и debounce. Ошибка отображается в тултипе по центру поля без сдвига формы, обычная подсказка привязана к иконке."}}},component:y,tags:["autodocs"],args:{variant:"default",disabled:!1,readonly:!1,error:!1,errorMessage:"Укажите ровно 4 цифры.",name:"description",label:"Описание",hint:"Подсказка к полю: введите описание.",placeholder:"Введите текст",modelValue:"Текст",debounceMs:0,maxLength:void 0},argTypes:{variant:{control:"select",options:["default","success","error","warning"]},disabled:{control:"boolean"},readonly:{control:"boolean"},error:{control:"boolean"},errorMessage:{control:"text"},name:{control:"text"},label:{control:"text"},placeholder:{control:"text"},hint:{control:"text"},modelValue:{control:"text"},debounceMs:{control:{type:"number",min:0}},maxLength:{control:{type:"number",min:0}},mask:{control:!1}},render:r=>({components:{FieldBase:y},setup(){const n=V(r.modelValue);return E(()=>r.modelValue,a=>{n.value=a}),{args:r,model:n}},template:`
      <div style="max-width: 360px;">
        <FieldBase
          v-bind="args"
          :model-value="model"
          @update:modelValue="model = $event; args.modelValue = $event"
        />
      </div>
    `})},o={name:"Песочница"},s={name:"Пустое поле",args:{modelValue:null},parameters:{docs:{description:{story:"Поле без значения показывает placeholder и не рендерит кнопку очистки."}}}},c={name:"С ошибкой",args:{error:!0}},i={name:"Ошибка с подсказкой",args:{error:!0,errorMessage:"Значение должно содержать ровно четыре цифры. Проверьте введённые данные и попробуйте снова.",hint:"Введите код из документа без пробелов и разделителей."},play:async({canvasElement:r})=>{const n=f(r),a=n.getByRole("textbox"),t=n.getByRole("tooltip",{hidden:!0}),R=r.getBoundingClientRect().height;await e(t).not.toBeVisible(),a.focus(),await e(t).toBeVisible(),await e(t).toHaveTextContent("Введите код из документа"),await e(r.getBoundingClientRect().height).toBe(R);const w=a.parentElement.getBoundingClientRect();await e(t.getBoundingClientRect().width).toBeLessThanOrEqual(w.width);const x=t.getBoundingClientRect();await e(Math.abs((x.left+x.right)/2-(w.left+w.right)/2)).toBeLessThan(1),await B.keyboard("{Escape}"),await e(t).not.toBeVisible();const v=n.getByRole("button",{name:/Значение должно/});await B.click(v),await e(t).toBeVisible(),await B.unhover(v),a.focus(),a.blur(),await e(t).not.toBeVisible()}},l={name:"С ограничением длины",args:{label:"Комментарий",modelValue:"Коротко",maxLength:12}},m={name:"С подсказкой",args:{label:"ИНН",hint:"Укажите ИНН без пробелов и разделителей.",modelValue:null,placeholder:"Введите ИНН"}},d={name:"Короткая ошибка по центру поля",args:{error:!0,errorMessage:"Обязательное поле",hint:"",modelValue:null}},p={name:"Вариант success",args:{variant:"success"}},u={name:"Вариант warning",args:{variant:"warning"}},g={name:"Вариант error без ошибки валидации",args:{variant:"error",error:!1}},h={name:"Отключённое поле",args:{disabled:!0}},b={name:"Только чтение",args:{readonly:!0}};o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  name: 'Песочница'
}`,...o.parameters?.docs?.source}}};s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
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
}`,...s.parameters?.docs?.source}}};c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  name: 'С ошибкой',
  args: {
    error: true
  }
}`,...c.parameters?.docs?.source}}};i.parameters={...i.parameters,docs:{...i.parameters?.docs,source:{originalSource:`{
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
}`,...i.parameters?.docs?.source}}};l.parameters={...l.parameters,docs:{...l.parameters?.docs,source:{originalSource:`{
  name: 'С ограничением длины',
  args: {
    label: 'Комментарий',
    modelValue: 'Коротко',
    maxLength: 12
  }
}`,...l.parameters?.docs?.source}}};m.parameters={...m.parameters,docs:{...m.parameters?.docs,source:{originalSource:`{
  name: 'С подсказкой',
  args: {
    label: 'ИНН',
    hint: 'Укажите ИНН без пробелов и разделителей.',
    modelValue: null,
    placeholder: 'Введите ИНН'
  }
}`,...m.parameters?.docs?.source}}};d.parameters={...d.parameters,docs:{...d.parameters?.docs,source:{originalSource:`{
  name: 'Короткая ошибка по центру поля',
  args: {
    error: true,
    errorMessage: 'Обязательное поле',
    hint: '',
    modelValue: null
  }
}`,...d.parameters?.docs?.source}}};p.parameters={...p.parameters,docs:{...p.parameters?.docs,source:{originalSource:`{
  name: 'Вариант success',
  args: {
    variant: 'success'
  }
}`,...p.parameters?.docs?.source}}};u.parameters={...u.parameters,docs:{...u.parameters?.docs,source:{originalSource:`{
  name: 'Вариант warning',
  args: {
    variant: 'warning'
  }
}`,...u.parameters?.docs?.source}}};g.parameters={...g.parameters,docs:{...g.parameters?.docs,source:{originalSource:`{
  name: 'Вариант error без ошибки валидации',
  args: {
    variant: 'error',
    error: false
  }
}`,...g.parameters?.docs?.source}}};h.parameters={...h.parameters,docs:{...h.parameters?.docs,source:{originalSource:`{
  name: 'Отключённое поле',
  args: {
    disabled: true
  }
}`,...h.parameters?.docs?.source}}};b.parameters={...b.parameters,docs:{...b.parameters?.docs,source:{originalSource:`{
  name: 'Только чтение',
  args: {
    readonly: true
  }
}`,...b.parameters?.docs?.source}}};const q=["Playground","Empty","WithError","ErrorWithHint","WithMaxLength","WithHint","ShortError","Success","Warning","ErrorVariant","Disabled","Readonly"];export{h as Disabled,s as Empty,g as ErrorVariant,i as ErrorWithHint,o as Playground,b as Readonly,d as ShortError,p as Success,u as Warning,c as WithError,m as WithHint,l as WithMaxLength,q as __namedExportsOrder,D as default};
