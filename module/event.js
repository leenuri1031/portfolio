import { functionObj } from "./function_obj";

export const mouseover = (e) => {
  functionObj.size(e.target, "140px", "140px");
};

export const mouseout1 = (e) => {
  functionObj.size(e.target, "90px", "90px");
};

export const mouseout2 = (e) => {
  functionObj.size(e.target, "100px", "100px");
};

export const mouseout3 = (e) => {
  functionObj.size(e.target, "125px", "125px");
};

