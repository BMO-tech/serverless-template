const esbuild = require('esbuild');
const glob = require('tiny-glob');

(async function () {
  const files = await glob('src/functions/*.ts', { filesOnly: true });

  await esbuild.build({
    entryPoints: files,
    entryNames: '[name]/index',
    bundle: true,
    outdir: 'dist',
    outbase: 'src/functions',
    minify: true,
    platform: 'node',
    format: 'cjs'
  });
})();