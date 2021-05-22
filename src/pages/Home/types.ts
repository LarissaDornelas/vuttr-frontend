import { IBannerCritical } from "components/BannerCritical/types";

export interface ITool {
  id: string;
  title: string;
  description?: string;
  link: string;
  tags: string[];
}
