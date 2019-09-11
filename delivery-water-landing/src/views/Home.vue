<template>
    <v-container fluid ma-0 pa-0>
        <LogoSection />
        <TypesOfWaterSection />
        <WaterCleaningSection/>
        <WaterStructureSection/>
        <ClientsSection/>
        <v-divider/>
        <BuyWaterSection/>
    </v-container>
</template>

<script>
import LogoSection from "../components/LogoSection";
import TypesOfWaterSection from "../components/TypesOfWaterSection";
import WaterCleaningSection from "../components/WaterCleaningSection";
import WaterStructureSection from "../components/WaterStructureSection";
import ClientsSection from "../components/ClientsSection";
import BuyWaterSection from "../components/BuyWaterSection";

export default {
    components: {
        BuyWaterSection,
        ClientsSection,
        WaterStructureSection,
        WaterCleaningSection,
        TypesOfWaterSection,
        LogoSection,
    },
};
</script>
