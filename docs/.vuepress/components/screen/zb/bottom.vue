<template>
  <div class="bottom">
    <div class="left-content1 bottom-content">
      <div class="content-header">
        <img src="./images/icon_threat.png" alt="" />
        监测
      </div>
      <div class="content-row">
        <span>日志数据</span>
        <span>999</span>
      </div>
      <div class="content-row">
        <span>攻击告警</span>
        <span>999</span>
      </div>
    </div>
    <div class="left-content2 bottom-content">
      <div class="content-header">
        <img src="./images/icon_dispatch.png" alt="" />
        调度
      </div>
      <div class="content-row">
        <span>已发指令</span>
        <span>999</span>
      </div>
      <div class="content-row">
        <span>已发预案</span>
        <span>999</span>
      </div>
    </div>
    <div class="left-content main-content">
      <div class="main-content-title">最新指令</div>
      <div class="main-content-table">
        <div class="main-content-table-row">发萨斯阿萨大大</div>
        <div class="main-content-table-row">啊是打算大所多</div>
        <div class="main-content-table-row">啊实打实大</div>
      </div>
    </div>
    <div class="panel">
      <img class="bottom3" src="./images/bottom3.png" alt="" />
      <img class="bottom2" src="./images/bottom2.png" alt="" />
      <img class="bottom1" src="./images/bottom1.png" alt="" />
    </div>
    <div class="right-content main-content">
      <div class="main-content-title">最新通报</div>
      <div class="main-content-table">
        <div class="main-content-table-row">啊实打实大师</div>
        <div class="main-content-table-row">舒服点是的</div>
        <div class="main-content-table-row">访达阿萨德</div>
      </div>
    </div>
    <div class="right-content1 bottom-content">
      <div class="content-header">
        <img src="./images/icon_warn.png" alt="" />
        通报
      </div>
      <div class="content-row">
        <span>事件通报</span>
        <span>999</span>
      </div>
      <div class="content-row">
        <span>隐患通报</span>
        <span>999</span>
      </div>
    </div>
    <div class="right-content2 bottom-content">
      <div class="content-header">
        <img src="./images/icon_guard.png" alt="" />
        值守
      </div>
      <div class="content-row">
        <span>报平安</span>
        <span>999</span>
      </div>
      <div class="content-row">
        <span>报事件</span>
        <span>999</span>
      </div>
    </div>
    <div class="bottom-line"></div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.bottom {
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 180px;
  background-size: cover;
  font-size: 20px;
  background-image: url(./images/bottom_bg.png);
  .bottom-content {
    position: absolute;
    width: 226px;
    height: 100px;
    .content-header {
      font-family: "kuhei";
      display: flex;
      justify-content: center;
      align-items: center;
      color: #fff;
      background-image: url(./images/nav_bottom_left.png);
      background-size: 100% 100%;
      width: 100%;
      height: 30px;
      line-height: 30px;
      cursor: pointer;
      img {
        width: 20px;
        height: 20px;
        margin-right: 10px;
      }
    }
    .content-row {
      padding: 0 10px;
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin-top: 10px;
      font-size: 12px;
      & > span:nth-child(1) {
        color: #ffe3c8;
      }
      & > span:nth-child(2) {
        color: #fff;
      }
    }
  }
  .main-content {
    .main-content-title {
      font-family: "kuhei";
      color: #fff;
      padding-right: 20px;
      text-align: right;
      display: inline-block;
      width: 100%;
      text-shadow: 0 0 5px #ffb75c;
      letter-spacing: 1.82px;
      font-weight: 400;
      margin-bottom: 5px;
    }
    .main-content-table {
      div {
        height: 32px;
        line-height: 32px;
        font-size: 14px;
        letter-spacing: 1px;
        font-weight: 500;
      }
      & > div:nth-child(odd) {
        background-image: linear-gradient(
          270deg,
          rgba(201, 227, 255, 0) 0%,
          rgba(153, 195, 255, 0.3) 100%
        );
      }
      & > div:nth-child(even) {
        background-color: transparent;
      }
    }
  }
  .left-content1 {
    left: 49px;
    top: 58px;
    transform: rotateZ(-4deg);
  }
  .left-content2 {
    left: 307px;
    top: 48px;
    transform: rotateZ(-4deg);
  }
  .left-content {
    position: absolute;
    top: 30px;
    left: calc(50% - 400px);
    width: 232px;
    height: 120px;
    .main-content-table-row {
      text-align: right;
    }
  }
  .panel {
    position: absolute;
    top: -102px;
    left: calc(50% - 240px);
    width: 480px;
    height: 240px;
    display: flex;
    background-image: url(./images/panel.png);
    background-size: 100% 100%;
    img {
      position: absolute;
    }
    .bottom3 {
      width: 53px;
      height: 26px;
      top: 62px;
      left: calc(50% - 26px);
    }
    .bottom2 {
      width: 54px;
      height: 54px;
      top: 124px;
      left: 168px;
    }
    .bottom1 {
      width: 54px;
      height: 54px;
      top: 124px;
      right: 168px;
    }
  }
  .right-content {
    position: absolute;
    top: 30px;
    right: calc(50% - 400px);
    width: 232px;
    height: 120px;
    .main-content-title {
      text-align: left;
    }
  }
  .right-content1 {
    right: 307px;
    top: 48px;
    transform: rotateZ(4deg);
  }
  .right-content2 {
    right: 49px;
    top: 58px;
    transform: rotateZ(4deg);
  }

  .bottom-line {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 28px;
    background: url("./images/bottom_bg_line.png") no-repeat 100% 100%;
    pointer-events: none;
  }
}
</style>
