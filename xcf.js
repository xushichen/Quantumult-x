/**********************************************
下厨房 解锁超级会员
使用说明：开始规则再进入软件自动解锁，后续使用需要一直开启规则
使用声明：⚠️仅供学习交流，🈲️商业用途


[rewrite_local]
^https:\/\/api\.xiachufang\.com\/v2\/account\/detail url script-response-body https://raw.githubusercontent.com/xushichen/Quantumult-x/main/xcf.js
 

[MITM]
hostname = api.xiachufang.com
**********************************************/


let obj = JSON.parse($response.body);

obj = {
    "account": {
        "sk": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJqdGkiOjE0Nzk1OTY0MiwidWlkIjoxMDk4MzUwNzAsImlhdCI6MTY2MzM0OTU5My4wLCJvIjoyfQ.2pC2PdPU1-8gaoTFHRvs0cXKqOyBizHJApK0r4ceGLw",
        "labels": [

        ],
        "is_admin": false,
        "mobile_phone": {
            "country_code": "86",
            "encrypted_phone_number": "iCo1Q41pKMvQwJWOsp6m1A==",
            "display_phone_number": "151****9347"
        },
        "user": {
            "n_total_dish_digges": "1",
            "photo160": "https://i2.chuimg.com/1176855e4b5111e7bc9d0242ac110002_160w_160h.jpg?imageView2/2/w/160/interlace/1/q/75/format/webp",
            "ip_location": "浙江",
            "id": "109835070",
            "is_expert": false,
            "profession": "",
            "nequipments": "0",
            "report_url": "",
            "user_tags": [

            ],
            "hometown_location": "",
            "url": "https://www.xiachufang.com/cook/109835070/",
            "nbuybuybuy": "1",
            "is_social_verified": false,
            "photo": "https://i2.chuimg.com/1176855e4b5111e7bc9d0242ac110002_160w_160h.jpg?imageView2/2/w/160/interlace/1/q/75/format/webp",
            "nrecipes": "0",
            "has_user_been_prime": true,
            "social_verified_reason": "",
            "photo60": "https://i2.chuimg.com/1176855e4b5111e7bc9d0242ac110002_160w_160h.jpg?imageView2/2/w/60/interlace/1/q/75/format/webp",
            "image": {
                "original_height": 160,
                "ident": "1176855e4b5111e7bc9d0242ac110002_160w_160h.jpg",
                "url_pattern": "https://i2.chuimg.com/1176855e4b5111e7bc9d0242ac110002_160w_160h.jpg?imageView2/1/w/{width}/h/{height}/q/75/format/{format}",
                "original_width": 160,
                "max_height": 4096,
                "max_width": 4096
            },
            "create_time": "2016-03-11 00:41:27",
            "nposts": "0",
            "equipment_related_info": {
                "is_show": true,
                "user_equipments": [

                ]
            },
            "birthday": "",
            "name": "玉面小肥猪",
            "n_total_recipe_collects": "",
            "nessays": "0",
            "nfollowed": "1",
            "ndishes": "1",
            "nfollow": "12",
            "n_offline_courses": "0",
            "n_follow": "12",
            "ncollects": "38",
            "current_location": "",
            "is_prime_avaliable": true,
            "desc": "",
            "gender": "男",
            "ncourses": "0",
            "tp_nickname": {
                "douban": "叫我许一",
                "wechat": "小许",
                "weibo": "叫我许世晨",
                "chustudio_wechat": "小许",
                "qzone": ""
            },
            "mail": "",
            "n_total_recipe_dishes": "",
            "n_followed": "1"
        }
    },
    "prime_portal": {
        "title": "超级会员",
        "button": {

        }
    }
}

$done({ body: JSON.stringify(obj) });
