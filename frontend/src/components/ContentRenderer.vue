<template>
    <div>
        <BaseBlock
            v-for="block in blocks"
            :key="block.id"
            :id="block.id"
            :section="block.section"
        >
            <component :is="block.type" v-bind="block.props" />
        </BaseBlock>
    </div>
</template>

<script>
import BaseBlock from "./BaseBlock.vue";
import ActionBlock from "./ActionBlock.vue";
import TextBlock from "./TextBlock.vue";
import ImageBlock from "./ImageBlock.vue";
import DatabaseInputBlock from "./DatabaseInputBlock.vue";

export default {
    components: {
        BaseBlock,
        ActionBlock,
        TextBlock,
        ImageBlock,
        DatabaseInputBlock,
    },
    props: {
        blocks: {
            type: Array,
            required: true, // [{ type: 'ActionBlock', id: '1', section: 'hero', props: { ... } }]
        },
    },
};
</script>
