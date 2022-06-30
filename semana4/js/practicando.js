//*POO practicando 

//*Abstracion
//*Encapsulamiento
//*Herencia
//*Polimorfismo

//? Ejemplo de  book (libro)  
//?Tienda de libro



//* Encapasulamiento con el obejtoweakmap()
const _private = new WeakMap()
//Aplicamos este objeot private para encapsular nuestras propiedades
class Persona{
    constructor(nombre, edad, talla, color){
        // metemos la propiedades dentro un objeto
        const properties = {
            _nombre: nombre,
            _edad: edad,
            _talla: talla,
            _color: color
        }
        // settear colocar las propiedades al this  
        _private.set(this, {properties})
    }
    //Obtiene el nombre de persona
    get nombre(){
        return _private.get(this).properties['_nombre']
    }
    //setea/Modifica el nombre de persona
    set nombre(newNombre){
        return _private.get(this).properties['_edad'] = newNombre
    }
    get edad(){
        return _private.get(this).properties['_edad']
    }
    //setea/Modifica el nombre de persona
    set edad(newNombre){
        return _private.get(this).properties['_nombre'] = newEdad
    }

   
    
}
const alumno = new Persona('pool', 27, 70, 'mestizo')
console.log(alumno.nombre)
alumno.nombre = 'Nilver'
console.log(alumno.nombre)
console.log("------------------Next-----------------")


//* CLase libro
class Book{
    //Propiedades
    constructor(title, author, price){
        this._title = title
        this._author = author
        this._price = price
    }
}

//* Instanciar un objeto de la Clase Book_crear nuevos objetos a aprtir de este
const book1 = new Book('1994', 'George', 352);
const book2 = new Book('Frankenstein', 'M:S', 100);
console.log(book1._author)
console.log("----objeto book2----")
console.log(book2)


//* Herencia
class Comic extends Book{
    constructor(name, author, price, illustrators){
        super(name, author, price)
        //!nueva propiedad
        this.illustrators = illustrators
    }
     //*Metodos

    addIllustrators(newIllustrators=[]){
        this.illustrators.push(newIllustrators)
    }
    

}
const comic1 = new Comic('Naruto', 'A.M', 150,['b.b'])
comic1.addIllustrators('nuevo')
console.log(comic1.illustrators)
console.log(comic1._price)

//*new clas ejercicio

class ShoppingCar{
    constructor(){
        this.products = []
    }
    addProduct(cantidad, price){
        this.products.push(...Array(cantidad).fill(price))
    }
    showProducts(){
        console.log(this.products)
    }
}

const cart = new ShoppingCar()

cart.addProduct(2, comic1._price)
cart.addProduct(1, book1._price)
cart.showProducts()


//* for each y .map()

const products = [
    {
      name: "Laptop HP",
      price: 1300,
      brand: "HP",
    },
    {
      name: "Laptop Gamer",
      price: 2100,
      brand: "Lenovo",
    },
    {
      name: "Laptop Super Poderosa",
      price: 5300,
      brand: "Alien Ware",
    },
    {
      name: "Laptop/Tablet",
      price: 2400,
      brand: "ASUS",
    },
  ];
 
  // users.forEach(user)
  // movies.forEach(movie)
  
  // products.forEach((product, index) => {});
  
  // * forEach
  
  const productsIterForEach = products.forEach((product) => {
    // Recurden que product es cada elemento de mi array
    // console.log(product.name);
    return product.price - 100;
  });
  
  //* map
  // queremos agregar un nuevo campo al array de objetos
  // ese campo se llamara descuente que sera el precio - 100 soles
  
  // En este caso estamos calculado el campo discount y lo estamos
  // guardando en productsIterMap
  
  // Los valores que esta capturando nuestro map los esta guardando en
  // la varable productsIterMap y esto sera un arreglo de los
  // resultados
  const productsIterMap = products.map((product) => {
    // 1200
    // 2000
    // 5200
    // 2300
    return product.price - 100;
  });
  
  // Resument: Siempre el map retorna un array de elementos
  
  console.log("forEach", productsIterForEach);
  console.log("map", productsIterMap);
  // Cuando decimos que forEach no retorna nada quiere decir que no se
  // puede guardar dentro de una variable


