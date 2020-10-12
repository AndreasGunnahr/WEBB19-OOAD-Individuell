/* En basklass som innehåller metoder som är återkommande för varje enskild pizza.*/
class Pizza {
  pizza;
  prepare() {
    console.log(`Preparing a ${this.pizza} pizza..`);
  }

  bake() {
    console.log("Baking pizza for 12min in 400 degrees..");
  }

  cut() {
    console.log("Cutting pizza in pieces");
  }

  box() {
    console.log("Package pizza in box\n");
  }
}

/* Klass som representerar pizzan "Pepperoni" - klassen förlängs också på basklassen "Pizza" */
class PepperoniPizza extends Pizza {
  pizza = "Pepperoni";
  constructor() {
    super();
  }
}

/* Klass som representerar pizzan "Hawaii" - klassen förlängs också på basklassen "Pizza" */
class HawaiiPizza extends Pizza {
  pizza = "Hawaii";
  constructor() {
    super();
  }
}

/* Klass som representerar pizzan "Margherita" - klassen förlängs också på basklassen "Pizza" */
class MargheritaPizza extends Pizza {
  pizza = "Margherita";
  constructor() {
    super();
  }
}

/* Pizzafabrik som innehåller en "skapa pizza" metod */
class PizzaFactory {
  /* Metod som skapar en ny pizza utifrån vilken typ av pizza kunden angivit */
  createPizza(type = undefined) {
    switch (type) {
      case "Pepperoni":
        return new PepperoniPizza();
      case "Hawaii":
        return new HawaiiPizza();
      case "Margherita":
        return new MargheritaPizza();
      default:
        return;
    }
  }
}

/* Pizzeria klass som innehåller vår pizzafabrik och vilka pizzor som finns med på menyn */
class PizzaStore {
  constructor(factory) {
    this.factory = factory;
    this.pizzaMenu = ["Pepperoni", "Hawaii", "Margherita"];
  }

  /* Metod som beställer en pizza från vår pizzafabrik 
  Finns inte pizza så meddelar vi kunden av pizza inte finns */
  orderPizza(type) {
    if (this.pizzaMenu.includes(type)) {
      var pizza = this.factory.createPizza(type);

      pizza.prepare();
      pizza.bake();
      pizza.cut();
      pizza.box();
    } else {
      console.log("Pizza don't exists - Please order another pizza\n");
    }
  }
}

/* Skapar en ny en pizzeria där vi skickar med vår pizzafabrik  */
const store = new PizzaStore(new PizzaFactory());

/* Skapar ett gäng ordrar på existerande och icke existerande pizzor på menyn */
console.log("\n###### ORDER - HAWAII PIZZA ######");
store.orderPizza("Hawaii");

console.log("###### ORDER - MARGHERITA PIZZA ######");
store.orderPizza("Margherita");

console.log("###### ORDER - PEPPERONI PIZZA ######");
store.orderPizza("Pepperoni");

console.log("###### PIZZA DON'T EXISTS ######");
store.orderPizza("Kebab");
