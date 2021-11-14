const axios = require("axios");
const cheerio = require("cheerio");

const games = {
  'lol': {
    name: 'League of Legends',
    address: 'http://ddragon.leagueoflegends.com/cdn/11.22.1/data/en_US/champion.json',
    base: 'https://www.leagueoflegends.com'
  },
}

const getMeChampions = new Promise((resolve, reject) => {
  axios.get(games.lol.address)
    .then(response => {
      resolve(response.data.data);
    });
});

exports.findAll = (req, res) => {
  getMeChampions.then(champions => { res.send(champions) });
};

exports.findOne = (req, res) => {
  getMeChampions.then(champions => {
    const championId = req.params.id

    console.log('a')
    console.log(championId)
    // const re = champions.filter(champion => { champion.id = championId });
    console.log(re)
    res.send('a')
  });
};
