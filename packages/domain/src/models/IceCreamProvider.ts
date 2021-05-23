import { Entity } from "../utils.ts/Entity";
import { IceCream } from "./IceCream";

@Entity
export class IceCreamProvider {

    name!: string;

    providedIcecream!:  IceCream[];
   }
