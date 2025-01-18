<template>
    <BaseBlock id="footer" section="footer">
        <div class="footer-content">
            <p>&copy; 2023 Ernests Smalikis. All rights reserved.</p>
            <nav class="footer-nav">
                <ul>
                    <li><a href="#about">About</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#contact">Contact</a></li>
                </ul>
            </nav>
        </div>
    </BaseBlock>
</template>

<script>
import BaseBlock from './BaseBlock.vue';

export default {
    name: 'Footer',
    components: {
        BaseBlock
    }
}
</script>

<style src="../assets/css/style.css"></style>
<style src="../assets/css/header-footer.css"></style>