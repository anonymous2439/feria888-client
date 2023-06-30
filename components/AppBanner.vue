<template>
    <div id="banner">
        

            <div class="bnr-con">                
                <div class="bnr-bg">
                    <Swiper
                    :height="300"
                    :modules="[SwiperAutoplay, SwiperEffectCreative]"
                    :slides-per-view="1"
                    :loop="true"
                    :effect="'creative'"
                    :autoplay="{
                        delay: 8000,
                        disableOnInteraction: false
                    }"
                    :creative-effect="{
                        prev: {
                        shadow: false,
                        translate: ['-20%', 0, -1]
                        },
                        next: {
                        translate: ['100%', 0, 0]
                        }
                    }"
                    >
                    <SwiperSlide>                        
                            <figure><img src="~/assets/images/bnr1.webp" /></figure>                                                                    
                    </SwiperSlide>
                    <SwiperSlide>                        
                            <figure><img src="~/assets/images/bnr2.webp" /></figure>                                                                    
                    </SwiperSlide>
                    <SwiperSlide>                        
                            <figure><img src="~/assets/images/bnr3.webp" /></figure>                                                                    
                    </SwiperSlide>

                    <!-- useSwiper() within a swiper instance -->
                    </Swiper>
                    <marquee behavior="" direction="">test</marquee>
                </div>
            </div>
            
            <!-- <button @click="swiper.slideNext()">Next</button>
            <button @click="swiper.slidePrev()">Previous</button> -->

        
        
    </div>
</template>

<script setup>
    const swiper = useSwiper()
</script>


<style scoped>
#banner{margin-bottom: 0px;}
.bnr-con{position: relative;}
.bnr-bg { position: relative; box-sizing: border-box;overflow: hidden;background: none; border:0px solid yellow;} 
 .bnr-bg figure img{filter: brightness(.9);width: 1920px;position: relative;left: 50%;transform: translateX(-50%);}
 .bnr-bg marquee { background: #c8371a; color: #fff; padding: 10px 10px; border-radius: 0px; font-weight: 600; font-size: 20px; } 
 .swiper{max-height:500px;}
 .swiper-slide {display: flex;justify-content: center;align-items: center;font-size: 18px;font-size: 4rem;font-weight: bold;font-family: 'Roboto', sans-serif;}
.swiper-wrapper {min-width: 100vh;width: 100vh;}
.swiper-cards {width: 240px;height: 240px;}
.swiper-cards .swiper-slide {border-radius: 6px;border: 1px solid black;}

 @media only screen and (max-width: 1000px) {
    #banner { border-bottom: 1px solid #ffffff1a; } 
}
@media only screen and (max-width: 800px) {
    #banner {
        padding: 0px 0 0;
        border: 0px solid green;
    }
}
</style>