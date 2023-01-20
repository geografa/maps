window.addEventListener('DOMContentLoaded', function(e) {

    var waterfall = new Waterfall({ minBoxWidth: 200 });
    waterfall.addBox(newNode());
    

    function newNode() {
        // var size = ['660x250', '660x250', '660x250', '660x250', '660x250'];
        // create array of map styles
        const styleURL = [
            'ciyp4bjnd00042rl3yckm2k3l',
            'cjjfuvnqz7i762sp816iusqk5',
            'ckeepi9oj03rm1aoykj4ni5io',
            'ckqvm7trk0yce17rvpyn4kkwn',
            'cjuypj8xq2a681hmgviug06md',
            'cky0oqe5003cy15nzgeeld25j',
            'cj23ol2ed000u2rr25s4yv3s5',
            'ck12rzqbx0eon1cplv5usczdi',
            'cio634qhz0008afnm4sqwpfts',
            'cktyus62m0p8l18uho81qlf1p',
            'cj1v81h91000d2sql97n8vhdp',
            'cj33gckvf00362rls3uzns8ko',
            'cjgzpz203000a2sm2i2jp8oiv',
            'cjuvt8e5p891v1fnu67a0q3ks',
            'cjic83kc70aq22sp4ofyqjoqt',
            'cjh3wky600v462ss0lv3j2qsr'
        ];

        const styleName = [
            'Strava 2022',
            'Moves 2019',
            'Runner',
            'Miami Nice',
            'North Star',
            'Mt. Hood Meadows',
            'Portland Soccer Pitches',
            'PDX Carpet',
            'Orienteering',
            'Portland Lidar',
            'ColourLovers',
            'Govt Cove',
            'Oregon Geology',
            'Europe 2019',
            'World Cup Qualifiers, 2018',
            'World Cup Finals, 2018']

        const stylePosition = [
                '-122.6648,45.4883,12.7,306,38',
                '-122.5982,45.5217,10.08,0,41',
                '7.2566,43.7085,11.98,0,60',
                '-80.1335,25.7687,15.5,0,60',
                '109.7108,-0.7896,4,12,47',
                '-121.6862,45.3622,13.49,332,60',
                '-122.684,45.5981,14,316,54',
                '-122.5958,45.5877,13.04,316,54',
                '-121.9875,45.6288,15.19,0,22',
                '-122.6772,45.4884,13.35,0,22',
                '-87.6368,41.8793,15,0,60',
                '-121.845280,45.690162,14.9,0',
                '-121.6903,45.3786,10.83,0',
                '1.4209,45.2567,4.92,0',
                '1.4209,45.2567,4.92,0',
                '1.4209,43,4,4,60'
                //3.47/30.2/43.39/-33.7/60
        ]

        // for each style create a new node
        var box = document.createElement('div');
            box.className = 'wf-box';

        for (let index = 0; index < styleURL.length; index++) {
            const styelElement = styleURL[index];
            const position = stylePosition[index];
            
            var image = document.createElement('img');
            // use the styeElement to create a link to the style
            image.src = "https://api.mapbox.com/styles/v1/grafa/" + styelElement + "/static/" + position + "/660x250?access_token=pk.eyJ1IjoiZ3JhZmEiLCJhIjoiY2ptYjNtZWxnMDBrdDNwbnVicGJzOWg2NyJ9.9OulyCe3kEqMAXPbx1mKUA";
            // image.alt = styleName[element];
            box.appendChild(image);


           var content = document.createElement('div');
            content.className = 'content';
            var title = document.createElement('h3');
            // use the styleElement to create a link to the style
            var link = document.createElement('a');
            link.href = "https://api.mapbox.com/styles/v1/grafa/" + styelElement + ".html?fresh=true&title=view&access_token=pk.eyJ1IjoiZ3JhZmEiLCJhIjoiY2ptYjNtZWxnMDBrdDNwbnVicGJzOWg2NyJ9.9OulyCe3kEqMAXPbx1mKUA";
            link.target = "_blank";
            link.appendChild(document.createTextNode(styleName[index]));
            title.appendChild(link);
            content.appendChild(title);
            link.appendChild(image);
            var p = document.createElement('p');
            // p.appendChild(document.createTextNode('Content here'));
            content.appendChild(p);
            box.appendChild(content);
        }
        return box;
    }

});
