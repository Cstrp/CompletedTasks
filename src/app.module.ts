import { Module } from '@nestjs/common';
import { AuthModule } from './auth/auth.module';
import { TelegramModule } from './telegram/telegram.module';

@Module({
	imports: [TelegramModule, AuthModule],
	controllers: [],
	providers: [],
})
export class AppModule {}
