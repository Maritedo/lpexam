ls = [

]

for i in ls:
    with open(f"{i}.vue", 'w', encoding='utf-8') as fw:
        fw.write("<template>\
    <TemplateMain :quizs=\"exam\"></TemplateMain>\
</template>\
\
<script setup>\
import TemplateMain from '@/views/query/TemplateMain.vue'\
import { exam } from \"@/views/query/db/465\"\
</script>\
\
<style lang=\"scss\" scoped></style>")