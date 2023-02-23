import type { ObjectAttributeNode } from "groq-js";
import { handleObjectValue } from "./objectAttributes/objectValue";
import { handleObjectSplat } from "./objectAttributes/objectSplat";
import { handleConditionalObjectSplat } from "./objectAttributes/conditionalObjectSplat";

export function handleAttributeNode(node: ObjectAttributeNode) {
  switch (node.type) {
    case "ObjectSplat":
      return handleObjectSplat(node);
    case "ObjectAttributeValue":
      return handleObjectValue(node);
    case "ObjectConditionalSplat":
      return handleConditionalObjectSplat(node);
    default:
      // @ts-expect-error: Ok.
      console.info(`${node.type} not implemented!`);
      return "";
  }
}
