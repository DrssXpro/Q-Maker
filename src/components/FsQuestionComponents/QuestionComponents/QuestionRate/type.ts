export interface IQuestionRateProps {
  title?: string;
  value?: number;
  count?: number;
  allowHalf?: boolean;
  disabled?: boolean;
  onChange?: (props: IQuestionRateProps) => void;
}
