import { FuncCallNode } from "groq-js";
import { handleRoot } from "./root";

export function handleFuncCall(node: FuncCallNode) {
  let code = ``;
  const argumentList = node.args.map(handleRoot).join(", ");
  code += `["${node.name}(${argumentList})", q.unknown()]`;
  return code;
}
