import { handleRoot } from "./root";
import type { GroupNode } from "groq-js";

export function handleExpressionGroup(expr: GroupNode) {
  return handleRoot(expr.base)
}
