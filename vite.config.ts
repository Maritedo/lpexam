import { fileURLToPath, URL } from 'node:url'
import { parsedIcons, Url } from './icons'

import { UserConfig } from 'vite'
import { VitePWA } from 'vite-plugin-pwa';
import { NaiveUiResolver } from 'unplugin-vue-components/resolvers'

import legacy from '@vitejs/plugin-legacy'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'


export default ({ mode }: { mode: string }): UserConfig => {
  let baseUrl, prefixUrl, prefixShortcuts;
  const devMode = mode === 'development'
  switch (mode) {
    case 'production':
      baseUrl = './'
      prefixUrl = ''
      prefixShortcuts = '.'
      break
    case 'gitpages':
      baseUrl = '/Vue-PWA/'
      prefixUrl = '.'
      prefixShortcuts = ''
      break
    default:
      baseUrl = '/'
      prefixUrl = ''
      prefixShortcuts = '/#/'
      break
  }
  return {
    base: baseUrl,
    plugins: [
      vue(),
      devMode ? null : legacy({
        targets: ['defaults', 'not IE 11']
      }),
      VitePWA({
        manifest: {
          // 描述信息
          short_name: "步道乐跑题库",
          name: '步道乐跑题库',
          id: "/",
          description: "仅供学习使用",
          start_url: "./index.html",
          lang: "zh-CN",
          // 主题信息
          theme_color: "#fff",
          background_color: "#fff",
          edge_side_panel: {
            preferred_width: 480
          },
          // 清单信息
          icons: parsedIcons(prefixUrl),
          display_override: [
            "window-controls-overlay",
            "fullscreen",
            "minimal-ui"
          ]
        },
        devOptions: {
          enabled: true,// 如果想在`vite dev`命令下调试PWA, 必须启用它
          type: "module"// Vite在dev模式下会使用浏览器原生的ESModule，将type设置为`"module"`与原先的保持一致
        }
      }),
      AutoImport({
        imports: [
          'vue',
          {
            'naive-ui': [
              'useDialog',
              'useMessage',
              'useNotification',
              'useLoadingBar'
            ]
          }
        ]
      }),
      Components({
        resolvers: [NaiveUiResolver()]
      })
    ],
    resolve: {
      alias: {
        '@': fileURLToPath(new URL('./src', import.meta.url))
      }
    },
    server: {
      host: '0.0.0.0',
      port: 8080
    }
  }
}