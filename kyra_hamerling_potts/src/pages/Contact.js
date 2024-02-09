function Contact() {
  return (
    <body>
      <h1 id="nameHeader">KHP</h1>
      <h2 id="contactHeader">Contact</h2>
      <script src="script.js" defer></script>
      <div class="content">
        <div class="innerContainer">
          <section class="navSection">
            <nav class="sidenav">
              <a href="index.html">Home</a>
              <a href="about.html">About</a>
              <a href="projects.html">Projects</a>
              <a class="active" href="contact.html">
                Contact
              </a>
            </nav>
          </section>

          <section class="textSection">
            <section class="textContainer">
              <p id="connect">Connect with me</p>
              <section class="iconContainer">
                <a href="mailto:khamerling-potts@wustl.edu" class="icon">
                  <div>
                    <img src="./outlook.png" class="iconimage" />
                  </div>
                  Email
                </a>

                <a href="https://twitter.com/kyrahp_" class="icon">
                  <div>
                    <img src="./twitter.png" class="iconimage" />
                  </div>
                  Twitter
                </a>

                <a href="https://github.com/khamerling-potts" class="icon">
                  <div>
                    <img src="./github.png" class="iconimage" />
                  </div>
                  Github
                </a>
              </section>
            </section>
          </section>
        </div>
      </div>
    </body>
  );
}

export default Contact;
