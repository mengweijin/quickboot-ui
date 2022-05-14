<template>
  <div>
    <n-menu v-model:value="activeKey" mode="horizontal" :options="menuOptions" />
  </div>
</template>

<script setup>
import { defineComponent, h, ref } from "vue";
import { NIcon } from "naive-ui";
import {
  BookOutline as BookIcon,
  PersonOutline as PersonIcon,
  WineOutline as WineIcon
} from "@vicons/ionicons5";

function renderIcon(icon) {
  return () => h(NIcon, null, { default: () => h(icon) });
}

let activeKey = ref(null)

const menuOptions = [
  {
    label: () => h("img", {
      src: "/logo.png",
      style: "width: auto; height: auto; max-width: 100%; max-height: 42px; margin-top: 10px;"
    }),
    key: "logo"
  },
  {
    label: "哈哈哈",
    key: "hahaha",
    icon: renderIcon(BookIcon),
    disabled: false
  },
  {
    label: () => h("a", {
      href: "https://baike.baidu.com/item/%E4%B8%94%E5%90%AC%E9%A3%8E%E5%90%9F",
      target: "_blank",
      rel: "noopenner noreferrer"
    }, "且听风吟"),
    key: "hear-the-wind-sing",
    icon: renderIcon(BookIcon)
  },
  {
    label: "寻羊冒险记",
    key: "a-wild-sheep-chase",
    icon: renderIcon(BookIcon),
    disabled: true
  },
  {
    label: "舞，舞，舞",
    key: "dance-dance-dance",
    icon: renderIcon(BookIcon),
    children: [
      {
        type: "group",
        label: "人物",
        key: "people",
        children: [
          {
            label: "叙事者",
            key: "narrator",
            icon: renderIcon(PersonIcon)
          },
          {
            label: "羊男",
            key: "sheep-man",
            icon: renderIcon(PersonIcon)
          }
        ]
      },
      {
        label: "饮品",
        key: "beverage",
        icon: renderIcon(WineIcon),
        children: [
          {
            label: "威士忌",
            key: "whisky"
          }
        ]
      },
    ]
  }
];
</script>

<script>
export default {
  name: 'Header'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.n-menu {
  width: 100%;
  /* --n-item-height: 60px !important; */
  --n-item-icon-color: white !important;
  --n-item-icon-color-active: #5FB878 !important;
  --n-item-text-color: white !important;
  --n-item-text-color-active: #5FB878 !important;
  background-color: #393D49;
}

img{
    width: auto;
    height: auto;
    max-width: 100%;
    max-height: 100%;
}
</style>