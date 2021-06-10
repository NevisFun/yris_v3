<template>
  <div id="statusbar">
    <div id="tip">欢迎使用本系统☺☺</div>
    <div id="summary">计数：35 求和：35544.04</div>
    <div id="state">Copyright © 2019 Yongze</div>
  </div>
</template>

<script type="text/javascript">
export default {
  name: "statusbar",
};
</script>

<style lang="scss" scoped>
@import "../../css/variable.scss";
$heightStatusbar: 40px;

#statusbar {
  height: $heightStatusbar;
  line-height: $heightStatusbar;
  display: grid;
  grid-template-columns: auto 240px 240px;

  #tip {
    height: $heightStatusbar;
    padding-left: 16px;
    color: $textColorMinor;
    white-space: nowrap;
    text-overflow: ellipsis;
  }

  #summary {
    $margin: 4px;
    $height: $heightStatusbar - $margin * 2;

    box-sizing: content-box;
    height: $height;
    line-height: $height;
    text-align: center;
    margin: $margin 0 $margin 0;
    border-left: 1px solid rgba($borderColorLight, 0.5);
    border-right: 1px solid rgba($borderColorLight, 0.5);
    @extend .minorText;
  }

  #state {
    height: $heightStatusbar;
    padding: 0 16px 0 16px;
    text-align: center;
    font-weight: 500;
    color: $colorTheme;
  }
}
</style>
