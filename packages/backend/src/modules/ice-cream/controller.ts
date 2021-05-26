import { IceCreamFlavors,} from '@icecreamlab/domain';
import { Controller, Get } from '@nestjs/common';
import { IceCreamProvider } from '../ice-cream-provider/model';
import { IceCream } from './model';
import { MikroORM } from '@mikro-orm/core';
import { EntityManager } from '@mikro-orm/knex'; // Import EntityManager from your driver package or `@mikro-orm/knex`


@Controller({ path: 'ice-cream'})
export class IceCreamController {
  constructor(private readonly orm: MikroORM,
    private readonly em: EntityManager) {
}
  @Get()
  getHello() {
    this.em.findOne(IceCream,{ flavor:IceCreamFlavors.Strawberry},{})
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
