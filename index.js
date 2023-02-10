const menu = {
_meal: '',
_price: 0,
set meal(mealToCheck){
  if (typeof mealTocheck == 'string'){
    return (this._meal = mealToCheck);
  }
},
 set price(priceToCheck){
  if(typeof priceToCheck == 'number'){
    return (this._price = priceToCheck);
  }
},
get todaysSpecial(){
if(this._meal && this.price){
return `Today’s Special is ${this._meal} for ${this._price}!`;
}else {
  return 'Meal or price was not set correctly!'

}
}
};
menu.meal = 'spagite';
menu.price = 50;
console.log(menu.todaysSpecial);
