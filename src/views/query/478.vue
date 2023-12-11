<template>
    <TemplateMain :quizs="exam"></TemplateMain>
</template>

<script setup>
import TemplateMain from '@/views/query/TemplateMain.vue'
import { exam } from "@/views/query/db/478"
</script>

<style lang="scss" scoped></style>