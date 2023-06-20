export interface IQuestionTextareaProps {
  title?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (props: IQuestionTextareaProps) => void;
}
