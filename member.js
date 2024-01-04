function skillsMember() {
    var $skills = $('.skills');
    var $skill = $('.skill');
    var $skillBar = $('.skill-bar');
    var $skillPercent = $('.skill-percent');

    // Animate skill bars
    $skill.each(function () {
        var $this = $(this);
        var percent = $this.attr('data-percent');

        $this.waypoint(function () {
            $skillBar.css('width', percent + '%');
            $skillPercent.addClass('in');
        }, {
            offset: '100%'
        });
    });

    // Animate skills
    $skills.waypoint(function () {
        $skills.addClass('in');
    }, {
        offset: '100%'
    });
}