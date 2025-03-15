import { Float } from "react-native/Libraries/Types/CodegenTypes";

export interface Project {
  id:null;
  name: string;
  description: string;
  type: number;
  budget: Float;
  img: string;
}

export interface setProject {
  name: string;
  description: string;
  type: number;
  budget: Float;
  img: string;
}