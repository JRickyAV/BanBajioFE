import { Float } from "react-native/Libraries/Types/CodegenTypes";

export interface Project {
  id:any;
  name: string;
  description: string;
  type: number;
  budget: Float;
  img: string;
}