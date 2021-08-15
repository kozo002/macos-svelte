<script lang="ts">
  export let backgroundImageUrl: string
</script>

<div class="o-desktop" style={`background-image: url(${backgroundImageUrl});`}>
  <slot />
</div>

<style lang="scss">
  .o-desktop {
    position: relative;
    width: 100%;
    height: 100%;
    // background-image: url('');
    background-size: cover;
    background-position: center center;
    background-repeat: no-repeat;
  }
</style>
