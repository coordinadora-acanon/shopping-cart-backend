import { Product } from "../entities/product.entity";

export class ProductRepository {
  private products: Product[] = [
    new Product(
      "1",
      "Nevera LG 90 Litros",
      500,
      "https://example.com/images/nevera-lg-90.jpg",
      "Nevera LG de 90 litros, ideal para espacios pequeños."
    ),
    new Product(
      "2",
      "Lavadora Samsung 7kg",
      300,
      "https://example.com/images/lavadora-samsung-7kg.jpg",
      "Lavadora Samsung con capacidad de 7 kg y múltiples modos de lavado."
    ),
    new Product(
      "3",
      "Microondas Panasonic 800W",
      100,
      "https://example.com/images/microondas-panasonic.jpg",
      "Microondas Panasonic de 800W con 10 niveles de potencia."
    ),
    new Product(
      "4",
      "Televisor Sony 55 pulgadas 4K",
      700,
      "https://example.com/images/televisor-sony-55.jpg",
      "Televisor Sony 4K de 55 pulgadas con HDR y Smart TV."
    ),
    new Product(
      "5",
      "Aspiradora Dyson V11",
      600,
      "https://example.com/images/aspiradora-dyson-v11.jpg",
      "Aspiradora inalámbrica Dyson V11 con potente succión y múltiples accesorios."
    ),
    new Product(
      "6",
      "Horno Eléctrico Oster 30 Litros",
      150,
      "https://example.com/images/horno-oster-30l.jpg",
      "Horno eléctrico Oster de 30 litros con funciones de horneado, asado y tostado."
    ),
    new Product(
      "7",
      "Batidora de Mano Philips",
      50,
      "https://example.com/images/batidora-philips.jpg",
      "Batidora de mano Philips con velocidad ajustable y múltiples accesorios."
    ),
    new Product(
      "8",
      "Cafetera Nespresso Inissia",
      120,
      "https://example.com/images/cafetera-nespresso.jpg",
      "Cafetera Nespresso Inissia con sistema de cápsulas y rápido calentamiento."
    ),
    new Product(
      "9",
      "Licuadora Oster 600W",
      80,
      "https://example.com/images/licuadora-oster.jpg",
      "Licuadora Oster de 600W con vaso de vidrio y cuchillas de acero inoxidable."
    ),
    new Product(
      "10",
      "Freidora de Aire Philips",
      180,
      "https://example.com/images/freidora-philips.jpg",
      "Freidora de aire Philips con tecnología Rapid Air para cocinar sin aceite."
    ),
    new Product(
      "11",
      "Plancha a Vapor T-fal",
      40,
      "https://example.com/images/plancha-tfal.jpg",
      "Plancha a vapor T-fal con base antiadherente y sistema antical."
    ),
    new Product(
      "12",
      "Refrigerador Whirlpool 250 Litros",
      650,
      "https://example.com/images/refrigerador-whirlpool.jpg",
      "Refrigerador Whirlpool de 250 litros con tecnología de enfriamiento rápido."
    ),
    new Product(
      "13",
      "Ventilador de Torre Honeywell",
      90,
      "https://example.com/images/ventilador-honeywell.jpg",
      "Ventilador de torre Honeywell con control remoto y oscilación."
    ),
    new Product(
      "14",
      "Lavajillas Bosch 12 Cubiertos",
      550,
      "https://example.com/images/lavajillas-bosch.jpg",
      "Lavajillas Bosch con capacidad para 12 cubiertos y múltiples programas de lavado."
    ),
    new Product(
      "15",
      "Calentador de Agua Rinnai 10L",
      300,
      "https://example.com/images/calentador-rinnai.jpg",
      "Calentador de agua Rinnai de 10 litros con control de temperatura."
    ),
    new Product(
      "16",
      "Purificador de Aire Xiaomi",
      200,
      "https://example.com/images/purificador-xiaomi.jpg",
      "Purificador de aire Xiaomi con filtro HEPA y control mediante app."
    ),
    new Product(
      "17",
      "Extractor de Jugos Hamilton Beach",
      100,
      "https://example.com/images/extractor-hamilton.jpg",
      "Extractor de jugos Hamilton Beach con motor potente y fácil limpieza."
    ),
    new Product(
      "18",
      "Cocina a Gas Mabe 4 Quemadores",
      400,
      "https://example.com/images/cocina-mabe.jpg",
      "Cocina a gas Mabe con 4 quemadores y horno incorporado."
    ),
    new Product(
      "19",
      "Tostadora Black+Decker",
      30,
      "https://example.com/images/tostadora-blackdecker.jpg",
      "Tostadora Black+Decker con ranuras anchas y control de tostado."
    ),
    new Product(
      "20",
      "Robot Aspirador Roomba i7",
      800,
      "https://example.com/images/roomba-i7.jpg",
      "Robot aspirador Roomba i7 con navegación inteligente y programación automática."
    ),
    new Product(
      "21",
      "Deshumidificador DeLonghi 14L",
      250,
      "https://example.com/images/deshumidificador-delonghi.jpg",
      "Deshumidificador DeLonghi con capacidad de 14 litros y modo silencioso."
    ),
  ];

  getProducts(): Product[] {
    return this.products;
  }
}
