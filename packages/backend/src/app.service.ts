import {
  
  IceCreamFlavors,
  IceCreamProvider,
} from '@icecreamlab/domain';
import { Injectable } from '@nestjs/common';
@Injectable()
export class AppService {
  getHello() {
    return {
      flavor: IceCreamFlavors.Chocolate,
      weight: 20,
      provideBy: { name: 'lu',providedIcecream:[] } as IceCreamProvider,
    } ;
  }
}
