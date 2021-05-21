export interface IButton extends React.HTMLAttributes<HTMLButtonElement> {
  icon?: string;
  height?: number;
  variant?: "primary" | "secondary";
}
