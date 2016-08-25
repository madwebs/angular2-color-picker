import { ColorPickerService, Rgba } from 'angular2-color-picker';
export declare class Cmyk {
    c: number;
    m: number;
    y: number;
    k: number;
    constructor(c: number, m: number, y: number, k: number);
}
export declare class AppComponent {
    private cpService;
    constructor(cpService: ColorPickerService);
    private color;
    private color2;
    private color3;
    private color4;
    private color5;
    private color6;
    private color7;
    private color8;
    private color9;
    private cmyk;
    onChangeColor(color: string): Cmyk;
    rgbaToCmyk(rgba: Rgba): Cmyk;
}
