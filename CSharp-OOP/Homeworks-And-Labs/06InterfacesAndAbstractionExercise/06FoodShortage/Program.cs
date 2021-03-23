using _06FoodShortage.Contracts;
using _06FoodShortage.Models;
using System;
using System.Collections.Generic;
using System.Text;

namespace _06FoodShortage
{
    public class StartUp
    {
        public static void Main(string[] args)
        {
            Dictionary<string, IBuyer> dict = new Dictionary<string, IBuyer>();
            int n = int.Parse(Console.ReadLine());
            for (int i = 0; i < n; i++)
            {
                string[] line = Console.ReadLine()
                    .Split(" ", StringSplitOptions.RemoveEmptyEntries);
                string name = line[0];
                int age = int.Parse(line[1]);

                if (line.Length == 4)
                {
                    string id = line[2];
                    string birthdate = line[3];
                    IBuyer citizen = new Citizen(name, age, id, birthdate);
                    if (!dict.ContainsKey(name))
                    {
                        dict.Add(name, citizen);
                    }
                }
                else
                {
                    string group = line[2];
                    IBuyer rebel = new Rebel(name, age, group);
                    if (!dict.ContainsKey(name))
                    {
                        dict.Add(name, rebel);
                    }
                }
            }
            int buyedFood = 0;
            string[] cmd = Console.ReadLine()
                .Split(" ", StringSplitOptions.RemoveEmptyEntries);
            while (cmd[0] != "End")
            {
                StringBuilder sb = new StringBuilder();
                for (int i = 0; i < cmd.Length; i++)
                {
                    sb.Append(cmd[i]);
                }
                string name = sb.ToString();
                if (dict.ContainsKey(name))
                {
                    dict[name].BuyFood();
                    buyedFood += dict[name].Modifier;
                }
                cmd = Console.ReadLine()
                    .Split(" ", StringSplitOptions.RemoveEmptyEntries);
            }
            Console.WriteLine(buyedFood);
        }
    }
}
