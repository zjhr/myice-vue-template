<template>
  <div class="scroll-container" ref="scrollContainer" @wheel.prevent="handleScroll">
    <div class="scroll-wrapper" ref="scrollWrapper" :style="{top: top + 'px'}">
      <slot></slot>
    </div>
  </div>
</template>

<script>
const delta = 15;

export default {
  name: "ScrollBar",
  data() {
    return {
      top:0
    }
  },
  methods: {
    upFun(){
      this.top=0;
    },
    handleScroll(e) {
      const eventDelta = e.wheelDelta || -e.deltaY * 3;
      const $container = this.$refs.scrollContainer;
      const $containerHeight = $container.offsetHeight;
      const $wrapper = this.$refs.scrollWrapper;
      const $wrapperHeight = $wrapper.offsetHeight;
      if (eventDelta > 0) {
        this.top = Math.min(0, this.top + eventDelta);
      } else if ($containerHeight - delta < $wrapperHeight) {
        if (this.top < -($wrapperHeight - $containerHeight + delta)) {
          this.top = this.top;
        } else {
          this.top = Math.max(
            this.top + eventDelta,
            $containerHeight - $wrapperHeight - delta
          );
        }
      } else {
        this.top = 0;
      }
    },
    moveToTarget($target) {
      const $container = this.$refs.scrollContainer;
      const $containerHeight = $container.offsetHeight;
      const $targetTop = $target.offsetTop;
      const $targetHeight = $target.offsetHeight;

      if ($targetTop < -this.top) {
        // tag in the left
        this.top = -$targetTop + delta;
      } else if (
        $targetTop + delta > -this.top &&
        $targetTop + $targetTop < -this.top + $containerHeight - delta
      ) {
        // tag in the current view
        // eslint-disable-line
      } else {
        // tag in the right
        this.top = -($targetTop - ($containerHeight - $targetTop) + delta);
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.scroll-container {
  width: 100%;
  height: 100%;
  background-color: #294052;
  .scroll-wrapper {
    position: absolute;
    width: 100%;
  }
}
</style>
