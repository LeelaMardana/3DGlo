import { timer } from './modules/timer';
import { menu } from './modules/menu';
import { modal } from './modules/modal';
import { validation } from './modules/validation';
import { tabs } from './modules/tabs';
import { notslider } from './modules/notslider';
import { calc } from './modules/calc';
import { swiper } from './modules/swiper';

timer('03 July 2023 20:16');
menu();
modal();
validation();
tabs();
notslider('portfolio', 5000); //notslider name/ time interval
calc();
swiper();
