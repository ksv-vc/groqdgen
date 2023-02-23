import { parse } from "groq-js";
import { handleRoot } from "./utils/root";

(async function main() {
  const tree =
    parse(`*[_type == 'procedure' && (showFor[0] == null || "test" in showFor || "bla" in showFor)]{
  _createdAt,
  "title": title.de,
  "foo": coalesce(title.de, "unknown")
}`);

  let code = ``;

  if (tree.type === "Map") {
    const { base, expr } = tree;

    /**
     * Handle the filtering
     */
    if (base.type === "Filter") {
      if (base.base.type === "Everything") {
        code += `q("*")`;
      } else {
        // TODO: Implement some more base types
      }

      code += `.filter("`;
      code += handleRoot(base);
      code += `")`;
    }

    if (expr.type === "Projection") {
      code += `.grab({`;
      code += handleRoot(expr);
      code += `})`;
    } else {
      // TODO: Implement some more expression types
    }
  }

  console.log({ code });
})();
