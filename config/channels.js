export const channels = [
  {
    id: '-1001510060014',
    name: 'shadybekov_channel'
  },
  {
    id: '1164935460',
    name: 'Cointelegraph 华语'
  },
  {
    id: '-1001755824176',
    name: 'CointelegraphFR'
  },
  {
    id: '-1001431912403',
    name: 'Cointelegraph 코리아'
  },
  {
    id: '-1001479557337',
    name: 'Cointelegraph Türkçe'
  }
];

export const getChannelById = async id => {
  return channels.find(el => el.id === id);
}
