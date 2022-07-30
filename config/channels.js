export const channels = [
  {
    id: '-1001510060014',
    name: 'shadybekov_channel'
  }
];

export const getChannelById = async id => {
  return channels.find(el => el.id === id);
}
