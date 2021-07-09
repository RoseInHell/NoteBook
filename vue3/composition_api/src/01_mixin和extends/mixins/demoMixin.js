export const demoMixin = {
  data() {
    return {
      message: 'hello demoMixin'
    }
  },
  methods: {
    foo() {
      console.log('demo mixin foo');
    }
  },
  created() {
    console.log('execute demo mixin')
  }
}