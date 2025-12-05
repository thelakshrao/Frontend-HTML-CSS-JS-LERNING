// console.log("hello world");
const http = require('http');

const hostname = '127.0.0.1';
const port = 3000;

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  // res.end('Hello World this is laksh and now i am starting node js');
  res.end(`<!DOCTYPE html>
  <html lang="en">
  
  <head>
      <meta charset="UTF-8">
      <meta http-equiv="X-UA-Compatible" content="IE=edge">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>GYMMI</title>
      <link rel="stylesheet" href="style.css">
      <link rel="stylesheet" media="screen and (max-width: 700px)" href="Iphone.css">
      <script src="https://kit.fontawesome.com/91fc080129.js" crossorigin="anonymous"></script>
      <link href="https://fonts.googleapis.com/css2?family=Pacifico&family=Tangerine:wght@400;700&display=swap"
      rel="stylesheet">
  </head>
  
  <body>
      
      <header>
          <nav id="navbar">
              <div id="logo">
                  <img src="img/GYMMILOGO.png" alt="">
              </div>
              <ul class="navbar1">
                  <li><a class="bar active" href="index.html" target="_self">
                          Home</a></li>
                  <li><a class="bar " href="about.html" target="_self">
                          About</a></li>
                  <li><a class="bar " href="blog.html" target="_self">
                          <!-- <span class="material-symbols-outlined">
                              contact_support
                              </span> -->
                          Blog</a></li>
                  <li><a class="bar " href="contact.html" target="_self">
                          Contact</a></li>
              </ul>
          </nav>
      </header>
  
  
      <section id="home">
          <div class="container">
              <span class="mainname">
                  GYMMI
              </span>
              <h1>YOUR FITNESS BUDDY</h1>
              <h3>With growing technology <br> Why stick to old skool Health & Fitness solution?
              </h3>
              <a href="Eaddress.html" target="_self">
                  <button class="btn">Join Waitlist!</button>
              </a>
          </div>
      </section>
      <div class="circle">
          <img src="img/circle.png" alt="">
      </div>
      <section>
          <h1 id="sec1st">A Fitness coach-in Your Phone</h1>
          <h3 id="sec2nd">Stop Gysseing , Start Working <br>
              Get your next best exercise, rep and weight based on your fitness history, goal and experince.
          </h3>
          <div class="container1">
              <div class="box">Locate Nearby Gym</div>
              <div class="box">AI based posture detection system</div>
              <div class="box">Professional trainer</div>
              <div class="box">loging workout</div>
          </div>
      </section>
      <footer class="socialmedia">
          <div class="slogo">
              <img src="img/GYMMILOGO.png" alt="">
          </div>
          <div class="socialicon">
              <div class="icon" id="facebook">
                  <a class="code" href="https://www.facebook.com/profile.php?id=100089030923869" target="_blank"><i
                          class="fab fa-facebook"></i></a>
              </div>
              <div class="icon" id="instagram">
                  <a class="code" href="https://www.instagram.com/_gymmi/" target="_blank"><i
                          class="fab fa-instagram"></i></a>
              </div>
              <div class="icon" id="linkedin">
                  <a class="code" href="https://www.linkedin.com/company/gymmi/" target="_blank"><i
                          class="fab fa-linkedin"></i></a>
              </div>
          </div>
          <div class="copyright">
  
              &#169 Copyright 2022-2023 by 52Technologies. All Rights Reserved.
          </div>
          <div class="tandd">
              <span>
                  Terms&Conditions |
              </span>
              <span>
                  Privacy Policy
              </span>
          </div>
  
      </footer>
  
  </body>
  
  </html>`);
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});