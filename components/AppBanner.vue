<template>
    <div id="banner">
        
        <div class="wrapper">
            <div class="bnr-con">
                <div class="bnr-bg">
                    <img src="~/assets/images/bnr_bg.jpg" />
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
.bnr-bg { position: relative; padding: 20px;box-sizing: border-box;border-radius: 10px;overflow: hidden;} 
 .bnr-bg::before { content: ""; background: #00000061; position: absolute; top: 0; left: 0; height: 100%; width: 100%; } 
.bnr-info{position: absolute;top: 50%;left: 50px;}
 .bnr-info h2{font-size: 80px;}
 .bnr-info h2 span{font-family: 'open sans';font-size: 20px;display: block;}

 @media only screen and (max-width: 1000px) {
    #banner { border-bottom: 1px solid #ffffff1a; padding: 40px 0; } 
    .bnr-info { margin-top: 25px; text-align: center; position: static;} 
    .bnr-info h2 { font-size: 40px; } 
    .bnr-info h2 span { font-size: 18px; } 
}
@media only screen and (max-width: 800px) {

}
</style>