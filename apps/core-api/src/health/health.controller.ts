import { Controller, Get } from '@nestjs/common';

@Controller('health')
export class HealthController {
  @Get()
  check(): { status: string; service: string; uptime: number } {
    return {
      status: 'ok',
      service: 'core-api',
      uptime: Math.floor(process.uptime()),
    };
  }
}
