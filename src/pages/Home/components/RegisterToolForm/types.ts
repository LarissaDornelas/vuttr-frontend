import { ITool } from "pages/Home/types";

export interface IFormValues extends Omit<ITool, "id" | "tags"> {
  tags: string;
}
export interface IRegisterToolForm {
  handleSubmit: (values: IFormValues) => void;
  onClose: () => void;
}
