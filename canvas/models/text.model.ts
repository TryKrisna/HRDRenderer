import { AUPP_FONTS, AUPP_TEXT_COLORS } from '../schemas/aupp.schema';
import { BACII_FONTS, BACII_TEXT_COLORS } from '../schemas/bacii.schema';
import { CADT_FONTS, CADT_TEXT_COLORS } from '../schemas/cadt.schema';

export interface PLACEHOLDER_TEXT {
    x?: number;
    y?: number;
    align?: 'left' | 'center' | 'right';
    margin?: {
        left?: number;
        right?: number;
        top?: number;
        bottom?: number;
    };
    textSize: number;
    textColor?: string | any;
    textFont?: string | any;
    textStyle?: 'regular' | 'bold' | 'italic';
    text: string;
    dataKeys?: string[];
}

export interface BACII_TEXT extends PLACEHOLDER_TEXT {
    textColor?: keyof typeof BACII_TEXT_COLORS;
    textFont?: keyof typeof BACII_FONTS;
}

export interface CADT_TEXT extends PLACEHOLDER_TEXT {
    textColor?: keyof typeof CADT_TEXT_COLORS;
    textFont?: keyof typeof CADT_FONTS;
}
export interface AUPP_TEXT extends PLACEHOLDER_TEXT {
    textColor?: keyof typeof AUPP_TEXT_COLORS;
    textFont?: keyof typeof AUPP_FONTS;
}
