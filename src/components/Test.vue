<template>
    
</template>

<script>
import { apiAddress } from '@/request/api';// 导入我们的api接口
export default {
    name: 'Address',
    created () {
        this.onLoad();
    },
    methods: {
        // 获取数据
        onLoad() {
            // 调用api接口，并且提供了两个参数
            apiAddress({
                type: 0,
                sort: 1
            }).then(res => {
                // 获取数据成功后的其他操作
            })
        }
    }
}
</script>

// scoped 样式只在当前模板有效
<style scoped>

</style>