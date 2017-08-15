$(document).ready(function() {
    var plinks = [{
        name: 'Friggz',
        plink: 'http://steamcommunity.com/profiles/76561198266927056/'
    }, {
        name: 'Visual',
        plink: 'https://steamcommunity.com/profiles/76561197966641177'
	    }, {
        name: 'Mafia',
        plink: 'https://steamcommunity.com/profiles/76561198195044450'
    }, {
		name: 'exo',
        plink: 'https://steamcommunity.com/profiles/76561198103443355'
    }, {
        name: 'AxB',
        plink: 'https://steamcommunity.com/profiles/76561198404680393/'
    }, {
        name: 'DU DU DU',
        plink: 'http://steamcommunity.com/profiles/76561198051193400/'
    }, {
        name: 'n0de',
        plink: 'http://steamcommunity.com/profiles/76561197962084727/'
	}, {
        name: 'somber',
        plink: 'https://steamcommunity.com/profiles/76561198311155041/'
	}, {
        name: 'Maestro',
        plink: 'https://steamcommunity.com/profiles/76561198138058643/'
	}, {
        name: 'Lolzy',
        plink: 'https://steamcommunity.com/profiles/76561193811180130/'
	}, {
        name: 'dop',
        plink: 'https://steamcommunity.com/profiles/76561198190916733/'
	}, {
        name: 'NoHax',
        plink: 'https://steamcommunity.com/profiles/76561198154363115/'
	}, {
        name: 'cha',
        plink: 'https://steamcommunity.com/profiles/76561198249090462/'
	}, {
        name: 'Ghostie',
        plink: 'https://steamcommunity.com/profiles/76561198169876250/'
	}, {
        name: 'CyberGhost',
        plink: 'https://steamcommunity.com/profiles/76561198193578958/'
       }, ];
    for (var i in plinks) {
        var plink = plinks[i];
        $('#marquee').append('<a href="' + plink.plink + '">' + plink.name + '</a>');
        var plink = $('#marquee').children('a').last();
        if (i != plinks.length - 1) {
            $('#marquee').append(' - ')
        }
    }
    $('#marquee').marquee({
        duration: 15000,
        gap: 310,
        delayBeforeStart: 0,
        direction: 'left',
        duplicated: true
    })
});
