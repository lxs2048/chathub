import { FC, useCallback, useMemo } from 'react'
import cx from 'classnames'
import { ConversationContext, ConversationContextValue } from '~context'
import { BotId, CHATBOTS } from '~consts'
import Button from '~components/Button'
import ChatMessageList from './ChatMessageList'
import { useTranslation } from 'react-i18next'
import ChatMessageInput from './ChatMessageInput'

interface Props {
  botId: BotId//ai类型
  generating: boolean//生成中
  stopGenerating: () => void//停止生成
  onUserSendMessage: (input: string, botId: BotId) => void//收集发送信息
}
const marginClass = 'mx-5'
const ConversationPanel: FC<Props> = (props) => {
  const botInfo = CHATBOTS[props.botId]
  const { t } = useTranslation()
  const context: ConversationContextValue = useMemo(() => {
    return {}
  }, [])
  const onSubmit = useCallback(
    async (input: string) => {
      props.onUserSendMessage(input as string, props.botId)
    },
    [props],
  )

  return (
    <ConversationContext.Provider value={context}>
      <div className='flex flex-col overflow-hidden bg-primary-background h-full rounded-[20px]'>
        <div
          className={cx(
            'border-b border-solid border-primary-border flex flex-row items-center justify-between gap-2 py-3',
            marginClass,
          )}
        >
          <div className="flex flex-row items-center gap-2">
            <img src={botInfo.avatar} className="w-5 h-5 object-contain rounded-full" />
            <span className="font-semibold text-primary-text text-sm">{botInfo.name}</span>
          </div>
        </div>
        <ChatMessageList className={marginClass} />
        <div className={cx('mt-3 flex flex-col', marginClass, 'mb-3')}>
          <div className='flex flex-row items-center gap-[5px] mb-3'>
            <hr className="grow border-primary-border" />
          </div>
          <ChatMessageInput
            disabled={props.generating}
            placeholder={'Ask me anything...'}
            onSubmit={onSubmit}
            autoFocus={false}
            actionButton={
              props.generating ? (
                <Button
                  text={t('Stop')}
                  color="flat"
                  size={'normal'}
                  onClick={props.stopGenerating}
                />
              ) : (
                <Button text={t('Send')} color="primary" type="submit" />
              )
            }
          />
        </div>
      </div>
    </ConversationContext.Provider>
  )
}

export default ConversationPanel
