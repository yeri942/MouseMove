$(document).ready(() => {
    const textlist = ["HI👋", "everyone!", "HAVE", "A NICE", "DAY", "❤"];

    $(".mode_btn").on("click", (event) => {
        let target = $(event.target);
        let targetID = target.attr("id");
        $(".mode_btn").removeClass("on");
        target.addClass("on");
        $(".mouseMove_wrap").attr("class", "mouseMove_wrap");
        $(".mouseMove_wrap").addClass("mode" + targetID);
        $(".mm_txt").text(textlist[targetID - 1]);
        effect();
    });
    $(".move_block").mousemove((e) => {
        console.log(e.pageX + ", " + e.pageY);
    });
    const effect = () => {
        if ($(".mode_btn#1").hasClass("on")) {
            $(".mm_txt_back").remove();
            for (let index = 0; index < 10; index++) {
                $(".move_block").append('<div class="mm_txt_back">HI👋</div>');
            }

            console.log($(".mm_txt").position());
        } else {
            $(".mm_txt_back").remove();
        }
    };
    effect();
});
