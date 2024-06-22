document.querySelector(
  ".navbar"
).innerHTML = `<nav class="outer-container px-0 container-fluid">
  <section class="inner-container container-fluid">
    <section class="row justify-content-between align-items-center nav-row">
      <section class="col nav-left">
        <section class="nav-logo">

        <a href="/">          <img src="/public/images/logo.svg" alt="" />
</a>
        </section>
        <ul class="nav-menus">
          <li>
            <a href="../pages/features.html">features</a>
          </li>
          <li>
            <a href="#">company</a>
          </li>
          <li>
            <a href="#">carrers</a>
          </li>
          <li>
            <a href="#">about</a>
          </li>
        </ul>
      </section>

      <ul class="col nav-buttons">
        <li>login</li>
        <li class="bordered-button">Register</li>
        <li>
          <i class="fa-solid d-lg-none fa-bars hamburger"></i>
        </li>
      </ul>
    </section>
  </section>
</nav>;
`;
