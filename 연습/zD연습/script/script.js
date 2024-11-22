$(function(){
    $(".main").on("mouseover",function(){
        $(this).find(".sub").stop().slideDown()
    })
    $(".main").on("mouseout",function(){
        $(this).find(".sub").stop().slideUp()
    })
    $(".main1, .sub1").on("mouseover",function(){
        $(this).parent().find(".sub1").stop().slideDown()
    })
    $(".main1, .sub1").on("mouseout",function(){
        $(this).parent().find(".sub1").stop().slideUp()
    })


    let index = 0
    const speed = 500
    const time = 3000
    const $slide = $(".slide")
    const $contanier = $(".slide-container")
    const size = $slide.width()
    const count = $slide.length
    $slide.not(":first").hide()
    $contanier.width(size*count)

    setInterval(function(){
        index = (index+1) % count
        // $contanier.animate({
        //     left : -index*size
        // },speed)
        $slide.fadeOut(speed)
        $slide.eq(index).fadeIn(speed)
    },time)

    $("#btn-notice").on("click",function(){
        $("#notice-content").show()
        $("#gallery-content").hide()
        $(".menu-item").removeClass("active")
        $(this).parent().addClass("active")
    })
    $("#btn-gallery").on("click",function(){
        $("#notice-content").hide()
        $("#gallery-content").show()
        $(".menu-item").removeClass("active")
        $(this).parent().addClass("active")
    })

    $("#btn-modal").on("click",function(){
        $(".modal").show()
    })
    $("#close").on("click",function(){
        $(".modal").hide()
    })
})