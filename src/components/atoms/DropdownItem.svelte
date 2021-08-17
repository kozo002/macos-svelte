<script lang="ts">
</script>

<button class="a-dropdownItem">
  <slot />
</button>

<style lang="scss">
  .a-dropdownItem {
    display: block;
    margin: 0;
    padding: 5px 10px;
    width: 100%;
    background-color: transparent;
    border-radius: 4px;
    border: 0;
    text-align: left;
    font-size: 13px;

    &:hover {
      background-color: var(--color-blue);
      color: var(--color-white);
    }
  }
</style>
