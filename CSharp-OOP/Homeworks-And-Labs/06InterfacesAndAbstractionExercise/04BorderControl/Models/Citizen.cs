using _04BorderControl.Contracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace _04BorderControl.Models
{
    public class Citizen : IInhabitant
    {
        public Citizen(string name, int age, string id)
        {
            Name = name;
            Age = age;
            Id = id;
        }
        public string Name { get; private set; }
        public int Age { get; set; }
        public string Id { get; private set; }
    }
}
