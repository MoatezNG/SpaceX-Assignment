export type Columns<T extends unknown> = {
  title: string;
  selector: keyof T;
  cell?: (row: T) => JSX.Element;
};
