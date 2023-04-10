<template>
  <div class="left">
    <ul>
      <li>
        <img src="./images/icon_probe_equip.png" class="icon" />
        <div class="content">
          <span>安保单位</span>
          <span>1/1000</span>
        </div>
      </li>
      <li>
        <img src="./images/icon_probe_equip.png" class="icon" />
        <div class="content">
          <span>安保系统</span>
          <span>1/1000</span>
        </div>
      </li>
      <li>
        <img src="./images/icon_probe_equip.png" class="icon" />
        <div class="content">
          <span>安保人员</span>
          <span>0</span>
        </div>
      </li>
      <li>
        <img src="./images/icon_probe_equip.png" class="icon" />
        <div class="content">
          <span>支撑人员</span>
          <span>0</span>
        </div>
      </li>
      <li>
        <img src="./images/icon_probe_equip.png" class="icon" />
        <div class="content">
          <span>驻点小组</span>
          <span>0</span>
        </div>
      </li>
      <li>
        <img src="./images/icon_probe_equip.png" class="icon" />
        <div class="content">
          <span>探针设备</span>
          <span>1/1000</span>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {};
</script>

<style lang="less" scoped>
.left {
  width: 180px;
  height: 450px;
  position: absolute;
  left: 55px;
  top: 239px;
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex: 1;
    li {
      display: flex;
      .content {
        display: flex;
        flex-direction: column;
        margin-left: 10px;
        span:first-child {
          font-size: 16px;
          color: #fff;
          overflow: hidden;
          text-overflow: ellipsis;
          word-wrap: normal;
          white-space: nowrap;
          text-shadow: 0 2px 4px #ffb75c;
          font-weight: 500;
          letter-spacing: 1px;
        }
        span:last-child {
          font-size: 28px;
          font-family: "number";
          color: #ffa52e;
          line-height: 32px;
        }
      }
    }
  }
}
</style>
