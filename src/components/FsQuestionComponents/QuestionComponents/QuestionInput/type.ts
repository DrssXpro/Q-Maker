export interface IQuestionInputProps {
  title?: string;
  placeholder?: string;
  disabled?: boolean;
  onChange?: (newProps: IQuestionInputProps) => void;
}
