<template>
    <div id="app-footer">
        <div class="wrapper">
            <div class="app-footer-con">
                <div class="app-footer-col">
                    <h2>About Feria888</h2>
                    <ul>
                        <li><a href="javascript:;" class="hover-underline-animation">About Us</a></li>
                        <li><a href="javascript:;" class="hover-underline-animation">Refund Policy</a></li>
                        <li><a href="javascript:;" class="hover-underline-animation">Privacy Policy</a></li>
                        <li><a href="javascript:;" class="hover-underline-animation">Responsible Gaming</a></li>
                        <li><a href="javascript:;" class="hover-underline-animation">Terms and Conditions</a></li>
                    </ul>
                </div>
                <div class="app-footer-col">
                    <h2>Help</h2>
                    <ul>
                        <li><a href="javascript:;" class="hover-underline-animation">Contact Us</a></li>
                        <li><a href="javascript:;" class="hover-underline-animation">FAQ</a></li>
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
                        <figure class="footer-logo"><img src="~/assets/images/main_logo.png" alt="feria888 logo"></figure>
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
    #app-footer { background: gray; position: relative;  } 
    .app-footer-con { display: flex; justify-content: space-between; padding:40px 10px;border: 0px solid yellow; margin-top: 10px;} 
    .app-footer-col ul li a { color: #fff; text-decoration: none; line-height: 100%;} 
    .app-footer-col ul li { margin-top: 12px; } 
    .app-footer-col ul li a:hover { text-decoration: none; padding-bottom: 3px;} 
    .footer-social { display: flex; align-items: center; column-gap: 10px; justify-content: center; border: 0px solid blue;} 
    .footer-social li a { transition: .6s; } 
    .footer-social li a:hover { opacity: .7; } 
    .footer-logo {max-width: 210px;}
    .copyright{text-align: center; background-color: #ebb948;padding:15px 10px; position: relative; border-bottom: 5px solid #c8371a;}
    
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