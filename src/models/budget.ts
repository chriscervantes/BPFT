import { Base } from "./base.model";

export interface Budget extends Base<string> {
  name: string;
  description?: string;
  month: string;
  year: number;
  amount: number;
}
