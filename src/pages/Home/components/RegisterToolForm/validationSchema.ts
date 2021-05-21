import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  title: Yup.string().required("Required Field"),
  link: Yup.string().url().required("Required Field"),
  description: Yup.string().optional(),
  tags: Yup.string().required("Required Field"),
});
