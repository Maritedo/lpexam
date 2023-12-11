import { createRouter, createWebHistory, createWebHashHistory, type RouteRecordRaw } from 'vue-router'
import { type ExtendedRecord } from '@/scripts/normal'
import {
  Home,
  Settings,
  InformationCircle,
  Construct,
  Fish,
} from '@vicons/ionicons5'

const legacy = true
const useHash = import.meta.env.MODE !== 'development' && legacy
const baseUrl = import.meta.env.BASE_URL
const defaultTitle = '未命名'

type dispNameMapper = {
  original: string,
  display: string
}
/** 
 * todo 优化算法
 * * 目前时间复杂度O(N*R) => O(N)
 * ? 其中N为面包屑长度，R为路由条目总数
 */
export const getDisplayNames = (names: string[]): dispNameMapper[] => {
  const result: dispNameMapper[] = []
  let curNodes: ExtendedRecord[] | undefined = routes,
    curNode: ExtendedRecord | undefined
  for (const curName of names)
    if ((curNode = curNodes?.find(v =>
      v.name == curName || (v.children && v.children.length && v.children[0].name == curName)
    ))) {
      curNodes = curNode.children
      result.push({
        original: curName,
        display: curNode.meta?.title || defaultTitle,
      })
    }
  return result
}

// * 1 叶子节点 具有 component 属性且没有children
// * 2 子树节点 具有 children 属性且不具有 component 属性
// * 3 指针节点 不具有 children 属性和 page 属性但具有 redirect 属性
const tiku = [
  {
    "id": 513,
    "bank_name": "射箭23-12-11"
  },
  {
    "id": 505,
    "bank_name": "飞盘2023-11-13"
  },
  {
    "id": 482,
    "bank_name": "足球-2023.5"
  },
  {
    "id": 481,
    "bank_name": "羽毛球20230510"
  },
  {
    "id": 480,
    "bank_name": "瑜伽2023.5"
  },
  {
    "id": 479,
    "bank_name": "游泳-2023.5"
  },
  {
    "id": 478,
    "bank_name": "形体艺术2023.5"
  },
  {
    "id": 477,
    "bank_name": "武术2023.5"
  },
  {
    "id": 476,
    "bank_name": "网球20230510"
  },
  {
    "id": 475,
    "bank_name": "体育舞蹈2023.5"
  },
  {
    "id": 474,
    "bank_name": "跆拳道题库2023.5"
  },
  {
    "id": 473,
    "bank_name": "散打2023,5"
  },
  {
    "id": 472,
    "bank_name": "柔力球20230518"
  },
  {
    "id": 471,
    "bank_name": "气排球23-05-19"
  },
  {
    "id": 470,
    "bank_name": "普拉提2023.5"
  },
  {
    "id": 469,
    "bank_name": "乒乓球20230510"
  },
  {
    "id": 468,
    "bank_name": "排球23 05-19"
  },
  {
    "id": 467,
    "bank_name": "篮球题库2023.5"
  },
  {
    "id": 466,
    "bank_name": "拉丁舞20230510"
  },
  {
    "id": 465,
    "bank_name": "健美操2023.5"
  }
]
export const portal: ExtendedRecord[] = [
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/PageHome.vue'),
    alias: ['/index', '/index.html', '/home'],
    meta: {
      title: "帮助",
      icon: Home
    }
  },
  {
    path: '/query',
    name: 'dev',
    meta: {
      title: '题库',
      icon: Construct
    },
    children: [
      {
        path: '465',
        name: '465',
        component: () => import('@/views/query/465.vue'),
        meta: {
          title: '???',
          icon: Fish
        }
      }
    ]
  }
]
export const action: ExtendedRecord[] = [
  {
    path: '/about',
    name: 'about',
    meta: {
      icon: InformationCircle,
      title: "关于"
    },
    component: () => import('@/views/app/AppInfo.vue')
  },
  {
    path: '/setting',
    name: 'setting',
    meta: {
      icon: Settings,
      title: "设置"
    },
    component: () => import('@/views/app/AppSetting.vue')
  }
]
export const result: ExtendedRecord[] = [
  {
    path: '/:catchAll(.*)',
    name: '404',
    component: () => import('@/views/PageNotFound.vue')
  }
]

export const routes: ExtendedRecord[] = (function (...rawDatas: ExtendedRecord[][]) {
  rawDatas.forEach((function _(datas: ExtendedRecord[]) {
    for (const data of datas)
      if (data.children && data.children.length > 0 && _(data.children) && data.component) {
        const mappedName = `$${String(data.name)}`
        data.children.unshift({
          path: '',
          name: mappedName,
          component: data.component,
          meta: {
            title: data.meta?.title || defaultTitle,
            virtual: true
          }
        })
        data.component = undefined
        data.redirect = { name: mappedName }
      }
    return datas
  }))
  return Array.prototype.concat.apply([] as ExtendedRecord[][], rawDatas)
})(portal, action, result)

const router = createRouter({
  history: useHash ?
    createWebHashHistory(baseUrl) :
    createWebHistory(baseUrl),
  routes: (routes as unknown) as RouteRecordRaw[],
})
export default router