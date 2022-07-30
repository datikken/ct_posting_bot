import {Markup} from "telegraf";
import {CallbackData} from '@bot-base/callback-data';
import {kbOptions} from "../config/kb.js";

export const postData = new CallbackData('post', ['action']);
export const channelsData = new CallbackData('channels', ['action', 'id']);

export const setBotCommands = bot => {
  bot.start((ctx) => ctx.replyWithHTML(`😎 Hi buddy.️`,
    Markup.inlineKeyboard([
      [
        Markup.button.callback(`Create post`, postData.create({
          action: 'create'
        })),
      ],
      [
        Markup.button.callback(`Scheduled post`, postData.create({
          action: 'scheduled'
        })),
        Markup.button.callback(`Edit post`, postData.create({
          action: 'edit'
        }))
      ],
      [
        Markup.button.callback(`Channel stats`, postData.create({
          action: 'stats'
        })),
        Markup.button.callback(`Settings`, postData.create({
          action: 'settings'
        })),
      ]
    ])
  ));
  kbOptions.map(optn => {
    bot.hears(optn, async ctx => {
      if(ctx.message.text === 'Cancel') {
        ctx.reply('No problem', Markup.removeKeyboard(true))
      } else {
        ctx.reply(`Okay okay ${optn}`);
      }
    })
  })
};
