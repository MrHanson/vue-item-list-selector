<template>
  <div>
    value: {{ value }}
    <div class="wrap">
      <item-list-selector
        v-model="value"
        :options-data="optionsData"
        label-key="label"
        value-key="value"
        style="width:320px;"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      value: [3, 5],
      optionsData: [
        { label: 'label-1', value: 1 },
        { label: 'label-2', value: 2 },
        { label: 'label-3', value: 3 },
        { label: 'label-4', value: 4 },
        { label: 'label-5', value: 5 },
        { label: 'label-6', value: 6 },
        { label: 'label-7', value: 7 },
        { label: 'label-8', value: 8 }
      ]
    }
  }
}
</script>
