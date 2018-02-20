
persistedContentItems = {};


//top level menu button hover effect
$(".div-specs-top-level-menu-button")
    .hover(function () {
        // do not apply if the button is active
        if ($(this).hasClass("active")) {
            return;
        } else {
            $(this).addClass("hover");
        }
        },
    function() {
        $(this).removeClass("hover");
    });

//sub-menu button hover effect
$(".div-specs-sub-menu-category-button")
    .hover(function () {
            $(this).addClass("hover");
        },
        function () {
            $(this).removeClass("hover");
        });

$(".div-specs-top-level-menu-button-container").click(function () {

    // remove the hover effect
    $(this).children('div[class*="button"]')
        .removeClass("hover");
    // remove any existing active effects
    $('div[class*="div-specs-top-level-menu-button"].active')
        .removeClass("active");
    // apply the active effect
    $(this).children(".div-specs-top-level-menu-button")
        .addClass("active");


    if ($(".div-specs-content-container").is(":hidden")) {
        console.log("hidden!");
        $("#section4").removeClass("div-section4-normal")
        $("#section4").css("height", "+=485");
        $(".div-specs-content-container").show();
        $(".div-specs-second-level-menu-container").show();
        $(".div-specs-second-level-content").show();
        //$(".div-specs-sub-menu").show();
        //scroll up so the interaction is fully visible
        $('html, body').animate({
            scrollTop: $(".div-specs-top-level-menu").offset().top - 70
        }, 1000);
        //(Steve, 2011)
    }
    var selected = $(this).attr("id");

    // dont take any more action if the target sub menu is already visible
    var targetSubMenu = $('div[class*="specs-sub-menu-category"]')
        .filter(function() {
            return $(this).attr("class").indexOf(selected) > -1;
        });

    var targetSubMenuItem = targetSubMenu[0];
    var subMenuButtonCssDisplayValue = $(targetSubMenuItem).css("display");

    if (subMenuButtonCssDisplayValue === "none") {
        // show the associated sub menu
        // hide the currently active (visible) sub menu
        $('div[class*="specs-sub-menu-category"].active').removeClass("active");
        // hide the currently active content item
        var activeContentItem = $('div[class*="specs-content"].active');
        $(activeContentItem).removeClass("active");
        // show all sub menu elements matching the target category
        var subMenuElements = $('div[class*="specs-sub-menu-category"]')
            .filter(function() {
                return $(this).attr("class").indexOf(selected) > -1;
            });
        subMenuElements.addClass("active");
        // show all the child span elements
        subMenuElements
            .children("span")
            .addClass("active");
        // set the default to 'item1' if there isnt an item saved
        var persistedCategoryItem = persistedContentItems[selected];
        if (persistedCategoryItem === undefined) {
            // set the default target category content item
            $('div[class*="specs-content-category"]')
                .filter(function () {
                    var defaultItem = selected.split("-").pop() + "-item1";
                    return $(this).attr("class").indexOf(defaultItem) > -1;
                })
                .addClass("active");
            // save the visible (active) content item to set as default for this category
        } else {
            $(persistedCategoryItem).addClass("active");
        }




    }

    
});

$(".div-specs-sub-menu-category-button").click(function () {

    // remove the hover effect
    $(this).removeClass("hover");
    // remove any existing active effects
    $(".div-specs-sub-menu-category-button.active")
        .removeClass("selected");
    // apply the active effect
    $(this).addClass("selected");

    var selected = $(this).attr("id");
    var category = $('div[class*="top-level-menu-button"]')
        .filter(function() {
            var category = selected.split("-")[2];
            console.log(this);
            return this.id.indexOf(category) > -1;
        }); 

    $('div[class*="specs-content-category"].active').removeClass("active");
    var currentContentItem = $('div[class*="specs-content-category"]')
        .filter(function() {
            return $(this).attr("class").indexOf(selected) > -1;
        })
        .addClass("active");
    persistedContentItems[category.attr("id")] = currentContentItem;


});

$(".div-specs-content-close").click(function() {
    if ($(".div-specs-content-container").is(":visible")) {
        console.log("reset the interaction!");
        $("#section4").addClass("div-section4-normal");
        $("#section4").css("height", "");
        $(".div-specs-content-container").hide();
        //$(".div-specs-content-container *").hide();
        $.smoothScroll({
            scrollTarget: "#specs",
            speed: 1000
        });
    }
})