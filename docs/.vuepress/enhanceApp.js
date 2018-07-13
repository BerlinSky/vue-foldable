// Don't need import it since it has been exported by its
// wrapper component.

import VueFoldable from 'vue-foldable'
// import 'vue-foldable/dist/vue-foldable.css'

import VueFoldableCsdn from '@vue-foldable/csdn'
import VueFoldableBaidu from '@vue-foldable/baidu'

import '@vue-foldable/csdn/dist/csdn.css'
import '@vue-foldable/baidu/dist/baidu.css'

export default ({
  Vue, // the version of Vue being used in the VuePress app
  options, // the options for the root Vue instance
  router, // the router instance for the app
  siteData // site metadata
}) => {
  Vue.component('foldable', VueFoldable)
  Vue.component('csdn-foldable', VueFoldableCsdn)
  Vue.component('baidu-foldable', VueFoldableBaidu)
  // ...apply enhancements to the app
}
