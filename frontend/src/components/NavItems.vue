<template>
    <ul class="navItems">
        <li><a href="#about">About</a></li>
        <li><a href="#portfolio">Latest project</a></li>
        <li><a href="#contacts">Contacts</a></li>
    </ul>
    <style>
        .navItems {
            list-style: none;
            display: flex;
            gap: 2rem;
        }

        .navItems li a {
            font-size: 1.2rem;
            font-weight: 500;
            letter-spacing: 0.05rem;
            transition: color 0.3s;
            padding: 200px;
        }

        .navItems li a:hover {
            color: #aaa;
        }
    </style>
</template>

<script>
export default {
    name: 'NavItems'
}
</script>