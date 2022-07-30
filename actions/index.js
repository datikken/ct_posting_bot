import {postData} from "../commands/index.js";
import { deunionize } from 'telegraf';

export const setBotActions = bot => {
  bot.action(
    postData.filter({
      action: 'create'
    }),
    async (ctx) => {
      const { action } = postData.parse(
        deunionize(ctx.callbackQuery).data
      );
      await ctx.reply('Creating post!');
    }
  );
  bot.action(
    postData.filter({
      action: 'scheduled'
    }),
    async (ctx) => {
      const { action } = postData.parse(
        deunionize(ctx.callbackQuery).data
      );
      await ctx.reply('Scheduled:');
    }
  );
  bot.action(
    postData.filter({
      action: 'edit'
    }),
    async (ctx) => {
      const { action } = postData.parse(
        deunionize(ctx.callbackQuery).data
      );
      await ctx.reply('Edit:');
    }
  );
  bot.action(
    postData.filter({
      action: 'stats'
    }),
    async (ctx) => {
      const { action } = postData.parse(
        deunionize(ctx.callbackQuery).data
      );
      await ctx.reply('Stats:');
    }
  );
  bot.action(
    postData.filter({
      action: 'settings'
    }),
    async (ctx) => {
      const { action } = postData.parse(
        deunionize(ctx.callbackQuery).data
      );
      await ctx.reply('Settings:');
    }
  );
};
