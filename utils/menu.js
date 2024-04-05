const menu = {
    list() {
        return [
            {
                "backMenu": [
                ],
                "frontMenu": [
                ],
                "hasBackLogin": "是",
                "hasBackRegister": "否",
                "hasFrontLogin": "否",
                "hasFrontRegister": "否",
                "roleName": "管理员",
                "tableName": "users"
            },
            {
                "backMenu": [
                    {
                        "child": [
                            {
                                "appFrontIcon": "cuIcon-addressbook",
                                "buttons": [
                                    "查看"
                                ],
                                "menu": "收货地址",
                                "menuJump": "列表",
                                "tableName": "address"
                            }
                        ],
                        "menu": "收货地址"
                    }
                    ,
                    {
                        "child": [
                            {
                                "appFrontIcon": "cuIcon-cart",
                                "buttons": [
                                    "查看",
                                    "删除"
                                ],
                                "menu": "购物车",
                                "menuJump": "列表",
                                "tableName": "cart"
                            }
                        ],
                        "menu": "购物车"
                    }
                    ,
                    {
                        "child": [
                            {
                                "appFrontIcon": "cuIcon-message",
                                "buttons": [
                                    "查看"
                                ],
                                "menu": "客服聊天",
                                "menuJump": "列表",
                                "tableName": "chat"
                            }
                        ],
                        "menu": "客服聊天"
                    }
                    ,
                    // {
                    //     "child": [
                    //         {
                    //             "appFrontIcon": "cuIcon-form",
                    //             "buttons": [
                    //                 "查看"
                    //             ],
                    //             "menu": "公告信息",
                    //             "menuJump": "列表",
                    //             "tableName": "gonggao"
                    //         }
                    //     ],
                    //     "menu": "公告信息"
                    // }
                    // ,
                    // {
                    //     "child": [
                    //         {
                    //             "appFrontIcon": "cuIcon-form",
                    //             "buttons": [
                    //                 "查看"
                    //             ],
                    //             "menu": "鲜花",
                    //             "menuJump": "列表",
                    //             "tableName": "xianhua"
                    //         }
                    //     ],
                    //     "menu": "鲜花"
                    // }
                    // ,
                    {
                        "child": [
                            {
                                "appFrontIcon": "cuIcon-favor",
                                "buttons": [
                                    "查看",
                                    "删除"
                                ],
                                "menu": "鲜花收藏",
                                "menuJump": "列表",
                                "tableName": "xianhuaCollection"
                            }
                        ],
                        "menu": "鲜花收藏"
                    }
                    ,
                    {
                        "child": [
                            {
                                "appFrontIcon": "cuIcon-evaluate",
                                "buttons": [
                                    "查看",
                                    "删除"
                                ],
                                "menu": "鲜花评价",
                                "menuJump": "列表",
                                "tableName": "xianhuaCommentback"
                            }
                        ],
                        "menu": "鲜花评价"
                    }
                    ,
                    {
                        "child": [
                            {
                                "appFrontIcon": "cuIcon-order",
                                "buttons": [
                                    "查看"
                                ],
                                "menu": "鲜花订单",
                                "menuJump": "列表",
                                "tableName": "xianhuaOrder"
                            }
                        ],
                        "menu": "鲜花订单"
                    }
                ],
                "frontMenu": [
                ],
                "hasBackLogin": "是",
                "hasBackRegister": "否",
                "hasFrontLogin": "是",
                "hasFrontRegister": "是",
                "roleName": "用户",
                "tableName": "yonghu"
            }
        ]

    }
}



export default menu;
