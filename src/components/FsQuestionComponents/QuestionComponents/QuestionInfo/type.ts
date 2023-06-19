export interface IQuestionInfoProps {
  title?: string;
  desc?: string;
  disabled?: boolean;
  onChange?: (newProps: IQuestionInfoProps) => void;
}
