export const baseUrl = "/icons/";
/**
 * 对路径进行适配
 * @param prefix 前缀，不包含末尾的'/'
 * @param meta 相对于'src/assets/icons/'目录的路径，不包含前缀'/'
 * @returns 适配后的路径
 */
export const Url = (prefix: string, meta: string) => prefix + baseUrl + meta

export const parsedIcons = (prefix: string) => [
    {
        "src": Url(prefix, "windows/SmallTile.scale-100.png"),
        "sizes": "71x71"
    },
    {
        "src": Url(prefix, "windows/SmallTile.scale-125.png"),
        "sizes": "89x89"
    },
    {
        "src": Url(prefix, "windows/SmallTile.scale-150.png"),
        "sizes": "107x107"
    },
    {
        "src": Url(prefix, "windows/SmallTile.scale-200.png"),
        "sizes": "142x142"
    },
    {
        "src": Url(prefix, "windows/SmallTile.scale-400.png"),
        "sizes": "284x284"
    },
    {
        "src": Url(prefix, "windows/Square150x150Logo.scale-100.png"),
        "sizes": "150x150"
    },
    {
        "src": Url(prefix, "windows/Square150x150Logo.scale-125.png"),
        "sizes": "188x188"
    },
    {
        "src": Url(prefix, "windows/Square150x150Logo.scale-150.png"),
        "sizes": "225x225"
    },
    {
        "src": Url(prefix, "windows/Square150x150Logo.scale-200.png"),
        "sizes": "300x300"
    },
    {
        "src": Url(prefix, "windows/Square150x150Logo.scale-400.png"),
        "sizes": "600x600"
    },
    {
        "src": Url(prefix, "windows/Wide310x150Logo.scale-100.png"),
        "sizes": "310x150"
    },
    {
        "src": Url(prefix, "windows/Wide310x150Logo.scale-125.png"),
        "sizes": "388x188"
    },
    {
        "src": Url(prefix, "windows/Wide310x150Logo.scale-150.png"),
        "sizes": "465x225"
    },
    {
        "src": Url(prefix, "windows/Wide310x150Logo.scale-200.png"),
        "sizes": "620x300"
    },
    {
        "src": Url(prefix, "windows/Wide310x150Logo.scale-400.png"),
        "sizes": "1240x600"
    },
    {
        "src": Url(prefix, "windows/LargeTile.scale-100.png"),
        "sizes": "310x310"
    },
    {
        "src": Url(prefix, "windows/LargeTile.scale-125.png"),
        "sizes": "388x388"
    },
    {
        "src": Url(prefix, "windows/LargeTile.scale-150.png"),
        "sizes": "465x465"
    },
    {
        "src": Url(prefix, "windows/LargeTile.scale-200.png"),
        "sizes": "620x620"
    },
    {
        "src": Url(prefix, "windows/LargeTile.scale-400.png"),
        "sizes": "1240x1240"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.scale-100.png"),
        "sizes": "44x44"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.scale-125.png"),
        "sizes": "55x55"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.scale-150.png"),
        "sizes": "66x66"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.scale-200.png"),
        "sizes": "88x88"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.scale-400.png"),
        "sizes": "176x176"
    },
    {
        "src": Url(prefix, "windows/StoreLogo.scale-100.png"),
        "sizes": "50x50"
    },
    {
        "src": Url(prefix, "windows/StoreLogo.scale-125.png"),
        "sizes": "63x63"
    },
    {
        "src": Url(prefix, "windows/StoreLogo.scale-150.png"),
        "sizes": "75x75"
    },
    {
        "src": Url(prefix, "windows/StoreLogo.scale-200.png"),
        "sizes": "100x100"
    },
    {
        "src": Url(prefix, "windows/StoreLogo.scale-400.png"),
        "sizes": "200x200"
    },
    {
        "src": Url(prefix, "windows/SplashScreen.scale-100.png"),
        "sizes": "620x300"
    },
    {
        "src": Url(prefix, "windows/SplashScreen.scale-125.png"),
        "sizes": "775x375"
    },
    {
        "src": Url(prefix, "windows/SplashScreen.scale-150.png"),
        "sizes": "930x450"
    },
    {
        "src": Url(prefix, "windows/SplashScreen.scale-200.png"),
        "sizes": "1240x600"
    },
    {
        "src": Url(prefix, "windows/SplashScreen.scale-400.png"),
        "sizes": "2480x1200"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.targetsize-16.png"),
        "sizes": "16x16"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.targetsize-20.png"),
        "sizes": "20x20"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.targetsize-24.png"),
        "sizes": "24x24"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.targetsize-30.png"),
        "sizes": "30x30"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.targetsize-32.png"),
        "sizes": "32x32"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.targetsize-36.png"),
        "sizes": "36x36"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.targetsize-40.png"),
        "sizes": "40x40"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.targetsize-44.png"),
        "sizes": "44x44"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.targetsize-48.png"),
        "sizes": "48x48"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.targetsize-60.png"),
        "sizes": "60x60"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.targetsize-64.png"),
        "sizes": "64x64"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.targetsize-72.png"),
        "sizes": "72x72"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.targetsize-80.png"),
        "sizes": "80x80"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.targetsize-96.png"),
        "sizes": "96x96"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.targetsize-256.png"),
        "sizes": "256x256"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.altform-unplated_targetsize-16.png"),
        "sizes": "16x16"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.altform-unplated_targetsize-20.png"),
        "sizes": "20x20"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.altform-unplated_targetsize-24.png"),
        "sizes": "24x24"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.altform-unplated_targetsize-30.png"),
        "sizes": "30x30"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.altform-unplated_targetsize-32.png"),
        "sizes": "32x32"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.altform-unplated_targetsize-36.png"),
        "sizes": "36x36"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.altform-unplated_targetsize-40.png"),
        "sizes": "40x40"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.altform-unplated_targetsize-44.png"),
        "sizes": "44x44"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.altform-unplated_targetsize-48.png"),
        "sizes": "48x48"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.altform-unplated_targetsize-60.png"),
        "sizes": "60x60"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.altform-unplated_targetsize-64.png"),
        "sizes": "64x64"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.altform-unplated_targetsize-72.png"),
        "sizes": "72x72"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.altform-unplated_targetsize-80.png"),
        "sizes": "80x80"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.altform-unplated_targetsize-96.png"),
        "sizes": "96x96"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.altform-unplated_targetsize-256.png"),
        "sizes": "256x256"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.altform-lightunplated_targetsize-16.png"),
        "sizes": "16x16"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.altform-lightunplated_targetsize-20.png"),
        "sizes": "20x20"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.altform-lightunplated_targetsize-24.png"),
        "sizes": "24x24"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.altform-lightunplated_targetsize-30.png"),
        "sizes": "30x30"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.altform-lightunplated_targetsize-32.png"),
        "sizes": "32x32"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.altform-lightunplated_targetsize-36.png"),
        "sizes": "36x36"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.altform-lightunplated_targetsize-40.png"),
        "sizes": "40x40"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.altform-lightunplated_targetsize-44.png"),
        "sizes": "44x44"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.altform-lightunplated_targetsize-48.png"),
        "sizes": "48x48"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.altform-lightunplated_targetsize-60.png"),
        "sizes": "60x60"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.altform-lightunplated_targetsize-64.png"),
        "sizes": "64x64"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.altform-lightunplated_targetsize-72.png"),
        "sizes": "72x72"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.altform-lightunplated_targetsize-80.png"),
        "sizes": "80x80"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.altform-lightunplated_targetsize-96.png"),
        "sizes": "96x96"
    },
    {
        "src": Url(prefix, "windows/Square44x44Logo.altform-lightunplated_targetsize-256.png"),
        "sizes": "256x256"
    },
    {
        "src": Url(prefix, "android/android-launchericon-512-512.png"),
        "sizes": "512x512"
    },
    {
        "src": Url(prefix, "android/android-launchericon-192-192.png"),
        "sizes": "192x192"
    },
    {
        "src": Url(prefix, "android/android-launchericon-144-144.png"),
        "sizes": "144x144"
    },
    {
        "src": Url(prefix, "android/android-launchericon-96-96.png"),
        "sizes": "96x96"
    },
    {
        "src": Url(prefix, "android/android-launchericon-72-72.png"),
        "sizes": "72x72"
    },
    {
        "src": Url(prefix, "android/android-launchericon-48-48.png"),
        "sizes": "48x48"
    },
    {
        "src": Url(prefix, "ios/16.png"),
        "sizes": "16x16"
    },
    {
        "src": Url(prefix, "ios/20.png"),
        "sizes": "20x20"
    },
    {
        "src": Url(prefix, "ios/29.png"),
        "sizes": "29x29"
    },
    {
        "src": Url(prefix, "ios/32.png"),
        "sizes": "32x32"
    },
    {
        "src": Url(prefix, "ios/40.png"),
        "sizes": "40x40"
    },
    {
        "src": Url(prefix, "ios/50.png"),
        "sizes": "50x50"
    },
    {
        "src": Url(prefix, "ios/57.png"),
        "sizes": "57x57"
    },
    {
        "src": Url(prefix, "ios/58.png"),
        "sizes": "58x58"
    },
    {
        "src": Url(prefix, "ios/60.png"),
        "sizes": "60x60"
    },
    {
        "src": Url(prefix, "ios/64.png"),
        "sizes": "64x64"
    },
    {
        "src": Url(prefix, "ios/72.png"),
        "sizes": "72x72"
    },
    {
        "src": Url(prefix, "ios/76.png"),
        "sizes": "76x76"
    },
    {
        "src": Url(prefix, "ios/80.png"),
        "sizes": "80x80"
    },
    {
        "src": Url(prefix, "ios/87.png"),
        "sizes": "87x87"
    },
    {
        "src": Url(prefix, "ios/100.png"),
        "sizes": "100x100"
    },
    {
        "src": Url(prefix, "ios/114.png"),
        "sizes": "114x114"
    },
    {
        "src": Url(prefix, "ios/120.png"),
        "sizes": "120x120"
    },
    {
        "src": Url(prefix, "ios/128.png"),
        "sizes": "128x128"
    },
    {
        "src": Url(prefix, "ios/144.png"),
        "sizes": "144x144"
    },
    {
        "src": Url(prefix, "ios/152.png"),
        "sizes": "152x152"
    },
    {
        "src": Url(prefix, "ios/167.png"),
        "sizes": "167x167"
    },
    {
        "src": Url(prefix, "ios/180.png"),
        "sizes": "180x180"
    },
    {
        "src": Url(prefix, "ios/192.png"),
        "sizes": "192x192"
    },
    {
        "src": Url(prefix, "ios/256.png"),
        "sizes": "256x256"
    },
    {
        "src": Url(prefix, "ios/512.png"),
        "sizes": "512x512"
    },
    {
        "src": Url(prefix, "ios/1024.png"),
        "sizes": "1024x1024"
    }
]