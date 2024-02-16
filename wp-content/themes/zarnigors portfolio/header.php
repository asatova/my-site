<!doctype html>
<html <?php language_attributes(); ?>>
<head>
<!-- Google Tag Manager -->
<script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-M72BFZXL');</script>
<!-- End Google Tag Manager -->
    <meta charset="<?php bloginfo( 'charset' ); ?>" />
    <meta content="#ffff" data-react-helmet="true" name="theme-color" />
    <meta http-equiv="X-UA-Compatible" content="IE=Edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=4.0">
     <meta name="msapplication-TileColor" content="#ffffff">
    <meta name="theme-color" content="#3db7e8" />
    <meta name="format-detection" content="telephone=no" />
<!--    <link rel="shortcut icon" href="https://www.zarnigor-asatova.uz/favicon.ico" type="image/x-icon">-->
<!--    <link rel="icon" href="https://www.zarnigor-asatova.uz/favicon.ico" type="image/x-icon">-->
    <meta name="description" content="A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product">
    <meta name="author" content="Zarnigor Asatova">
    <meta name="google-site-verification" content="wX2xdkxqjrC4rA2EM-9bbaVpiEEFG8ae5azgeZDd-oo">
    <title>Zarnigor Asatova Portfolio</title>
    <meta property="og:title" content="Zarnigor | Frontend Web Developer">
    <meta property="og:site_name" content="Zarnigor Asatova Portfolio Website">
    <meta property="og:url" content="https://www.zarnigor-asatova.uz/">
    <meta property="og:description" content="A Frontend focused Web Developer building the Frontend of Websites and Web Applications that leads to the success of the overall product">
    <meta property="og:type" content="website">
    <link rel="preconnect" href="https://fonts.googleapis.com/">
    <link rel="preconnect" href="https://fonts.gstatic.com/" crossorigin="">
    <?php wp_head(); ?>

</head>
<body <?php body_class(); ?>>
<?php wp_body_open(); ?>
<!-- Google Tag Manager (noscript) -->
<noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-M72BFZXL"
height="0" width="0" style="display:none;visibility:hidden"></iframe></noscript>
<!-- End Google Tag Manager (noscript) -->

<header class="header">
    <div class="header__content">
        <div class="header__logo-container">
            <div class="header__logo-img-cont">
                <img src="<?php echo get_template_directory_uri(); ?>/images/profile-pic-8.webp" alt="Logo Image" class="header__logo-img">
            </div>
            <span class="header__logo-sub">Zarnigor Asatova</span>
        </div>
        <div class="header__main">
            <ul class="header__links">
                <li class="header__link-wrapper">
                    <a href="https://www.zarnigor-asatova.uz/" class="header__link"> Home </a>
                </li>
                <li class="header__link-wrapper">
                    <a href="https://www.zarnigor-asatova.uz/#about" class="header__link">About </a>
                </li>
                <li class="header__link-wrapper">
                    <a href="https://www.zarnigor-asatova.uz/#projects" class="header__link"> Projects </a>
                </li>
                <li class="header__link-wrapper">
                    <a href="https://www.zarnigor-asatova.uz/#contact" class="header__link"> Contact </a>
                </li>
            </ul>
            <div class="header__main-ham-menu-cont">
                <img src="<?php echo get_template_directory_uri(); ?>/images/ham-menu.svg" alt="hamburger menu" class="header__main-ham-menu" width="24px" height="24px">
                <img src="<?php echo get_template_directory_uri(); ?>/images/ham-menu-close.svg" alt="hamburger menu close" class="header__main-ham-menu-close d-none">
            </div>
        </div>
    </div>
    <div class="header__sm-menu">
        <div class="header__sm-menu-content">
            <ul class="header__sm-menu-links">
                <li class="header__sm-menu-link">
                    <a href="https://www.zarnigor-asatova.uz/"> Home </a>
                </li>

                <li class="header__sm-menu-link">
                    <a href="https://www.zarnigor-asatova.uz/#about"> About </a>
                </li>

                <li class="header__sm-menu-link">
                    <a href="https://www.zarnigor-asatova.uz/#projects"> Projects </a>
                </li>

                <li class="header__sm-menu-link">
                    <a href="https://www.zarnigor-asatova.uz/#contact"> Contact </a>
                </li>
            </ul>
        </div>
    </div>

</header>
<script>

    const hamMenuBtn = document.querySelector('.header__main-ham-menu-cont')
    const smallMenu = document.querySelector('.header__sm-menu')
    const headerHamMenuBtn = document.querySelector('.header__main-ham-menu')
    const headerHamMenuCloseBtn = document.querySelector(
        '.header__main-ham-menu-close'
    )
    const headerSmallMenuLinks = document.querySelectorAll('.header__sm-menu-link')

    hamMenuBtn.addEventListener('click', () => {
        if (smallMenu.classList.contains('header__sm-menu--active')) {
            smallMenu.classList.remove('header__sm-menu--active')
        } else {
            smallMenu.classList.add('header__sm-menu--active')
        }
        if (headerHamMenuBtn.classList.contains('d-none')) {
            headerHamMenuBtn.classList.remove('d-none')
            headerHamMenuCloseBtn.classList.add('d-none')
        } else {
            headerHamMenuBtn.classList.add('d-none')
            headerHamMenuCloseBtn.classList.remove('d-none')
        }
    })

    for (let i = 0; i < headerSmallMenuLinks.length; i++) {
        headerSmallMenuLinks[i].addEventListener('click', () => {
            smallMenu.classList.remove('header__sm-menu--active')
            headerHamMenuBtn.classList.remove('d-none')
            headerHamMenuCloseBtn.classList.add('d-none')
        })
    }

    // ---
    const headerLogoConatiner = document.querySelector('.header__logo-container')

    headerLogoConatiner.addEventListener('click', () => {
        location.href = '/'
    })
    ;





</script>
