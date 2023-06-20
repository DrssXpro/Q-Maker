interface IRadioOption {
  text: string;
  value: string;
}

export interface IQuestionRadioProps {
  title?: string;
  isVertical?: boolean;
  options?: IRadioOption[];
  current?: string;
  disabled?: boolean;
  onChange?: (newProps: IQuestionRadioProps) => void;
}
