import {Domain, IceCreamFlavor} from '@icecreamlab/domain';
import { Entity,Property, OneToMany,PrimaryKey } from '@mikro-orm/core';
import { IceCream } from '../ice-cream/model';
@Entity()
export class IceCreamProvider extends Domain.IceCreamProvider{
    @PrimaryKey()
    id:number;

    @Property()
    flavor!:IceCreamFlavor;

    @OneToMany(()=>IceCream, iceCream => iceCream.provider)
    provider!: IceCream;

}
