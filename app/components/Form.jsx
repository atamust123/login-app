import { default as FormInput } from "./Input";

import { FormProvider } from "react-hook-form";
import { RadioGroup } from "./RadioGroup";

const Form = ({ children, formAttributes, id, onSubmit, formProps }) => {
  return (
    <FormProvider {...formAttributes}>
      <form onSubmit={onSubmit} id={id} {...formProps}>
        {children}
      </form>
    </FormProvider>
  );
};

export default Object.assign(Form, {
  Input: FormInput,
  RadioGroup: RadioGroup,
});
