import {Domain, IceCreamFlavor} from '@icecreamlab/domain';
import { Entity,Property, ManyToOne, PrimaryKey} from '@mikro-orm/core';
import { IceCreamProvider } from '../ice-cream-provider/model';
@Entity()
export class IceCream extends Domain.IceCream{
    @PrimaryKey()
    id:number;
    
    @Property()
    flavor!:IceCreamFlavor;

    @ManyToOne(()=>IceCreamProvider)
    provider: IceCreamProvider

    @Property()
    weight!:number;

    @Property({fieldName: 'reminder_weight'})
    reminderWeight!:number

    @Property()
    shallDonateBeforeExpired!:Date;

}
