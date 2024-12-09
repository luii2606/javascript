// 10. La pizzería Bella Napoli ofrece pizzas vegetarianas y no vegetarianas a sus clientes. Los
// ingredientes para cada tipo de pizza aparecen a continuación.
// a. Ingredientes vegetarianos: Pimiento y tofu.
// b. Ingredientes no vegetarianos: Pepperoni, Jamón y Salmón.
// Escribir un programa que pregunte al usuario si quiere una pizza vegetariana o no, y en
// función de su respuesta le muestre un menú con los ingredientes disponibles para que
// elija. Solo se puede elegir un ingrediente además de la mozzarella y el tomate que están
// en todas las pizzas. Al final se debe mostrar por pantalla si la pizza elegida es vegetariana
// o no y todos los ingredientes que lleva.


function Pizza() {
    let tipoPizza = prompt("¿Deseas una pizza vegetariana? ¿si o no?:");
    let ingrediente;
    
    if (tipoPizza === "si") {
        ingrediente = prompt("Seleccione un ingrediente:\n1. Pimiento\n2. Tofu\nIngrese el número de su elección:");
        switch (ingrediente) {
            case "1":
                ingrediente = "Pimiento";
                break;
            case "2":
                ingrediente = "Tofu";
                break;
            default:
                console.log("Opción no válida.");
                return;
        }
    } else if (tipoPizza === "no") {
        ingrediente = prompt("Seleccione un ingrediente:\n1. Pepperoni\n2. Jamón\n3. Salmón\nIngrese el número de su elección:");
        switch (ingrediente) {
            case "1":
                ingrediente = "Pepperoni";
                break;
            case "2":
                ingrediente = "Jamón";
                break;
            case "3":
                ingrediente = "Salmón";
                break;
            default:
                console.log("Opción no válida.");
                return;
        }
    } else {
        console.log("Opción no válida.");
        return;
    }

    let tipo = tipoPizza === "si" ? "vegetariana" : "no vegetariana";
    console.log(`elegiste una pizza ${tipo} con los siguientes ingredientes:\n- Mozzarella\n- Tomate\n- ${ingrediente}`);
}

Pizza();

