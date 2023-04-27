<template>
  <div class="stat flex-box">
  </div>
</template>

<style lang="less" scoped>
.flex-box {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.stat {
  width: 950px;
  height: 200px;
  position: absolute;
  z-index: 3;
  top: 20%;
  left: 50%;
  background-image: linear-gradient(rgba(32, 150, 190, 0.3) 0%, rgba(26, 150, 194, 0.2) 50%, rgba(19, 150, 198, 0.1) 100%);
  transform: translate(-50%, -50%)
}
</style>
