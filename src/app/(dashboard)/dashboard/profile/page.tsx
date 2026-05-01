import Container from '@/components/dash/Container'
import { Avatar } from '@mui/material'

import default_Profile from "../../../../../public/default-profile.jpg"

const ProfilePage = () => {
  return (
    <Container>
        <div>
            <Avatar sx={{width : '300px' , height : '300px'}} src={default_Profile.src} >
                P
            </Avatar>
        </div>
    </Container>
  )
}

export default ProfilePage