// utils/helpers.js
exports.pause = async function(page, ms = 2000) {
  // só pausa se não estiver em headless
  if (!page.context()._options.headless) {
    await page.waitForTimeout(ms);
  }
};
