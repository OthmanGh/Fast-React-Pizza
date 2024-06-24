// .prettierrc.js
async function getConfig() {
  const tailwindPlugin = await import('prettier-plugin-tailwindcss');

  return {
    plugins: [tailwindPlugin],
    singleQuote: true,
  };
}

module.exports = getConfig().then((config) => config);
