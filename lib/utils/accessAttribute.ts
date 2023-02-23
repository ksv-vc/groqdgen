import { AccessAttributeNode } from "groq-js";
import { handleRoot } from "./root";

export function handleExpressionAccessAttribute(expr: AccessAttributeNode) {
  console.log("access", expr);

  if ("base" in expr) {
    return [handleRoot(expr.base), expr.name].join(".");
  } else {
    return expr.name;
  }
}
