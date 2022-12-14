import { useState } from 'react'
import Modal from '../Modal'
import Emoji from '../Emoji'
import EmojiList from './EmojiList'
import { Container, EmojiContainer } from './AvatarPick.styles'

const DEFAULT_AVATAR_LIST = ['π§πΌ', 'π©πΌβπ¦°', 'π©πΌ', 'π¨πΏ', 'π©πΏ', 'πΆπ½', 'π΅πΌ', 'π§πΌ', 'π¨πΌ', 'π¨πΌβπ¦°', 'π¨πΌβπ¦²', 'π€ΆπΌ']

interface Props {
  setAvatar: (data: string)=>void
  avatarList?: string[]
  avatar?: string
}

export default function ({
  avatar,
  avatarList = DEFAULT_AVATAR_LIST,
  setAvatar,
}: Props) {
  const [showEmojiList, setShowEmojiList] = useState<boolean>(false)
  if (!avatar) {
    setAvatar('π΄πΌ')
  }

  const clickAction = (data: string) => {
    if (setAvatar) setAvatar(data)
    setShowEmojiList(false)
  }

  return (
    <Container>
      <EmojiContainer style={{ position: 'absolute' }}>
        <Emoji
          emoji={avatar || ''}
          size='medium'
          action={() => setShowEmojiList(true)}
        />
      </EmojiContainer>
      {showEmojiList && (
        <Modal setIsOpen={setShowEmojiList}>
          <EmojiList emojiList={avatarList} action={clickAction} />
        </Modal>
      )}
    </Container>
  )
}
