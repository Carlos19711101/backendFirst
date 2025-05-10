import { Controller, Get } from '@nestjs/common';

@Controller('tasks')
export class TasksController {

    @Get()
    HelloWorld() {
        return 'Hello World hay vamos mejorando a ver si aperndemos a hacer un backend'
    }
}
