import type { ExprNode } from "groq-js";
import { handleExpressionAccessAttribute } from "./accessAttribute";
import { handleExpressionAnd } from "./and";
import { handleExpressionFilter } from "./filter";
import { handleFuncCall } from "./funcCall";
import { handleExpressionGroup } from "./group";
import { handleExpressionObject } from "./object";
import { handleExpressionOpCall } from "./opCall";
import { handleExpressionOr } from "./or";
import { handleExpressionProjection } from "./projection";
import { handleExpressionValue } from "./value";

export function handleRoot(expr: ExprNode) {
  switch (expr.type) {
    case "FuncCall":
      return handleFuncCall(expr);
    case "And":
      return handleExpressionAnd(expr);
    case "Or":
      return handleExpressionOr(expr);
    case "OpCall":
      return handleExpressionOpCall(expr);
    case "Group":
      return handleExpressionGroup(expr);
    case "Value":
      return handleExpressionValue(expr);
    case "AccessAttribute":
      return handleExpressionAccessAttribute(expr);
    case "Filter":
      return handleExpressionFilter(expr);
    case "Object":
      return handleExpressionObject(expr);
    case "Projection":
      return handleExpressionProjection(expr);
    default:
      console.info(`${expr.type} not implemented!`);
      return "";
  }
}
