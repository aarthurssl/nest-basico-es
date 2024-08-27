import { Controller, Get, Post, Body, Render } from '@nestjs/common';

@Controller()
export class AppController {
  @Get()
  @Render('index')
  getForm() {
    return {};
  }

  @Post('calculate')
  @Render('result')
  calculateIMC(@Body() body) {
    const { weight, height } = body;
    const imc = weight / (height * height);
    return { imc: imc.toFixed(2) };
  }
}
