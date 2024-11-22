$(function(){
    $(".main,.sub").on("mouseover",function(){
    $(".sub").stop().slideDown()
    //$(this).find(".sub").slideDown()
    })
    $(".main,.sub").on("mouseout",function(){
    $(".sub").stop().slideUp()
    //$(this).find(".sub").slideUp()
    })
    
    let index = 0
    const speed =500
    const time = 3000
    const $slide = $(".slide")
    const $container = $(".slide-container")
    const size = $slide.height()
    const count = $slide.length
    // $slide.not(":first").hide()
    $container.height(size*count)
    
    setInterval(function(){
        index = (index+1)%count
        $container.animate({
         top : -index*size
        },speed)
        // $slide.fadeOut(speed)
        // $slide.eq(index).fadeIn(speed)
    },time)
    
    $("#btn-notice").on("click",function(){
        $("#content-notice").show()
        $("#content-gallery").hide()
        $(".menu-item").removeClass("active")
        $(this).parent().addClass("active")
    })
    $("#btn-gallery").on("click",function(){
        $("#content-notice").hide()
        $("#content-gallery").show()
        $(".menu-item").removeClass("active")
        $(this).parent().addClass("active")
    })
    
    $(".btn-modal").on("click",function(){
        $("#modal").show()
    })
    $(".close").on("click",function(){
        $("#modal").hide()
    })
    
    
})