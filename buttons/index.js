import {channels} from "../config/channels.js";
import {channelsData} from "../commands/index.js";
import {Markup} from "telegraf";

export const getChannelsButtons = async () => {
  let res = [];
  channels.map(el => {
    res.push([Markup.button.callback(`${el.name}`,
      channelsData.create({
        action: 'send_to',
        id: el.id,
      })
    )])
  });
  return res;
};
