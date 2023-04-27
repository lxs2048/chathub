import ConversationPanel from "~components/Chat/ConversationPanel"

function ChatPage() {
    const chat = {
        sendMessage: ()=>{},
        resetConversation: ()=>{
            console.log('clear');
        },
        generating: false,
        stopGenerating: ()=>{
            console.log('stop');
        },
    }
    return (
        <div className="overflow-hidden">
            <ConversationPanel
                botId="chatgpt"
                generating={chat.generating}//正在生成
                stopGenerating={chat.stopGenerating}
                onUserSendMessage={chat.sendMessage}
            />
        </div>
    )
}

export default ChatPage