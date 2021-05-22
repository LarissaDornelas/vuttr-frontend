export enum BannerCriticalType {
  SUCCESS,
  ERROR,
}
export interface IBannerCritical {
  type: BannerCriticalType;
  message: string;
  onClose: () => void;
}
