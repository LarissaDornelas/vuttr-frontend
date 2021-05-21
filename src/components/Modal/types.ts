export interface IModal {
  title: string;
  actionConfirm: () => void;
  onClose: () => void;
  loading?: boolean;
}
