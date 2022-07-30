import {Markup} from "telegraf";
import {channels} from "../config/channels.js";
import {channelsData} from "../commands/index.js";
import {kbOptions} from "../config/kb.js";

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

export const suggestKeyboardOptions = async (ctx, msg) => {
  return await ctx.replyWithHTML(msg ?? `Ok.`,
    Markup.keyboard(kbOptions, {
      columns: 4
    }),
  );
}
