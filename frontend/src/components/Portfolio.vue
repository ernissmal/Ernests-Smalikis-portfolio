<template>
    <section id="portfolio">
        <h1>My portfolio</h1>
        <h2>My latest work</h2>
        <div class="container">
            <h3>Password generator <b>V 1.1</b></h3>
            <div class="splide__track">
                <ul class="splide__list">
                    <li class="splide__slide">
                        <img src="../assets/vue.svg" alt="image 1">
                    </li>
                    <li class="splide__slide">
                        <img src="../assets/vue.svg" alt="image 2 ">
                    </li>
                    <li class="splide__slide">
                        <img src="../assets/vue.svg" alt="image 3">
                    </li>
                </ul>
            </div>
            <div class="description">
                <h4>Description</h4>
                <p>Simple password generator, programmed on python is a simple and secure way how to generate and store secure passwords!</p>
                <h5>Updates</h5>
                <p><b>Version 1.1</b>:<br>Now adapted with simple and user-friendly Graphic user interface, the application lets users generate unique passwords within 6 to 20 characters length, with a choice between 4 character types! <br> Integrated function to fetch saved passwords in a separate window and regenerate passwords!</p>
            </div>
            <a href="https://github.com/ernissmal/Password-generator.git"><button>LINK TO PROJECT</button></a>
        </div>
    </section>
</template>

<script>
export default {
    name: 'Portfolio'
}
</script>

<style scoped>
.portfolio-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.project-card {
  background: #111;
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  transition: transform 0.3s, box-shadow 0.3s;
}

.project-card:hover {
  transform: translateY(-10px);
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.6);
}

.project-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 8px;
  margin-bottom: 1rem;
}
</style>
