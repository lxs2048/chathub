import { createContext } from 'react'

export interface ConversationContextValue {}

export const ConversationContext = createContext<ConversationContextValue | null>(null)
