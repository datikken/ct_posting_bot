import {postData} from "../commands/index.js";
import { deunionize } from 'telegraf';

export const setBotActions = bot => {
  bot.action(
    postData.filter({
      action: 'create'
    }),
    async (ctx) => {
      const { msg } = postData.parse(
        deunionize(ctx.callbackQuery).data
      );

      console.log('action msg', msg);

      await ctx.reply('Here we are!');
    }
  );
};
