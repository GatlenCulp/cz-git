import ora from "ora";
import generateSitemap from "./generateSitemap";
const spinner = ora("\u001b[38;5;043mpre-build enchance pages...\u001b[0m 📦").start();

try {
  const start = Date.now();
  /**
   * generate sitemap
   */
  generateSitemap();

  spinner.succeed(
    `\u001b[38;5;043mpre-build enchance pages success! ${((Date.now() - start) / 1000).toFixed(
      2
    )}s\u001b[0m 🎉`
  );
} catch (e) {
  spinner.fail("pre-build enchance pages failed: " + e);
}
