/**
 * You can use the Strategy pattern whenever you see the following patterns:
 * - You have different variants of an algorithm and you want to interchange them at [ runtime ].
 *   For example, when you want to calculate taxes for an individual, you may apply different
 *   strategies based on the individual's marital status, income, or any disabilities they have.
 * - You want to encapsulate different behaviors in different classes but with the same interface.
 *
 * Based on their business logic or any specific configuration they have, they can pass on the correct
 * Strategy object to gain the best results. This avoids having multiple switch or if statements in the
 * code as you will exercise the power of polymorphism to alter the behavior.
 */

interface BillingStrategy {
  calculate(): void;
}

class ConcreteBillingStrategyA implements BillingStrategy {
  calculate(): void {
    console.log("Calculating bill using first strategy");
  }
}

class ConcreteBillingStrategyB implements BillingStrategy {
  calculate(): void {
    console.log("Calculating bill using second strategy");
  }
}

class BillingContext {
  constructor(private strategy: BillingStrategy) {}

  setStrategy(strategy: BillingStrategy) {
    this.strategy = strategy;
  }

  calculateBill(): void {
    this.strategy.calculate();
  }
}
