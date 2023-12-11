ls = [
    466,
    467,
    468,
    469,
    470,
    471,
    472,
    473,
    474,
    475,
    476,
    477,
    478,
    479,
    480,
    481,
    482,
    505,
]

for i in ls:
    with open(f"{i}.vue", "w", encoding="utf-8") as fw:
        fw.write(
            f'<template>\n\
    <TemplateMain :quizs="exam"></TemplateMain>\n\
</template>\n\
\n\
<script setup>\n\
import TemplateMain from \'@/views/query/TemplateMain.vue\'\n\
import {{ exam }} from "@/views/query/db/{i}"\n\
</script>\n\
\n\
<style lang="scss" scoped></style>'
        )
