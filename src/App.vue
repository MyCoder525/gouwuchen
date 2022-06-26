<template>
  <div class="box">
    <MyHeader title="购物车案列" background="pink" color="#000"></MyHeader>
    <MyGoods></MyGoods>
    <MyFooter></MyFooter>
  </div>
</template>

<script>
import MyHeader from "@/components/MyHeader";
import MyGoods from "@/components/MyGoods";
import MyFooter from "@/components/MyFooter";
export default {
  components: {
    MyHeader,
    MyGoods,
    MyFooter,
  },
};
</script>

<style scoped>
.box {
  padding: 50px 0;
}
</style>
