import { Injectable } from '@angular/core';
import { Product } from './Product';


@Injectable({
  providedIn: 'root'
})
export class DataService {

  productsData: Product[] = [];

  constructor() { 

    this.productsData[0] = new Product("a102", "Dish TV", 10, 2500, "Tata");
    this.productsData[1] = new Product("a115", "Air Conditioner", 8, 5000, "Tata");
    this.productsData[2] = new Product("a116", "Refrigerator", 6, 4500, "Tata");
    
    this.productsData[3] = new Product("a111", "Ceiling Fans", 13, 2900, "Bajaj");
    this.productsData[4] = new Product("a120", "Mixer Grinder", 9, 2200, "Bajaj");
    this.productsData[5] = new Product("a121", "Electric Kettle", 14, 1500, "Bajaj");
    
    this.productsData[6] = new Product("a105", "Smart TV", 8, 2200, "LG");
    this.productsData[7] = new Product("a125", "Washing Machine", 12, 3500, "LG");
    this.productsData[8] = new Product("a110", "Refrigerator", 7, 3100, "LG");
    
    this.productsData[9] = new Product("a130", "Galaxy S21", 10, 35000, "Samsung");
    this.productsData[10] = new Product("a131", "QLED TV", 7, 55000, "Samsung");
    this.productsData[11] = new Product("a132", "Washing Machine", 12, 32000, "Samsung");

    this.productsData[12] = new Product("a103", "Dishwasher", 10, 4500, "Tata");
    this.productsData[13] = new Product("a104", "Air Purifier", 9, 3000, "Tata");
    this.productsData[14] = new Product("a106", "Ceiling Fans", 15, 2500, "Bajaj");
    this.productsData[15] = new Product("a107", "Electric Kettle", 11, 1800, "Bajaj");
    this.productsData[16] = new Product("a108", "Refrigerator", 8, 3300, "Bajaj");
    this.productsData[17] = new Product("a109", "Smart TV", 10, 2700, "LG");
    this.productsData[18] = new Product("a110", "Washing Machine", 14, 4000, "LG");
    this.productsData[19] = new Product("a111", "Refrigerator", 6, 3200, "LG");
    this.productsData[20] = new Product("a112", "Galaxy Note 20", 12, 42000, "Samsung");
    this.productsData[21] = new Product("a113", "QLED TV", 8, 57000, "Samsung");
    this.productsData[22] = new Product("a114", "Washing Machine", 13, 34000, "Samsung");
    this.productsData[23] = new Product("a117", "Laptop", 7, 52000, "Dell");
    this.productsData[24] = new Product("a118", "Camera", 5, 16000, "Sony");
    this.productsData[25] = new Product("a119", "Headphones", 20, 3200, "Philips");
    this.productsData[26] = new Product("a120", "Blender", 14, 2000, "Sharp");
    this.productsData[27] = new Product("a121", "Microwave", 10, 3800, "Panasonic");
    this.productsData[28] = new Product("a122", "Toaster", 11, 1400, "Bajaj");
    this.productsData[29] = new Product("a123", "Electric Iron", 13, 1600, "Panasonic");
    this.productsData[30] = new Product("a124", "Dishwasher", 12, 4700, "Bosch");
    this.productsData[31] = new Product("a125", "Air Fryer", 9, 2600, "Philips");
    this.productsData[32] = new Product("a126", "Digital Camera", 6, 6500, "Sony");
    this.productsData[33] = new Product("a127", "Blu-ray Player", 8, 3400, "Samsung");
    this.productsData[34] = new Product("a128", "Gaming Console", 5, 27000, "Sony");
    this.productsData[35] = new Product("a129", "Soundbar", 12, 8500, "LG");
    this.productsData[36] = new Product("a130", "Smartwatch", 7, 10500, "Apple");
    this.productsData[37] = new Product("a131", "Fitness Tracker", 15, 5200, "Garmin");
    this.productsData[38] = new Product("a132", "Electric Scooter", 8, 37000, "Xiaomi");
    this.productsData[39] = new Product("a133", "Smart Thermostat", 11, 5300, "Nest");
    this.productsData[40] = new Product("a134", "Electric Grill", 13, 3200, "Philips");
    this.productsData[41] = new Product("a135", "Projector", 7, 12500, "Epson");
    this.productsData[42] = new Product("a136", "Kitchen Scale", 20, 1100, "Ozeri");
    this.productsData[43] = new Product("a137", "Bread Maker", 6, 2700, "Panasonic");
    this.productsData[44] = new Product("a138", "Air Cooler", 9, 3600, "Symphony");
    this.productsData[45] = new Product("a139", "Cordless Vacuum", 10, 19000, "Dyson");
    this.productsData[46] = new Product("a140", "Stand Mixer", 8, 4100, "KitchenAid");
    this.productsData[47] = new Product("a141", "Digital Watch", 16, 2200, "Casio");
    this.productsData[48] = new Product("a142", "Coffee Grinder", 12, 1600, "Krups");
    this.productsData[49] = new Product("a143", "Electric Toothbrush", 18, 2500, "Oral-B");
    this.productsData[50] = new Product("a144", "Hair Dryer", 14, 1800, "Philips");
    this.productsData[51] = new Product("a145", "Hand Mixer", 11, 1400, "Braun");
    this.productsData[52] = new Product("a146", "Ironing Board", 22, 2500, "Home"),
    this.productsData[53] = new Product("a147", "Vacuum Cleaner", 9, 7000, "Eureka Forbes"),
    this.productsData[54] = new Product("a148", "Space Heater", 13, 3500, "Morphy Richards"),
    this.productsData[55] = new Product("a149", "Electric Rice Cooker", 8, 3000, "Panasonic"),
    this.productsData[56] = new Product("a150", "Portable Fan", 15, 1200, "Usha"),
    this.productsData[57] = new Product("a151", "Water Purifier", 12, 6000, "Kent"),
    this.productsData[58] = new Product("a152", "Air Conditioner", 6, 22000, "Voltas"),
    this.productsData[59] = new Product("a153", "Dehumidifier", 7, 3500, "Honeywell"),
    this.productsData[60] = new Product("a154", "Electric Blanket", 20, 4000, "Sleepwell"),
    this.productsData[61] = new Product("a155", "Ceiling Fan", 11, 2500, "Orient"),
    this.productsData[62] = new Product("a156", "Portable Air Conditioner", 9, 7000, "Blue Star"),
    this.productsData[63] = new Product("a157", "Washing Machine", 14, 38000, "IFB"),
    this.productsData[64] = new Product("a158", "Microwave Oven", 8, 2800, "Samsung"),
    this.productsData[65] = new Product("a159", "Coffee Machine", 10, 4500, "Philips"),
    this.productsData[66] = new Product("a160", "Electric Skillet", 12, 3200, "Preethi"),
    this.productsData[67] = new Product("a161", "Dish Washer", 5, 6000, "Bosch"),
    this.productsData[68] = new Product("a162", "Electric Juicer", 15, 2000, "Havells"),
    this.productsData[69] = new Product("a163", "Hand Blender", 18, 1600, "Philips"),
    this.productsData[70] = new Product("a164", "Toaster Oven", 11, 3500, "Kenwood"),
    this.productsData[71] = new Product("a165", "Ice Cream Maker", 7, 4000, "Nostalgia"),
    this.productsData[72] = new Product("a166", "Slow Cooker", 9, 2500, "Hamilton Beach"),
    this.productsData[73] = new Product("a167", "Pressure Cooker", 13, 2200, "Prestige"),
    this.productsData[74] = new Product("a168", "Electric Wok", 8, 3000, "T-fal"),
    this.productsData[75] = new Product("a169", "Multi Cooker", 12, 4500, "Instant Pot"),
    this.productsData[76] = new Product("a170", "Rice Cooker", 6, 2200, "Black+Decker"),
    this.productsData[77] = new Product("a171", "Deep Fryer", 14, 3500, "Cuisinart"),
    this.productsData[78] = new Product("a172", "Electric Cooktop", 10, 2500, "GE"),
    this.productsData[79] = new Product("a173", "Blender", 15, 1500, "Ninja"),
    this.productsData[80] = new Product("a174", "Electric Pressure Cooker", 12, 4000, "Breville"),
    this.productsData[81] = new Product("a175", "Food Processor", 8, 3500, "Cuisinart"),
    this.productsData[82] = new Product("a176", "Stand Mixer", 11, 5000, "Kitchenaid"),
    this.productsData[83] = new Product("a177", "Handheld Vacuum", 14, 18000, "Dyson"),
    this.productsData[84] = new Product("a178", "Electric Kettle", 9, 2200, "Philips"),
    this.productsData[85] = new Product("a179", "Food Steamer", 10, 1500, "Hamilton Beach"),
    this.productsData[86] = new Product("a180", "Electric Griddle", 7, 3000, "Presto"),
    this.productsData[87] = new Product("a181", "Pressure Cooker", 6, 2200, "Mirro"),
    this.productsData[88] = new Product("a182", "Food Dehydrator", 12, 2500, "Nesco"),
    this.productsData[89] = new Product("a183", "Electric Ice Cream Maker", 8, 3500, "Cuisinart"),
    this.productsData[90] = new Product("a184", "Electric Slicer", 11, 4000, "BOSCH"),
    this.productsData[91] = new Product("a185", "Sous Vide Machine", 14, 5000, "Anova"),
    this.productsData[92] = new Product("a186", "Electric Fondue Pot", 9, 2200, "Cuisinart"),
    this.productsData[93] = new Product("a187", "Air Purifier", 12, 3000, "Dyson"),
    this.productsData[94] = new Product("a188", "Electric Grill", 15, 3500, "George Foreman"),
    this.productsData[95] = new Product("a189", "Wine Cooler", 8, 4000, "EdgeStar"),
    this.productsData[96] = new Product("a190", "Electric Knife", 11, 2500, "Hamilton Beach"),
    this.productsData[97] = new Product("a191", "Electric Ice Cream Maker", 7, 3000, "Nostalgia"),
    this.productsData[98] = new Product("a192", "Electric Milk Frother", 13, 1500, "Secura"),
    this.productsData[99] = new Product("a193", "Electric Coffee Grinder", 9, 1800, "Krups")


     
    }

    getProducts () : Product[]{

      return this.productsData;
    }
  }

