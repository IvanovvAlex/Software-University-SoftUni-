using _05BirthdayCelebrations.Contracts;
using System;
using System.Collections.Generic;
using System.Text;

namespace _05BirthdayCelebrations.Models
{
    class Robot : IInhabitant
    {
        public Robot(string model, string id)
        {
            Model = model;            
            Id = id;
        }
        public string Model { get; private set; }        
        public string Id { get; private set; }
    }
}
