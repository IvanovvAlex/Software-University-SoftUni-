using EasterRaces.Models.Cars.Contracts;
using EasterRaces.Repositories.Contracts;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace EasterRaces.Repositories.Entities
{
    public class CarRepository : IRepository<ICar>
    {
        private List<ICar> carsRepository;
        public CarRepository()
        {
            this.carsRepository = new List<ICar>();
        }
        public void Add(ICar model)
        {
            this.carsRepository.Add(model);
        }

        public IReadOnlyCollection<ICar> GetAll()
        {
            return  this.carsRepository;
        }

        public ICar GetByName(string name)
        {
            return carsRepository.FirstOrDefault(c => c.Model == name);
        }

        public bool Remove(ICar model)
        {
            if (carsRepository.Contains(model))
            {
                carsRepository.Remove(model);
                return true;
            }
            else
            {
                return false;
            }
        }
    }
}
