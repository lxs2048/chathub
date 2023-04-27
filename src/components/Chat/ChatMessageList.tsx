import { FC } from "react"
import cx from 'classnames'
interface Props {
  className?: string
}

const ChatMessageList: FC<Props> = (props) => {
  return (
    <div className="overflow-auto h-full">
      <div className={cx('flex flex-col gap-3 h-full', props.className)}>
        {new Array(100).fill(0).map((item,index)=>{
          return <div key={index}>{index}</div>
        })}
      </div>
    </div>
  )
}

export default ChatMessageList
