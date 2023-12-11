<template>
    <n-layout style="width: 100%">
        <n-layout-header>
            <n-h1 style="margin: 0px">关于</n-h1>
        </n-layout-header>
        <n-layout-content class="container">
            <ul class="meta">
                <li>
                    左侧菜单栏中可选择课程对应的题库
                </li>
                <li>
                    若有疑问可再次点击菜单中的“帮助”查看此页面
                </li>
                <li>
                    所有题库已将基础题库整合在内
                </li>
                <li>
                    提供有搜索框，可以以空格分隔的形式输入多个关键词，实现筛选包含所有关键词的题目
                </li>
                <li>
                    搜索区分全角/半角符号，自行确保输入正确
                </li>
                <li>
                    搜索框有两种搜索模式：
                    <ol>
                        <li>即时刷新</li>
                        <li>延迟刷新</li>
                    </ol>
                    前者更高效，但可能卡顿。可通过搜索框右侧开关切换
                </li>
                <li>
                    设置中可以切换深色/浅色模式，但浅色模式未仔细验证，不保证观感
                </li>
            </ul>
        </n-layout-content>
    </n-layout>
</template>

<script setup>
</script>

<style lang="scss" scoped>
.container {
    margin: 12px;
    font-size: 18px;
    width: 100%;
    text-wrap: balance;
}

.meta {
    li {
        text-align: left;
    }
}
</style>