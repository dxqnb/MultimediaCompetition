import {onMounted} from "vue";
import {Animation, AnimationBuilder, createAnimation} from "@ionic/vue";

let animation: AnimationBuilder = (baseEl, opts) => {
    console.log(opts)
    return createAnimation()
        .addElement(baseEl.$el)
        .fromTo('opacity', '0', '1');
}

export default animation