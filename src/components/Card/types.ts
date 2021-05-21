import { ITool } from "pages/Home/types";

export interface ICard {
  tool: ITool;
  removeAction: (id: string)=> void
}
