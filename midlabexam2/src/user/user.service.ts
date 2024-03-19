import { Injectable, ConflictException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, Connection, MoreThan } from 'typeorm';
import { User } from './entities/user.entity';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private usersRepository: Repository<User>,
    private connection: Connection,
  ) { }

  async registerUser(createUserDto: CreateUserDto): Promise<User> {
    const { username, email, password, userType } = createUserDto;

    const existingUser = await this.usersRepository.findOne({
      where: [{ username }, { email }],
    });

   

    const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(password, saltOrRounds);
    const newUserDto = {
      ...createUserDto,
      password: hashedPassword,
      userType: 'admin',
    };

    const newUser = this.usersRepository.create(newUserDto);
    const savedUser = await this.usersRepository.save(newUser);

    await this.create(savedUser.company);

    return savedUser;
  }

  





  if (!user) {
    throw new Error('Invalid or expired password reset token');
  }

  const saltOrRounds = 10;
    const hashedPassword = await bcrypt.hash(newPassword, saltOrRounds);

 
}

}
