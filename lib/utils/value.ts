import { ValueNode } from "groq-js";

export function handleExpressionValue(expr: ValueNode) {
  return `'${expr.value}'`
}
