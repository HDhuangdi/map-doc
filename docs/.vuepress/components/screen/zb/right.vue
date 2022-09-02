<template>
  <div class="right">
    <div class="container">
      <div class="header">
        <div class="header-left">
          <div class="line"></div>
          <div class="dot"></div>
        </div>
        <div class="header-mid">网络安保</div>
        <div class="header-right">
          <div class="dot"></div>
          <div class="line"></div>
        </div>
      </div>
      <div class="content" style="height: 250px">
        <img src="./images/empty.png" alt="" />
        <span>当前无信息</span>
      </div>
    </div>
    <div class="container">
      <div class="header">
        <div class="header-left">
          <div class="line"></div>
          <div class="dot"></div>
        </div>
        <div class="header-mid">每日值班</div>
        <div class="header-right">
          <div class="dot"></div>
          <div class="line"></div>
        </div>
      </div>
      <div class="content"></div>
    </div>
    <div class="container">
      <div class="header">
        <div class="header-left">
          <div class="line"></div>
          <div class="dot"></div>
        </div>
        <div class="header-mid">驻点上报</div>
        <div class="header-right">
          <div class="dot"></div>
          <div class="line"></div>
        </div>
      </div>
      <div class="content" style="height: 250px">
        <img src="./images/empty.png" alt="" />
        <span>当前无信息</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.right {
  width: 360px;
  position: absolute;
  right: 55px;
  top: 122px;
  .container {
    margin-bottom: 15px;
    .header {
      width: 100%;
      height: 36px;
      background: rgba(60, 79, 106, 0.56);
      display: flex;
      align-items: center;
      justify-content: space-between;
      .line {
        margin-left: 16px;
        width: 80px;
        height: 2px;
        background: linear-gradient(to left, #ffb75c, transparent);
      }
      .header-right .line {
        margin-left: 5px;
        background: linear-gradient(to right, #ffb75c, transparent);
      }
      .header-right .dot {
        margin-left: 0;
      }
      .dot {
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background: #ffb75c;
        margin-left: 5px;
      }
      .header-left,
      .header-right {
        display: flex;
        align-items: center;
      }
      .header-mid {
        color: #ffb75c;
        font-size: 20px;
      }
    }
    .content {
      min-height: 120px;
      background-color: rgba(0, 0, 0, 0.6);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
    }
  }
}
</style>
