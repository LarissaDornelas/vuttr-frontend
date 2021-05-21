export interface IInput {
  label: string;
  id: string;
  placeholder?: string;
  required?: boolean;
  error?: string;
  setValue: (e: any) => void;
  value: string;
  name: string;
}
