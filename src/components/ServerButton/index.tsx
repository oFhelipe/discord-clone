import { Button } from "./styles"
import rocketseat from '../../assets/icons/rocketseat.svg'

export interface ServerButtonProps {
  selected?: boolean
  isHome?: boolean
  hasNotifications?: boolean
  mentions?: number
}

 const ServerButton = ({
   hasNotifications,
   isHome,
   mentions,
   selected
 }: ServerButtonProps) => {
   return (
    <Button
      isHome={isHome}
      hasNotifications={hasNotifications}
      mentions={mentions}
      className={selected ? 'active' : ''}
      >
      {isHome 
        && 
        <img 
          alt={`Logo da rocketseat, 
            uma especide de foguete 
            subindo na diagonal onde na 
            parte de cima do foguete é 
            um acento de foguete`} 
          src={rocketseat}/>
      }
    </Button>
   )
 }

 export default ServerButton
