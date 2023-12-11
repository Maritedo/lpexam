ls = [
    {"id": 513, "bank_name": "射箭23-12-11"},
    {"id": 505, "bank_name": "飞盘2023-11-13"},
    {"id": 482, "bank_name": "足球-2023.5"},
    {"id": 481, "bank_name": "羽毛球20230510"},
    {"id": 480, "bank_name": "瑜伽2023.5"},
    {"id": 479, "bank_name": "游泳-2023.5"},
    {"id": 478, "bank_name": "形体艺术2023.5"},
    {"id": 477, "bank_name": "武术2023.5"},
    {"id": 476, "bank_name": "网球20230510"},
    {"id": 475, "bank_name": "体育舞蹈2023.5"},
    {"id": 474, "bank_name": "跆拳道题库2023.5"},
    {"id": 473, "bank_name": "散打2023,5"},
    {"id": 472, "bank_name": "柔力球20230518"},
    {"id": 471, "bank_name": "气排球23-05-19"},
    {"id": 470, "bank_name": "普拉提2023.5"},
    {"id": 469, "bank_name": "乒乓球20230510"},
    {"id": 468, "bank_name": "排球23 05-19"},
    {"id": 467, "bank_name": "篮球题库2023.5"},
    {"id": 466, "bank_name": "拉丁舞20230510"},
    {"id": 465, "bank_name": "健美操2023.5"},
]

with open(f"new.txt", "w", encoding="utf-8") as fw:
    for i in ls:
        fw.write(
            f"\n\
      {{\n\
        path: '{i['id']}',\n\
        name: '{i['id']}',\n\
        component: () => import('@/views/query/{i['id']}.vue'),\n\
        meta: {{\n\
          title: '{i['bank_name']}'\n\
      }}\n\
      }},"
        )
