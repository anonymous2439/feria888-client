<template>
    <div id="app-footer">
        <div class="wrapper">
            <div class="app-footer-con">
                <div class="app-footer-col">
                    <h2>About Feria888</h2>
                    <ul>
                        <li><a href="javascript:;">About Us</a></li>
                        <li><a href="javascript:;">Refund Policy</a></li>
                        <li><a href="javascript:;">Privacy Policy</a></li>
                        <li><a href="javascript:;">Responsible Gaming</a></li>
                        <li><a href="javascript:;">Terms and Conditions</a></li>
                    </ul>
                </div>
                <div class="app-footer-col">
                    <h2>Help</h2>
                    <ul>
                        <li><a href="javascript:;">Contact Us</a></li>
                        <li><a href="javascript:;">FAQ</a></li>
                    </ul>
                </div>
                <div class="app-footer-col">
                    <h2>Social</h2>
                    <ul class="footer-social">
                        <li><a href="javascript:;"><figure><img src="~/assets/images/facebook.png" alt="facebook"></figure></a></li>
                        <li><a href="javascript:;"><figure><img src="~/assets/images/twitter.png" alt="twitter"></figure></a></li>
                        <li><a href="javascript:;"><figure><img src="~/assets/images/tiktok.png" alt="tiktok"></figure></a></li>
                        <li><a href="javascript:;"><figure><img src="~/assets/images/youtube.png" alt="youtube"></figure></a></li>
                    </ul>
                </div>
                <div class="app-footer-col">
                    <a href="/">
                        <figure class="footer-logo"><img src="~/assets/images/main_logo.jpg" alt="feria888 logo"></figure>
                    </a>
                </div>                
            </div>
        </div>
        <div class="copyright">
            © Copyright 2023 • Feria 888
        </div>
        <FooterMenu />
    </div>
</template>

<style scoped>
    #app-footer { background: #00000061; position: relative; } 
    .app-footer-con { display: flex; justify-content: space-between; padding:40px 0;} 
    .app-footer-col ul li a { color: #fff; text-decoration: none; line-height: 100%; } 
    .app-footer-col ul li { margin-top: 12px; } 
    .app-footer-col ul li a:hover { text-decoration: underline; } 
    .footer-social { display: flex; align-items: center; column-gap: 10px; justify-content: center;} 
    .footer-social li a { transition: .6s; } 
    .footer-social li a:hover { opacity: .7; } 
    .footer-logo {max-width: 210px;}
    .copyright{text-align: center; background-color: var(--primary-color);padding:15px 10px; position: relative;}
    
    @media only screen and (max-width: 1000px) {
        .app-footer-col { width: 48%; text-align: center; margin-bottom: 40px; } 
        .app-footer-con{background-color: var(--red);flex-wrap: wrap;}
        .footer-logo { margin: 0 auto; } 
    }
    @media only screen and (max-width: 800px) {
        .app-footer-con{background-color: var(--red); }
        #app-footer {margin-bottom: 77px;}
    }
    @media only screen and (max-width: 600px) {
        .app-footer-col { width: 100%; } 
        
    }
</style>