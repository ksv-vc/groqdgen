import type { ObjectAttributeValueNode } from "groq-js";
import { handleRoot } from "../root";

export function handleObjectValue({
  value,
  ...node
}: ObjectAttributeValueNode) {
  let code = ``;
  console.log("object value", node, value);
  if (value.type === "AccessAttribute" && value.name === node.name) {
    code += `${node.name}: q.unknown()`;
  } else {
    code += `${node.name}: ${handleRoot(value)}`;
  }
  return code;
}
