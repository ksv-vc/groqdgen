import type { OrNode } from "groq-js";
import { handleRoot } from "./root";

export function handleExpressionOr(expr: OrNode): string {
  let code = `(`;

  code += handleRoot(expr.left);
  code += " || ";
  code += handleRoot(expr.right);

  code += `)`;

  return code;
}
