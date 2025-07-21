import { Body, Controller, Post } from '@nestjs/common';
import { OrderService } from './order.service';
import { CreateOrderDTO } from './dto/order.dto';

@Controller('order')
export class OrderController {
  constructor(private orderService: OrderService) {}

  @Post()
  async createOrder(@Body() order: CreateOrderDTO) {
    const items = await this.orderService.createOrder(order);

    return {
      total: items.length,
      items,
    };
  }
}
