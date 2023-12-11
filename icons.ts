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
        "src": Url(prefix, "icon.png"),
        "sizes": "144x144"
    }
]