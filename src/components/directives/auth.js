import { check } from '../../utils/auth'
//权限指令：不能动态更改权限，只能第一次控制，因为被remove了
function install(Vue,options = {}) {
    Vue.directive(options.name || 'auth',{
        inserted(el, binding) {
            if ( !check(binding.value)) {
                el.parentNode && el.parentNode.removeChild(el);
            }
        }
    });
}
export default { install };