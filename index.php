<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Other meta tags and title -->
    <link rel="stylesheet" href="https://use.typekit.net/akm8mel.css">
    <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.15.0/font/bootstrap-icons.css" rel="stylesheet">
    <link rel="stylesheet" href="assets/font/bootstrap-icons.min.css"> 
    <link rel="stylesheet" href="assets/style.css">
    <link rel="shortcut icon" href="assets/images/favicon.ico" type="image/x-icon">
</head>

<body>
    <header id="header">
        <div class="siteTitle">
            <h1>Ernests Smaliķis</h1>
        </div>
        <nav class="navbar">
  <a href="#about"><button>About</button></a>
  <a href="#header"><button>Home</button></a>
  <a href="#portfolio"><button>Portfolio</button></a>
  <div class="dropdown">
    <a href="#services"><button>Services</button></a>
    <div class="dropdown-content">
      <a href="#service1"><button>Simple website</button></a>
      <a href="#service2"><button>Small business landing page</button></a>
      <a href="service3"><button>Small internet store</button></a>
    </div>
  </div>
</nav>
    </header>
 <!-- Popup for beta--->
    <style>
        .popup {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.5);
            display: flex;
            justify-content: center;
            align-items: center;
            z-index: 9999;
        }

        .popup-content {
            background-color: #fff;
            padding: 20px;
            border-radius: 5px;
            text-align: center;
        }

        .popup-content h2 {
            margin-bottom: 10px;
            color: black;
        }

        .popup-content p {
            margin-bottom: 20px;
            color: black;
        }

        .popup-content button {
            background-color: black;
            color: #ffff;
            border: none;
            padding: 10px 20px;
            border-radius: 5px;
            cursor: pointer;
        }
    </style>

    <div class="popup" id="popup">
        <div class="popup-content">
            <h2>Rotate Device</h2>
            <p>Please rotate your device for the best experience.</p>
            <button id="close-popup">Close</button>
        </div>
    </div>

    <script>
        const popup = document.getElementById('popup');
        const closePopupButton = document.getElementById('close-popup');

        // Show the popup
        popup.style.display = 'flex';

        // Close the popup when the button is clicked
        closePopupButton.addEventListener('click', () => {
            popup.style.display = 'none';
        });
    </script>

    <section id="about">
    <div class="sectionTitle">
        <h1>Hello, my name is Ernests Smaliķis</h1>
        <h2>I'm a professional web developer and graphic designer</h2>
    </div>
    <div class="sectionContent">
    <div class="profileImage">
        <img src="assets/images/profile.jpg" alt="Ernests Smaliķis profile picture">
    </div>
        <div class="textContent">
            <div class="social">
                <div class="caption">
                    <h1>Follow me on social media:</h1>
                </div>
                <div class="icons">
                    <a href="">
                        <i class="bi bi-twitter"></i>
                    </a>
                    <a href="">
                        <i class="bi bi-youtube"></i>
                    </a>
                    <a href="">
                        <i class="bi bi-instagram"></i>
                    </a>
                    <a href="">
                        <i class="bi bi-github"></i>
                    </a>
                    <a href="">
                        <i class="bi bi-linkedin"></i>
                    </a>
                    <a href="">
                        <i class="bi bi-tiktok"></i>
                    </a>
                </div>
            </div>
            <br>
            <div class="values">
                <div class="box" id="box1">
                  <i class="bi bi-clock"></i>
                  <p>2000 Hours invested in web development and graphic design projects</p>
                </div>
                <div class="box" id="box2">
                  <i class="bi bi-hand-thumbs-up"></i>
                  <p>Valuing client's feedback</p>
                </div>
                <div class="box" id="box3">
                  <i class="bi bi-book"></i>
                  <p>Constantly developing to ensure the highest quality standards</p>
                </div>
                <div class="box" id="box4">
                  <i class="bi bi-heart-fill"></i>
                  <p>Every project I take is taken seriously, Your success is personal to me</p>
                </div>
            </div>

            <div class="background">
    <div class="icon">
        <i class="bi bi-building"></i>
        <p>Valmieras tehnikums(Senior year)<br>
            <b>Programming technician</b>
        </p>
    </div>
    <div class="icon">
        <i class="bi bi-briefcase"></i>
        <p>Programmer <br>
            Freelance
        </p>
    </div>
</div>

        </div>
    </div>
</section>




    <section id="portfolio">
        <h1>Latest work</h1>
        <div class="Portfolio page">
            <div class=project1-images>
                <img src="" alt="main-image">
                <div class="project1-additionalImages">
                    <img src="" alt="Additional image 1">
                    <img src="" alt="Additional image 2">
                </div>
            </div>
            <div class="project1Description">
                <h2>My portfolio page</h2>
                <p>Website You're currently visiting, showcases my skills in designing and prototyping.</p>
            </div>
        </div>

        <div class="project2">
            <div class=project2-images>
                <img src="" alt="main-image">
                <div class="project2-additionalImages">
                    <img src="" alt="Additional image 1">
                    <img src="" alt="Additional image 2">
                </div>
            </div>
            <div class="project2Description">
                <h2>NomadCanvasHaven landing page</h2>
                <p>New canva store, that specialises in creating bohemian style art and is looking to expand in ecommerce.</p>
            </div>
        </div>
    </section>

    <section id="services">
  <div class="service-card" id="service1">
    <h2>Personal websites for individual use</h2>
    <p>Starting at 199 EUR</p>
    <p>Perfect for personal blogs, portfolios, and other lightweight functionalities.</p>
    <ul>
      <li><i class="bi bi-check-circle-fill"></i>Premade design adjusted just for you!</li>
      <li><i class="bi bi-check-circle-fill"></i>Up to 6 pages of your content and 1 database with 6 tables!</li>
      <li><i class="bi bi-check-circle-fill"></i>Backend and security files included!</li>
      <li><i class="bi bi-check-circle-fill"></i>Instructions on how to use the website and manage it like a pro!</li>
    </ul>
    <button class="apply-now-btn"><i class="bi bi-arrow-right"></i> Apply now</button>
  </div>

  <div class="service-card" id="service2">
    <h2>Small business landing page with mailing lists</h2>
    <p>For small businesses scheduling an online launch</p>
    <p>Starting from 239 EUR</p>
    <ul>
      <li><i class="bi bi-check-circle-fill"></i>Up to 12 pages and 2 databases with a total of 24 tables!</li>
      <li><i class="bi bi-check-circle-fill"></i>Premade design, adjusted just for you!</li>
      <li><i class="bi bi-check-circle-fill"></i>Mailing lists and chatbots for the FAQ!</li>
      <li><i class="bi bi-check-circle-fill"></i>Instructions on how to use the website and manage it like a pro!</li>
    </ul>
    <button class="apply-now-btn"><i class="bi bi-arrow-right"></i> Apply now</button>
  </div>

  <div class="service-card" id="service3">
    <h2>Small internet store</h2>
    <p>For small businesses that want to sell products online.</p>
    <p>Starting from 599 EUR</p>
    <ul>
      <li><i class="bi bi-check-circle-fill"></i>All functionalities from previous services!</li>
      <li><i class="bi bi-check-circle-fill"></i>E-commerce support, including up to 6 APIs</li>
      <li><i class="bi bi-check-circle-fill"></i>Advanced security for your business!</li>
      <li><i class="bi bi-check-circle-fill"></i>Weekly SEO optimization procedures!</li>
    </ul>
    <button class="apply-now-btn"><i class="bi bi-arrow-right"></i> Apply now</button>
  </div>
    <br>
  <div class="note">
  <h2>NOTE:</h2>
  <p>All websites are size-responsive for most popular devices after the year 2020.<br>
View the full device list <a href="device-list.html">here!</a></p>
</div>

</section>


    <footer>
        <div class="copyright">
            <h1>© Ernests Smaliķis <i>2023</i></h1>
        </div>

        <div class="copyrightDescription">
            <i><p>All rights reserved</p></i>
            <p>Version 1.0 BETA</p>
        </div>
    </footer>

</body>
</html>