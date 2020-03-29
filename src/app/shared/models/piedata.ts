import { Datum } from './datum';

export interface PieData {
  name: string;
  colorByPoint: boolean;
  data: Datum[];
}
