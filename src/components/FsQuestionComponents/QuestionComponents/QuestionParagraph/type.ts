export interface IQuestionParagraphProps {
  text?: string;
  direction?: "left" | "center" | "right";
  disabled?: boolean;
  onChange?: (props: IQuestionParagraphProps) => void;
}
