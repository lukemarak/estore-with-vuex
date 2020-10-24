<template>
  <div class="container">
    <div class="row">
      <div class="col">

        <div v-for="cat in categoryList" :key="cat">
          <input type="checkbox" :id="cat" :value="cat" v-model="categories">
          <label :for="cat">{{cat}}</label>
        </div>
        <br>
        <span>You have chosen: {{ categories }}</span>

      </div>
      <div class="col">
        <strong>Items in chosen category(s)</strong>

        <ul>
          <li v-for="item in selectedItems" :key="item"> category: {{item.category}} | name: {{item.name}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'Checkbox',
    data() {
      return {
        categoryList: ['adidas', 'jockey', 'pan-america'],
        categories: [],
        items: this.$store.getters.products
      };
    },
    computed: {
      selectedItems: function () {
        return this.items.filter(function (item) {
          return this.categories.includes(item.brand);
        }, this);
      },
    }
  };
</script>