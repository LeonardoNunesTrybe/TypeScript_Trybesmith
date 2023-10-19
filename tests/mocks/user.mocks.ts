import { User } from "../../src/types/User"

const validUser: User = {
    id: 1,
    username: 'Hagar',
    vocation: 'Guerreiro',
    level: 10,
    password: '$2a$10$oxSr/Mp4iMgGrooCmtbIZ.mj0lZSG4efLgr60FcWfu2zIc3s3u1bu'
}

const validLogin = {
    username: 'Hagar',
    password: 'terrível'
}

export default {
    validUser,
    validLogin,
}