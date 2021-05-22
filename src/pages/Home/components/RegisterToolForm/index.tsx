import React from "react";

import { useFormik } from "formik";

import { Input, Modal } from "components";
import { Container } from "./styles";
import { IRegisterToolForm } from "./types";
import { validationSchema } from "./validationSchema";

const RegisterToolForm: React.FC<IRegisterToolForm> = (props) => {
  const { handleSubmit, onClose } = props;
  const formik = useFormik({
    initialValues: {
      title: "",
      link: "",
      description: "",
      tags: "",
    },
    onSubmit: handleSubmit,
    validationSchema,
    validateOnChange: false,
  });

  return (
    <Modal
      title="Add New Tool"
      actionConfirm={formik.handleSubmit}
      onClose={onClose}
      loading={formik.isSubmitting}
    >
      <Container>
        <form>
          <Input
            required
            id="title"
            name="title"
            value={formik.values.title}
            setValue={formik.handleChange}
            label="Tool Name"
            placeholder="Tool's name. Ex: Notion"
            error={formik.errors.title}
          />
          <Input
            required
            id="link"
            name="link"
            value={formik.values.link}
            setValue={formik.handleChange}
            label="Tool Link"
            placeholder="Tool's link. Ex: https://notion.so"
            error={formik.errors.link}
          />
          <Input
            id="description"
            name="description"
            value={formik.values.description}
            setValue={formik.handleChange}
            label="Tool Description"
            placeholder="Tool's description."
            error={formik.errors.description}
          />
          <Input
            id="tags"
            name="tags"
            value={formik.values.tags}
            setValue={formik.handleChange}
            label="Tags"
            placeholder="Tool's tags separeted by comma. Ex: organization, planning"
            error={formik.errors.tags}
          />
        </form>
      </Container>
    </Modal>
  );
};
export default RegisterToolForm;
