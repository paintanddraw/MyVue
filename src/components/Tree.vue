<template>
  <div id="component-a">
    <!-- 一个简单的树形组件 -->
    <tree :treeData="treeData"></tree>
  </div>
</template>
<script>
    export default {
        name: 'component-a',
        data() {
            return {
                treeData: [{
                    title: '树形标题一',
                    expand: true,
                    children:
                        [{
                            title: '子标题1',
                            expand: true
                        },
                            {
                                title: '子标题2',
                                expand: true,
                                children: [{
                                    title: '子标题2.1',
                                    expand: true
                                },
                                    {
                                        title: '子标题2.2',
                                        expand: true
                                    },
                                    {
                                        title: '子标题2.3',
                                        expand: true
                                    }]
                            }]
                }]
            }
        },
        components:  {
            "tree": {
                      name: "tree",
                      template: `<ul>
                                     <li v-for="item in treeData">
                                     <span>{{item.title}}</span>
                                     <tree v-if="item.children" :treeData="item.children"></tree >
                                     </li>
                                  </ul>`,
                      props: ['treeData']
            }
        }
    }
</script>
<!--<style lang="less" scoped>-->
<!--</style>-->
