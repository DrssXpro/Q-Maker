interface ICheckboxItem {
  text: string;
  value: string;
  checked: boolean;
}

export interface IQuestionCheckboxProps {
  title?: string;
  isVertical?: boolean;
  list?: ICheckboxItem[];
  disabled?: boolean;
  onChange?: (newProps: IQuestionCheckboxProps) => void;
}
