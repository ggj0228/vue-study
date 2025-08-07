import TestVue from "@/components/0.TestVue.vue"
import Modeling from "@/components/practice/1.ModelingComponent.vue"

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
            
        }
]