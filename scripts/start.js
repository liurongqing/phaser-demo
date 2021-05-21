require('esbuild')
  .serve(
    {
      servedir: 'public',
    },
    {
      entryPoints: ['demo/index.ts'],
      outdir: 'public/js',
      bundle: true,
    }
  )
  .then((server) => {
    console.log('\x1B[32m', '成功运行在 http://localhost:8000');
    // server.stop()
  });
