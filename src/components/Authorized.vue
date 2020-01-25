
<script>
import {check} from '../utils/auth'
export default {
//组件式权限：比较灵活，但写法不太方便，需要写组件嵌套
//由于template 的函数式组件无this，所以用render

    functional: true,
    props: {
        authority: {
            type: Array,
            required: true
        }
    },
    render(h,context) {
        const {props, scopedSlots} = context;
        return check(props.authority) ? scopedSlots.default() : null;
    }

}
</script>