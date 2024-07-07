import { defineConfig } from 'vite';
import federation from 'vite-plugin-federation';

export default defineConfig({
  plugins: [
    federation({
      name: 'app1',
      remotes: {
        app2: 'app2@http://localhost:3002/remoteEntry.js',
      },
      shared: {
        react: {
          singleton: true,
          requiredVersion: '^17.0.0',
        },
        'react-dom': {
          singleton: true,
          requiredVersion: '^17.0.0',
        },
      },
    }),
  ],
});

// The caret (^) symbol in a version number, like ^17.0.0 in your configuration for shared dependencies, has a specific meaning in the context of npm and other Node.js package managers. It's used to specify which versions of a package are acceptable to install. Here’s what it does:

//     Allows Minor and Patch Updates: Using ^17.0.0 means that any version that is greater than or equal to 17.0.0 and less than 18.0.0 is acceptable. This allows updates that include minor and patch changes but excludes any major changes that might break compatibility.
//         Minor updates (the middle number) are typically for enhancements and additions that are backward compatible.
//         Patch updates (the last number) are usually for bug fixes and performance improvements that are also backward compatible.

//     Version Range: It effectively creates a range of acceptable versions. For example:
//         ^17.0.0 would include versions like 17.1.0, 17.2.5, or 17.0.1, but not 18.0.0 or 16.9.9.

// This approach is commonly used to ensure that applications can benefit from bug fixes and non-breaking new features without the risk associated with major version upgrades, which might introduce changes that could break the application.
