
using _05BirthdayCelebrations.Contracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace _05BirthdayCelebrations.Models
{
    public class Citizen : IInhabitant, IBirthable
    {
        public Citizen(string name, int age, string id, string birthday)
        {
            Name = name;
            Age = age;
            Id = id;
            Birthday = birthday;
        }
        public string Name { get; private set; }
        public string Birthday { get; private set; }
        public int Age { get; set; }
        public string Id { get; private set; }
    }
}
