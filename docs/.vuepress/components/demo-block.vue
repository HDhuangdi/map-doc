<template>
  <div
    class="demo-block"
    :class="[blockClass, { hover: hovering }]"
    @mouseenter="hovering = true"
    @mouseleave="hovering = false"
  >
    <div class="source-bg" v-if="isMounted">
      <slot name="source"></slot>
    </div>
    <div class="meta" ref="meta">
      <div class="description" v-if="$slots.default">
        <slot></slot>
      </div>
      <div class="sourceCode">
        <slot name="sourceCode"></slot>
      </div>
    </div>
    <div
      class="demo-block-control"
      ref="control"
      @click="isExpanded = !isExpanded"
    >
      <span>{{ controlText }}</span>
    </div>
  </div>
</template>

<script type="text/babel">
export default {
  data() {
    return {
      isMounted: false,
      hovering: false,
      isExpanded: false,
      fixedControl: false,
      scrollParent: null,
      langConfig: {
        "hide-text": "隐藏代码",
        "show-text": "显示代码",
      },
    };
  },

  props: {
    jsfiddle: Object,
    default() {
      return {};
    },
  },

  methods: {
    scrollHandler() {
      const { top, bottom, left } = this.$refs.meta.getBoundingClientRect();
      this.fixedControl =
        bottom > document.documentElement.clientHeight &&
        top + 44 <= document.documentElement.clientHeight;
    },

    removeScrollHandler() {
      this.scrollParent &&
        this.scrollParent.removeEventListener("scroll", this.scrollHandler);
    },
  },

  computed: {
    lang() {
      return this.$route.path.split("/")[1];
    },

    blockClass() {
      return `demo-${this.lang} demo-${this.$router.currentRoute.path
        .split("/")
        .pop()}`;
    },

    iconClass() {
      return this.isExpanded ? "el-icon-caret-top" : "el-icon-caret-bottom";
    },

    controlText() {
      return this.isExpanded
        ? this.langConfig["hide-text"]
        : this.langConfig["show-text"];
    },

    codeArea() {
      return this.$el.getElementsByClassName("meta")[0];
    },

    codeAreaHeight() {
      if (this.$el.getElementsByClassName("description").length > 0) {
        return (
          this.$el.getElementsByClassName("description")[0].clientHeight +
          this.$el.getElementsByClassName("sourceCode")[0].clientHeight +
          20
        );
      }
      return this.$el.getElementsByClassName("sourceCode")[0].clientHeight;
    },
  },

  watch: {
    isExpanded(val) {
      this.codeArea.style.height = val ? `${this.codeAreaHeight + 1}px` : "0";
      if (!val) {
        this.fixedControl = false;
        this.$refs.control.style.left = "0";
        this.removeScrollHandler();
        return;
      }
      setTimeout(() => {
        this.scrollParent = document.querySelector(
          ".page-component__scroll > .el-scrollbar__wrap"
        );
        this.scrollParent &&
          this.scrollParent.addEventListener("scroll", this.scrollHandler);
        this.scrollHandler();
      }, 200);
    },
  },

  mounted() {
    this.$nextTick(() => {
      let sourceCode = this.$el.getElementsByClassName("sourceCode")[0];
      if (this.$el.getElementsByClassName("description").length === 0) {
        sourceCode.style.width = "100%";
        sourceCode.borderRight = "none";
      }
      this.isMounted = true;
    });
  },

  beforeDestroy() {
    this.removeScrollHandler();
  },
};
</script>

<style lang="less">
.demo-block {
  margin-top: 1.5rem;
  border-radius: 5px;
  transition: 0.2s;
  margin-bottom: 1.5rem;

  code {
    font-family: Menlo, Monaco, Consolas, Courier, monospace;
  }

  .demo-button {
    float: right;
  }

  .source-bg {
    background-color: #363b46;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  }

  .source {
    padding: 24px;
  }

  .meta {
    background-color: rgb(58, 65, 77);
    border-top: solid 1px rgb(51, 58, 69);
    overflow: hidden;
    height: 0;
    transition: height 0.2s;
  }

  .description {
    padding: 20px;
    box-sizing: border-box;
    border: solid 1px #4c5362;
    border-radius: 3px;
    font-size: 14px;
    line-height: 22px;
    color: rgb(173, 186, 199);
    word-break: break-word;
    margin: 10px;
    background-color: #4c5362;

    p {
      margin: 0;
      line-height: 26px;
    }

    code {
      background-color: #363b46;
      margin: 0 4px;
      display: inline-block;
      padding: 1px 5px;
      font-size: 12px;
      border-radius: 3px;
      height: 18px;
      line-height: 18px;
    }
  }

  .sourceCode {
    pre {
      margin: 0;
    }

    code.hljs {
      margin: 0;
      border: none;
      max-height: none;
      border-radius: 0;
      line-height: 1.8;
      color: black;
      &::before {
        content: none;
      }
    }
  }

  .demo-block-control {
    border-top: solid 1px #4c5362;
    height: 44px;
    box-sizing: border-box;
    background-color: #4c5362;
    border-bottom-left-radius: 4px;
    border-bottom-right-radius: 4px;
    text-align: center;
    margin-top: -1px;
    color: #d3dce6;
    cursor: pointer;
    position: relative;

    &.is-fixed {
      position: fixed;
      bottom: 0;
      width: 868px;
    }

    i {
      font-size: 16px;
      line-height: 44px;
      transition: 0.3s;
      &.hovering {
        transform: translateX(-40px);
      }
    }

    > span {
      position: absolute;
      transform: translateX(-30px);
      font-size: 14px;
      line-height: 44px;
      transition: 0.3s;
      display: inline-block;
    }

    &:hover {
      color: #adbac7;
      background-color: #6f798e;
    }

    & .text-slide-enter,
    & .text-slide-leave-active {
      opacity: 0;
      transform: translateX(10px);
    }

    .control-button {
      line-height: 26px;
      position: absolute;
      top: 0;
      right: 0;
      font-size: 14px;
      padding-left: 5px;
      padding-right: 25px;
    }
  }
}
</style>
