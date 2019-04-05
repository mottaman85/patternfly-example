import { CardConfigBase } from "../card-config-base";
import { CardAction } from '../card-action/card-action';
import { CardFilter } from '../card-filter/card-filter';

export class CardConfig extends CardConfigBase{

    action? : CardAction;
    filterPosition?: string;
    /**
     * A list of time frame filters
     */
    filters?: CardFilter[];  
    /**
     * Omit padding for customization
     */
    noPadding: boolean;
  
    /**
     * Sub-Title for the card
     */
    subTitle?: string;

}