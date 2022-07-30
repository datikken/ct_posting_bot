import {Markup} from "telegraf";
import {CallbackData} from '@bot-base/callback-data';

export const postData = new CallbackData('post', ['msg']);

export const setBotCommands = bot => {
  bot.start((ctx) => ctx.replyWithHTML(`😎 Hi buddy.️`,
    Markup.inlineKeyboard([
      [Markup.button.callback(`Create post`, postData.create({
        type: 'create',
        msg: 'Im groot!'
      }))],
    ])
  ));
};
