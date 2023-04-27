import { chatgptLogo } from "~components/AppIcon/svgPathSet";

export const CHATGPT_HOME_URL = 'https://chat.openai.com'

export const CHATGPT_API_MODELS = ['gpt-3.5-turbo', 'gpt-4', 'gpt-4-32k']

export type BotId = 'chatgpt'

export const CHATBOTS: Record<BotId, { name: string; avatar: any }> = {
    chatgpt: {
      name: 'ChatGPT',
      avatar: chatgptLogo,
    },
}