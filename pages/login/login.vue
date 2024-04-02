<template>
    <view class="content">
        <view class="box" :style='{ "padding": "48rpx 60rpx", "height": "90%" }'>
            <view>
                <div style="font-size: 28px; line-height: 54rpx; font-weight: 700;">欢迎登陆</div>
            </view>
            <view class="uni-form-item uni-column" style="margin-top: 60px;">
                <input v-model="username"
                    :style='{ "padding": "0 30rpx", "margin": "0", "borderColor": "rgba(0,0,0,.6)", "backgroundColor": "#fff", "color": "#333", "textAlign": "left", "borderRadius": "20rpx 20rpx 0 0", "borderWidth": "0", "fontSize": "28rpx", "borderStyle": "solid", "height": "60rpx" }'
                    type="text" class="uni-input" name="" placeholder="请输入账号" />
            </view>
            <view class="uni-form-item uni-column">
                <input v-model="password"
                    :style='{ "padding": "0 30rpx", "margin": "0", "borderColor": "rgba(0,0,0,.6)", "backgroundColor": "#fff", "color": "#333", "textAlign": "left", "borderRadius": "20rpx 20rpx 0 0", "borderWidth": "0", "fontSize": "28rpx", "borderStyle": "solid", "height": "60rpx" }'
                    type="password" class="uni-input" name="" placeholder="请输入密码" />
            </view>

            <view class="uni-form-item uni-column" v-if="roleNum > 1">
                <picker @change="optionsChange" :value="index" :range="options">
                    <view class="uni-picker-type"
                        :style='{ "lineHeight": "80rpx", "fontSize": "28rpx", "color": "rgba(84, 170, 111, 1)", "textAlign": "center" }'>
                        {{ options[index] }}</view>
                </picker>
            </view>
            <view style="margin-top: 20rpx;">
                <button @tap="onLoginTap" type="primary"
                    :style='{ "padding": "0", "margin": "0", "backgroundColor": "#3e98f7", "borderRadius": "40rpx", "color": "rgba(255, 255, 255, 1)", "borderWidth": "2rpx", "width": "100%", "fontSize": "32rpx", "borderStyle": "solid", "height": "88rpx" }'>登录</button>
            </view>
            <view class="links" style="padding: 10rpx 0rpx 10rpx;border-radius: 40rpx; background-color: #76b5f5;">
                <view class="link-highlight" @tap="onRegisterTap('yonghu')"
                    :style='{ "marginLeft": "5%", "color": "#fff", "fontSize": "24rpx" }'>注册用户</view>
                <view>|</view>
                <view @tap="onForgetTap" :style='{ "color": "#fff", "fontSize": "24rpx" }'>忘记密码</view>
            </view>
        </view>
    </view>
</template>

<script>
import menu from '@/utils/menu'

export default {
    data() {
        return {
            username: '',
            password: '',
            codes: [{
                num: 1,
                color: '#000',
                rotate: '10deg',
                size: '16px'
            }, {
                num: 2,
                color: '#000',
                rotate: '10deg',
                size: '16px'
            }, {
                num: 3,
                color: '#000',
                rotate: '10deg',
                size: '16px'
            }, {
                num: 4,
                color: '#000',
                rotate: '10deg',
                size: '16px'
            }],
            options: [
                '请选择登录用户类型'
            ],
            optionsValues: [
                '',
                'yonghu',
            ],
            index: 0,
            roleNum: 0
        }
    },
    onLoad() {
        let options = ['请选择登录用户类型'];
        let menus = menu.list();
        this.menuList = menus;
        for (let i = 0; i < this.menuList.length; i++) {
            if (this.menuList[i].hasFrontLogin == '是') {
                options.push(this.menuList[i].roleName);
                this.roleNum++;
            }
        }
        if (this.roleNum == 1) {
            this.index = 1;
        }
        this.options = options;
        this.randomString(4)
        this.styleChange()
    },
    methods: {

        styleChange() {
            this.$nextTick(() => {
                // document.querySelectorAll('.uni-yaoxianStyle .uni-yaoxianStyle-yaoxianStyle').forEach(el=>{
                //   el.style.backgroundColor = this.loginFrom.content.yaoxianStyle.backgroundColor
                // })
            })
        },
        onRegisterTap(tableName) {
            uni.setStorageSync("loginTable", tableName);
            this.$utils.jump('../register/register')
        },
        onForgetTap() {
            this.$utils.jump('../forget/forget')
        },

        async onLoginTap() {
            if (!this.optionsValues[this.index]) {
                this.$utils.msg("请选择登陆人类型")
                return
            }
            if (1 == 2 && this.inputCode != this.validateCode) {
                this.$utils.msg("请输入正确的验证码")
                return
            }
            let res = await this.$api.login(`${this.optionsValues[this.index]}`, {
                username: this.username,
                password: this.password
            });
            uni.setStorageSync("token", res.token);
            uni.setStorageSync("nickname", this.username);
            uni.setStorageSync("nowTable", `${this.optionsValues[this.index]}`);
            res = await this.$api.session(`${this.optionsValues[this.index]}`);
            uni.setStorageSync("userid", res.data.id);
            if (res.data.vip) {
                uni.setStorageSync("vip", res.data.vip);
            }
            uni.setStorageSync("role", `${this.options[this.index]}`);
            this.$utils.tab("../index/index");
        },

        optionsChange(e) {
            this.index = e.target.value
        }
    }
}
</script>
<style lang="scss" scoped>
$color-primary: #b49950;

.content {
    padding: 0 50upx;
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: calc(100vh - 44px);
    box-sizing: border-box;
}

.content:after {
    position: fixed;
    top: 0;
    right: 0;
    left: 0;
    bottom: 0;
    content: '';
    background-attachment: fixed;
    background-size: cover;
    background-position: center;
}

.logo {
    text-align: center;

    image {
        height: 200upx;
        width: 200upx;
        margin: 0 0 60upx;
    }
}

.uni-form-item {
    margin-bottom: 40upx;
    padding: 0;

    .uni-input {
        font-size: 30upx;
        padding: 7px 0;
    }
}

button[type="primary"] {
    background-color: $color-primary;
    border-radius: 0;
    font-size: 34upx;
    margin-top: 60upx;
}

.links {
    text-align: center;
    margin-top: 40upx;
    font-size: 26upx;
    color: #999;

    view {
        display: inline-block;
        vertical-align: top;
        margin: 0 10upx;
    }

    .link-highlight {
        margin: 0;
        color: $color-primary
    }
}
</style>