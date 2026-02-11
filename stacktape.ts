import { HostingBucket, LocalScript, defineConfig } from 'stacktape';

export default defineConfig(() => {
  const webBucket = new HostingBucket({
    uploadDirectoryPath: './dist',
    hostingContentType: 'static-website'
  });

  const build = new LocalScript({
    executeCommand: 'npm run build'
  });

  return {
    resources: { webBucket },
    scripts: { build },
    hooks: {
      beforeDeploy: [
        {
          scriptName: 'build'
        }
      ]
    }
  };
});
