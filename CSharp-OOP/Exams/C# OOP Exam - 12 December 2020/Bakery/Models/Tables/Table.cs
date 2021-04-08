using Bakery.Models.BakedFoods.Contracts;
using Bakery.Models.Drinks.Contracts;
using Bakery.Models.Tables.Contracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace Bakery.Models.Tables
{
    public abstract class Table : ITable
    {
        private List<IBakedFood> foodOrders;
        private List<IDrink> drinkOrders;
        private int tableNumber;
        private int capacity;
        private int numberOfPeople;
        private decimal pricePerPerson;
        private bool isReserved;
        private decimal price;
        private decimal bill;

        public Table(int tableNumber, int capacity, decimal pricePerPerson)
        {
            foodOrders = new List<IBakedFood>();
            drinkOrders = new List<IDrink>();

            TableNumber = tableNumber;
            Capacity = capacity;
            PricePerPerson = pricePerPerson;
        }


        public int TableNumber
        {
            get { return tableNumber; }
            private set
            {
                tableNumber = value;
            }
        }
        public int Capacity
        {
            get { return capacity; }
            private set
            {
                if (value < 0)
                {
                    throw new ArgumentException(Utilities.Messages.ExceptionMessages.InvalidTableCapacity);
                }
                else
                {
                    capacity = value;
                }
            }
        }

        public int NumberOfPeople
        {
            get { return numberOfPeople; }
            private set
            {
                if (value <= 0)
                {
                    throw new ArgumentException(Utilities.Messages.ExceptionMessages.InvalidNumberOfPeople);
                }
                else
                {
                    numberOfPeople = value;
                }
            }
        }
        public decimal PricePerPerson { get; private set; }

        public bool IsReserved { get; private set; }

        public decimal Price
        {
            get { return this.PricePerPerson * this.NumberOfPeople; }
        }

        public void Clear()
        {
            foodOrders = new List<IBakedFood>();
            drinkOrders = new List<IDrink>();
            IsReserved = false;
            NumberOfPeople = 0;
        }

        public decimal GetBill()
        {
            //decimal bill = this.Price;
            //for (int i = 0; i < foodOrders.Count; i++)
            //{
            //    bill += foodOrders[i].Price;
            //}
            //for (int i = 0; i < drinkOrders.Count; i++)
            //{
            //    bill += drinkOrders[i].Price;
            //}
            return bill + this.Price;
        }

        public string GetFreeTableInfo()
        {
            return $"Table: {this.TableNumber}\r\n" +
                   $"Type: {this.GetType()}\r\n" +
                   $"Capacity: {this.Capacity}\r\n" +
                   $"Price per Person: {this.PricePerPerson}";
        }

        public void OrderDrink(IDrink drink)
        {
            drinkOrders.Add(drink);
            bill += drink.Price;
        }

        public void OrderFood(IBakedFood food)
        {
            foodOrders.Add(food);
            bill += food.Price;
        }

        public void Reserve(int numberOfPeople)
        {
            IsReserved = true;
            NumberOfPeople = numberOfPeople;
        }
    }
}
