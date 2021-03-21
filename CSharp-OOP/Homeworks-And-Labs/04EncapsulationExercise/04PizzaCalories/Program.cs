using System;

namespace _04PizzaCalories
{
    public class StartUp
    {
        public static void Main(string[] args)
        {
            try
            {
                string[] firstLine = Console.ReadLine()
               .Split(" ", StringSplitOptions.RemoveEmptyEntries);
               


                string[] secondLine = Console.ReadLine()
                    .Split(" ", StringSplitOptions.RemoveEmptyEntries);
                string flourType = secondLine[1];
                string bakingTechnique = secondLine[2];
                int weight = int.Parse(secondLine[3]);
                Dough dough = new Dough(flourType, bakingTechnique, weight);
                Pizza pizza = new Pizza(firstLine[1], dough);
                
                string[] cmd = Console.ReadLine()
                    .Split(" ", StringSplitOptions.RemoveEmptyEntries);

                while (cmd[0] != "END")
                {
                    string toppingType = cmd[1];
                    weight = int.Parse(cmd[2]);

                    Topping topping = new Topping(toppingType, weight);
                    pizza.AddTopping(topping);
                    cmd = Console.ReadLine()
                   .Split(" ", StringSplitOptions.RemoveEmptyEntries);
                }

                Console.WriteLine(pizza.ToString());
            }
            catch (Exception ex)
            {
                Console.WriteLine(ex.Message);
            }
        }
    }
}
