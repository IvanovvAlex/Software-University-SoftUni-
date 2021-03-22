using _04BorderControl.Contracts;
using _04BorderControl.Models;
using System;
using System.Collections.Generic;
using System.Linq;

namespace _04BorderControl
{
    public class StartUp
    {
        public static void Main(string[] args)
        
        {
            List<IInhabitant> list = new List<IInhabitant>();
            string[] cmd = Console.ReadLine()
                .Split(" ", StringSplitOptions.RemoveEmptyEntries);
            while (cmd[0] != "End")
            {
                if (cmd.Length == 3)
                {
                    string name = cmd[0];
                    int age = int.Parse(cmd[1]);
                    string id = cmd[2];
                    IInhabitant person = new Citizen(name, age, id);
                    list.Add(person);
                }
                else
                {
                    string model = cmd[0];                    
                    string id = cmd[1];
                    IInhabitant robot = new Robot(model, id);
                    list.Add(robot);
                }
                cmd = Console.ReadLine()
                .Split(" ", StringSplitOptions.RemoveEmptyEntries);
            }
            var fakeIdsLastThreeDigs = Console.ReadLine();
            list = list.Where(x => x.Id.EndsWith(fakeIdsLastThreeDigs)).ToList();
            list.ForEach(x => Console.WriteLine(x.Id));
        }        
    }
}
