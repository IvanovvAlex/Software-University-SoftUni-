using _05BirthdayCelebrations.Contracts;
using _05BirthdayCelebrations.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace _05BirthdayCelebrations
{
    public class StartUp
    {
        public static void Main(string[] args)
        {
            List<IBirthable> list = new List<IBirthable>();
            List<IInhabitant> robots = new List<IInhabitant>();
            string[] cmd = Console.ReadLine()
                .Split(" ", StringSplitOptions.RemoveEmptyEntries);
            while (cmd[0] != "End")
            {
                if (cmd.Length == 5 && cmd[0] == "Citizen")
                {
                    string name = cmd[1];
                    int age = int.Parse(cmd[2]);
                    string id = cmd[3];
                    string birthday = cmd[4];
                    IBirthable person = new Citizen(name, age, id, birthday);
                    list.Add(person);
                }
                else if (cmd.Length == 3 && cmd[0] == "Pet")
                {
                    string name = cmd[1];                   
                    string birthday = cmd[2];
                    IBirthable pet = new Pet(name, birthday);
                    list.Add(pet);
                }
                else
                {
                    string model = cmd[1];
                    string id = cmd[2];
                    IInhabitant robot = new Robot(model, id);
                    robots.Add(robot);
                }
                cmd = Console.ReadLine()
                .Split(" ", StringSplitOptions.RemoveEmptyEntries);
            }
            var year = Console.ReadLine();
            list = list.Where(x => x.Birthday.EndsWith(year)).ToList();
            list.ForEach(x => Console.WriteLine(x.Birthday));
        }
    }
}
