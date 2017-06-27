Quick test for minimum Angular size bundle

- `npm i` to install dependencies
- `npm run build:aot` to build for production + aot
- `npm run server` to test with hmr

Bundle size obtained after `build:aot` : 384.94kB  
Here the details :

```
                                   Asset     Size  Chunks                    Chunk Names
   vendor.3d95fc102d68200bef41.bundle.js   325 kB       0  [emitted]  [big]  vendor
     main.7574dec44fe309fdce83.bundle.js  3.64 kB       1  [emitted]         main
polyfills.5b2b62ecb54540838c34.bundle.js  55.3 kB       2  [emitted]         polyfills
                              index.html     1 kB          [emitted]
```