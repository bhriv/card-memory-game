<template>
  <section>
    <!-- {{ getMutationValueFromStore }} -->
  </section>

</template>

<style lang="scss" scoped>
</style>

<script>
import store from '@/store';

export default {
  name: "templateNAME",
  props: [""],
  mounted () {
    console.log('templateNAME mounted now');
  },
  methods: {
    // myFunction: function(){
    //   console.log('myFunction called: ')
    // }
  },
  computed: { 
    // retrieve current data state 
    // getMutationValueFromStore () { // is computation is called by {{ getMutationValueFromStore }} in the template
    //   return store.state.data_value_in_store
    // },
  },
}
</script>


