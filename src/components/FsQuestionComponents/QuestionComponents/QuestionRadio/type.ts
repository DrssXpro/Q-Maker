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

export interface IQuestionRadioStatProps {
  stat: Array<{ name: string; count: number }>;
}
