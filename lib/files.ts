import fs from "node:fs";
import path from "node:path";

/** Server-only: true if a file exists inside /public (used so missing photos fall back to placeholders). */
export function publicFileExists(publicPath: string): boolean {
  try {
    return fs.existsSync(path.join(process.cwd(), "public", publicPath.replace(/^\//, "")));
  } catch {
    return false;
  }
}
