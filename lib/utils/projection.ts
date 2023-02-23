import { ProjectionNode } from "groq-js";
import { handleRoot } from "./root";

export function handleExpressionProjection(expr: ProjectionNode) {
  let code = ``;
  code += handleRoot(expr.expr)
  return code;
}
