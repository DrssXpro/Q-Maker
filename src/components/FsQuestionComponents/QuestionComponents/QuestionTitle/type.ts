export interface IQuestionTitleProps {
  text?: string;
  level?: 1 | 2 | 3 | 4 | 5 | undefined;
  direction?: "left" | "center" | "right";
  disabled?: boolean;
  onChange?: (newProps: IQuestionTitleProps) => void;
}
