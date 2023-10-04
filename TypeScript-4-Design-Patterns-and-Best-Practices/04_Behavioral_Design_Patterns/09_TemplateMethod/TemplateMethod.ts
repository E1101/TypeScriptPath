/**
 * The Template method pattern is used to define a basic template of an
 * algorithm and have subclasses override specific steps at runtime. This
 * means that you have a series of steps in an algorithm but you want to
 * consider having placeholder calls that delegate the logic to subclasses.
 * Depending on the result, the algorithm behaves differently, which means
 * that this pattern leverages inheritance to provide specialization.
 */

abstract class ShippingItemsTemplate {
  shipItems(items: string[]): void {
    this.prepareItems(items);
    this.performShipment(items);
    this.onItemsShipped(items);
  }
  protected prepareItems(items: string[]): void {
    console.log("Preparing items to be shipped to destination");
  }
  protected abstract performShipment(items: string[]): void;
  protected onItemsShipped(items: string[]): void {}
}

class AirShipment extends ShippingItemsTemplate {
  protected performShipment(): void {
    console.log("Shipping items by Air");
  }
  protected onItemsShipped(items: string[]): void {
    console.log("Items shipped by Air. Expect quick arrival.");
  }
}

class LandShipment extends ShippingItemsTemplate {
  protected performShipment(items: string[]): void {
    console.log("Shipping items by land");
  }
  protected onItemsShipped(items: string[]): void {
    console.log("Items shipped by land. Expect slow arrival.");
  }
}

const airShipment: ShippingItemsTemplate = new AirShipment();
const landShipment: ShippingItemsTemplate = new LandShipment();
airShipment.shipItems(["Chips", "Motherboards"]);
landShipment.shipItems(["Chips", "Motherboards"]);
