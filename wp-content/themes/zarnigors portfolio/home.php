<?php
/*
Template Name: Home
*/
?>
<?php get_header(); ?>
<section class="home-hero">
    <div class="home-hero__content">
        <h1 class="heading-primary">Zarnigor Asatova</h1>
        <div class="home-hero__info">
            <p class="text-primary">
                A Frontend focused Web Developer building the Frontend of Websites
                and Web Applications that leads to the success of the overall
                product
            </p>
        </div>
        <div class="home-hero__cta">
            <a href="https://www.zarnigor-asatova.uz/#projects" class="btn btn--bg">Projects</a>
        </div>
    </div>
    <div class="home-hero__socials">
        <div class="home-hero__social">
            <a href="https://t.me/asatova_Zarnigor" class="home-hero__social-icon-link" rel="noreferrer" target="_blank">
                <img src="<?php echo get_template_directory_uri(); ?>/images/webp/telegram.webp" alt="Zarnigor Linkedin Profile" class="home-hero__social-icon">
            </a>
        </div>
        <div class="home-hero__social">
            <a href="https://www.instagram.com/zarnigor__asatova/" class="home-hero__social-icon-link" rel="noreferrer" target="_blank">
                <img src="<?php echo get_template_directory_uri(); ?>/images/webp/instagramm-dark.webp" alt="Zarnigor Twitter Profile" class="home-hero__social-icon">
            </a>
        </div>
<!--        <div class="home-hero__social">-->
<!--            <a href="https://www.youtube.com/channel/UCIb8_J9lqtiWGMIOdQ5DVsg" class="home-hero__social-icon-link home-hero__social-icon-link--bd-none" rel="noreferrer" target="_blank">-->
<!--                <img src="--><?php //echo get_template_directory_uri(); ?><!--/images/yt-dark.svg" alt="Zarnigor Youtube Channel" class="home-hero__social-icon">-->
<!--            </a>-->
<!--        </div>-->
        <div class="home-hero__social">
            <a href="https://github.com/asatova" class="home-hero__social-icon-link" rel="noreferrer" target="_blank">
                <img src="<?php echo get_template_directory_uri(); ?>/images/github-dark.svg" alt="Zarnigor Github Profile" class="home-hero__social-icon">
            </a>
        </div>
    </div>
    <div class="home-hero__mouse-scroll-cont">
        <div class="mouse"></div>
    </div>
</section>
<section id="about" class="about sec-pad">
    <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-med">
            <span class="heading-sec__main">About Me</span>
            <span class="heading-sec__sub">
          Here you will find more information about me, what I do, and my
          current skills mostly in terms of programming and technology
        </span>
        </h2>
        <div class="about__content">
            <div class="about__content-main">
                <h3 class="about__content-title">Get to know me!</h3>
                <div class="about__content-details">
                    <p class="about__content-details-para">
                        I'm a <strong>Frontend Web Developer</strong> building the
                        Front-end of Websites and Web Applications that leads to the
                        success of the overall product. Check out some of my work in the
                        <strong>Projects</strong> section.
                    </p>
                    <p class="about__content-details-para">
                        I also like sharing content related to the stuff that I have
                        learned over the years in <strong>Web Development</strong> so it
                        can help other people of the Dev Community.
                        <!--              Feel free to Connect-->
                        <!--              or Follow me on my-->
                        <!--              <a rel="noreferrer" href="https://linkedin.com/in/Zarnigor" target="_blank">Linkedin</a>-->
                        <!--              where I post useful content related to Web Development and-->
                        <!--              Programming-->
                    </p>
                    <p class="about__content-details-para">
                        I'm open to <strong>Job</strong> opportunities where I can
                        contribute, learn and grow. If you have a good opportunity that
                        matches my skills and experience then don't hesitate to
                        <strong>contact</strong> me.
                    </p>
                </div>
                <a href="https://www.zarnigor-asatova.uz/#contact" class="btn btn--med btn--theme dynamicBgClr">Contact</a>
            </div>
            <div class="about__content-skills">
                <h3 class="about__content-title">My Skills</h3>
                <div class="skills">
                    <div class="skills__skill">HTML</div>
                    <div class="skills__skill">CSS</div>
                    <div class="skills__skill">JavaScript</div>
                    <div class="skills__skill">Wordpress</div>
                    <div class="skills__skill">Elementor</div>
                    <div class="skills__skill">GIT</div>
                    <div class="skills__skill">Github</div>
                    <div class="skills__skill">PHP</div>
                    <div class="skills__skill">SEO Basics</div>
                    <div class="skills__skill">Bootstrap</div>
                    <div class="skills__skill">Advanced Custom Fields </div>
                    <div class="skills__skill">SQL Basics</div>
                    <div class="skills__skill">Woocommerce</div>
                </div>
            </div>
        </div>
    </div>
</section>
<section id="projects" class="projects sec-pad">
    <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-bg">
            <span class="heading-sec__main">Projects</span>
            <span class="heading-sec__sub">
          Here you will find some of the personal and clients projects that I
          created with each project containing its own View
        </span>
        </h2>

        <div class="projects__content">
             <div class="projects__row">
                <div class="projects__row-img-cont">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/webp/shopppp.webp" alt="Software Screenshot" class="projects__row-img" loading="lazy">
                </div>
                <div class="projects__row-content">
                    <h3 class="projects__row-content-title">oniks.pro</h3>
                    <p class="projects__row-content-desc">
                        I made this E-coomerce site for  auto-products store.Technologies used:Php; Wordpress; Woocomerce, Crocoblock,  HTML; CSS; All components of the site can be edited through wordpress cms.
                    </p>
                    <a class="btn btn--med btn--theme dynamicBgClr" href="https://oniks.pro" target="_blank">View</a>
                </div>
            </div>
            <div class="projects__row">
                <div class="projects__row-img-cont">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/webp/boreal-coffee-clone.webp" alt="Software Screenshot" class="projects__row-img" loading="lazy">
                </div>
                <div class="projects__row-content">
                    <h3 class="projects__row-content-title">dentistonmadisongroupon.com</h3>
                    <p class="projects__row-content-desc">
                        I made this site for a dental clinic.Technologies used:Php; Wordpress; HTML; CSS; All components of the site can be edited through wordpress cms.
                    </p>
                    <a class="btn btn--med btn--theme dynamicBgClr" href="https://www.dentistonmadisongroupon.com" target="_blank">View</a>
                </div>
            </div>
            <div class="projects__row">
                <div class="projects__row-img-cont">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/webp/zxzx.webp" alt="Software Screenshot" class="projects__row-img" loading="lazy">
                </div>
                <div class="projects__row-content">
                    <h3 class="projects__row-content-title">interiordesignsny.com</h3>
                    <p class="projects__row-content-desc">
                        3D Rendering is more than just a 3D visualization company and
                        I created their website from scratch using the frontend tools I
                        know.All components of the site can be edited through wordpress cms.
                    </p>
                    <a class="btn btn--med btn--theme dynamicBgClr" href="https://www.interiordesignsny.com" target="_blank">View</a>
                </div>
            </div>
            <div class="projects__row">
                <div class="projects__row-img-cont">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/webp/qwqw.webp" alt="Software Screenshot" class="projects__row-img" loading="lazy">
                </div>
                <div class="projects__row-content">
                    <h3 class="projects__row-content-title">microgold-investment-group.uz</h3>
                    <p class="projects__row-content-desc">
                        I re-created the frontend of microgold-investment-group.uz official web app
                        because I got attracted to their beautiful UI. It was a great
                        experience for me to build the entire frontend.All components of the site can be edited through wordpress cms.
                    </p>
                    <a class="btn btn--med btn--theme dynamicBgClr" href="https://www.microgold-investment-group.uz" target="_blank">View</a>
                </div>
            </div>
            <div class="projects__row">
                <div class="projects__row-img-cont">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/webp/catalpa.webp" alt="Software Screenshot" class="projects__row-img" loading="lazy">
                </div>
                <div class="projects__row-content">
                    <h3 class="projects__row-content-title">catalpaoptical.com</h3>
                    <p class="projects__row-content-desc">
                        I have contributed a lot to the creation of this site.All components of the site can be edited through wordpress cms.
                    </p>
                    <a class="btn btn--med btn--theme dynamicBgClr" href="https://catalpaoptical.com/" target="_blank">View</a>
                </div>
            </div>
            <div class="projects__row">
                <div class="projects__row-img-cont">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/webp/melania.webp" alt="Software Screenshot" class="projects__row-img" loading="lazy">
                </div>
                <div class="projects__row-content">
                    <h3 class="projects__row-content-title">melaniakand.com</h3>
                    <p class="projects__row-content-desc">
                        I created this site from scratch. I use some modern technologies in it.All components of the site can be edited through wordpress cms.
                    </p>
                    <a class="btn btn--med btn--theme dynamicBgClr" href="https://www.melaniakand.com" target="_blank">View</a>
                </div>
            </div>
            <div class="projects__row">
                <div class="projects__row-img-cont">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/webp/blue.webp" alt="Software Screenshot" class="projects__row-img" loading="lazy">
                </div>
                <div class="projects__row-content">
                    <h3 class="projects__row-content-title">Blue ARC</h3>
                    <p class="projects__row-content-desc">
                        I created this site from scratch for IT company. I use some modern technologies in it.All components of the site can be edited through wordpress cms.
                    </p>
                    <a class="btn btn--med btn--theme dynamicBgClr" href="https://robertg262.sg-host.com" target="_blank">View</a>
                </div>
            </div>
            <div class="projects__row">
                <div class="projects__row-img-cont">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/webp/wewashh.webp" alt="Software Screenshot" class="projects__row-img" loading="lazy">
                </div>
                <div class="projects__row-content">
                    <h3 class="projects__row-content-title">wewashhamptons.com</h3>
                    <p class="projects__row-content-desc">
                        I have contributed a lot to the creation of this site.All components of the site can be edited through wordpress cms.
                    </p>
                    <a class="btn btn--med btn--theme dynamicBgClr" href="https://wewashhamptons.com" target="_blank">View</a>
                </div>
            </div>
            <div class="projects__row">
                <div class="projects__row-img-cont">
                    <img src="<?php echo get_template_directory_uri(); ?>/images/webp/nation.webp" alt="Software Screenshot" class="projects__row-img" loading="lazy">
                </div>
                <div class="projects__row-content">
                    <h3 class="projects__row-content-title">nationinmotion.uz</h3>
                    <p class="projects__row-content-desc">
                        I created this site from scratch. I use some modern technologies in it. All components of the site can be edited through wordpress cms.
                    </p>
                    <a class="btn btn--med btn--theme dynamicBgClr" href="https://www.nationinmotion.uz" target="_blank">View</a>
                </div>
            </div>
        </div>
    </div>
</section>
<section id="contact" class="contact sec-pad dynamicBg">
    <div class="main-container">
        <h2 class="heading heading-sec heading-sec__mb-med">
            <span class="heading-sec__main heading-sec__main--lt">Contact</span>
            <span class="heading-sec__sub heading-sec__sub--lt">
          Feel free to Contact me by submitting the form below and I will get
          back to you as soon as possible
        </span>
        </h2>
        <div class="contact__form-container">
<!--            <form class="contact__form" method="post">-->
              <?php echo do_shortcode( '[contact-form-7 id="3b4545b" title="Contact form 1"]' );?>
<!--            </form>-->
        </div>
    </div>
</section>
<style>
    .contact__btn{
        border:none;
    }
    .wpcf7-response-output{
        font-size: 16px;
        margin-top: 15px;
    }

   .contact__form-container input {
       color: #333;
       padding: 2rem;
       width: 100%;
       border: 1px solid #ebebeb;
       font-size: 1.6rem;
       letter-spacing: 0;
       background: #f0f0f0;
       border-radius: 5px;
       font-weight: 600;
       margin-top: 10px;

   }
    textarea{
        margin-top: 10px;
        color: #333;
        padding: 2rem;
        width: 100%;
        border: 1px solid #ebebeb;
        font-size: 1.6rem;
        letter-spacing: 0;
        background: #f0f0f0;
        border-radius: 5px;
        font-weight: 600;
    }

    .contact__form-container label {
        color: #666;
        font-size: 1.4rem;
        letter-spacing: 1px;
        font-weight: 700;
        margin-bottom: 2rem;
        padding-bottom: 1rem;
        padding-top: 1rem;
        display: block;
        text-align: left;
    }
.buttons input{
    background: #7843e9;
    color: #fff;
    cursor: pointer;
}

    .grecaptcha-badge {
        visibility: hidden !important;
    }



</style>

<?php get_footer(); ?>
