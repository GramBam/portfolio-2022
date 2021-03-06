import Image from 'next/image';
import desktopStyles from '../../styles/Desktop.module.css'

export interface ShortcutProps {
  img: string
  title: string;
  id: number
  cb: Function
}

function Shortcut({ img, title, id, cb }: ShortcutProps) {

  const openWindow = () => {
    cb(id, 'show')
  }

  if (title === 'Languages') {
    title = 'Languages & Frameworks'
  }

  return (
    <div className={desktopStyles.shortcut} onTouchStart={openWindow} onDoubleClick={openWindow}>
      <Image src={img} alt="img" width={35} height={35} />
      <p className={desktopStyles.shortcutTitle}>{title}</p>
    </div>

  )
}

export default Shortcut