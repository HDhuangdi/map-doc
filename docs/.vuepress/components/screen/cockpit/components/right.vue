<template>
  <div class="right">
    <div class="header">
      供水
    </div>
  </div>
</template>

<style lang="less" scoped>
.right {
  width: 400px;
  height: 90%;
  position: absolute;
  z-index: 3;
  top: 50%;
  right: 30px;
  background-image: linear-gradient(rgba(32, 150, 190, 0.3) 0%, rgba(26, 150, 194, 0.2) 50%, rgba(19, 150, 198, 0.1) 100%);
  transform: translate(0, -50%);
  .header {
    background-image: url(../assets/images/chunk-header.png);
    height: 37px;
    background-repeat: no-repeat;
    background-size: 100% 100%;
    font-family: 优设标题黑;
    font-size: 22px;
    color: #fff;
    line-height: 37px;
    padding-left: 57px;
  }
}
</style>
