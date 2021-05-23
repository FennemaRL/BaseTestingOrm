import { IceCreamFlavors, IceCreamProvider, Domain} from '@icecreamlab/domain';
import { Controller, Get } from '@nestjs/common';
import { IceCream } from './model';

@Controller({ path: 'ice-cream'})
export class IceCreamController {
  @Get()
  getHello() {
    return {
      flavor: IceCreamFlavors.Strawberry,
      provider: { name: 'Lucas', providedIcecream: [] } as IceCreamProvider,
      reminderWeight: 0,
      shallDonateBeforeExpired: new Date(),
      timeToExpirate: new Date(),
      weight: 20,
    } as IceCream;
  }
}
