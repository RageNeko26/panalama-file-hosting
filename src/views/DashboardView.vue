<template>
<Suspense>
    <template #default>
        <DashboardDefaultVue />
    </template>
    <template #fallback>
        <DashboardFallbackVue />
        
    </template>
</Suspense>
</template>


<script>
import DashboardDefaultVue from '../components/DashboardDefault.vue';
import DashboardFallbackVue from '../components/DashboardFallback.vue';

export default {
    name : "DashboardView",
    components : {
        DashboardDefaultVue,
        DashboardFallbackVue
    }
}
</script>