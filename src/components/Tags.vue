<template>
  <ul class="tags" :class="classPrefix+'-tab'">
    <li class="tags-item"
        v-for="(bar, index) in bars" :key="index"
        :class="[classPrefix+'-tab-item', {'selected': i === index}]"
        @click="select(index)"
    >
      {{bar}}
    </li>
  </ul>
</template>

<script>
export default {
  name: 'Tags',
  props: {
    bars: Array,
    classPrefix: String
  },
  data() {
    return {
      i: 0
    }
  },
  methods: {
    select(i) {
      this.i = i;
      this.$emit('tagsIndex', i)
    }
  }
}
</script>

<style lang="scss" scoped>
.tags {
  display: flex;
  border-bottom: #efefef 1px solid;
  color: #000;
  font-size: 16px;
  font-weight: bold;

  &-item {
    padding-bottom: 5px;
    margin-right: 20px;
  }

  //&-item:first-child {
  //  margin: 0;
  //}
  .selected {
    border-bottom: 2px solid #f33;
    color: #f33;
  }
}
</style>
