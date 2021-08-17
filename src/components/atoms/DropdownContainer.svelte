<script lang="ts">
</script>

<div class="a-dropdownContainer">
  <slot />
</div>

<style lang="scss">
  .a-dropdownContainer {
    position: absolute;
    top: calc(100% + 2px);
    left: 0;
    padding: 5px;
    min-width: 247px;
    background-color: rgba(255, 255, 255, .5);
    border-radius: 5px;
    backdrop-filter: blur(4px);
    box-shadow: 0 2px 10px 0 rgba(0, 0, 0, .1);
  }
</style>
