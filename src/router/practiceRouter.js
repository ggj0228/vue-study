import TestVue from "@/components/practice/0.TestVue.vue"
import Modeling from "@/components/practice/1.ModelingComponent.vue"
import ConditionalComponent from "@/components/practice/2.ConditionalComponent.vue"
import HookComponent from "@/components/practice/3.HookComponent.vue"
import VuetifyComponent from "@/components/practice/4.VuetifyComponent.vue"

export const practiceRouter = [
     {
            path:"/practice/test",
            name: "TestVue",
            component: TestVue
        },
        {   
            path: "/practice/modeling",
            name: "Modeling",
            component: Modeling
        },
        {
            path: "/practice/conditional",
            name: "ConditionalComponent",
            component: ConditionalComponent
        },
        {
            path: "/practice/hook",
            name: "HookComponent",
            component: HookComponent
        },
        {
            path:"/practice/vuetify",
            name: "VuetifyComponent",
            component: VuetifyComponent
        }
]