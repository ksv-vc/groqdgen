import type { OpCallNode } from "groq-js";
import { handleRoot } from "./root";

export function handleExpressionOpCall(expr: OpCallNode) {
  let code = ``;

    code += handleRoot(expr.left);
    code += ` ${expr.op} `;
    code += handleRoot(expr.right);

  return code;
}
