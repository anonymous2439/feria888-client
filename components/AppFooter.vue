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
                    <ul>
                        <li><a href="javascript:;"><figure><img src="" alt="facebook"></figure></a></li>
                        <li><a href="javascript:;"><figure><img src="" alt="twitter"></figure></a></li>
                        <li><a href="javascript:;"><figure><img src="" alt="tiktok"></figure></a></li>
                        <li><a href="javascript:;"><figure><img src="" alt="youtube"></figure></a></li>
                    </ul>
                </div>
                <div class="app-footer-col">
                    <a href="/">
                        <figure><img src="" alt="feria888 logo"></figure>
                    </a>
                </div>
            </div>
        </div>
    </div>
</template>

<style scoped>
    .app-footer-con { display: flex; justify-content: space-between; column-gap: 15px; } 
    .app-footer-col ul li a { color: #fff; text-decoration: none; line-height: 100%; } 
    .app-footer-col ul li { margin-top: 12px; } 
    .app-footer-col ul li a:hover { text-decoration: underline; } 
    
    @media only screen and (max-width: 1000px) {
        .app-footer-con{background-color: var(--red);}
    }
    @media only screen and (max-width: 800px) {
        .app-footer-con{background-color: var(--red);}
    }
</style>