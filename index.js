const homePage = $("#home");
const optionsPage = $("#options");
const freeGiftBtns = $("#free-gift-div");
const promotionBtns = $("#promotion-div");
const videoPlayer = $("#video");

$(document).ready(() => {
    playVideoBG();
})

$(".btn").on("click", (e) => {
    const btnType = e.target.alt;
    const btnCode = e.currentTarget.id;
    videoPlayer[0].pause();
    videoPlayer.addClass("hidden");

    switch (btnCode) {
        case "free-gift":
            homePage.addClass("hidden");
            optionsPage.removeClass("hidden");
            freeGiftBtns.removeClass("hidden");
            promotionBtns.addClass("hidden");
            break;
            
        case "promotion":
            homePage.addClass("hidden");
            optionsPage.removeClass("hidden");
            freeGiftBtns.addClass("hidden");
            promotionBtns.removeClass("hidden");
        break;

        case "home-btn":
            playVideoBG();
            homePage.removeClass("hidden");
            optionsPage.addClass("hidden");
            freeGiftBtns.addClass("hidden");
            promotionBtns.addClass("hidden");
            videoPlayer.removeClass("hidden")
            break;

        // case "logo1":
        //     playVideo(btnCode, btnType)
        //     break;

        // case "logo2":
        //     console.log(btnCode, btnType)
        //     break;

        // case "logo3":
        //     console.log(btnCode, btnType)
        //     break;

        // case "logo4":
        //     console.log(btnCode, btnType)
        //     break;

        // case "logo5":
        //     console.log(btnCode, btnType)
        //     break;

        // case "logo6":
        //     console.log(btnCode, btnType)
        //     break;

        // case "logo7":
        //     console.log(btnCode, btnType)
        //     break;

        // case "logo8":
        //     console.log(btnCode, btnType)
        //     break;

        // case "logo9":
        //     console.log(btnCode, btnType)
        //     break;

        // case "logo10":
        //     console.log(btnCode, btnType)
        //     break;
    
        default:
            playVideo(btnCode, btnType)
            break;
    }
})

function playVideo(code, type) {
    const url = `Video\\${type}\\${code}.mp4`;
    videoPlayer.prop("autoplay", false);
    videoPlayer.prop("loop", false);
    videoPlayer.prop("muted", false);
    setTimeout(() => {
        hideAll();
        videoPlayer.removeClass("hidden");
        videoPlayer.attr("src", url);
        videoPlayer[0].load();
        videoPlayer[0].play().catch(err => console.log(`Video Error: ${err}`));
    }, 150)

    videoPlayer.on("ended", () => {
        setTimeout(() => {
            videoPlayer[0].pause();
            optionsPage.removeClass("hidden");
            videoPlayer.addClass("hidden")
            $(`#${type}-div`).removeClass("hidden");
        }, 150)
    })
}

function playVideoBG() {
    const url = "Video\\bg-video\\sample.mp4";
    videoPlayer.prop("autoplay", true);
    videoPlayer.prop("loop", true);
    videoPlayer.prop("muted", true);
    videoPlayer.attr("src", url);
    videoPlayer[0].load();
    videoPlayer[0].play().catch(err1 => console.log(`Video BG Error: ${err1}`));
}

function hideAll() {
    homePage.addClass("hidden");
    optionsPage.addClass("hidden");
}