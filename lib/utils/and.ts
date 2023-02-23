import type { AndNode } from "groq-js";
import { handleRoot } from "./root";

export function handleExpressionAnd(expr: AndNode): string {
  let code = `(`;

  code += handleRoot(expr.left);
  code += " && ";
  code += handleRoot(expr.right);

  code += `)`;

  return code;
}
