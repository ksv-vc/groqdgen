import type { FilterNode } from "groq-js";
import { handleExpressionAnd } from "./and";
import { handleExpressionOpCall } from "./opCall";

export function handleExpressionFilter(expr: FilterNode){
  let code = ``

  if (expr.expr.type === "OpCall") {
    code += handleExpressionOpCall(expr.expr)
  } else if (expr.expr.type === 'And') {
    code += handleExpressionAnd(expr.expr)
  }

  return code;
}
