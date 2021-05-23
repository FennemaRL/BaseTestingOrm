import { Entity } from "../utils.ts/Entity";
import { IceCreamProvider } from "./IceCreamProvider";

export const IceCreamFlavors = {
    Vanilla: 'vanilla',
    Chocolate: 'chocolate',
    Strawberry: 'straw-berry'
} as const;

export type IceCreamFlavor = typeof IceCreamFlavors[keyof typeof  IceCreamFlavors]
@Entity
export class IceCream {

 flavor!: IceCreamFlavor;

 timeToExpirate!: Date;

 weight!: number;

 reminderWeight!: number;

 shallDonateBeforeExpired!: Date;

 provider: IceCreamProvider;

}