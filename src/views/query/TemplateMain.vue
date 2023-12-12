<template>
    <n-layout :native-scrollbar="false">
        <n-layout-header style="padding: 10px; margin-bottom: 20px;">
            <n-space align="center" justify="center">
                <n-input @input="e => highPerf ? onBlur(e) : null" @change="onBlur" style="text-align: left;"
                    placeholder="">
                    <template #prefix>
                        查找:
                    </template>
                </n-input>
                <n-switch v-model:value="highPerf">
                    <template #checked>即时</template>
                    <template #unchecked>延后</template>
                </n-switch>
                {{ highPerf ? "请输入以空格分隔的关键词，更改将立即触发搜索" : "请输入以空格分隔的关键词，按下回车以进行搜索" }}
            </n-space>
        </n-layout-header>
        <n-layout-content style="margin: 1em;">
            <template v-for="variant in variants" :key="variant.name">
                <n-list style="margin-bottom: 16px;" hoverable clickable>
                    <template #header>
                        <div class="header">
                            {{ variant.disp }}
                        </div>
                    </template>
                    <n-list-item v-for="item in final[variant.name]" :key="item['id']" class="box">
                        <label class="title">
                            <div class="">
                                <strong class="quiz">
                                    {{ item['content'] }}
                                </strong>
                                <strong class="answer">
                                    答案:
                                    {{ item['right_answers'] }}
                                </strong>
                            </div>
                            <input type="checkbox" />
                        </label>
                        <div class="wrapper">
                            <div class="content">
                                <div class="choice" v-for="choice in item['options']" :key="choice['name']"
                                    :class="item['right_answers'].includes(choice['name']) ? 'right' : null">
                                    {{ choice['name'] }}: {{ choice['content'] }}
                                </div>
                            </div>
                        </div>
                    </n-list-item>
                </n-list>
            </template>
        </n-layout-content>
    </n-layout>
</template>

<script setup>
import { basic } from '@/views/query/db/basic'
import { onMounted } from 'vue';
import { useConfigStore } from '@/stores/configs';
import { storeToRefs } from 'pinia';

const props = defineProps([
    'quizs'
]);

const variants = [
    {
        disp: '单选题',
        name: 'choice'
    },
    {
        disp: '多选题',
        name: 'multiple_choice'
    },
    {
        disp: '判断题',
        name: 'checking'
    }
];
// const final = Object.assign({}, basic);
const final = JSON.parse(basic);
for (let i of variants)
    final[i.name].unshift(...props.quizs[i.name])
const { highPerf } = storeToRefs(useConfigStore())
let elements = [];

/**
 * @param{string} e
*/
const onBlur = (e) => {
    const keys = [];
    e.split(' ').forEach(v => v != '' && keys.push(v));
    elements.forEach(ele => {
        const content = ele[1].textContent;
        if (keys.length && keys.find(key => {
            return !content.includes(key)
        }))
            ele[0].classList.add("hidden");
        else
            ele[0].classList.remove("hidden");

    })
}

onMounted(() => {
    const elements_ = document.querySelectorAll(".box");
    elements_.forEach(e => {
        elements.push([e, e.querySelector(".quiz")])
    })
})

</script>

<style lang="scss" scoped>
.title {
    font-size: 18px;
    text-align: left;

    &>input {
        display: none;
    }

    &:has(> input:checked)~.wrapper {
        grid-template-rows: 1fr;
    }
}

.wrapper {
    display: grid;
    grid-template-rows: 0fr;
    transition: grid-template-rows .2s ease;

    .content {
        overflow: hidden;
    }
}

.quiz {
    display: inline-block;
    background-color: #6662;
    padding: 0 .4em;
    margin: 2px;
    border-radius: 4px;
}

.answer {
    display: inline-block;
    background-color: #6cf6;
    color: rgb(168, 6, 1);
    font-weight: 500;
    padding: 0 .4em;
    margin: 2px;
    border-radius: 4px;
}

.choice {
    display: block;
    text-align: left;
    background-color: #6662;
    padding: 0 .4em;
    margin: 2px;
    margin-top: .4em;
    font-size: 16px;
    border-radius: 4px;
}

.right {
    color: rgb(0, 0, 0);
    background-color: rgba(108, 196, 108, 0.742);
}

.hidden {
    display: none;
}

.header {
    font-size: 24px;
}
</style>