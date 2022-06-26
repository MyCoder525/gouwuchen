<template>
  <div class="box">
    <MyHeader title="购物车案列" background="pink" color="#000"></MyHeader>
    <MyGoods
      v-for="item in goodsList"
      :key="item.goods_id"
      :goods="item"
    ></MyGoods>
    <MyFooter :goodsList="goodsList"></MyFooter>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader";
import MyGoods from "@/components/MyGoods";
import MyFooter from "@/components/MyFooter";
import axios from "axios";
export default {
  data() {
    return {
      goodsList: [],
    };
  },
  components: {
    MyHeader,
    MyGoods,
    MyFooter,
  },
  created() {
    this.getGoods();
  },
  methods: {
    async getGoods() {
      const res = await axios({ url: "/api/cart " });
      this.goodsList = res.data.list;
    },
  },
};
</script>

<style scoped>
.box {
  padding: 50px 0;
}
</style>
