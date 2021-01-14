<template>
  <div id="app">
    <!-- Header -->
    <header id="header">
      <div class="inner">
        <!-- Logo -->
        <a href="/items" class="logo">
          <span class="symbol"><img src="images/logo.svg" alt="" /></span><span class="title">Fifty-Fifty</span>
        </a>

        <!-- Nav -->
        <nav>
          <ul>
            <li><a href="#menu">Menu</a></li>
          </ul>
        </nav>
      </div>
    </header>

    <!-- Menu -->
    <nav id="menu">
      <div class="inner"> 
        <h2>Menu</h2>
        <ul>
          <li><a href="/items">Home</a></li>
          <li><a href="/items/new">Upload</a></li>
          <li><a href="/login">Login</a></li>
          <li><a href="/signup">Signup</a></li>
          <li><a href="/logout">Logout</a></li>
          <!-- <li><a href="elements.html">Elements</a></li> -->
        </ul>
      </div>
    </nav>

    <router-view/>

    <!-- Footer -->
      <footer id="footer">
        <div class="inner">
          <section>
            <h2>Get in touch</h2>
            <form method="post" action="#">
              <div class="fields">
                <div class="field half">
                  <input type="text" name="name" id="name" placeholder="Name" />
                </div>
                <div class="field half">
                  <input type="email" name="email" id="email" placeholder="Email" />
                </div>
                <div class="field">
                  <textarea name="message" id="message" placeholder="Message"></textarea>
                </div>
              </div>
              <ul class="actions">
                <li><input type="submit" value="Send" class="primary" /></li>
              </ul>
            </form>
          </section>
          <section>
            <h2>Follow</h2>
            <ul class="icons">
              <li><a href="#" class="icon brands style2 fa-twitter"><span class="label">Twitter</span></a></li>
              <li><a href="#" class="icon brands style2 fa-facebook-f"><span class="label">Facebook</span></a></li>
              <li><a href="#" class="icon brands style2 fa-instagram"><span class="label">Instagram</span></a></li>
              <li><a href="#" class="icon brands style2 fa-dribbble"><span class="label">Dribbble</span></a></li>
              <li><a href="#" class="icon brands style2 fa-github"><span class="label">GitHub</span></a></li>
              <li><a href="#" class="icon brands style2 fa-500px"><span class="label">500px</span></a></li>
              <li><a href="#" class="icon solid style2 fa-phone"><span class="label">Phone</span></a></li>
              <li><a href="#" class="icon solid style2 fa-envelope"><span class="label">Email</span></a></li>
            </ul>
          </section>
          <ul class="copyright">
            <li>&copy; Untitled. All rights reserved</li><li>Design: <a href="http://html5up.net">HTML5 UP</a></li>
          </ul>
        </div>
      </footer>
  </div>
</template>
