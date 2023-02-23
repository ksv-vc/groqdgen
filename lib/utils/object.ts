import { handleAttributeNode } from "./attributeNode";
import type { ObjectNode } from "groq-js";

export function handleExpressionObject(expr: ObjectNode) {
  let code = ``;

  code += expr.attributes.map(attribute => {
    return handleAttributeNode(attribute)
  }).join(', ')

  return code
}
