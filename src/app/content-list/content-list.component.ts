import { Component, ɵisListLikeIterable } from '@angular/core';
import { IContent } from '../models/icontent';

@Component({
  selector: 'app-content-list',
  templateUrl: './content-list.component.html',
  styleUrls: ['./content-list.component.scss']
})
export class ContentListComponent {
  contentList: IContent[] = [
    { id: 1, name: "Sourceone V3 5” Frame", author: "NA", imgSrc: "sourceone.jpg", type: "frame", tags: ["5 inch", "carbon fiber"] , description: "The SOURCE ONE is a wide-stance X configuration frame, popular for freestyle or free-range acrobatic flying. It is built to withstand harsh crashes and abuse. It fits and protects all the classic FPV components and is optimized for light weight. The SOURCE ONE is a perfect everyday workhorse for casual FPV flying and competitive freestyle."},
    { id: 2, name: "SpeedyBee F405 V3 BLS 3-6S 30x30 Stack/Combo", author: "NA", imgSrc: "speedybee.webp", type: "FC/ESC", tags: ["F405", "30x30"], description: "The Speedy Bee F405 50A Stack V3 includes all the features a user would expect from a modern flight controller and ESC stack, but at an incredible price.  The F405 V3 flight controller features the STM32F405 MCU, an onboard 4-level battery life indicator, a Micro-SD card slot for Blackbox logging, 4 groups of LED strip pads, a DJI plug for digital quads, and built-in Bluetooth for wireless configuration through the SpeedyBee App." },
    { id: 3, name: "EMAX ECO II Series 2306 2400Kv Motor", author: "NA", imgSrc: "emax2306.webp", type: "motor", tags: ["2400kv", "brushless"], description: "The engineers at EMAX are always seeking ways to design the ultimate motor with brushless technology. In their efforts, they produced the ECO II Series, a new line of brushless motors further improving on the performance and durability while retaining the same affordability."},
    { id: 4, name: "Foxeer Razer Mini 1200TVL 4:3 PAL/NSTC CMOS FPV Camera", author: "NA", imgSrc: "razormini.webp", type: "camera", tags: ["1200 TVL", "4:3", "CMOS"], description: "The Foxeer Razer is an incredible value! The image quality and performance are on par with much more expensive cameras. This is the new benchmark for a budget camera. "},
    { id: 5, name: "JHEMCU 25-600MW 5.8GHZ MMCX VTX W/ IRC TRAMP", author: "NA", imgSrc: "jhemcu.jpg", type: "VTx", tags: ["600mw", "5.8Ghz"], description: "JHEMCU has a perfect VTX to add to your next build. The 20x20 mounting holes make it able to be mounted in most frames. With the 600mw output and the IRC Tramp control, this VTX has just about everything you could need."},
    { id: 6, name: "HQ Prop Ethix P3 5.1x3x3 Tri-Blade", author: "NA", imgSrc: "hqprop.webp", type: "prop", tags: ["tri-blade"], description: "A light pitch prop that's as smooth as peanut butter."},
    { id: 7, name: "BetaFPV ELRS Lite 2.4GHz Receiver", author: "NA", imgSrc: "betafpv", type: "receiver", tags: ["2.4Ghz", "ExpressLRS"], description: "BETAFPV Lite receiver is based on the ExpressLRS project, an open-source RC link for RC applications. ExpressLRS aims to achieve the best possible link performance in both speeds, latency, and range. This makes ExpressLRS one of the fastest RC links available while still offering long-range performance."},
    { id: 11, name: "NO Description, NO Description", author: "NA", imgSrc: "betafpv", type: "receiver", tags: ["2.4Ghz", "ExpressLRS"]},
    { id: 12, name: "NO Tags, NO Tags, NO Tags", author: "NA", imgSrc: "betafpv", type: "receiver", description: "BETAFPV Lite receiver is based on the ExpressLRS project, an open-source RC link for RC applications. ExpressLRS aims to achieve the best possible link performance in both speeds, latency, and range. This makes ExpressLRS one of the fastest RC links available while still offering long-range performance."},
    { id: 13, name: "NO Image, NO Image, No Image", author: "NA", type: "receiver", tags: ["2.4Ghz", "ExpressLRS"], description: "BETAFPV Lite receiver is based on the ExpressLRS project, an open-source RC link for RC applications. ExpressLRS aims to achieve the best possible link performance in both speeds, latency, and range. This makes ExpressLRS one of the fastest RC links available while still offering long-range performance."}
  ];
}
