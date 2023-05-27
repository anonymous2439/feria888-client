<template>
    <div id="banner">
        
        <div class="wrapper">
            <div class="bnr-con">
                <div class="bnr-bg">
                    <figure><img src="~/assets/images/bnr_bg.jpg" /></figure>
                    <marquee behavior="" direction="">test</marquee>
                </div>
                
                <div class="bnr-info">
                    <h2><span>Welcome to</span>Feria 888</h2>
                </div>
            </div>
        </div>
        
    </div>
</template>

<script setup>

</script>


<style scoped>
#banner{margin: 40px 0;}
.bnr-con{position: relative;}
.bnr-bg { position: relative; padding: 20px;box-sizing: border-box;border-radius: 10px;overflow: hidden;background: #00000061;} 
 .bnr-bg figure img{filter: brightness(.9);}
.bnr-info{position: absolute;top: 50%;left: 50px;}
 .bnr-info h2{font-size: 80px;}
 .bnr-info h2 span{font-family: 'open sans';font-size: 20px;display: block;}
 .bnr-bg marquee { background: #fff; color: #1a1a1a; padding: 10px 10px; border-radius: 5px; font-weight: 600; font-size: 20px; } 

 @media only screen and (max-width: 1000px) {
    #banner { border-bottom: 1px solid #ffffff1a; padding: 40px 0; } 
    .bnr-info { margin-top: 25px; text-align: center; position: static;} 
    .bnr-info h2 { font-size: 40px; } 
    .bnr-info h2 span { font-size: 18px; } 
}
@media only screen and (max-width: 800px) {

}
</style>