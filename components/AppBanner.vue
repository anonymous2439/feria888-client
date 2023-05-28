<template>
    <div id="banner">
        

            <div class="bnr-con">
                
                <div class="bnr-info">
                    <h2><span>Welcome to</span>Feria 888</h2>
                </div>
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
                    <SwiperSlide
                        v-for="(slide, idx) in 2"
                        :key="idx"
                        :style="`background-color: ${slide.bg}; color: ${slide.color}`"
                    >
                        
                            <figure><img src="~/assets/images/bnr_bg.jpg" /></figure>
                            
                        
                        
                        <div class="bnr-info">
                            <h2><span>Welcome to</span>Feria 888</h2>
                        </div>
                    </SwiperSlide>

                    <!-- useSwiper() within a swiper instance -->
                    </Swiper>
                    <marquee behavior="" direction="">test</marquee>
                </div>
            </div>
            
            <button @click="swiper.slideNext()">Next</button>
            <button @click="swiper.slidePrev()">Previous</button>

        
        
    </div>
</template>

<script setup>
    const swiper = useSwiper()
</script>


<style scoped>
#banner{margin: 40px 0;}
.bnr-con{position: relative;}
.bnr-bg { position: relative; box-sizing: border-box;overflow: hidden;background: #00000061;} 
 .bnr-bg figure img{filter: brightness(.9);width: 1920px;position: relative;left: 50%;transform: translateX(-50%);}
.bnr-info{position: absolute;top: 50%;left: 50px;}
 .bnr-info h2{font-size: 80px;}
 .bnr-info h2 span{font-family: 'open sans';font-size: 20px;display: block;}
 .bnr-bg marquee { background: #fff; color: #1a1a1a; padding: 10px 10px; border-radius: 5px; font-weight: 600; font-size: 20px; } 
 .swiper-slide {display: flex;justify-content: center;align-items: center;font-size: 18px;font-size: 4rem;font-weight: bold;font-family: 'Roboto', sans-serif;}
.swiper-wrapper {min-width: 100vh;width: 100vh;}
.swiper-cards {width: 240px;height: 240px;}
.swiper-cards .swiper-slide {border-radius: 6px;border: 1px solid black;}

 @media only screen and (max-width: 1000px) {
    #banner { border-bottom: 1px solid #ffffff1a; padding: 40px 0; } 
    .bnr-info { margin-top: 25px; text-align: center; } 
    .bnr-info h2 { font-size: 40px; } 
    .bnr-info h2 span { font-size: 18px; } 
}
@media only screen and (max-width: 800px) {
    .bnr-bg figure img{max-width: 200%;}
}
</style>